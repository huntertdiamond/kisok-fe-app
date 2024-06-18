import { HStack, Typography, VStack } from "@/components/elements";
import { spotifyFavicon } from "@/lib/constants";
import { SpotifyOpenGraph } from "@/types/internal/opengraph";

function SpotifyEmbedDisplay({
  spotifyData,
}: {
  spotifyData: SpotifyOpenGraph;
}) {
  return (
    <HStack
      horizontal="leading"
      vertical="center"
      padding={2}
      gap={2}
      rounded={12}
      className="w-auto  shadow-heavyShadow max-w-[400px] "
    >
      <img
        src={spotifyData.image}
        alt="kiosk banner"
        className="rounded-[10px]  max-h-[80px] object-cover"
      />
      <VStack horizontal="leading" vertical="center" gap={0}>
        <Typography variant="h3" className="font-bold">
          {spotifyData.title}
        </Typography>
        <HStack vertical="center" horizontal="leading">
          <img src={spotifyFavicon} className="h-4 w-4" alt="spotify favicon" />

          <Typography variant="body" secondary className="text-sm">
            {spotifyData.description}
          </Typography>
        </HStack>
      </VStack>
    </HStack>
  );
}
export { SpotifyEmbedDisplay };
