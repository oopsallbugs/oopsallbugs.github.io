import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";

interface SpiralLinesProps {
  lineCount: number;
  spiralRadius: number;
  distanceToCenter: number;
  numRotationsToCenter: number;
  segments: number;
  spiralSpeed: number;
  color: string;
  lineWidth: number;
  opacity: number;
}

const SpiralLines = ({
  lineCount,
  spiralRadius,
  distanceToCenter,
  numRotationsToCenter,
  segments,
  spiralSpeed,
  color,
  lineWidth,
  opacity,
}: SpiralLinesProps) => {
  const groupRef = useRef<THREE.Group>(null);

  // Store original points that never change
  const originalLines = useMemo(() => {
    const linesData: THREE.Vector3[][] = [];

    for (let l = 0; l < lineCount; l++) {
      const points: THREE.Vector3[] = [];
      const startAngle = (l / lineCount) * Math.PI * 2;
      const yOffset = (Math.random() - 0.5) * 2;

      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const radius = spiralRadius * (1 - t * distanceToCenter);
        const angle = startAngle + t * Math.PI * numRotationsToCenter;
        const y = yOffset * (1 - t) + Math.sin(t * Math.PI * 4) * 0.3 * (1 - t);

        points.push(
          new THREE.Vector3(
            radius * Math.cos(angle),
            y,
            radius * Math.sin(angle)
          )
        );
      }

      linesData.push(points);
    }

    return linesData;
  }, [
    lineCount,
    spiralRadius,
    distanceToCenter,
    numRotationsToCenter,
    segments,
  ]);

  // Animate by rotating the entire group instead of individual points
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= delta * spiralSpeed;
    }
  });

  return (
    <group ref={groupRef}>
      {originalLines.map((points, index) => (
        <Line
          key={index}
          points={points}
          color={color}
          lineWidth={lineWidth}
          transparent
          opacity={opacity}
          dashed={false}
        />
      ))}
    </group>
  );
};

export default SpiralLines;
