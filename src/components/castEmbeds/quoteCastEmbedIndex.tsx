import {
  CastEmbedParent,
  VideoCastEmbed,
  DefaultCastEmbed,
  TwitterCastEmbed,
} from "@/types/internal/farcaster";
import { DefaultEmbedContainer } from "./opengraph/defaultEmbedContainer";

import { TwitterEmbedDisplay } from "./opengraph/twitterEmbedContainer";
import { VideoEmbedDisplay } from "./videoEmbedContainer";
import { VStack } from "@/components/elements";

/**
 * Component to index and display different types of embeds based on their format.
 *
 * @param {Object} props - Component props.
 * @param {string} props.castId - The unique identifier for the cast.
 * @param {DesiredEmbedFormat[]} props.castMedia - Array of media items to be displayed.
 * @returns {JSX.Element} The component UI.
 */
function QuoteCastEmbedIndex({
  castId,
  castMedia,
  largeEmbed = false,
}: {
  castId: string;
  castMedia: CastEmbedParent[];
  largeEmbed?: boolean;
}): JSX.Element {
  // Filter for unknown type embeds
  const unknownEmbeds = castMedia.filter(
    (media): media is DefaultCastEmbed => media.embedType === "unknown"
  );

  // Filter for quoteCast type embeds
  const twitterEmbed = castMedia.filter(
    (media): media is TwitterCastEmbed => media.embedType === "twitterLink"
  );
  // Filter for video type embeds
  const videoEmbed = castMedia.filter(
    (media): media is VideoCastEmbed => media.embedType === "warpcastVideo"
  );

  return (
    <VStack vertical="top" horizontal="leading" gap={2} className="my-1">
      <DefaultEmbedContainer
        castId={castId}
        embeds={unknownEmbeds}
        largeEmbed={false}
      />

      {/* Display Twitter embed*/}
      {twitterEmbed.length > 0 ? (
        <TwitterEmbedDisplay link={twitterEmbed[0].url} />
      ) : null}
      {videoEmbed.length > 0 ? (
        <VideoEmbedDisplay link={videoEmbed[0].url} />
      ) : null}
    </VStack>
  );
}

export { QuoteCastEmbedIndex };
