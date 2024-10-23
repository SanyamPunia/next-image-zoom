import React, { ReactElement } from "react";
interface ZoomWrapperProps {
    children: ReactElement;
    zoomFactor?: number;
    bgColor?: string;
    overlayOpacity?: number;
    enableAnimation?: boolean;
}
export declare const ZoomWrapper: React.FC<ZoomWrapperProps>;
export {};
