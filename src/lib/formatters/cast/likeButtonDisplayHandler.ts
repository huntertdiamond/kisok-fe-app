import { InternalFarcasterCast } from "@/types/internal/feed";
import { LikeButtonVariant } from "@/types/internal/ui";
function likeButtonHandler(cast: InternalFarcasterCast): LikeButtonVariant {
  const mentionedTokens = cast.parsedText.mentionedTokens || [];
  const mentionedChannels = cast.parsedText.mentionedChannels || [];

  const didMentionDegen = mentionedTokens.some(
    (token) => token.value.toLowerCase() === "$degen"
  );
  const didMentionHigher = mentionedTokens.some(
    (token) => token.value.toLowerCase() === "$higher"
  );
  const didCastInHigher = mentionedChannels.some(
    (channel) => channel.value.toLowerCase() === "/higher"
  );

  if (didMentionHigher || didCastInHigher) return "higher";

  if (didMentionDegen) return "degen";

  return "default";
}

export { likeButtonHandler };
