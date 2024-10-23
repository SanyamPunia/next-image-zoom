import { useState, useRef, useCallback, useEffect } from "react";

interface ZoomImageOptions {
  zoomFactor?: number;
  duration?: number;
  backgroundColor?: string;
}

export function useZoomImage({
  zoomFactor = 2,
  duration = 0.3,
  backgroundColor = "rgba(0, 0, 0, 0.8)",
}: ZoomImageOptions = {}) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const imageRef = useRef<HTMLImageElement>(null);

  const updatePosition = useCallback(() => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      setPosition({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [updatePosition]);

  const handleZoom = useCallback(() => {
    updatePosition();
    setIsZoomed((prev) => !prev);
  }, [updatePosition]);

  return {
    isZoomed,
    position,
    imageRef,
    handleZoom,
    zoomFactor,
    duration,
    backgroundColor,
  };
}
