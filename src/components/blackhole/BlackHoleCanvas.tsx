import styles from "./BlackHoleCanvas.module.css";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SkyBox from "./SkyBox";
import BlackHoleSphere from "./BlackHoleSphere";
import Particles from "./Particles";
import SpiralLines from "./SpiralLines";

import BlackHoleControls from "./controls/BlackHoleControls";
import type {
  BlackHoleSphereProps,
  BlackHoleSphereMutableProps,
  SpiralLinesProps,
  ParticlesProps,
} from "./blackHoleTypes";
import {
  blackHoleSphereControlsConfig,
  blackHoleSphereFixedProps,
  SpiralLinesControlsConfig,
  ParticlesControlsConfig,
} from "./blackHoleTypes";

// combine all black hole elements and position them
function BlackHoleScene({
  position = [0, 0, 0],
  sphereProps,
  spiralLinesProps,
  particlesProps,
}: {
  position?: [number, number, number];
  sphereProps: BlackHoleSphereProps;
  spiralLinesProps: SpiralLinesProps;
  particlesProps: ParticlesProps;
}) {
  // Get the black hole radius from the sphere props for a consistent black hole effect
  const blackHoleRadius = sphereProps.radius;

  return (
    <group position={position}>
      <BlackHoleSphere {...sphereProps} />
      <Particles {...particlesProps} blackHoleRadius={blackHoleRadius} />
      <SpiralLines {...spiralLinesProps} />
    </group>
  );
}

const BlackHoleCanvas = ({
  controls,
  camera,
  skyBox,
}: {
  controls: boolean;
  camera: boolean;
  skyBox: boolean;
}) => {
  // Create default sphere props from config
  const defaultSphereProps: BlackHoleSphereMutableProps = {
    radius: blackHoleSphereControlsConfig.radius.default,
    color: blackHoleSphereControlsConfig.color,
    glow: blackHoleSphereControlsConfig.glow,
    glowIntensity: blackHoleSphereControlsConfig.glowIntensity.default,
  };

  // State for mutable properties only
  const [sphereMutableProps, setSphereMutableProps] =
    useState<BlackHoleSphereMutableProps>(defaultSphereProps);

  // Combine mutable props with fixed props
  const completeSphereProps = (mutableProps: BlackHoleSphereMutableProps) => ({
    ...blackHoleSphereFixedProps,
    ...mutableProps,
  });

  // Always use the current state, regardless of controls visibility
  const activeSphereProps = completeSphereProps(sphereMutableProps);

  // create default SpiralLines props from config
  const defaultSpiralLinesProps = {
    lineCount: SpiralLinesControlsConfig.lineCount.default,
    spiralRadius: SpiralLinesControlsConfig.spiralRadius.default,
    distanceToCenter: SpiralLinesControlsConfig.distanceToCenter.default,
    numRotationsToCenter:
      SpiralLinesControlsConfig.numRotationsToCenter.default,
    segments: SpiralLinesControlsConfig.segments.default,
    spiralSpeed: SpiralLinesControlsConfig.spiralSpeed.default,
    color: SpiralLinesControlsConfig.color,
    lineWidth: SpiralLinesControlsConfig.lineWidth.default,
    opacity: SpiralLinesControlsConfig.opacity.default,
  };

  // State for mutable SpiralLines properties only
  const [spiralLinesProps, setSpiralLinesProps] = useState<SpiralLinesProps>(
    defaultSpiralLinesProps
  );

  // Always use the current state, regardless of controls visibility
  const activeSpiralLinesProps = spiralLinesProps;

  // Create default Particles props from config
  const defaultParticlesProps = {
    particleCount: ParticlesControlsConfig.particleCount.default,
    size: ParticlesControlsConfig.size.default,
    color: ParticlesControlsConfig.color,
    opacity: ParticlesControlsConfig.opacity.default,
    blackHoleRadius: defaultSphereProps.radius,
  };

  // State for mutable Particles properties only
  const [particlesProps, setParticlesProps] = useState<ParticlesProps>(
    defaultParticlesProps
  );

  // Always use the current state, regardless of controls visibility
  const activeParticlesProps = particlesProps;

  return (
    <div className={styles.pageWrapper}>
      <Canvas
        camera={{ position: [4, 12, 16], fov: 75 }}
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
        }}
      >
        {skyBox && <SkyBox />}
        {camera && <OrbitControls />}
        <ambientLight intensity={0.4} />
        <spotLight
          position={[5, 5, 5]}
          angle={90}
          penumbra={1}
          decay={0}
          intensity={1}
        />
        <pointLight decay={1} intensity={2} />
        <BlackHoleScene
          position={[0, 0, 0]}
          sphereProps={activeSphereProps}
          spiralLinesProps={activeSpiralLinesProps}
          particlesProps={activeParticlesProps}
        />
      </Canvas>

      {controls && (
        <div className={styles.controlsOverlay}>
          <BlackHoleControls
            showControls={controls}
            sphereMutableProps={sphereMutableProps}
            onSphereMutablePropsChange={setSphereMutableProps}
            spiralLinesProps={spiralLinesProps}
            onSpiralLinesPropsChange={setSpiralLinesProps}
            particlesProps={particlesProps}
            onParticlesPropsChange={setParticlesProps}
          />
        </div>
      )}
    </div>
  );
};

export default BlackHoleCanvas;
