"use client";
import { FeedModalProvider, useFeedActionContext } from "@/lib/providers";
import { ModalAnimationWrapper } from "./modalAnimationWrapper";
import { FrameModal } from "./frame";
import { SelectedOptionModal } from "./selectedOptionModal";

function FeedModalIndex() {
  const { selectedModalOption, showFrameModal } = useFeedActionContext();

  return (
    <FeedModalProvider>
      <ModalAnimationWrapper>
        {selectedModalOption && <SelectedOptionModal />}
        {showFrameModal && <FrameModal />}
      </ModalAnimationWrapper>
    </FeedModalProvider>
  );
}

export { FeedModalIndex };
