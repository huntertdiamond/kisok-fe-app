import { HStack, Typography } from "@/components/elements";

import { useQuery } from "@tanstack/react-query";
import { LinkChip } from "@/components/elements/chips";
import { cn } from "@/lib/tailwind/utils";
import { DefaultCastEmbed } from "@/types/internal/farcaster";
import { useValidateMedia } from "@/lib/hooks";
import { OpenGraphEmbedContainer } from "./openGraphIndex";

function DefaultEmbedContainer({
  castId,
  embeds,
  largeEmbed = false,
}: {
  castId: string;
  embeds: DefaultCastEmbed[];
  largeEmbed?: boolean;
}) {
  const { validateMedia } = useValidateMedia();
  const {
    data: { validMedia = [], invalidMedia = [] } = {},
    isLoading: isMediaLoading,
    error,
  } = useQuery({
    queryKey: ["castMedia", castId],
    queryFn: () => {
      return validateMedia(embedUrls);
    },
  });

  if (embeds.length === 0) return null;
  const embedUrls = embeds.map((embed) => embed.url);

  if (validMedia.length === 0 && invalidMedia.length === 0) return null;
  if (error) return null;

  if (isMediaLoading) {
    return <div className="w-full animate-pulse rounded-md bg-kioskBlue-500" />;
  }

  return (
    <>
      <HStack gap={1}>
        {validMedia.map((mediaObj) => (
          <img
            key={mediaObj}
            src={mediaObj}
            alt="media"
            className={cn(
              "rounded-[8px] shadow-heavyShadow object-cover max-h-[500px] h-full w-full",
              validMedia.length === 2 ? "w-1/2 h-auto" : "w-full h-full",
              largeEmbed ? "max-h-[500px] aspect-square " : ""
            )}
            loading="lazy"
          />
        ))}
      </HStack>

      {invalidMedia.map((linkObj) => {
        return <OpenGraphEmbedContainer url={linkObj.url} key={linkObj.url} />;
      })}
    </>
  );
}

export { DefaultEmbedContainer };
