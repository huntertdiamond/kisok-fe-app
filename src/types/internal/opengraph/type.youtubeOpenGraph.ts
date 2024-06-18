import { OpenGraphBase } from "./type.openGraphBase";

type YoutubeOpenGraph = OpenGraphBase & {
  type: "youtube";
  safeVideoUrl: string;
};

export type { YoutubeOpenGraph };
