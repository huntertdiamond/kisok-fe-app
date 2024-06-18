type AirstackNftQueryResponse = {
  TokenNfts: {
    TokenNft: Array<{
      metaData: {
        backgroundColor: string;
        imageData: string;
        attributes: Array<{
          trait_type: string;
          value: string;
        }> | null;
      };
      rawMetaData: {
        animation_url: string;
        content: {
          mime: string;
          uri: string;
        };
        description: string;
        image: string;
        name: string;
      };
      type: string;
      token: {
        tokenTraits: any;
        projectDetails: {
          twitterUrl: string | null;
          description: string | null;
          externalUrl: string | null;
        };
      };
    }>;
    pageInfo: {
      nextCursor: string;
      prevCursor: string;
    };
  };
};

export type { AirstackNftQueryResponse };
