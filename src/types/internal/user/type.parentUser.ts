import { UserWallet } from "./type.userWallet";
import { BaseFarcasterUser } from "./type.baseFarcasterUser";
import { ZoraUser } from "./type.zoraUser";
import { MirrorUser } from "./type.mirrorUser";

type ParentUserObject = BaseFarcasterUser & {
  mirror?: MirrorUser;
  zora?: ZoraUser;
  wallets?: UserWallet[];
  twitterUsername?: string;
  instagramUsername?: string;
};
export type { ParentUserObject };
