import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { useZoomImage } from "./useZoomImage";

interface ZoomImageProps {
  children: React.ReactElement;
  zoomFactor?: number;
  duration?: number;
  backgroundColor?: string;
}

export const ZoomImage: React.FC<ZoomImageProps> = ({
  children,
  zoomFactor,
  duration,
  backgroundColor,
}) => {
  const {
    isZoomed,
    position,
    imageRef,
    handleZoom,
    zoomFactor: defaultZoomFactor,
    duration: defaultDuration,
    backgroundColor: defaultBackgroundColor,
  } = useZoomImage({
    zoomFactor,
    duration,
    backgroundColor,
  });

  const childrenWithProps = React.cloneElement(children, {
    ref: imageRef,
    onClick: handleZoom,
    style: { cursor: "zoom-in", ...children.props.style },
  });

  return (
    <>
      {childrenWithProps}
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isZoomed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: defaultDuration }}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: defaultBackgroundColor,
                  zIndex: 9999,
                  overflow: "hidden",
                  cursor: "zoom-out",
                }}
                onClick={handleZoom}
              >
                <motion.div
                  initial={{
                    top: position.top,
                    left: position.left,
                    width: position.width,
                    height: position.height,
                  }}
                  animate={{
                    top: `calc(50% - ${
                      (position.height * defaultZoomFactor) / 2
                    }px)`,
                    left: `calc(50% - ${
                      (position.width * defaultZoomFactor) / 2
                    }px)`,
                    width: position.width * defaultZoomFactor,
                    height: position.height * defaultZoomFactor,
                  }}
                  exit={{
                    top: position.top,
                    left: position.left,
                    width: position.width,
                    height: position.height,
                  }}
                  transition={{ duration: defaultDuration }}
                  style={{
                    position: "absolute",
                    overflow: "hidden",
                  }}
                >
                  <motion.img
                    src={imageRef.current?.src}
                    alt={imageRef.current?.alt}
                    initial={{
                      width: "100%",
                      height: "100%",
                    }}
                    animate={{
                      width: "100%",
                      height: "100%",
                    }}
                    exit={{
                      width: "100%",
                      height: "100%",
                    }}
                    transition={{ duration: defaultDuration }}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};
