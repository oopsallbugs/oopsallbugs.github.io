import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import BlackHoleSphere from "./BlackHoleSphere";
import Particles from "./Particles";
import SpiralLines from "./SpiralLines";

// combine all black hole elements and position them
function BlackHoleSystem({
  position = [0, 0, 0],
}: {
  position?: [number, number, number];
}) {
  const [blackHoleRadius] = useState(1); // Initial black hole radius
  return (
    <group position={position}>
      <BlackHoleSphere
        radius={blackHoleRadius}
        segmentWidth={32}
        segmentHeight={32}
        color="#000000"
        emissive="#4a0080"
        emissiveIntensity={0.5}
        rotationSpeed={0.5}
      />
      <Particles particleCount={800} blackHoleRadius={blackHoleRadius} />
      <SpiralLines
        lineCount={10}
        spiralRadius={18}
        distanceToCenter={1}
        numRotationsToCenter={8}
        segments={150}
        spiralSpeed={0.4}
        color="#6666ff"
        lineWidth={1}
        opacity={0.5}
      />
    </group>
  );
}

const BlackHoleCanvas = () => {
  return (
    <Canvas
      camera={{ position: [6, 6, 16], fov: 75 }}
      style={{ height: "100%", width: "100%", background: "#000000" }}
    >
      <OrbitControls />
      <ambientLight intensity={0.4} />
      <spotLight
        position={[5, 5, 5]}
        angle={90}
        penumbra={1}
        decay={0}
        intensity={1}
      />
      <pointLight decay={1} intensity={2} />
      <BlackHoleSystem position={[0, 0, 0]} />
    </Canvas>
  );
};

export default BlackHoleCanvas;
