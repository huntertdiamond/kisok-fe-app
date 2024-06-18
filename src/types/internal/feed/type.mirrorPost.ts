import { StaticImageData } from "next/image";
import { BaseFeedPost } from "./type.baseFeedPost";
import { PlatformOptions } from "./type.platformOptions";

type MirrorFeedPost = BaseFeedPost & {
  platform: PlatformOptions.Mirror;
  title: string;
  postText: string;
  postMedia: string | StaticImageData;
  postBanner: string | StaticImageData;
  url: string;
};
export type { MirrorFeedPost };
