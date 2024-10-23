/// <reference types="react" />
interface UseZoomOptions {
    maxZoom?: number;
    minZoom?: number;
}
export declare const useZoom: ({ maxZoom, minZoom, }?: UseZoomOptions) => {
    isZoomed: boolean;
    scale: number;
    containerRef: import("react").RefObject<HTMLDivElement>;
    handleZoomIn: () => void;
    handleZoomOut: () => void;
};
export {};
