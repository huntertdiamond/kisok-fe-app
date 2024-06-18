import { InternalFarcasterCast } from "@/types/internal/feed";
import { InlineChip } from "@/components/elements/chips";
import { usePressInlineChip } from "@/lib/hooks";
import { CastBodyText } from "./castBodyText";
import { CastEmbedIndex } from "@/components/castEmbeds/castEmbedIndex";
import { CastActionsRow } from "./castActionRow";
import { FrameContainer } from "./frames";

function FarcasterPostContainer({
  post,
  largeEmbed = false,
}: {
  post: InternalFarcasterCast;
  largeEmbed?: boolean;
}) {
  const { pressInlineChip } = usePressInlineChip();

  const showMedia = !post.frame;

  return (
    <>
      <CastBodyText cast={post} />

      {showMedia ? (
        <CastEmbedIndex
          castMedia={post.embeds}
          castId={post.postId}
          smallVariant={largeEmbed}
        />
      ) : null}

      {post.frame ? <FrameContainer cast={post} /> : null}

      {post.channel ? (
        <InlineChip
          variant="ghost"
          textToDisplay={post.channel.channelName}
          onClick={() => pressInlineChip("channel", post.channel ?? null)}
        />
      ) : null}
      <CastActionsRow cast={post} />
    </>
  );
}

export { FarcasterPostContainer };
