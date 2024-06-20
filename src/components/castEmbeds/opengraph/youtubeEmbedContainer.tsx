import { VStack } from "@/components/elements";
import { cn } from "@/lib/tailwind";
import { YoutubeOpenGraph } from "@/types/internal/opengraph";

function YoutubeEmbedDisplay({
  youtubeData,
  abbreviated = false,
}: {
  youtubeData: YoutubeOpenGraph;
  abbreviated?: boolean;
}) {
  return (
    <VStack
      padding={2}
      horizontal="leading"
      vertical="top"
      className={cn(
        "rounded-[20px] border border-[#F1F1F1] w-full",
        "bg-gradient-to-b from-[#F7F7F7]/50 to-white"
      )}
      gap={2}
    >
      <VStack
        className={cn(
          "bg-white rounded-[12px] border border-[#F1F1F1] overflow-hidden",
          "w-full h-0 pb-[56.25%] relative"
        )}
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          title="YouTube video player"
          src={youtubeData.safeVideoUrl}
        ></iframe>
      </VStack>
    </VStack>
  );
}

export { YoutubeEmbedDisplay };
