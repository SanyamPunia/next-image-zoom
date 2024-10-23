"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoomWrapper = void 0;
var react_1 = __importStar(require("react"));
var useZoom_1 = require("../hooks/useZoom");
var ZoomWrapper = function (_a) {
    var children = _a.children, _b = _a.zoomFactor, zoomFactor = _b === void 0 ? 2 : _b, _c = _a.bgColor, bgColor = _c === void 0 ? "black" : _c, _d = _a.overlayOpacity, overlayOpacity = _d === void 0 ? 0.75 : _d, _e = _a.enableAnimation, enableAnimation = _e === void 0 ? true : _e;
    var _f = (0, useZoom_1.useZoom)({
        maxZoom: zoomFactor,
    }), isZoomed = _f.isZoomed, scale = _f.scale, containerRef = _f.containerRef, handleZoomIn = _f.handleZoomIn, handleZoomOut = _f.handleZoomOut;
    var _g = (0, react_1.useState)(false), isAnimating = _g[0], setIsAnimating = _g[1];
    var handleImageClick = function () {
        if (!isAnimating) {
            setIsAnimating(true);
            if (isZoomed) {
                handleZoomOut();
            }
            else {
                handleZoomIn();
            }
            setTimeout(function () { return setIsAnimating(false); }, 300);
        }
    };
    var handleOutsideClick = function (e) {
        if (isZoomed && e.target === e.currentTarget) {
            handleImageClick();
        }
    };
    return (react_1.default.createElement("div", { ref: containerRef, className: "relative overflow-hidden cursor-zoom-in", style: { width: "fit-content", height: "fit-content" }, onClick: handleImageClick },
        (0, react_1.cloneElement)(children, { style: { maxWidth: "100%", height: "auto" } }),
        react_1.default.createElement("div", { className: "fixed inset-0 flex items-center justify-center ".concat(isZoomed ? "cursor-zoom-out" : "pointer-events-none"), style: {
                backgroundColor: "rgba(".concat(parseInt(bgColor.slice(1, 3), 16), ", ").concat(parseInt(bgColor.slice(3, 5), 16), ", ").concat(parseInt(bgColor.slice(5, 7), 16), ", ").concat(isZoomed ? overlayOpacity : 0, ")"),
                transition: enableAnimation
                    ? "background-color 0.3s ease-in-out"
                    : "none",
            }, onClick: handleOutsideClick },
            react_1.default.createElement("div", { className: "relative", style: {
                    transform: "scale(".concat(isZoomed ? scale : 1, ")"),
                    opacity: isZoomed ? 1 : 0,
                    pointerEvents: isZoomed ? "auto" : "none",
                    transformOrigin: "center center",
                    transition: enableAnimation ? "all 0.3s ease-in-out" : "none",
                } }, (0, react_1.cloneElement)(children, {
                style: {
                    maxWidth: "90vw",
                    maxHeight: "90vh",
                    objectFit: "contain",
                    transition: enableAnimation ? "all 0.3s ease-in-out" : "none",
                },
            })))));
};
exports.ZoomWrapper = ZoomWrapper;
