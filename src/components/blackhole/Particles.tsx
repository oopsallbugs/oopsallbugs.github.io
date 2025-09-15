import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo, useCallback } from "react";
import type { ParticlesProps } from "./blackHoleTypes";

const Particles = ({
  particleCount,
  size,
  color,
  opacity,
  blackHoleRadius,
  coneAngle,
  radialSpeed,
  spiralSpeed,
  turbulence,
  minDrawRadiusModifier,
  maxDrawRadiusModifier,
}: ParticlesProps) => {
  const particlesRef = useRef<THREE.Points>(null);
  const clockRef = useRef(new THREE.Clock());

  const initialMinDrawRadius = blackHoleRadius + 0.2;
  const minDrawRadius = blackHoleRadius + minDrawRadiusModifier;
  const maxDrawRadius = blackHoleRadius + maxDrawRadiusModifier;

  // Memoized particle generation function
  const generateParticle = useCallback(
    (positions: Float32Array, i3: number) => {
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
    },
    [initialMinDrawRadius, maxDrawRadius, coneAngle]
  );

  // Memoized respawn function
  const respawnParticle = useCallback(
    (positions: Float32Array, i3: number) => {
      const radius = THREE.MathUtils.lerp(
        minDrawRadius,
        maxDrawRadius,
        Math.random()
      );
      const angle = Math.random() * Math.PI * 2;
      const maxHeight = Math.tan(coneAngle) * radius;
      const pyNew = (Math.random() * 2 - 1) * maxHeight;
      positions[i3] = radius * Math.cos(angle);
      positions[i3 + 1] = pyNew;
      positions[i3 + 2] = radius * Math.sin(angle);
    },
    [minDrawRadius, maxDrawRadius, coneAngle]
  );

  // Memoized positions and geometry
  const { geometry } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      generateParticle(positions, i * 3);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    return { geometry };
  }, [particleCount, generateParticle]);

  // Memoized material
  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      size,
      color,
      transparent: true,
      opacity,
      blending: THREE.AdditiveBlending,
    });
  }, [size, color, opacity]);

  useFrame(() => {
    if (!particlesRef.current) return;

    const delta = clockRef.current.getDelta();
    const positionsArray = particlesRef.current.geometry.attributes.position
      .array as Float32Array;

    // Use batch processing for better performance
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      const px = positionsArray[i3];
      const py = positionsArray[i3 + 1];
      const pz = positionsArray[i3 + 2];

      const r = Math.sqrt(px * px + py * py + pz * pz);

      // Respawn particle if it reaches the black hole
      if (r < blackHoleRadius) {
        respawnParticle(positionsArray, i3);
        continue;
      }

      // Normalized radial vector toward black hole
      const invR = 1 / r;
      const nx = -px * invR;
      const ny = -py * invR;
      const nz = -pz * invR;

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

      // Add random turbulence
      vx += (Math.random() - 0.5) * turbulence;
      vy += (Math.random() - 0.5) * turbulence;
      vz += (Math.random() - 0.5) * turbulence;

      // Update position
      positionsArray[i3] += vx * delta;
      positionsArray[i3 + 1] += vy * delta;
      positionsArray[i3 + 2] += vz * delta;
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  // Cleanup on unmount
  useRef(() => {
    return () => {
      geometry.dispose();
      material.dispose();
    };
  });

  return <points ref={particlesRef} geometry={geometry} material={material} />;
};

export default Particles;
