interface DeviceCapabilities {
  isMobile: boolean;
  isLowEnd: boolean;
  maxTextureSize: number;
  preferredParticleCount: number;
  initialCubemapSize: string;
  maxCubemapSize: string;
  effectiveType?: string;
}

interface NetworkInformation {
  effectiveType?: string;
}
export const detectDeviceCapabilities = (): DeviceCapabilities => {
  const canvas = document.createElement("canvas");
  const gl = canvas.getContext("webgl") as WebGLRenderingContext | null;

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  const maxTextureSize = gl
    ? (gl.getParameter(gl.MAX_TEXTURE_SIZE) as number)
    : 512;

  const isLowEnd =
    maxTextureSize < 4096 ||
    navigator.hardwareConcurrency < 4 ||
    ("deviceMemory" in navigator &&
      (navigator as { deviceMemory: number }).deviceMemory < 4);

  const connection: NetworkInformation =
    (navigator as Navigator & { connection?: NetworkInformation }).connection ||
    {};
  const effectiveType = connection.effectiveType;

  let initialCubemapSize: string;
  let maxCubemapSize: string;
  let preferredParticleCount: number;

  // Initial cubemap size: based on connection
  if (effectiveType !== "4g") {
    initialCubemapSize = "256";
  } else {
    initialCubemapSize = "512";
  }

  // Max cubemap size: based on device
  if (isMobile || isLowEnd) {
    maxCubemapSize = "512";
  } else {
    maxCubemapSize = "1024";
  }

  if (isMobile) {
    preferredParticleCount = 2000;
  } else if (isLowEnd) {
    preferredParticleCount = 4000;
  } else {
    preferredParticleCount = 6000;
  }

  return {
    isMobile,
    isLowEnd,
    maxTextureSize,
    preferredParticleCount,
    initialCubemapSize,
    maxCubemapSize,
    effectiveType,
  };
};

export const deviceCapabilities = detectDeviceCapabilities();
