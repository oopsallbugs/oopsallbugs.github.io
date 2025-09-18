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

export type ParticlesControlsConfig = {
  particleCount: RangeConfig;
  size: RangeConfig;
  color: ColorConfig;
  opacity: RangeConfig;
  coneAngle: RangeConfig;
  radialSpeed: RangeConfig;
  spiralSpeed: RangeConfig;
  turbulence: RangeConfig;
  maxDrawRadiusModifier: RangeConfig;
};

// ====================
// Union Types
// ====================

export type BlackHoleComponentProps = {
  sphere: BlackHoleSphereProps;
  particles: ParticlesProps;
};

export type BlackHoleControlsConfig = {
  sphere: BlackHoleSphereControlsConfig;
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
  color: { type: "color", default: "#665544", name: "Color" },
  glow: { type: "color", default: "#4a0080", name: "Glow" },
  glowIntensity: {
    type: "range",
    min: 0,
    max: 5,
    step: 0.1,
    default: 0.5,
    name: "Glow Intensity",
  },
};

export const ParticlesControlsConfig: ParticlesControlsConfig = {
  particleCount: {
    type: "range",
    min: 0,
    max: 200000,
    step: 1000,
    default: deviceCapabilities.preferredParticleCount,
    name: "Count",
  },
  size: {
    type: "range",
    min: 0.01,
    max: 0.2,
    step: 0.01,
    default: 0.08,
    name: "Size",
  },
  color: { type: "color", default: "#00eeff", name: "Color" },
  opacity: {
    type: "range",
    min: 0,
    max: 1,
    step: 0.1,
    default: 0.7,
    name: "Opacity",
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
    max: 1,
    step: 0.001,
    default: 0.025,
    name: "Gravity Strength",
  },
  spiralSpeed: {
    type: "range",
    min: 0.01,
    max: 1,
    step: 0.01,
    default: 0.25,
    name: "Orbit Speed",
  },
  turbulence: {
    type: "range",
    min: 0,
    max: 0.2,
    step: 0.01,
    default: 0.05,
    name: "Turbulence",
  },
  maxDrawRadiusModifier: {
    type: "range",
    min: 0.5,
    max: 100,
    step: 1,
    default: 20,
    name: "Draw Radius",
  },
};

// ====================
// Props for Black Hole Controls Component
// ====================

export interface BlackHoleControlsProps {
  showControls: boolean;
  sphereMutableProps: BlackHoleSphereMutableProps;
  onSphereMutablePropsChange: (props: BlackHoleSphereMutableProps) => void;
  particlesProps: ParticlesProps;
  onParticlesPropsChange: (props: ParticlesProps) => void;
}
