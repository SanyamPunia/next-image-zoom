"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useZoom = void 0;
var react_1 = require("react");
var useZoom = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.maxZoom, maxZoom = _c === void 0 ? 2 : _c, _d = _b.minZoom, minZoom = _d === void 0 ? 1 : _d;
    var _e = (0, react_1.useState)(false), isZoomed = _e[0], setIsZoomed = _e[1];
    var _f = (0, react_1.useState)(1), scale = _f[0], setScale = _f[1];
    var containerRef = (0, react_1.useRef)(null);
    var handleZoomIn = (0, react_1.useCallback)(function () {
        setScale(maxZoom);
        setIsZoomed(true);
    }, [maxZoom]);
    var handleZoomOut = (0, react_1.useCallback)(function () {
        setScale(minZoom);
        setIsZoomed(false);
    }, [minZoom]);
    return {
        isZoomed: isZoomed,
        scale: scale,
        containerRef: containerRef,
        handleZoomIn: handleZoomIn,
        handleZoomOut: handleZoomOut,
    };
};
exports.useZoom = useZoom;
