import { ReactElement } from 'react';

export interface ZoomWrapperProps {
  children: ReactElement;
  maxZoomFactor?: number;
  transitionDuration?: number;
  enableAnimation?: boolean;
  backgroundColor?: string;
  zoomedImageClassName?: string;
}

export interface ZoomState {
  isZoomed: boolean;
  isAnimating: boolean;
  zoomedDimensions: { width: number; height: number };
  animationStyles: React.CSSProperties;
}

export interface UseZoomProps {
  maxZoomFactor: number;
  transitionDuration: number;
  enableAnimation: boolean;
}