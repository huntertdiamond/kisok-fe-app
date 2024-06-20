import { ChainIdOption } from "@/types";
import { StaticImageData } from "next/image";
import zoraLogo from "@/assets/images/zoraLogo.png";
import baseIcon from "@/assets/images/base_badge.png";
import mainnetLogo from "@/assets/images/ethereum.png";
import arbitrumLogo from "@/assets/images/arbitrumlogo.png";

const chainIcons: Record<ChainIdOption, StaticImageData> = {
  [ChainIdOption.Zora]: zoraLogo,
  [ChainIdOption.Base]: baseIcon,
  [ChainIdOption.Mainnet]: mainnetLogo,
  [ChainIdOption.Arbitrum]: arbitrumLogo,
};

export { chainIcons };
