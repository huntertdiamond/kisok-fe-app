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
    <a href={defaultData.url} target="_blank" rel="noopener noreferrer">
      <VStack
        horizontal="leading"
        vertical="center"
        padding={2}
        gap={2}
        rounded={12}
        className="w-auto shadow-heavyShadow  hover:opacity-70 relative hover:cursor-pointer group"
      >
        <span className="top-4 right-4 z-10 text-2xl group-hover:block absolute hidden">
          <ArrowUpRight />
        </span>
        <div className="relative w-full">
          <div className="h-[80px] w-full overflow-hidden">
            <img
              src={imageUrl}
              alt={defaultData.title}
              className="absolute left-1 z-20 h-20 w-20 p-1 bg-white rounded-[12px] shadow-heavyShadow shrink-0 object-cover aspect-square"
              width={80}
              height={80}
            />
          </div>
        </div>
        <VStack horizontal="leading" vertical="center">
          <Typography variant="h3" className="font-bold">
            {defaultData.title}
          </Typography>
          <HStack vertical="center" horizontal="leading">
            <Typography variant="body" secondary className="text-sm">
              {defaultData.description}
            </Typography>
          </HStack>
        </VStack>
      </VStack>
    </a>
  );
}
export { DefaultOpenGraphEmbedDisplay };
