type AirstackNftCreatorResponse = {
  Socials: AirstackSocials;
};

type AirstackSocials = {
  Social: AirstackSocial[] | null;
};

type AirstackSocial = {
  dappName: string;
  profileName: string;
  isFarcasterPowerUser: boolean;
  followerCount: number;
  followingCount: number;
  profileBio: string;
  profileImage: string;
  fnames: string[] | null;
  profileTokenId: string;
  userRecoveryAddress: string;
};

export type { AirstackNftCreatorResponse, AirstackSocial };
