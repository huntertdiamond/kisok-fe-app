import {
  MirrorCastEmbed,
  CastEmbedParent,
  ZoraCastEmbed,
  DefaultCastEmbed,
  TwitterCastEmbed,
  VideoCastEmbed,
  QuoteCastEmbed,
} from "@/types/internal/farcaster";
import { PinataCast } from "@/types/external/pinata";
function formatCastEmbeds(cast: PinataCast): CastEmbedParent[] {
  const embeds = cast.embeds;

  if (embeds.length === 0) return [];

  return embeds.map((embed) => {
    if (embed.cast_id) {
      return {
        embedType: "quoteCast",
        postingFid: embed.cast_id.fid,
        hash: embed.cast_id.hash as `0x${string}`,
      } as QuoteCastEmbed;
    } else if (embed.url) {
      if (embed.url.includes("zora.co")) {
        return {
          embedType: "zora",
          url: embed.url,
        } as ZoraCastEmbed;
      } else if (embed.url.includes("x.com")) {
        return {
          embedType: "twitterLink",
          url: embed.url,
        } as TwitterCastEmbed;
      } else if (embed.url.includes("stream.warpcast.com")) {
        return {
          embedType: "warpcastVideo",
          url: embed.url,
        } as VideoCastEmbed;
      } else if (embed.url.includes("mirror.xyz")) {
        return {
          embedType: "mirrorLink",
          url: embed.url,
        } as MirrorCastEmbed;
      } else {
        return {
          embedType: "unknown",
          url: embed.url,
        } as DefaultCastEmbed;
      }
    }

    return {
      embedType: "unknown",
      url: embed.url ?? "",
    } as DefaultCastEmbed;
  });
}

export { formatCastEmbeds };
