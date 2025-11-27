export { default as RiftCanvas } from "./RiftCanvas";
export { default as RiftLayers } from "./RiftLayers";
export { default as RiftGlow } from "./RiftGlow";
export { default as RiftMist } from "./RiftMist";
export { default as RiftFlares } from "./RiftFlares";
export { default as RiftOrbitParticles } from "./RiftOrbitParticles";
export { default as RiftRipples } from "./RiftRipples";
export { default as RiftParallax } from "./RiftParallax";

export function isMobileDevice() {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}