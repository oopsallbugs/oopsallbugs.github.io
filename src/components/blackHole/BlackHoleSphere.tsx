import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import type { BlackHoleSphereProps } from "./blackHoleTypes";

const BlackHoleSphere = ({
  radius,
  segmentWidth,
  segmentHeight,
  color,
  glow,
  glowIntensity,
  rotationSpeed,
}: BlackHoleSphereProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const clockRef = useRef(new THREE.Clock());

  // Memoize geometry and material for better performance
  const geometry = useMemo(() => {
    return new THREE.SphereGeometry(radius, segmentWidth, segmentHeight);
  }, [radius, segmentWidth, segmentHeight]);

  const material = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color,
      emissive: glow,
      emissiveIntensity: glowIntensity,
    });
  }, [color, glow, glowIntensity]);

  useFrame(() => {
    if (meshRef.current) {
      const delta = clockRef.current.getDelta();
      meshRef.current.rotation.y += delta * rotationSpeed;
    }
  });

  // Cleanup on unmount
  useRef(() => {
    return () => {
      geometry.dispose();
      material.dispose();
    };
  });

  return (
    <mesh ref={meshRef} geometry={geometry} material={material} />
  );
};

export default BlackHoleSphere;
