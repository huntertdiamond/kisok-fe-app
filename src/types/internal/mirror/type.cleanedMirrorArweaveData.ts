type CleanMirrorArweaveData = {
  contentBody: string;
  contentTitle: string;
  contentTimestamp: string;
  contentDigest: string;
  authorship: {
    address: string;
    signingKey: any;
    nft: any;
    originalDigest: string;
  };
};

export type { CleanMirrorArweaveData };
