"use client";
import {
  InstagramOpenGraph,
  OpenGraphBase,
  SpotifyOpenGraph,
} from "@/types/internal/opengraph";
import { HStack, Typography, VStack } from "@/components/elements";
import "@/styling/gradientBlurCard.css";

import { useMemo } from "react";
import { ImageForColor, isColorLight } from "../../concepts/imagecolor";
import { opacityCodes } from "@/lib/constants";
import { useImageColor } from "@/lib/hooks";
import { InstagramIcon, SpotifyIcon } from "@/assets/icons";
import { LinkIcon } from "lucide-react";

function LargeOpengraphEmbed({
  opengraphData,
  abbreviated = false,
  platform,
}: {
  opengraphData: InstagramOpenGraph | SpotifyOpenGraph | OpenGraphBase;
  abbreviated?: boolean;
  platform: "instagram" | "spotify" | "default";
}) {
  const platformIcon = {
    instagram: <InstagramIcon height={20} width={20} />,
    spotify: <SpotifyIcon height={20} width={20} />,
    default: <LinkIcon height={20} width={20} />,
  }[platform];
  const { colors } = useImageColor(opengraphData.image, {
    colors: 5,
    cors: true,
    format: "HEX",
  });

  const { primaryTextColor, secondaryTextColor } = useMemo(() => {
    return colors && colors[0]
      ? isColorLight(colors[0])
        ? { primaryTextColor: "#000", secondaryTextColor: "#2e2e2e" }
        : { primaryTextColor: "#fff", secondaryTextColor: "#c7c7c7" }
      : { primaryTextColor: "#fff", secondaryTextColor: "#c7c7c7" };
  }, [colors]);

  return (
    <VStack
      horizontal="leading"
      vertical="center"
      gap={2}
      rounded={12}
      className=" w-full max-w-[450px] max-h-[250px] relative overflow-hidden"
    >
      <ImageForColor
        src={opengraphData.image}
        thumbnail={opengraphData.image}
      />
      <VStack
        horizontal="leading"
        vertical="center"
        gap={1}
        padding={4}
        className={"absolute inset-x-0 bottom-0 z-[20] overflow-hidden"}
        style={{
          backdropFilter: "blur(40px)",
          backgroundImage: `linear-gradient(180deg, ${colors ? colors[0] : "#fff"} 0%,${colors ? `${colors[0]}${opacityCodes[70]}` : "#fff"} 100%)`,
        }}
      >
        <HStack vertical="center" horizontal="leading" gap={1}>
          {platformIcon}
          <Typography
            variant="h3"
            className="font-bold text-black line-clamp-1"
            style={{ color: primaryTextColor }}
          >
            {opengraphData.title}
          </Typography>
        </HStack>

        <Typography
          variant="body"
          className="text-neutral-700 line-clamp-2"
          style={{ color: secondaryTextColor }}
        >
          {opengraphData.description}
        </Typography>
      </VStack>
    </VStack>
  );
}
export { LargeOpengraphEmbed };
