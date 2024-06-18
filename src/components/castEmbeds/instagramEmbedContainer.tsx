import { InstagramOpenGraph } from "@/types/internal/opengraph";
import { HStack, Typography, VStack } from "@/components/elements";

function InstagramEmbedDisplay({
  instagramData,
  abbreviated = false,
}: {
  instagramData: InstagramOpenGraph;
  abbreviated?: boolean;
}) {
  return (
    <VStack
      horizontal="leading"
      vertical="center"
      padding={2}
      gap={2}
      rounded={12}
      className="w-auto  shadow-heavyShadow max-w-[400px] "
    >
      <img
        src={instagramData.image}
        alt="kiosk banner"
        className="rounded-[10px] w-full h-max-[120px] object-cover"
        loading="lazy"
      />
      <VStack horizontal="leading" vertical="center">
        <Typography variant="h3" className="font-bold">
          {instagramData.title}
        </Typography>
        <HStack vertical="center" horizontal="leading">
          <Typography variant="body" secondary className="text-sm">
            {instagramData.description}
          </Typography>
        </HStack>
      </VStack>
    </VStack>
  );
}
export { InstagramEmbedDisplay };
