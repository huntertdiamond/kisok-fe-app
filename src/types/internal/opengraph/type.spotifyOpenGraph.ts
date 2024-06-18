import { OpenGraphBase } from "./type.openGraphBase";

type SpotifyOpenGraph = OpenGraphBase & {
  type: "spotify";
  artistName: string;
  spotifyOptions: "playlist" | "album" | "track" | "episode" | "show";
  features: string[];
  dateReleased: string;
  duration: number;
  albumUrl: string;
  trackNumber: number;
  musicianUrls: string[];
};

export type { SpotifyOpenGraph };
