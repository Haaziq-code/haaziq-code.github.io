import { useState, useCallback } from 'react';

interface MonitorInteraction {
  isOpen: boolean;
  isAnimating: boolean;
  openMonitor: () => void;
  closeMonitor: () => void;
  setAnimating: (animating: boolean) => void;
  originalCameraPosition: [number, number, number];
  focusedCameraPosition: [number, number, number];
}

const CAMERA_POSITIONS = {
  original: [20, 3, 5] as [number, number, number],
  focused: [20, 3, 5] as [number, number, number], // Keep camera in same position, just show overlay
};

export const useMonitorInteraction = (): MonitorInteraction => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const openMonitor = useCallback(() => {
    if (!isAnimating && !isOpen) {
      setIsAnimating(true);
      setIsOpen(true);
    }
  }, [isAnimating, isOpen]);

  const closeMonitor = useCallback(() => {
    if (!isAnimating && isOpen) {
      setIsAnimating(true);
      setIsOpen(false);
    }
  }, [isAnimating, isOpen]);

  const setAnimating = useCallback((animating: boolean) => {
    setIsAnimating(animating);
  }, []);

  return {
    isOpen,
    isAnimating,
    openMonitor,
    closeMonitor,
    setAnimating,
    originalCameraPosition: CAMERA_POSITIONS.original,
    focusedCameraPosition: CAMERA_POSITIONS.focused,
  };
};