import type {
  BlackHoleControlsProps,
  BlackHoleSphereMutableProps,
  ParticlesProps,
  ControlConfig,
} from "../blackHoleTypes";
import {
  blackHoleSphereControlsConfig,
  ParticlesControlsConfig,
} from "../blackHoleTypes";
import { useState } from "react";
import styles from "./BlackHoleControls.module.css";

// Generic control renderer
function renderControl<T, K extends keyof T>(
  key: K,
  config: ControlConfig,
  value: T[K],
  onChange: (key: K, value: T[K]) => void
) {
  if (config.type === "range") {
    return (
      <div className={styles.controlGroup} key={String(key)}>
        <label className={styles.controlLabel}>{config.name}:</label>
        <input
          type="range"
          className={styles.rangeInput}
          min={config.min}
          max={config.max}
          step={config.step}
          value={value as number}
          onChange={(e) => onChange(key, parseFloat(e.target.value) as T[K])}
        />
      </div>
    );
  }
  if (config.type === "color") {
    return (
      <div className={styles.controlGroup} key={String(key)}>
        <label>{config.name}:</label>
        <input
          type="color"
          className={styles.colorInput}
          value={value as string}
          onChange={(e) => onChange(key, e.target.value as T[K])}
        />
      </div>
    );
  }
  return null;
}

const BlackHoleControls = ({
  showControls,
  sphereMutableProps,
  onSphereMutablePropsChange,
  particlesProps,
  onParticlesPropsChange,
}: BlackHoleControlsProps) => {
  const [showBlackHoleControls, setShowBlackHoleControls] = useState(false);
  const [showParticlesControls, setShowParticlesControls] = useState(false);

  // Handlers
  const handleSphereChange = <K extends keyof BlackHoleSphereMutableProps>(
    key: K,
    value: BlackHoleSphereMutableProps[K]
  ) => {
    onSphereMutablePropsChange({ ...sphereMutableProps, [key]: value });
  };

  const handleParticlesChange = <K extends keyof ParticlesProps>(
    key: K,
    value: ParticlesProps[K]
  ) => {
    onParticlesPropsChange({ ...particlesProps, [key]: value });
  };

  return (
    <div className={styles.controlsWindow}>
      {showControls && (
        <div className={styles.controlsContent}>
          {/* Black Hole Controls */}
          <h3 onClick={() => setShowBlackHoleControls((v) => !v)}>
            Black Hole
          </h3>
          {showBlackHoleControls && (
            <div className={styles.blackHoleSphereControls}>
              {Object.entries(blackHoleSphereControlsConfig).map(
                ([key, config]) =>
                  renderControl<
                    BlackHoleSphereMutableProps,
                    keyof BlackHoleSphereMutableProps
                  >(
                    key as keyof BlackHoleSphereMutableProps,
                    config,
                    sphereMutableProps[
                      key as keyof BlackHoleSphereMutableProps
                    ],
                    handleSphereChange
                  )
              )}
            </div>
          )}

          {/* Particles Controls */}
          <h3 onClick={() => setShowParticlesControls((v) => !v)}>Particles</h3>
          {showParticlesControls && (
            <div className={styles.particlesControls}>
              {Object.entries(ParticlesControlsConfig).map(([key, config]) =>
                renderControl<ParticlesProps, keyof ParticlesProps>(
                  key as keyof ParticlesProps,
                  config,
                  particlesProps[key as keyof ParticlesProps],
                  handleParticlesChange
                )
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BlackHoleControls;
