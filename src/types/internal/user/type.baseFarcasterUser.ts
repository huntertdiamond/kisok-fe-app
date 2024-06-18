import { DefaultUser } from "./type.defaultUser";

type BaseFarcasterUser = DefaultUser & {
  farcasterId: number;
  username: string;
  bio: string;
  isPowerUser: boolean;
  isKioskUser: boolean;
  preferredEthereumAddress: `0x${string}`;
  custodyAddress: `0x${string}`;
  noOfFollowers: number;
  noOfFollowing: number;
};

export type { BaseFarcasterUser };
