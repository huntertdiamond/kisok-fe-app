import { OpenGraphBase } from "./type.openGraphBase";

type InstagramOpenGraph = OpenGraphBase & {
  type: "instagram";
  likes: number;
  comments: number;
  postingUser: string;
  datePosted: Date;
};

export type { InstagramOpenGraph };
