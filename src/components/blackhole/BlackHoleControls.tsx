// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface BlackHoleSphereProps {
  radius: { min: 0.1; max: 5; step: 0.1; default: 1 };
  segmentWidth: { min: 8; max: 64; step: 4; default: 32 };
  segmentHeight: { min: 8; max: 64; step: 4; default: 32 };
  emissiveIntensity: { min: 0; max: 2; step: 0.1; default: 0.5 };
  rotationSpeed: { min: -2; max: 2; step: 0.1; default: 0.5 };
}
