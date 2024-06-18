import {
  FarcasterFrame,
  FarcasterFrameButton,
  FrameAction,
} from "../farcaster";
import { InternalFarcasterCast } from "../feed";

type UserFrameInteraction = {
  interactionType: FrameAction;
  frame: FarcasterFrame;
  button: FarcasterFrameButton;
  cast: InternalFarcasterCast;
};

export type { UserFrameInteraction };
