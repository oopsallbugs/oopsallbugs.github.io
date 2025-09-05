import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const SkyBox = () => {
  const { scene } = useThree();

  useEffect(() => {
    let currentTexture: THREE.CubeTexture | null = null;

    const loader = new THREE.CubeTextureLoader();

    // Add loading callbacks to debug
    loader.load(
      [
        "/cubeMaps/space/resolutions/1024/px.png", // positive x
        "/cubeMaps/space/resolutions/1024/nx.png", // negative x
        "/cubeMaps/space/resolutions/1024/py.png", // positive y
        "/cubeMaps/space/resolutions/1024/ny.png", // negative y
        "/cubeMaps/space/resolutions/1024/pz.png", // positive z
        "/cubeMaps/space/resolutions/1024/nz.png", // negative z
      ],
      // onLoad callback
      (texture) => {
        console.log("Skybox loaded successfully!");
        scene.background = texture;
        scene.environment = texture;
        currentTexture = texture;
      },
      // onProgress callback
      (progress) => {
        console.log("Skybox loading progress:", progress);
      },
      // onError callback
      (error) => {
        console.error("Skybox failed to load:", error);
      }
    );

    return () => {
      scene.background = null;
      scene.environment = null;
      if (currentTexture) {
        currentTexture.dispose();
      }
    };
  }, [scene]);

  return null;
};

export default SkyBox;
