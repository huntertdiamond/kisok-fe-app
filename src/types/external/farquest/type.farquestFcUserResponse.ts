type FarquestFcUserResponse = {
  result: FarquestUsers;
  source: string;
};

type FarquestUsers = {
  users: FarquestFarcasterUser[];
};

type FarquestFarcasterUser = {
  fid: string;
  followingCount: number;
  followerCount: number;
  pfp: FarquesterUserPfp;
  bio: Bio;
  external: boolean;
  custodyAddress: string;
  connectedAddress: null | string;
  allConnectedAddresses: AllConnectedAddresses;
  displayName?: string;
  username: string;
  registeredAt: number;
};

type AllConnectedAddresses = {
  ethereum: string[];
  solana: string[];
};

type Bio = {
  text: string;
  mentions: string[];
};

type FarquesterUserPfp = {
  url: string;
  verified: boolean;
};

export type { FarquestFcUserResponse, FarquestFarcasterUser };
