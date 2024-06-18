import Image, { StaticImageData } from "next/image";
import zoraLogo from "@/assets/images/zoraLogo.png";
import baseIcon from "@/assets/images/base_badge.png";
import mainnetLogo from "@/assets/images/ethereum.png";
import arbitrumLogo from "@/assets/images/arbitrumlogo.png";
import { ChainIdOption } from "@/types/internal/chains";

import { cn } from "@/lib/tailwind";
import { chainClassNames, containerSize, tokenClassNames } from "@/styling";
function TokenChainIconContainer({
  tokenImage,
  chain,
  variant,
  className = "",
}: {
  tokenImage: string | StaticImageData;
  chain: ChainIdOption;
  variant: "small" | "smedium" | "default" | "large" | "xl" | "twoXL";
  className?: string;
}) {
  const chainIcons: Record<ChainIdOption, StaticImageData> = {
    [ChainIdOption.Zora]: zoraLogo,
    [ChainIdOption.Base]: baseIcon,
    [ChainIdOption.Mainnet]: mainnetLogo,
    [ChainIdOption.Arbitrum]: arbitrumLogo,
  };

  return (
    <div
      className={cn("relative inline-block", containerSize[variant], className)}
    >
      <Image
        src={
          tokenImage ||
          "https://dd.dexscreener.com/ds-data/tokens/degenchain/0xd57da9dd18207599bc37158eb497a0237c10281b.png"
        }
        alt={"token"}
        height={50}
        width={50}
        className={cn(tokenClassNames[variant])}
      />
      <Image
        src={chainIcons[chain]}
        alt={"chain"}
        height={50}
        width={50}
        className={cn("absolute -bottom-1 -right-1", chainClassNames[variant])}
      />
    </div>
  );
}
export { TokenChainIconContainer };
