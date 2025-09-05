// Base BlackHoleSphere interface (all properties)
export interface BlackHoleSphereProps {
  radius: number;
  segmentWidth: number;
  segmentHeight: number;
  color: string;
  glow: string;
  glowIntensity: number;
  rotationSpeed: number;
}

// Mutable BlackHoleSphere properties only
export interface BlackHoleSphereMutableProps {
  radius: number;
  color: string;
  glow: string;
  glowIntensity: number;
}

// Fixed properties that users cannot change
export interface BlackHoleSphereFixedProps {
  segmentWidth: number;
  segmentHeight: number;
  rotationSpeed: number;
}

// Controls config for mutable-controllable properties only
export interface BlackHoleSphereControlsConfig {
  radius: { min: number; max: number; step: number; default: number };
  color: string; // sphere color
  glow: string; // glow color
  glowIntensity: {
    min: number;
    max: number;
    step: number;
    default: number;
  };
}

// Base SpiralLines interface
export interface SpiralLinesProps {
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

export interface SpiralLinesControlsConfig {
  lineCount: { min: number; max: number; step: number; default: number };
  spiralRadius: { min: number; max: number; step: number; default: number };
  distanceToCenter: { min: number; max: number; step: number; default: number };
  numRotationsToCenter: {
    min: number;
    max: number;
    step: number;
    default: number;
  };
  segments: { min: number; max: number; step: number; default: number };
  spiralSpeed: { min: number; max: number; step: number; default: number };
  color: string;
  lineWidth: { min: number; max: number; step: number; default: number };
  opacity: { min: number; max: number; step: number; default: number };
}

// base Particles interface
export interface ParticlesProps {
  particleCount: number;
  size: number;
  color: string;
  opacity: number;
  blackHoleRadius: number;
}

export interface ParticlesControlsConfig {
  particleCount: { min: number; max: number; step: number; default: number };
  size: { min: number; max: number; step: number; default: number };
  color: string;
  opacity: { min: number; max: number; step: number; default: number };
}

// union type for all components
export type BlackHoleComponentProps = {
  sphere: BlackHoleSphereProps;
  lines: SpiralLinesProps;
  particles: ParticlesProps;
};

// Union type for all control configs
export type BlackHoleControlsConfig = {
  sphere: BlackHoleSphereControlsConfig;
  lines: SpiralLinesControlsConfig;
  particles: ParticlesControlsConfig;
};

// Fixed properties that never change
export const blackHoleSphereFixedProps: BlackHoleSphereFixedProps = {
  segmentWidth: 32,
  segmentHeight: 32,
  rotationSpeed: 0.5,
};

// BlackHoleSphereControlsConfig object with defaults for the mutable properties only
export const blackHoleSphereControlsConfig: BlackHoleSphereControlsConfig = {
  radius: { min: 0.1, max: 5, step: 0.1, default: 1 },
  color: "#000000",
  glow: "#4a0080",
  glowIntensity: { min: 0, max: 2, step: 0.1, default: 0.5 },
};

// SpiralLinesControlsConfig with defaults
export const SpiralLinesControlsConfig = {
  lineCount: { min: 0, max: 100, step: 1, default: 0 },
  spiralRadius: { min: 0, max: 100, step: 1, default: 18 },
  distanceToCenter: { min: 0, max: 2, step: 0.05, default: 1 },
  numRotationsToCenter: {
    min: 0,
    max: 50,
    step: 1,
    default: 8,
  },
  segments: { min: 2, max: 100, step: 1, default: 150 },
  spiralSpeed: { min: 0, max: 5, step: 0.1, default: 0.4 },
  color: "#6666ff",
  lineWidth: { min: 0.1, max: 3, step: 0.1, default: 1 },
  opacity: { min: 0, max: 1, step: 0.1, default: 0.5 },
};

// ParticlesControlsConfig with defaults
export const ParticlesControlsConfig = {
  particleCount: { min: 0, max: 100000, step: 1000, default: 6000 },
  size: { min: 0.01, max: 0.2, step: 0.01, default: 0.08 },
  color: "#00eeff",
  opacity: { min: 0, max: 1, step: 0.1, default: 0.7 },
};

// BlackHoleControlsProps - Mutable props only
export interface BlackHoleControlsProps {
  showControls: boolean;
  sphereMutableProps: BlackHoleSphereMutableProps;
  onSphereMutablePropsChange: (props: BlackHoleSphereMutableProps) => void;
  spiralLinesProps: SpiralLinesProps;
  onSpiralLinesPropsChange: (props: SpiralLinesProps) => void;
  particlesProps: ParticlesProps;
  onParticlesPropsChange: (props: ParticlesProps) => void;
}
