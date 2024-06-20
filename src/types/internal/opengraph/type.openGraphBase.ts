type OpenGraphBase = {
  siteName: string;
  title: string;
  description: string;
  url: string;
  image: string;
  type: "spotify" | "twitter" | "instagram" | "youtube" | "default";
};

export type { OpenGraphBase };
