import { HStack, Typography, VStack } from "@/components/elements";
import { DefaultOpenGraph } from "@/types/internal/opengraph";
import { ArrowUpRight } from "lucide-react";

function DefaultOpenGraphEmbedDisplay({
  defaultData,
  abbreviated = false,
}: {
  defaultData: DefaultOpenGraph;
  abbreviated?: boolean;
}) {
  const imageUrl =
    defaultData.image === ""
      ? "https://kiosk.app/kiosk-banner.svg"
      : defaultData.image;

  return (
    <a
      href={defaultData.url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full"
    >
      <VStack gap={1} horizontal="leading">
        <HStack
          gap={2}
          horizontal="leading"
          vertical="center"
          rounded={10}
          className="border bg-neutral-100/10 hover:bg-neutral-100/80 transition-colors  relative overflow-hidden w-full"
        >
          <div className="relative">
            <div className="h-[70px] w-[70px] overflow-hidden">
              <img
                src={imageUrl}
                alt={defaultData.title}
                className="absolute  z-20 h-full  w-full  shrink-0 object-cover aspect-square"
                width={80}
                height={80}
              />
            </div>
          </div>

          <span className="top-4 right-4 z-10 text-2xl group-hover:block absolute hidden">
            <ArrowUpRight />
          </span>

          <VStack horizontal="leading" vertical="center" className="pr-4 py-1">
            <Typography variant="body" className="font-bold line-clamp-1">
              {defaultData.title}
            </Typography>
            <HStack vertical="center" horizontal="leading">
              <Typography
                variant="body"
                secondary
                className="text-sm line-clamp-2"
              >
                {defaultData.description}
              </Typography>
            </HStack>
          </VStack>
        </HStack>

        {/* <LinkChip
          variant="ghost"
          size="small"
          linkType="external"
          link={defaultData.url}
          className="w-min h-min py-0.5"
        >
          <Typography variant="body" className="text-sm line-clamp-2">
            {defaultData.siteName}
          </Typography>
        </LinkChip> */}
      </VStack>
    </a>
  );
}
export { DefaultOpenGraphEmbedDisplay };
