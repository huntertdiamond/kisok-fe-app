"use client";
import { DefaultOpenGraphEmbedDisplay } from "./defaultOpenGraphEmbedContainer";
import { InstagramEmbedDisplay } from "./instagramEmbedContainer";
import { SpotifyEmbedDisplay } from "./spotifyEmbedContainer";
import { YoutubeEmbedDisplay } from "./youtubeEmbedContainer";
import { useOpenGraph } from "@/lib/hooks/useOpenGraph";
import { OpenGraphParent } from "@/types/internal/opengraph";
import { useQuery } from "@tanstack/react-query";
import { EmbedSkeleton } from "../elements/loading";

function OpenGraphEmbedContainer({
  url,
  abbreviated = false,
}: {
  url: string;
  abbreviated?: boolean;
}) {
  const { getOpenGraph } = useOpenGraph();

  const {
    data: openGraphData,
    isLoading,
    error,
  } = useQuery<OpenGraphParent>({
    queryKey: ["openGraphData", url],
    queryFn: async () => {
      return await getOpenGraph(url);
    },
  });

  if (isLoading) return <EmbedSkeleton />;
  if (!openGraphData) return <EmbedSkeleton variant="warning" />;
  if (error) return <EmbedSkeleton variant="error" />;

  switch (openGraphData.type) {
    case "spotify":
      return <SpotifyEmbedDisplay spotifyData={openGraphData} />;
    case "youtube":
      return (
        <YoutubeEmbedDisplay
          youtubeData={openGraphData}
          abbreviated={abbreviated}
        />
      );
    case "instagram":
      return (
        <InstagramEmbedDisplay
          instagramData={openGraphData}
          abbreviated={abbreviated}
        />
      );
    case "default":
      return (
        <DefaultOpenGraphEmbedDisplay
          defaultData={openGraphData}
          abbreviated={abbreviated}
        />
      );
    default:
      return <div>default</div>;
  }
}

export { OpenGraphEmbedContainer };
