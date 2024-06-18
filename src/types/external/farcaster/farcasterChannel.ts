type WarpcastChannelResponse = {
  result: WarpcastApiChannel;
};

type WarpcastApiChannel = {
  channel: WarpcastChannel;
};

type WarpcastChannel = {
  id: string;
  url: string;
  name: string;
  description: string;
  imageUrl: string;
  leadFid: number;
  hostFids: number[];
  createdAt: number;
  followerCount: number;
};

export type { WarpcastChannelResponse };
