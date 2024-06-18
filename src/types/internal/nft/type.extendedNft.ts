import { BaseFarcasterUser, DefaultUser } from "../user";
import { BaseNft } from "./type.internalNft";
import { NftCollection } from "./type.nftCollection";
type ExtendedNft = BaseNft & {
  description: string;
  collection: NftCollection;
  supply: number;
  creator: BaseFarcasterUser | DefaultUser;
};

export type { ExtendedNft };
