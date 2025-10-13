import React, { useRef } from 'react';
import { Mesh } from 'three';

interface MonitorClickPlaneProps {
  position: [number, number, number];
  rotation: [number, number, number];
  size: [number, number];
  onClick: () => void;
  isAnimating: boolean;
}

export const MonitorClickPlane: React.FC<MonitorClickPlaneProps> = ({
  position,
  rotation,
  size,
  onClick,
  isAnimating
}) => {
  const meshRef = useRef<Mesh>(null);

  const handleClick = (e: any) => {
    e.stopPropagation();
    if (!isAnimating) {
      onClick();
    }
  };

  // Optional: Add subtle hover effect
  const handlePointerEnter = () => {
    if (meshRef.current && !isAnimating) {
      document.body.style.cursor = 'pointer';
    }
  };

  const handlePointerLeave = () => {
    document.body.style.cursor = 'auto';
  };

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      onClick={handleClick}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <planeGeometry args={size} />
      <meshBasicMaterial 
        transparent 
        opacity={0}
        // Invisible click area
      />
    </mesh>
  );
};