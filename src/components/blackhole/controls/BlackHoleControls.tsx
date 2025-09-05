import type {
  BlackHoleControlsProps,
  BlackHoleSphereProps,
  SpiralLinesProps,
  ParticlesProps,
} from "../blackHoleTypes";
import {
  blackHoleSphereControlsConfig,
  SpiralLinesControlsConfig,
  ParticlesControlsConfig,
} from "../blackHoleTypes";
import { useState } from "react";
import styles from "./BlackHoleControls.module.css";

const BlackHoleControls = ({
  showControls,
  sphereMutableProps,
  onSphereMutablePropsChange,
  spiralLinesProps,
  onSpiralLinesPropsChange,
  particlesProps,
  onParticlesPropsChange,
}: BlackHoleControlsProps) => {
  const [showBlackHoleControls, setShowBlackHoleControls] =
    useState<boolean>(false);
  const [showSpiralControls, setShowSpiralControls] = useState<boolean>(false);
  const [showParticlesControls, setShowParticlesControls] =
    useState<boolean>(false);

  const updateSphereProperty = <K extends keyof BlackHoleSphereProps>(
    property: K,
    value: BlackHoleSphereProps[K]
  ) => {
    onSphereMutablePropsChange({ ...sphereMutableProps, [property]: value });
  };

  const updateSpiralLinesProperty = <K extends keyof SpiralLinesProps>(
    property: K,
    value: SpiralLinesProps[K]
  ) => {
    onSpiralLinesPropsChange({ ...spiralLinesProps, [property]: value });
  };

  const updateParticlesProperty = <K extends keyof ParticlesProps>(
    property: K,
    value: ParticlesProps[K]
  ) => {
    onParticlesPropsChange({ ...particlesProps, [property]: value });
  };

  return (
    <div className={styles.controlsWindow}>
      {showControls && (
        <div className={styles.controlsContent}>
          {/* Black Hole Controls */}
          <h3 onClick={() => setShowBlackHoleControls(!showBlackHoleControls)}>
            Black Hole
          </h3>
          {showBlackHoleControls && (
            <div className={styles.blackHoleSphereControls}>
              <div className={styles.controlGroup}>
                <label>Radius: {sphereMutableProps.radius}</label>
                <input
                  type="range"
                  className={styles.rangeInput}
                  min={blackHoleSphereControlsConfig.radius.min}
                  max={blackHoleSphereControlsConfig.radius.max}
                  step={blackHoleSphereControlsConfig.radius.step}
                  value={sphereMutableProps.radius}
                  onChange={(e) =>
                    updateSphereProperty("radius", parseFloat(e.target.value))
                  }
                />
              </div>

              <div className={styles.controlGroup}>
                <label>Color:</label>
                <input
                  type="color"
                  value={sphereMutableProps.color}
                  onChange={(e) =>
                    updateSphereProperty("color", e.target.value)
                  }
                />
              </div>

              <div className={styles.controlGroup}>
                <label>Glow Color:</label>
                <input
                  type="color"
                  value={sphereMutableProps.glow}
                  onChange={(e) => updateSphereProperty("glow", e.target.value)}
                />
              </div>

              <div className={styles.controlGroup}>
                <label>Glow Intensity:</label>
                <input
                  type="range"
                  className={styles.rangeInput}
                  min={blackHoleSphereControlsConfig.glowIntensity.min}
                  max={blackHoleSphereControlsConfig.glowIntensity.max}
                  step={blackHoleSphereControlsConfig.glowIntensity.step}
                  value={sphereMutableProps.glowIntensity}
                  onChange={(e) =>
                    updateSphereProperty(
                      "glowIntensity",
                      parseFloat(e.target.value)
                    )
                  }
                />
              </div>
            </div>
          )}

          {/* Spiral Controls */}
          <h3 onClick={() => setShowSpiralControls(!showSpiralControls)}>
            Spiral
          </h3>
          {showSpiralControls && (
            <div className={styles.spiralLinesControls}>
              <div className={styles.controlGroup}>
                <label>Line Count: {spiralLinesProps.lineCount}</label>
                <input
                  type="range"
                  className={styles.rangeInput}
                  min={SpiralLinesControlsConfig.lineCount.min}
                  max={SpiralLinesControlsConfig.lineCount.max}
                  step={SpiralLinesControlsConfig.lineCount.step}
                  value={spiralLinesProps.lineCount}
                  onChange={(e) =>
                    updateSpiralLinesProperty(
                      "lineCount",
                      parseFloat(e.target.value)
                    )
                  }
                />
              </div>

              <div className={styles.controlGroup}>
                <label>
                  Spiral Radius: {spiralLinesProps.spiralRadius.toFixed(1)}
                </label>
                <input
                  type="range"
                  className={styles.rangeInput}
                  min={SpiralLinesControlsConfig.spiralRadius.min}
                  max={SpiralLinesControlsConfig.spiralRadius.max}
                  step={SpiralLinesControlsConfig.spiralRadius.step}
                  value={spiralLinesProps.spiralRadius}
                  onChange={(e) =>
                    updateSpiralLinesProperty(
                      "spiralRadius",
                      parseFloat(e.target.value)
                    )
                  }
                />
              </div>

              <div className={styles.controlGroup}>
                <label>
                  Distance from Center: {spiralLinesProps.distanceToCenter}
                </label>
                <input
                  type="range"
                  className={styles.rangeInput}
                  min={SpiralLinesControlsConfig.distanceToCenter.min}
                  max={SpiralLinesControlsConfig.distanceToCenter.max}
                  step={SpiralLinesControlsConfig.distanceToCenter.step}
                  value={spiralLinesProps.distanceToCenter}
                  onChange={(e) =>
                    updateSpiralLinesProperty(
                      "distanceToCenter",
                      parseFloat(e.target.value)
                    )
                  }
                />
              </div>

              <div className={styles.controlGroup}>
                <label>
                  Rotations: {spiralLinesProps.numRotationsToCenter}
                </label>
                <input
                  type="range"
                  className={styles.rangeInput}
                  min={SpiralLinesControlsConfig.numRotationsToCenter.min}
                  max={SpiralLinesControlsConfig.numRotationsToCenter.max}
                  step={SpiralLinesControlsConfig.numRotationsToCenter.step}
                  value={spiralLinesProps.numRotationsToCenter}
                  onChange={(e) =>
                    updateSpiralLinesProperty(
                      "numRotationsToCenter",
                      parseFloat(e.target.value)
                    )
                  }
                />
              </div>

              <div className={styles.controlGroup}>
                <label>Segments: {spiralLinesProps.segments}</label>
                <input
                  type="range"
                  className={styles.rangeInput}
                  min={SpiralLinesControlsConfig.segments.min}
                  max={SpiralLinesControlsConfig.segments.max}
                  step={SpiralLinesControlsConfig.segments.step}
                  value={spiralLinesProps.segments}
                  onChange={(e) =>
                    updateSpiralLinesProperty(
                      "segments",
                      parseFloat(e.target.value)
                    )
                  }
                />
              </div>

              <div className={styles.controlGroup}>
                <label>Spiral Speed: {spiralLinesProps.spiralSpeed}</label>
                <input
                  type="range"
                  className={styles.rangeInput}
                  min={SpiralLinesControlsConfig.spiralSpeed.min}
                  max={SpiralLinesControlsConfig.spiralSpeed.max}
                  step={SpiralLinesControlsConfig.spiralSpeed.step}
                  value={spiralLinesProps.spiralSpeed}
                  onChange={(e) =>
                    updateSpiralLinesProperty(
                      "spiralSpeed",
                      parseFloat(e.target.value)
                    )
                  }
                />
              </div>

              <div className={styles.controlGroup}>
                <label>Color:</label>
                <input
                  type="color"
                  value={spiralLinesProps.color}
                  onChange={(e) =>
                    updateSpiralLinesProperty("color", e.target.value)
                  }
                />
              </div>

              <div className={styles.controlGroup}>
                <label>Line Width: {spiralLinesProps.lineWidth}</label>
                <input
                  type="range"
                  className={styles.rangeInput}
                  min={SpiralLinesControlsConfig.lineWidth.min}
                  max={SpiralLinesControlsConfig.lineWidth.max}
                  step={SpiralLinesControlsConfig.lineWidth.step}
                  value={spiralLinesProps.lineWidth}
                  onChange={(e) =>
                    updateSpiralLinesProperty(
                      "lineWidth",
                      parseFloat(e.target.value)
                    )
                  }
                />
              </div>

              <div className={styles.controlGroup}>
                <label>Opacity: {spiralLinesProps.opacity}</label>
                <input
                  type="range"
                  className={styles.rangeInput}
                  min={SpiralLinesControlsConfig.opacity.min}
                  max={SpiralLinesControlsConfig.opacity.max}
                  step={SpiralLinesControlsConfig.opacity.step}
                  value={spiralLinesProps.opacity}
                  onChange={(e) =>
                    updateSpiralLinesProperty(
                      "opacity",
                      parseFloat(e.target.value)
                    )
                  }
                />
              </div>
            </div>
          )}

          {/* Particles Controls */}
          <h3 onClick={() => setShowParticlesControls(!showParticlesControls)}>
            Particles
          </h3>
          {showParticlesControls && (
            <div className={styles.particlesControls}>
              <div className={styles.controlGroup}>
                <label>Particle Count: {particlesProps.particleCount}</label>
                <input
                  type="range"
                  className={styles.rangeInput}
                  min={ParticlesControlsConfig.particleCount.min}
                  max={ParticlesControlsConfig.particleCount.max}
                  step={ParticlesControlsConfig.particleCount.step}
                  value={particlesProps.particleCount}
                  onChange={(e) =>
                    updateParticlesProperty(
                      "particleCount",
                      parseFloat(e.target.value)
                    )
                  }
                />
              </div>

              <div className={styles.controlGroup}>
                <label>Size: {particlesProps.size}</label>
                <input
                  type="range"
                  className={styles.rangeInput}
                  min={ParticlesControlsConfig.size.min}
                  max={ParticlesControlsConfig.size.max}
                  step={ParticlesControlsConfig.size.step}
                  value={particlesProps.size}
                  onChange={(e) =>
                    updateParticlesProperty("size", parseFloat(e.target.value))
                  }
                />
              </div>

              <div className={styles.controlGroup}>
                <label>Color:</label>
                <input
                  type="color"
                  value={particlesProps.color}
                  onChange={(e) =>
                    updateParticlesProperty("color", e.target.value)
                  }
                />
              </div>

              <div className={styles.controlGroup}>
                <label>Opacity: {particlesProps.opacity}</label>
                <input
                  type="range"
                  className={styles.rangeInput}
                  min={ParticlesControlsConfig.opacity.min}
                  max={ParticlesControlsConfig.opacity.max}
                  step={ParticlesControlsConfig.opacity.step}
                  value={particlesProps.opacity}
                  onChange={(e) =>
                    updateParticlesProperty(
                      "opacity",
                      parseFloat(e.target.value)
                    )
                  }
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BlackHoleControls;
