import { PlatformOptions } from "./type.platformOptions";
import { DefaultToken } from "../tokens";
import { BaseFeedPost } from "./type.baseFeedPost";
import { FarcasterChannel, FarcasterFrame } from "../farcaster";
import { BaseFarcasterUser } from "../user";
import { CastEmbedParent } from "../farcaster/type.farcasterCastEmbed";

type InternalFarcasterCast = BaseFeedPost & {
  platform: PlatformOptions.Farcaster;
  castType: "default" | "frame";
  hash: `0x${string}`;
  threadHash: `0x${string}`;
  parentHash: `0x${string}` | null;
  parent_url: string | null;
  text: string;
  likeCount: number;
  recastCount: number;
  replyCount: number;
  embeds: CastEmbedParent[];
  channel: FarcasterChannel | null | undefined;
  mentionedChannels: FarcasterChannel[];
  mentionedUsers: BaseFarcasterUser[];
  mentionedTokens: DefaultToken[];
  frame?: FarcasterFrame[];
  parsedText: {
    text: string;
    links: { index: number; value: string }[];
    mentionedChannels: { index: number; value: string }[];
    mentionedUsers: { index: number; value: string }[];
    mentionedTokens: { index: number; value: string }[];
  };
  quoteCast: QuoteCast | null;
};

type QuoteCast = {
  platform: PlatformOptions.Farcaster;
  castType: "default" | "frame";
  hash: `0x${string}`;
  threadHash: `0x${string}`;
  parentHash: `0x${string}` | null;
  parent_url: string | null;
  text: string;
  likeCount: number;
  recastCount: number;
  replyCount: number;
  embeds: CastEmbedParent[];
  channel?: FarcasterChannel;
  mentionedChannels: FarcasterChannel[];
  mentionedUsers: BaseFarcasterUser[];
  mentionedTokens: DefaultToken[];
  frame?: FarcasterFrame[];
};

export type { InternalFarcasterCast, QuoteCast };
