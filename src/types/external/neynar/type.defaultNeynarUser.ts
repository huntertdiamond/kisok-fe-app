type NeynarUser = {
  object: string;
  fid: number;
  custody_address: string;
  username: string;
  display_name: string;
  pfp_url: string;
  profile: NeynarProfile;
  follower_count: number;
  following_count: number;
  verifications: string[];
  verified_addresses: NeynarVerifiedAddresses;
  active_status: string;
  power_badge: boolean;
  viewer_context: NeynarViewerContext;
};

type NeynarProfile = {
  bio: NeynarBio;
};

type NeynarBio = {
  text: string;
};

type NeynarVerifiedAddresses = {
  eth_addresses: string[];
  sol_addresses: string[];
};

type NeynarViewerContext = {
  following: boolean;
  followed_by: boolean;
};

export type {
  NeynarUser,
  NeynarProfile,
  NeynarBio,
  NeynarVerifiedAddresses,
  NeynarViewerContext,
};
