type FarcasterProtocolMessage = {
  mentions: number[];
  parentCastId?: ProtocolCastId;

  parentUrl?: string;
  text: string;
  mentionPositions: number[];
  embeds: ProtocolEmbed[];
};

type ProtocolParentCast = {
  parentCastId: ProtocolCastId;
  parentUrl: string;
};

type ProtocolCastId = {
  fid: number;
  hash: string;
};

type ProtocolEmbed = {
  url: string;
  castId: ProtocolCastId;
};

export type {
  FarcasterProtocolMessage,
  ProtocolParentCast,
  ProtocolCastId,
  ProtocolEmbed,
};
