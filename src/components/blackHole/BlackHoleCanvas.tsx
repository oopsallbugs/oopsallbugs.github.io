import styles from "./BlackHoleCanvas.module.css";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import SkyBox from "./SkyBox";
import BlackHoleSphere from "./BlackHoleSphere";
import Particles from "./Particles";
import { deviceCapabilities } from "../../utils/deviceDetection";
import LoadingSpinner from "../LoadingSpinner";

import BlackHoleControls from "./controls/BlackHoleControls";
import type {
  BlackHoleSphereProps,
  BlackHoleSphereMutableProps,
  ParticlesProps,
} from "./blackHoleTypes";
import {
  blackHoleSphereControlsConfig,
  blackHoleSphereFixedProps,
  ParticlesControlsConfig,
} from "./blackHoleTypes";

// Enable THREE.js caching for better performance (only when this component loads)
THREE.Cache.enabled = true;

// combine all black hole elements and position them
function BlackHoleScene({
  position = [0, 0, 0],
  sphereProps,
  particlesProps,
}: {
  position?: [number, number, number];
  sphereProps: BlackHoleSphereProps;
  particlesProps: ParticlesProps;
}) {
  // Get the black hole radius from the sphere props for a consistent black hole effect
  const blackHoleRadius = sphereProps.radius;

  return (
    <group position={position}>
      <BlackHoleSphere {...sphereProps} />
      <Particles {...particlesProps} blackHoleRadius={blackHoleRadius} />
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
  const [isSkyboxLoading, setIsSkyboxLoading] = useState(false);

  // Create default sphere props from config
  const defaultSphereProps: BlackHoleSphereMutableProps = {
    radius: blackHoleSphereControlsConfig.radius.default,
    color: blackHoleSphereControlsConfig.color.default,
    glow: blackHoleSphereControlsConfig.glow.default,
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

  // Create default Particles props from config with device adaptation
  const defaultParticlesProps = {
    particleCount: deviceCapabilities.preferredParticleCount,
    size: ParticlesControlsConfig.size.default,
    color: ParticlesControlsConfig.color.default,
    opacity: ParticlesControlsConfig.opacity.default,
    blackHoleRadius: defaultSphereProps.radius,
    coneAngle: ParticlesControlsConfig.coneAngle.default,
    radialSpeed: ParticlesControlsConfig.radialSpeed.default,
    spiralSpeed: ParticlesControlsConfig.spiralSpeed.default,
    turbulence: ParticlesControlsConfig.turbulence.default,
    maxDrawRadiusModifier:
      ParticlesControlsConfig.maxDrawRadiusModifier.default,
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
        {skyBox && (
          <SkyBox enabled={skyBox} onLoadingStateChange={setIsSkyboxLoading} />
        )}
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
          particlesProps={activeParticlesProps}
        />
      </Canvas>

      {controls && (
        <div className={styles.controlsOverlay}>
          <BlackHoleControls
            showControls={controls}
            sphereMutableProps={sphereMutableProps}
            onSphereMutablePropsChange={setSphereMutableProps}
            particlesProps={particlesProps}
            onParticlesPropsChange={setParticlesProps}
          />
        </div>
      )}

      {/* Show loading spinner only if skybox is enabled but still loading */}
      {skyBox && isSkyboxLoading && (
        <div className={styles.skyboxLoadingOverlay}>
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
};

export default BlackHoleCanvas;
