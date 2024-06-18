import { QuoteCastEmbed } from "@/types/internal/farcaster";
import { useQuery } from "@tanstack/react-query";

import { CastBodyText } from "../post/postContainers/farcaster";
import { InternalFarcasterCast } from "@/types/internal/feed";
import { fetchOurNextApi } from "@/lib/fetch/api";
import { UserHeader } from "../misc/userHeader";

import { CastEmbedIndex } from "./castEmbedIndex";
import { VStack } from "@/components/elements";
import { EmbedSkeleton } from "../elements/loading";

// TO DO: HANDLE THE CAST INFO SERVER SIDE TO PREVENT UNNECESSARY REQUESTS
function QuoteCastEmbedContainer({
  quoteCast,
  smallVariant = false,
}: {
  quoteCast: QuoteCastEmbed;
  smallVariant?: boolean;
}) {
  const {
    data: fullCast,
    isLoading: isFullCastLoading,
    error: isError,
  } = useQuery({
    queryKey: ["quoteCast", quoteCast.hash],

    queryFn: async () => {
      const cast = await fetchOurNextApi("single-cast", {
        hash: quoteCast.hash,
      });

      return cast;
    },
    staleTime: 1000 * 60 * 10, // 10 minutes
  });

  if (isFullCastLoading) return <EmbedSkeleton />;

  if (isError) return <EmbedSkeleton />;

  return (
    <>
      {fullCast ? (
        <VStack
          horizontal="leading"
          vertical="top"
          gap={1}
          rounded={10}
          className="border px-4 py-2 "
        >
          <UserHeader
            user={fullCast.postedBy}
            datePosted={fullCast.datePosted}
            variant="quoteCast"
            hideTime
          />

          <CastBodyText cast={fullCast} smallVariant={smallVariant} />

          <CastEmbedIndex
            castId={fullCast.postId}
            castMedia={fullCast.embeds}
            smallVariant
          />
        </VStack>
      ) : null}
    </>
  );
}

export { QuoteCastEmbedContainer };
