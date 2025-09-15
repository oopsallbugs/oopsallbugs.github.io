// ====================
// Base Props Interfaces
// ====================

import { deviceCapabilities } from "../../utils/deviceDetection";

// Black Hole Sphere (all properties)
export interface BlackHoleSphereProps {
  radius: number;
  segmentWidth: number;
  segmentHeight: number;
  color: string;
  glow: string;
  glowIntensity: number;
  rotationSpeed: number;
}

// Mutable Black Hole Sphere properties
export interface BlackHoleSphereMutableProps {
  radius: number;
  color: string;
  glow: string;
  glowIntensity: number;
}

// Fixed properties that cannot be changed via controls
export interface BlackHoleSphereFixedProps {
  segmentWidth: number;
  segmentHeight: number;
  rotationSpeed: number;
}

// Spiral Lines
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

// Particles
export interface ParticlesProps {
  particleCount: number;
  size: number;
  color: string;
  opacity: number;
  blackHoleRadius: number;
  coneAngle: number;
  radialSpeed: number;
  spiralSpeed: number;
  turbulence: number;
  minDrawRadiusModifier: number;
  maxDrawRadiusModifier: number;
}

// ====================
// Control Config Types
// ====================

export interface RangeConfig {
  type: "range";
  min: number;
  max: number;
  step: number;
  default: number;
  name: string;
}

export interface ColorConfig {
  type: "color";
  default: string;
  name: string;
}

export type ControlConfig = RangeConfig | ColorConfig;

// ====================
// Control Config Groups
// ====================

export type BlackHoleSphereControlsConfig = {
  radius: RangeConfig;
  color: ColorConfig;
  glow: ColorConfig;
  glowIntensity: RangeConfig;
};

export type SpiralLinesControlsConfig = {
  lineCount: RangeConfig;
  spiralRadius: RangeConfig;
  distanceToCenter: RangeConfig;
  numRotationsToCenter: RangeConfig;
  segments: RangeConfig;
  spiralSpeed: RangeConfig;
  color: ColorConfig;
  lineWidth: RangeConfig;
  opacity: RangeConfig;
};

export type ParticlesControlsConfig = {
  particleCount: RangeConfig;
  size: RangeConfig;
  color: ColorConfig;
  opacity: RangeConfig;
  coneAngle: RangeConfig;
  radialSpeed: RangeConfig;
  spiralSpeed: RangeConfig;
  turbulence: RangeConfig;
  minDrawRadiusModifier: RangeConfig;
  maxDrawRadiusModifier: RangeConfig;
};

// ====================
// Union Types
// ====================

export type BlackHoleComponentProps = {
  sphere: BlackHoleSphereProps;
  lines: SpiralLinesProps;
  particles: ParticlesProps;
};

export type BlackHoleControlsConfig = {
  sphere: BlackHoleSphereControlsConfig;
  lines: SpiralLinesControlsConfig;
  particles: ParticlesControlsConfig;
};

// ====================
// Default configs
// ====================

export const blackHoleSphereFixedProps: BlackHoleSphereFixedProps = {
  segmentWidth: 32,
  segmentHeight: 32,
  rotationSpeed: 0.5,
};

export const blackHoleSphereControlsConfig: BlackHoleSphereControlsConfig = {
  radius: {
    type: "range",
    min: 0.1,
    max: 5,
    step: 0.1,
    default: 1,
    name: "Radius",
  },
  color: { type: "color", default: "#000000", name: "Color" },
  glow: { type: "color", default: "#4a0080", name: "Glow" },
  glowIntensity: {
    type: "range",
    min: 0,
    max: 2,
    step: 0.1,
    default: 0.5,
    name: "Glow Intensity",
  },
};

export const SpiralLinesControlsConfig: SpiralLinesControlsConfig = {
  lineCount: {
    type: "range",
    min: 0,
    max: 100,
    step: 1,
    default: 0,
    name: "Num Lines",
  },
  spiralRadius: {
    type: "range",
    min: 0,
    max: 100,
    step: 1,
    default: 18,
    name: "Spiral Radius",
  },
  distanceToCenter: {
    type: "range",
    min: 0,
    max: 2,
    step: 0.05,
    default: 1,
    name: "Distance to Center",
  },
  numRotationsToCenter: {
    type: "range",
    min: 0,
    max: 50,
    step: 1,
    default: 8,
    name: "Num Rotations",
  },
  segments: {
    type: "range",
    min: 2,
    max: 100,
    step: 1,
    default: 150,
    name: "Segments",
  },
  spiralSpeed: {
    type: "range",
    min: 0,
    max: 5,
    step: 0.1,
    default: 0.4,
    name: "Spiral Speed",
  },
  color: { type: "color", default: "#6666ff", name: "Line Color" },
  lineWidth: {
    type: "range",
    min: 0.1,
    max: 3,
    step: 0.1,
    default: 1,
    name: "Line Width",
  },
  opacity: {
    type: "range",
    min: 0,
    max: 1,
    step: 0.1,
    default: 0.5,
    name: "Opacity",
  },
};

export const ParticlesControlsConfig: ParticlesControlsConfig = {
  particleCount: {
    type: "range",
    min: 0,
    max: 200000,
    step: 1000,
    default: deviceCapabilities.preferredParticleCount,
    name: "Num Particles",
  },
  size: {
    type: "range",
    min: 0.01,
    max: 0.2,
    step: 0.01,
    default: 0.08,
    name: "Particle Size",
  },
  color: { type: "color", default: "#00eeff", name: "Particle Color" },
  opacity: {
    type: "range",
    min: 0,
    max: 1,
    step: 0.1,
    default: 0.7,
    name: "Particle Opacity",
  },
  coneAngle: {
    type: "range",
    min: Math.PI / 12,
    max: Math.PI / 2,
    step: Math.PI / 60,
    default: Math.PI / 6,
    name: "Emission Angle",
  },
  radialSpeed: {
    type: "range",
    min: 0.001,
    max: 0.1,
    step: 0.001,
    default: 0.025,
    name: "Radial Speed",
  },
  spiralSpeed: {
    type: "range",
    min: 0.01,
    max: 1,
    step: 0.01,
    default: 0.25,
    name: "Spiral Speed",
  },
  turbulence: {
    type: "range",
    min: 0,
    max: 0.2,
    step: 0.01,
    default: 0.05,
    name: "Turbulence",
  },
  minDrawRadiusModifier: {
    type: "range",
    min: 0,
    max: 100,
    step: 1,
    default: 10,
    name: "Min Draw Radius",
  },
  maxDrawRadiusModifier: {
    type: "range",
    min: 0,
    max: 100,
    step: 1,
    default: 20,
    name: "Max Draw Radius",
  },
};

// ====================
// Props for Black Hole Controls Component
// ====================

export interface BlackHoleControlsProps {
  showControls: boolean;
  sphereMutableProps: BlackHoleSphereMutableProps;
  onSphereMutablePropsChange: (props: BlackHoleSphereMutableProps) => void;
  spiralLinesProps: SpiralLinesProps;
  onSpiralLinesPropsChange: (props: SpiralLinesProps) => void;
  particlesProps: ParticlesProps;
  onParticlesPropsChange: (props: ParticlesProps) => void;
}
