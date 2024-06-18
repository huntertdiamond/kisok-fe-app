import { useFeedModalDrag } from "@/lib/hooks";
import { useFeedModalContext } from "@/lib/providers";
import { feedModalAnimationVariants, modalStyling } from "@/styling";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import React from "react";

function ModalAnimationWrapper({ children }: { children: React.ReactNode }) {
  const { modalHeight, dragY } = useFeedModalContext();
  const [elementRef, bounds] = useMeasure();
  const { handleDrag, handleDragEnd } = useFeedModalDrag();

  const isFullHeight = modalHeight === "full";

  const modalStylingHandler = dragY === 0 ? modalHeight : "draggingDown";

  return (
    <AnimatePresence>
      <motion.div
        className={modalStyling[modalStylingHandler]}
        initial={{ y: "100%", opacity: 0 }}
        animate={{
          y: dragY < 0 ? dragY : 0,
          opacity: 1,
          height: isFullHeight ? "100%" : bounds.height,
        }}
        exit={{ y: "100%", opacity: 0 }}
        variants={feedModalAnimationVariants}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.5,
        }}
        drag="y"
        dragConstraints={{ top: -bounds.height, bottom: 0 }}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        whileDrag={{
          scale: dragY < 0 ? 1.01 : 0.95,
        }}
      >
        <div ref={elementRef}>{children}</div>
      </motion.div>
    </AnimatePresence>
  );
}

export { ModalAnimationWrapper };
