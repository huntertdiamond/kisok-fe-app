function cleanMirrorArwaveData(
  arweaveData: string,
  contentDigest: string
): {
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
} {
  const parsedData = JSON.parse(arweaveData);

  return {
    contentBody: parsedData.content.body,
    contentTitle: parsedData.content.title,
    contentTimestamp: new Date(
      parsedData.content.timestamp * 1000
    ).toISOString(),
    contentDigest: contentDigest,
    authorship: {
      address: parsedData.authorship.contributor,
      signingKey: JSON.parse(parsedData.authorship.signingKey),
      nft: parsedData.nft,
      originalDigest: parsedData.originalDigest,
    },
  };
}
export { cleanMirrorArwaveData };
