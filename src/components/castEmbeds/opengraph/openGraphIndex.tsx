"use client";
import { DefaultOpenGraphEmbedDisplay } from "./defaultOpenGraphEmbedContainer";

import { YoutubeEmbedDisplay } from "./youtubeEmbedContainer";
import { useOpenGraph } from "@/lib/hooks/useOpenGraph";
import { OpenGraphParent } from "@/types/internal/opengraph";
import { useQuery } from "@tanstack/react-query";
import { EmbedSkeleton } from "../../elements/loading";
import { LinkChip } from "../../elements/chips";
import { Typography } from "../../elements";
import { LargeOpengraphEmbed } from "./largeOpengraphEmbed";

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
  if (!openGraphData && !isLoading)
    return (
      <LinkChip variant="ghost" link="" linkType="external" size="small">
        {url}
      </LinkChip>
    );
  if (!openGraphData) return <EmbedSkeleton variant="warning" />;
  if (error) return <EmbedSkeleton variant="error" />;

  if (abbreviated) {
    return (
      <LinkChip
        variant="ghost"
        size="medium"
        link={openGraphData.url}
        linkType="external"
      >
        <Typography variant="body" className="text-sm">
          {openGraphData.title}
        </Typography>
      </LinkChip>
    );
  }

  switch (openGraphData.type) {
    case "spotify":
    case "instagram":
      return (
        <LargeOpengraphEmbed
          opengraphData={openGraphData}
          platform={openGraphData.type}
        />
      );
    case "youtube":
      return (
        <YoutubeEmbedDisplay
          youtubeData={openGraphData}
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
      return <div>error</div>;
  }
}

export { OpenGraphEmbedContainer };
