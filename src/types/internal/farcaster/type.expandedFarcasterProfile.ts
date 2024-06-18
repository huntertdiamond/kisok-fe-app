import { ParentPostObject } from "../feed";

type ExpandedFarcasterProfile = {
  casts: ParentPostObject[];
  sharedChannels: SharedChannel[];
};

type SharedChannel = {
  name: string;
  channelId: string;
  description: string;
  url: string;
  imageUrl: string;
};

export type { ExpandedFarcasterProfile, SharedChannel };
