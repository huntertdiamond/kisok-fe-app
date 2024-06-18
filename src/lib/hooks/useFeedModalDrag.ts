import { PanInfo } from "framer-motion";
import { useFeedActionContext } from "../providers";
import { useFeedModalContext } from "../providers";
import { useCallback } from "react";

function useFeedModalDrag() {
  const { setSelectedItemForModal, setSelectedModalOption } =
    useFeedActionContext();

  const { setDragY, modalHeight, setModalHeight } = useFeedModalContext();

  const handleDrag = useCallback(
    (_event: MouseEvent | TouchEvent, info: PanInfo) => {
      setDragY(info.offset.y);
    },
    [setDragY]
  );

  const handleDragEnd = useCallback(
    (_event: MouseEvent | TouchEvent, info: PanInfo) => {
      if (info.offset.y < -100 && modalHeight === "small") {
        setModalHeight("full");
      } else if (info.offset.y > 100 && modalHeight === "full") {
        setModalHeight("small");
      } else if (info.offset.y > 100 && modalHeight === "small") {
        setModalHeight("hidden");
        setSelectedModalOption(null);
        setSelectedItemForModal(null);
      }
      setDragY(0);
    },
    [
      modalHeight,
      setModalHeight,
      setDragY,
      setSelectedModalOption,
      setSelectedItemForModal,
    ]
  );

  return { handleDrag, handleDragEnd };
}

export { useFeedModalDrag };
