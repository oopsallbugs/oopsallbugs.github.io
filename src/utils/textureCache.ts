import * as THREE from "three";

class TextureCache {
  private cache = new Map<string, THREE.CubeTexture>();
  private loadingPromises = new Map<string, Promise<THREE.CubeTexture>>();
  private cubeLoader = new THREE.CubeTextureLoader();
  private cacheKey = "skybox"; // Single cache key for skybox

  /**
   * Loads a cube texture. If a cached texture exists, returns it instantly.
   * If a higher-res texture is loaded, replaces the cache.
   * @param urls Array of image URLs for the cube texture.
   */
  async loadCubeTexture(
    urls: string[],
    force = false
  ): Promise<THREE.CubeTexture> {
    const cacheKey = "skybox";

    // If not forcing, return cached texture if available
    if (!force && this.cache.has(cacheKey)) {
      return Promise.resolve(this.cache.get(cacheKey) as THREE.CubeTexture);
    }

    // If not forcing, return loading promise if in progress
    if (!force && this.loadingPromises.has(cacheKey)) {
      return this.loadingPromises.get(cacheKey) as Promise<THREE.CubeTexture>;
    }

    // Otherwise, load and cache
    const promise = new Promise<THREE.CubeTexture>((resolve, reject) => {
      this.cubeLoader.load(
        urls,
        (texture) => {
          this.cache.set(cacheKey, texture);
          this.loadingPromises.delete(cacheKey);
          resolve(texture);
        },
        undefined,
        (error) => {
          this.loadingPromises.delete(cacheKey);
          reject(error);
        }
      );
    });

    this.loadingPromises.set(cacheKey, promise);
    return promise;
  }

  /**
   * Replace the cached skybox with a new one (e.g., when higher-res loads).
   * Call this after loading a higher-res texture if you want to update instantly.
   */
  setSkybox(texture: THREE.CubeTexture) {
    this.cache.set(this.cacheKey, texture);
  }

  /**
   * Get the currently cached skybox texture, if any.
   */
  getSkybox(): THREE.CubeTexture | undefined {
    return this.cache.get(this.cacheKey);
  }

  /**
   * Dispose the cached skybox texture.
   */
  dispose() {
    const cached = this.cache.get(this.cacheKey);
    if (cached) {
      cached.dispose();
      this.cache.delete(this.cacheKey);
    }
  }
}

export const textureCache = new TextureCache();
