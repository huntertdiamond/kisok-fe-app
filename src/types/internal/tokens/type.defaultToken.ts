import { ChainIdOption } from "../chains";
import { InternalColors } from "../ui";

type DefaultToken = {
  name: string;
  ticker: string;
  address: `0x${string}`;

  image: string;
  currentPrice: number;
  oneDayPriceChange: number;
  chainId: ChainIdOption;
  internalColor: InternalColors;

  dexScreenerEndpoint?: string;
  coinGeckoEndpoint?: string;
  description: string;
};
export type { DefaultToken };
