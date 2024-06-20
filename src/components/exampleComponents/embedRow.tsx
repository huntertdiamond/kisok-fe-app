"use client";
import {
  InstagramIcon,
  OurYoutubeIcon,
  SpotifyIcon,
  XLogoIcon,
} from "@/assets/icons";
import { Globe } from "lucide-react";
import { useState } from "react";
import { IconTabs } from "../elements/tabs";

import { OpenGraphEmbedContainer } from "../castEmbeds/opengraph/openGraphIndex";
import { HStack, Typography, VStack } from "../elements";

import { TwitterEmbedDisplay } from "../castEmbeds/opengraph/twitterEmbedContainer";
import { DocsRow } from "../docs/docsRow";
const tabs = [
  { title: "YouTube", icon: <OurYoutubeIcon width={24} /> },
  { title: "Spotify", icon: <SpotifyIcon width={24} /> },
  { title: "Instagram", icon: <InstagramIcon width={22} /> },
  { title: "Twitter", icon: <XLogoIcon width={18} height={18} /> },
  { title: "Default", icon: <Globe width={22} /> },
];

function EmbedRowForDocs() {
  const [selected, setSelected] = useState<
    "YouTube" | "Spotify" | "Instagram" | "Twitter" | "Default"
  >("YouTube");

  const [enteredUrl, setEnteredUrl] = useState("");
  const linkForEmbed = {
    Spotify:
      "https://open.spotify.com/track/1SIUAeA91vefUtqyUfXu4W?si=d298619f404c4164",

    YouTube: "https://www.youtube.com/watch?v=sCv-dIFGcd0&t=1s",
    Instagram: "https://www.instagram.com/p/C8LC_-3yxwA/?igsh=Z3RtYXl6eTUzNmQx",
    Twitter: "https://x.com/KioskSocial/status/1786062031466164556",
    Default: enteredUrl,
  };

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredUrl(event.target.value);
  };

  return (
    <DocsRow>
      <DocsRow.LeftColumn
        title="Embed"
        description="A basic embed container for all links, with special cases for YouTube, Spotify, Instagram, and Twitter. While my design skills aren't the strongest, I believe a more colorful, playful feed offers an advantage over Warpcast, and the variety of embed types showcases this."
      >
        <VStack gap={2} horizontal="leading" vertical="center">
          <IconTabs
            tabs={tabs}
            selectedTabId={selected}
            //@ts-ignore
            setSelectedTabId={setSelected}
          />
          {selected === "Default" ? (
            <HStack vertical="center" gap={2}>
              <input
                className="w-full shadow-shFs rounded-[12px] pl-4 py-2"
                placeholder="Paste any URL or copy"
                value={enteredUrl}
                onChange={handleUrlChange}
              />
              <button className="bg-kioskBlue-500/15 text-kioskBlue-500 text-xs font-medium px-4 h-[40px] rounded-[12px] shadow-innerLight border border-kioskBlue-500/10">
                <Typography variant="body">View</Typography>
              </button>
            </HStack>
          ) : null}
        </VStack>
      </DocsRow.LeftColumn>
      <DocsRow.RightColumn>
        {selected != "Twitter" ? (
          <OpenGraphEmbedContainer url={linkForEmbed[selected]} />
        ) : (
          <TwitterEmbedDisplay link={linkForEmbed[selected]} />
        )}
      </DocsRow.RightColumn>
    </DocsRow>
  );
}

export { EmbedRowForDocs };
