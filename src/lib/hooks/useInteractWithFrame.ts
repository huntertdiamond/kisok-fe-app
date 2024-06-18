import { useCallback } from "react";
import { useFeedActionContext } from "../providers";
import {
  FarcasterFrame,
  FarcasterFrameButton,
} from "@/types/internal/farcaster";
import { InternalFarcasterCast } from "@/types/internal/feed";

function useInteractWithFrame() {
  const { setUserFrameInteraction } = useFeedActionContext();

  const interactWithFrame = useCallback(
    (
      cast: InternalFarcasterCast,
      frameButton: FarcasterFrameButton,
      frame: FarcasterFrame
    ) => {
      // console.log(
      //   "pressed frameHash",
      //   cast.hash,
      //   "wif action",
      //   frameButton.action_type,
      //   "and target",
      //   frame.image
      // );

      setUserFrameInteraction({
        interactionType: frameButton.action_type,
        button: frameButton,
        cast: cast,
        frame: frame,
      });
    },
    [setUserFrameInteraction]
  );

  return { interactWithFrame };
}

export { useInteractWithFrame };
