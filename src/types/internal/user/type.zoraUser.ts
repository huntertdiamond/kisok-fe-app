type ZoraUser = {
  zoraDisplayName: string;
  zoraUsername: string;
  zoraBio: string;
  zoraPfp: string;
  zoraAddress: `0x${string}`;
  zoraProfileId: string;
  zoraFollowerCount: number;
  zoraFollowingCount: number;
  zoraStylingDetails?: {
    backgroundColor: string;
    textColor: string;
    accentColor: string;
    accentText: string;
  };
};
export type { ZoraUser };
