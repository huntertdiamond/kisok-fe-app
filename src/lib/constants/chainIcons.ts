import { ChainIdOption } from "@/types";
import { StaticImageData } from "next/image";
import zoraLogo from "@/assets/images/zoraLogo.png";
import baseIcon from "@/assets/images/base_badge.png";
import mainnetLogo from "@/assets/images/ethereum.png";
import arbitrumLogo from "@/assets/images/arbitrumlogo.png";

const chainIcons: Record<ChainIdOption, string> = {
  [ChainIdOption.Zora]: zoraLogo.src,
  [ChainIdOption.Base]: baseIcon.src,
  [ChainIdOption.Mainnet]: mainnetLogo.src,
  [ChainIdOption.Arbitrum]: arbitrumLogo.src,
};

export { chainIcons };
