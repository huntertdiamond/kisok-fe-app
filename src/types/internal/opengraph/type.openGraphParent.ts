import { DefaultOpenGraph } from "./type.defaultOpenGraph";
import { InstagramOpenGraph } from "./type.instagramOpenGraph";
import { SpotifyOpenGraph } from "./type.spotifyOpenGraph";
import { YoutubeOpenGraph } from "./type.youtubeOpenGraph";

type OpenGraphParent =
  | SpotifyOpenGraph
  | YoutubeOpenGraph
  | InstagramOpenGraph
  | DefaultOpenGraph;

export type { OpenGraphParent };
