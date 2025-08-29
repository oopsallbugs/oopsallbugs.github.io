import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";

interface ParticlesProps {
  particleCount: number;
  blackHoleRadius: number;
}

const Particles = ({ particleCount, blackHoleRadius }: ParticlesProps) => {
  const particlesRef = useRef<THREE.Points>(null);
  const resetTimers = useRef(new Float32Array(particleCount)); // Track reset timers for particles
  const { positions, alphas } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const alphas = new Float32Array(particleCount); // Tracks alpha for each particle

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      const radius = Math.random() * 20 + 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.4;

      const x = radius * Math.cos(theta) * Math.cos(phi);
      const y = radius * Math.sin(phi);
      const z = radius * Math.sin(theta) * Math.cos(phi);

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      alphas[i] = 1.0; // Start with full alpha
    }

    return { positions, alphas };
  }, [particleCount]);

  useFrame((_, delta) => {
    if (!particlesRef.current) return;

    const positions = particlesRef.current.geometry.attributes.position
      .array as Float32Array;
    const material = particlesRef.current.material as THREE.PointsMaterial;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      const x = positions[i3];
      const y = positions[i3 + 1];
      const z = positions[i3 + 2];

      const distanceToCenter = Math.sqrt(x * x + y * y + z * z);

      // Handle alpha fade-in for recently reset particles
      if (resetTimers.current[i] > 0) {
        resetTimers.current[i] -= delta;
        // Linear fade from 0 to 1 over 5 seconds
        const fadeProgress = (5 - resetTimers.current[i]) / 5;
        alphas[i] = Math.min(1, Math.max(0, fadeProgress));
      }

      // Reset when particle passes through the black hole surface
      if (distanceToCenter < blackHoleRadius) {
        // Reset particle to new random position
        const radius = Math.random() * 20 + 8;
        const theta = Math.random() * Math.PI * 2;
        const phi = (Math.random() - 0.5) * Math.PI * 0.4;

        positions[i3] = radius * Math.cos(theta) * Math.cos(phi);
        positions[i3 + 1] = radius * Math.sin(phi);
        positions[i3 + 2] = radius * Math.sin(theta) * Math.cos(phi);

        // Start 5-second fade-in timer
        resetTimers.current[i] = 5.0;
        alphas[i] = 0.0;
      } else {
        // Pull particles toward center (0,0,0)
        const pullStrength = (1 / (distanceToCenter * distanceToCenter)) * 0.15;
        const spiralStrength = 0.04 / distanceToCenter;

        // Calculate direction toward center for all axes
        const directionX = -x / distanceToCenter;
        const directionY = -y / distanceToCenter;
        const directionZ = -z / distanceToCenter;

        // Apply inward pull on all axes
        const pullSpeed = pullStrength * delta * 25;
        const newX = x + directionX * pullSpeed;
        const newY = y + directionY * pullSpeed;
        const newZ = z + directionZ * pullSpeed;

        // Add spiral motion to X-Z plane
        const currentRadius = Math.sqrt(newX * newX + newZ * newZ);
        const currentAngle = Math.atan2(newZ, newX);
        const newAngle = currentAngle + spiralStrength * delta * 12;

        // Apply spiral only if we're not too close to center
        if (currentRadius > 0.1) {
          positions[i3] = currentRadius * Math.cos(newAngle);
          positions[i3 + 2] = currentRadius * Math.sin(newAngle);
        } else {
          positions[i3] = newX;
          positions[i3 + 2] = newZ;
        }

        positions[i3 + 1] = newY;
      }
    }

    // Update material opacity based on average alpha
    const averageAlpha =
      alphas.reduce((sum, alpha) => sum + alpha, 0) / particleCount;
    material.opacity = averageAlpha;

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#ffffff"
        transparent
        opacity={0.9}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default Particles;
