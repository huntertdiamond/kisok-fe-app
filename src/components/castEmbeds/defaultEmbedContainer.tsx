import { HStack, Typography } from "@/components/elements";
import { useQuery } from "@tanstack/react-query";
import { LinkChip } from "@/components/elements/chips";
import { cn } from "@/lib/tailwind/utils";
import { DefaultCastEmbed } from "@/types/internal/farcaster";
import { useValidateMedia } from "@/lib/hooks";

function DefaultEmbedContainer({
  castId,
  embeds,
  smallVariant = false,
}: {
  castId: string;
  embeds: DefaultCastEmbed[];
  smallVariant?: boolean;
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
      <HStack>
        {validMedia.map((mediaObj) => (
          <img
            key={mediaObj}
            src={mediaObj}
            alt="media"
            className={cn(
              "rounded-[8px] shadow-heavyShadow object-cover max-h-[500px]",
              validMedia.length === 2 ? "w-1/2 h-auto" : "w-full h-full",
              smallVariant ? "max-h-[500px] aspect-square " : ""
            )}
            loading="lazy"
          />
        ))}
      </HStack>
      {invalidMedia.map((linkObj) => {
        return (
          <LinkChip
            variant="ghost"
            size="small"
            linkType="external"
            link={linkObj.url}
            className="w-auto"
            key={linkObj.url}
          >
            <Typography variant="body" className="text-sm line-clamp-1 ">
              {linkObj.title}
            </Typography>
          </LinkChip>
        );
      })}
    </>
  );
}

export { DefaultEmbedContainer };
