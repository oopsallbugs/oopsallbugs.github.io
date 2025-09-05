import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import type { ParticlesProps } from "./blackHoleTypes";

const Particles = ({
  particleCount,
  size,
  color,
  opacity,
  blackHoleRadius,
}: ParticlesProps) => {
  const particlesRef = useRef<THREE.Points>(null);

  const initialMinDrawRadius = blackHoleRadius + 0.2;
  const minDrawRadius = blackHoleRadius + 10;
  const maxDrawRadius = blackHoleRadius + 20;

  // Parameters to tweak
  const coneAngle = Math.PI / 6; // 60° cone
  const radialSpeed = 0.025; // faster/slower fall into black hole (lower number = more rotations)
  const spiralSpeed = 0.25; // faster/slower spiral motion (higher number = faster spin)

  // Precompute positions
  const { positions } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);

    const drawParticle = (i3: number) => {
      const radius = THREE.MathUtils.lerp(
        initialMinDrawRadius,
        maxDrawRadius,
        Math.random()
      );
      // Randomly set y position within the cone of coneAngle degrees from the center
      const maxHeight = Math.tan(coneAngle) * radius;
      const py = (Math.random() * 2 - 1) * maxHeight;
      // Randomly set positions on the xz-plane
      const angle = Math.random() * Math.PI * 2;
      const px = radius * Math.cos(angle);
      const pz = radius * Math.sin(angle);

      // Store positions
      positions[i3] = px;
      positions[i3 + 1] = py;
      positions[i3 + 2] = pz;
    };

    //
    for (let i = 0; i < particleCount; i++) {
      drawParticle(i * 3);
    }

    return { positions };
  }, [particleCount, initialMinDrawRadius, maxDrawRadius, coneAngle]);

  useFrame((_, delta) => {
    if (!particlesRef.current) return;

    const positionsArray = particlesRef.current.geometry.attributes.position
      .array as Float32Array;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      const px = positionsArray[i3];
      const py = positionsArray[i3 + 1];
      const pz = positionsArray[i3 + 2];

      const r = Math.sqrt(px * px + py * py + pz * pz);

      // Respawn particle if it reaches the black hole
      if (r < blackHoleRadius) {
        const radius = THREE.MathUtils.lerp(
          minDrawRadius,
          maxDrawRadius,
          Math.random()
        );
        const angle = Math.random() * Math.PI * 2;
        const maxHeight = Math.tan(coneAngle) * radius;
        const pyNew = (Math.random() * 2 - 1) * maxHeight;
        positionsArray[i3] = radius * Math.cos(angle);
        positionsArray[i3 + 1] = pyNew;
        positionsArray[i3 + 2] = radius * Math.sin(angle);
        continue;
      }

      // Normalized radial vector toward black hole
      const nx = -px / r;
      const ny = -py / r;
      const nz = -pz / r;

      // Strong radial pull
      let vx = nx * radialSpeed;
      let vy = ny * radialSpeed;
      let vz = nz * radialSpeed;

      // Tangential velocity for spiral motion
      let tx = -pz;
      let tz = px;
      const tLen = Math.sqrt(tx * tx + tz * tz);
      tx /= tLen;
      tz /= tLen;

      // Add spiral motion
      vx += tx * spiralSpeed;
      vz += tz * spiralSpeed;

      // Small random turbulence
      vx += (Math.random() - 0.5) * 0.1;
      vy += (Math.random() - 0.5) * 0.1;
      vz += (Math.random() - 0.5) * 0.1;

      // Update position
      positionsArray[i3] += vx * delta;
      positionsArray[i3 + 1] += vy * delta;
      positionsArray[i3 + 2] += vz * delta;
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={opacity}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default Particles;
