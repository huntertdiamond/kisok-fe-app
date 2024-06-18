import { FarcasterFrame } from "@/types/internal/farcaster";

type PinataFeedResponse = {
  casts: PinataCast[];
  next: PinataFeedNext;
};

type PinataCast = {
  author: PinataCastAuthor;
  embeds: PinataCastEmbed[];
  hash: string;
  mentioned_profiles: PinataCastMentionedProfile[];
  object: string;
  parent_author: PinataCastParentAuthor;
  parent_hash: null | string;
  parent_url: null | string;
  reactions: PinataCastReactions;
  replies: PinataCastReplies;
  root_parent_url: null | string;
  text: string;
  thread_hash: string;
  timestamp: Date;
  viewer_context: PinataCastViewerContext;
  frames?: FarcasterFrame[];
};

type PinataCastAuthor = {
  active_status: string;
  custody_address: string;
  display_name: string;
  fid: number;
  follower_count: number;
  following_count: number;
  object: string;
  pfp_url: string;
  power_badge: boolean;
  profile: PinataCastAuthorProfile;
  username: string;
  verifications: string[];
  verified_addresses: PinataFcUserVerifiedAddresses;
  viewer_context: PinataFeedAuthorViewerContext;
};

type PinataCastAuthorProfile = {
  bio: PinataFeedInputClass;
};

type PinataFeedInputClass = {
  text?: string;
};

type PinataFcUserVerifiedAddresses = {
  eth_addresses: string[];
  sol_addresses: string[];
};

type PinataFeedAuthorViewerContext = {
  followed_by: boolean;
  following: boolean;
};

type PinataCastEmbed = {
  url?: string;
  cast_id?: PinataFeedCastID;
};

type PinataFeedCastID = {
  fid: number;
  hash: string;
};

type PinataCastMentionedProfile = {
  active_status: string;
  custody_address: string;
  display_name: string;
  fid: number;
  follower_count: number;
  following_count: number;
  object: string;
  pfp_url: string;
  power_badge: boolean;
  profile: PinataFeedMentionedProfile;
  username: string;
  verifications: string[];
  verified_addresses: PinataFcUserVerifiedAddresses;
};

type PinataFeedMentionedProfile = {
  bio: PinataFeedPurpleBio;
};

type PinataFeedPurpleBio = {
  mentioned_profiles: any[];
  text: string;
};

type PinataCastParentAuthor = {
  fid: number | null;
};

type PinataCastReactions = {
  likes: PinataFeedLike[];
  likes_count: number;
  recasts: PinataFeedLike[];
  recasts_count: number;
};

type PinataFeedLike = {
  fid: number;
  fname: string;
};

type PinataCastReplies = {
  count: number;
};

type PinataCastViewerContext = {
  liked: boolean;
  recasted: boolean;
};

type PinataFeedNext = {
  cursor: string;
};

export type { PinataFeedResponse, PinataCast, PinataCastMentionedProfile };
