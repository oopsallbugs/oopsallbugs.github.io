import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
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

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * rotationSpeed;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[radius, segmentWidth, segmentHeight]} />
      <meshStandardMaterial
        color={color}
        emissive={glow}
        emissiveIntensity={glowIntensity}
      />
    </mesh>
  );
};

export default BlackHoleSphere;
