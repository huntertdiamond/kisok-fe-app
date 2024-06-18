import { ChainIdOption } from "../chains";

type MintModalProps = {
  chainId: ChainIdOption;
  tokenAddress: `0x${string}`;
  tokenId: string;
  referrer?: string;
  platform:
    | "zora"
    | "superrare"
    | "foundation"
    | "highlight"
    | "rarible"
    | "other";
};
export type { MintModalProps };
