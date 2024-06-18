type CastEmbedParent =
  | MirrorCastEmbed
  | TwitterCastEmbed
  | FrameCastEmbed
  | DefaultCastEmbed
  | ZoraCastEmbed
  | QuoteCastEmbed
  | VideoCastEmbed;

// These are all pretty similiar for the moment, but if built upon, they will have unique properties that enable a richer UX
type DefaultCastEmbed = {
  embedType: "unknown";
  url: string;
};
type FrameCastEmbed = {
  embedType: "frame";
  url: string;
};
type TwitterCastEmbed = {
  embedType: "twitterLink";
  url: string;
};
type MirrorCastEmbed = {
  embedType: "mirrorLink";
  url: string;
};

type ZoraCastEmbed = {
  embedType: "zora";
  url: string;
};
type VideoCastEmbed = {
  embedType: "warpcastVideo";
  url: string;
};
type QuoteCastEmbed = {
  embedType: "quoteCast";
  postingFid: number;
  url: string;
  hash: `0x${string}`;
};

export type {
  CastEmbedParent,
  DefaultCastEmbed,
  MirrorCastEmbed,
  TwitterCastEmbed,
  FrameCastEmbed,
  ZoraCastEmbed,
  QuoteCastEmbed,
  VideoCastEmbed,
};
