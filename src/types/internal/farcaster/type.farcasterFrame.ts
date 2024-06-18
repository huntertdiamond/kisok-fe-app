import { FrameAction } from "./type.frameAction";

type FarcasterFrame = {
  buttons: FarcasterFrameButton[];
  frames_url: string;
  image: string;
  input: FarcasterFrameInput;
  post_url?: string;
  state: FarcasterFrameState;
  title?: string;
  version: string;
  image_aspect_ratio?: string;
};

type FarcasterFrameButton = {
  action_type: FrameAction;
  index: number;
  title: string;
  post_url?: string;
  target?: string;
};
type FarcasterFrameInput = {
  text?: string;
};

type FarcasterFrameState = {};

export type { FarcasterFrame, FarcasterFrameButton };
