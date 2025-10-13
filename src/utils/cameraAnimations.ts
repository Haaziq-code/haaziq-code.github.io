import { Camera, Vector3 } from 'three';

export interface CameraAnimationConfig {
  duration: number;
  onComplete?: () => void;
}

const DEFAULT_CONFIG: CameraAnimationConfig = {
  duration: 1500, // milliseconds for React Spring
};

export const animateCameraToPosition = (
  camera: Camera,
  targetPosition: [number, number, number],
  config: Partial<CameraAnimationConfig> = {}
): Promise<void> => {
  const finalConfig = { ...DEFAULT_CONFIG, ...config };
  
  return new Promise((resolve) => {
    const startPosition = camera.position.clone();
    const endPosition = new Vector3(...targetPosition);
    
    let startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / finalConfig.duration, 1);
      
      // Easing function (ease-in-out)
      const eased = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
      camera.position.lerpVectors(startPosition, endPosition, eased);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        if (finalConfig.onComplete) {
          finalConfig.onComplete();
        }
        resolve();
      }
    };
    
    animate();
  });
};