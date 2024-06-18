import { ChainIdOption } from "../chains";
// import { BaseFarcasterUser } from "../user";
// import { DefaultUser } from "../user";

// Once an indexer is decided on, adding the platform and user will enable a better UX
type BaseNft = {
  placeholderId: string;
  contractAddress: `0x${string}`;
  acquiredDate: Date;
  chain: ChainIdOption;
  priceInUsd: number;
  priceInToken: number;
  tokenForPayment: `0x${string}`;
  tokenMedia: string;
  nftCollectionName: string;
  // nftCreator: BaseFarcasterUser | DefaultUser;
  creatorAddress: `0x${string}`;
  tokenName: string;
  platform: string;
  // | "zora"
  // | "superrare"
  // | "foundation"
  // | "opensea"
  // | "highlight"
  // | "rarible"
  // | "other";
};

export type { BaseNft };
