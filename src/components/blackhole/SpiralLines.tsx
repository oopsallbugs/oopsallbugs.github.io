import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import type { SpiralLinesProps } from "./blackHoleTypes";

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
  const clockRef = useRef(new THREE.Clock());

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

  // Memoize line material properties
  const lineProps = useMemo(
    () => ({
      color,
      lineWidth,
      transparent: true,
      opacity,
      dashed: false,
    }),
    [color, lineWidth, opacity]
  );

  // Animate by rotating the entire group instead of individual points
  useFrame(() => {
    if (groupRef.current) {
      const delta = clockRef.current.getDelta();
      groupRef.current.rotation.y -= delta * spiralSpeed;
    }
  });

  return (
    <group ref={groupRef}>
      {originalLines.map((points, index) => (
        <Line key={index} points={points} {...lineProps} />
      ))}
    </group>
  );
};

export default SpiralLines;
