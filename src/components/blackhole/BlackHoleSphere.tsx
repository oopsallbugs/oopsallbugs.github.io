import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

interface BlackHoleSphereProps {
  radius: number;
  segmentWidth: number;
  segmentHeight: number;
  color: string;
  emissive: string;
  emissiveIntensity: number;
  rotationSpeed: number;
}

const BlackHoleSphere = ({
  radius,
  segmentWidth,
  segmentHeight,
  color,
  emissive,
  emissiveIntensity,
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
        emissive={emissive}
        emissiveIntensity={emissiveIntensity}
      />
    </mesh>
  );
};

export default BlackHoleSphere;
