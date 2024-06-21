import { PanInfo, useAnimation } from "framer-motion";
import { Dispatch, useCallback, useRef, useEffect } from "react";
import { CreateCastMentionedChannel } from "@/types";

function useChannelSelectionSlide(
  containerWidth: number,
  setParentChannel: (channel: CreateCastMentionedChannel | null) => void
) {
  const pageNo = useRef<number>(0);
  const controls = useAnimation();
  const dragStartTime = useRef<number | null>(null);
  const mountedRef = useRef<boolean>(false);
  const isDragging = useRef<boolean>(false);
  const shouldStart = useRef<boolean>(false);

  useEffect(() => {
    if (shouldStart.current) {
      shouldStart.current = false;
      controls.start({
        x: -containerWidth,
        transition: { type: "spring", damping: 20 },
      });
    }
  }, [controls, containerWidth]);

  const handleDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      isDragging.current = false;
      if (info.offset.x < -125) {
        pageNo.current++;
        shouldStart.current = true;
      } else {
        controls.start({ x: 0, transition: { type: "ease", damping: 10 } });
      }
    },
    [controls]
  );

  const handleChannelSelection = useCallback(
    (channel: CreateCastMentionedChannel | null) => {
      if (!isDragging.current) {
        setParentChannel(channel);
      }
    },
    [setParentChannel]
  );

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    controls.start({ x: 0, transition: { type: "ease", damping: 10 } });
  }, [controls]);

  const handleMouseDown = useCallback(() => {
    dragStartTime.current = Date.now();
    isDragging.current = true;
  }, []);

  const handleMouseUp = useCallback(() => {
    if (dragStartTime.current && Date.now() - dragStartTime.current > 110) {
      isDragging.current = false;
    }
  }, []);

  return {
    handleDragEnd,
    handleChannelSelection,
    handleMouseDown,
    handleMouseUp,
    controls,
  };
}

export { useChannelSelectionSlide };
