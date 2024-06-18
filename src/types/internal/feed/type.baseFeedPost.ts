import { PlatformOptions } from "./type.platformOptions";
import { ParentUserObject } from "../user";

type BaseFeedPost = {
  postId: string;
  postedBy: ParentUserObject;
  datePosted: Date;
  platform: PlatformOptions;
};

export type { BaseFeedPost };
