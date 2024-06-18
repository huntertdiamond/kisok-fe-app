type MirrorContentFormatted = {
  arweaveData: ArweaveDataFormatted;
};

type ArweaveDataFormatted = {
  contentBody: string;
  contentTitle: string;
  contentTimestamp: Date;
  contentDigest: string;
  authorship: MirrorAuthorship;
};

type MirrorAuthorship = {
  address: string;
  signingKey: MirrorSigningKey;
  nft: MirrorNft;
  originalDigest: string;
};

type MirrorNft = any;

type MirrorSigningKey = {
  crv: string;
  ext: boolean;
  key_ops: string[];
  kty: string;
  x: string;
  y: string;
};

export type { MirrorContentFormatted };
