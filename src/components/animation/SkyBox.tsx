import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { textureCache } from "../../utils/textureCache";
import { deviceCapabilities } from "../../utils/deviceDetection";

interface SkyBoxProps {
  onLoadingStateChange?: (isLoading: boolean) => void;
  enabled: boolean;
}

const SkyBox = ({ onLoadingStateChange, enabled }: SkyBoxProps) => {
  const { scene } = useThree();
  const currentTextureRef = useRef<THREE.CubeTexture | null>(null);

  useEffect(() => {
    let isMounted = true;

    const initialSize = deviceCapabilities.initialCubemapSize;
    const maxSize = deviceCapabilities.maxCubemapSize;

    const highQualityUrls = [
      `/cubeMaps/space/${maxSize}/px.png`,
      `/cubeMaps/space/${maxSize}/nx.png`,
      `/cubeMaps/space/${maxSize}/py.png`,
      `/cubeMaps/space/${maxSize}/ny.png`,
      `/cubeMaps/space/${maxSize}/pz.png`,
      `/cubeMaps/space/${maxSize}/nz.png`,
    ];

    const initialUrls = [
      `/cubeMaps/space/${initialSize}/px.png`,
      `/cubeMaps/space/${initialSize}/nx.png`,
      `/cubeMaps/space/${initialSize}/py.png`,
      `/cubeMaps/space/${initialSize}/ny.png`,
      `/cubeMaps/space/${initialSize}/pz.png`,
      `/cubeMaps/space/${initialSize}/nz.png`,
    ];

    const loadSkybox = async () => {
      if (!enabled) {
        scene.background = null;
        scene.environment = null;
        currentTextureRef.current = null;
        return;
      }

      // Use high-res if already cached
      const cachedHighRes = textureCache.getSkybox();
      if (cachedHighRes) {
        scene.background = cachedHighRes;
        scene.environment = cachedHighRes;
        currentTextureRef.current = cachedHighRes;
        onLoadingStateChange?.(false);
        return;
      }

      // Otherwise, load initial texture
      onLoadingStateChange?.(true);
      try {
        const initialTexture = await textureCache.loadCubeTexture(initialUrls);
        if (!isMounted || !enabled) return;
        scene.background = initialTexture;
        scene.environment = initialTexture;
        currentTextureRef.current = initialTexture;
        onLoadingStateChange?.(false);

        // Progressive enhancement: load high-res if needed
        if (Number(maxSize) > Number(initialSize)) {
          try {
            const highQualityTexture = await textureCache.loadCubeTexture(
              highQualityUrls,
              true
            );
            if (isMounted && enabled && currentTextureRef.current) {
              textureCache.setSkybox(highQualityTexture);
              scene.background = highQualityTexture;
              scene.environment = highQualityTexture;
              currentTextureRef.current = highQualityTexture;
            }
          } catch (error) {
            console.warn("Failed to load high quality skybox:", error);
          }
        }
      } catch (error) {
        if (isMounted) {
          console.error("Skybox failed to load:", error);
          onLoadingStateChange?.(false);
        }
      }
    };

    loadSkybox();

    return () => {
      isMounted = false;
      onLoadingStateChange?.(false);
      scene.background = null;
      scene.environment = null;
      currentTextureRef.current = null;
      textureCache.dispose(); // Dispose texture on unmount
    };
  }, [scene, onLoadingStateChange, enabled]);

  return null;
};

export default SkyBox;
