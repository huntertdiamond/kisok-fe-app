import { ChainIdOption } from "@/types/internal/chains";

function chainIdToReservoirEndpoint(chainId: ChainIdOption): string {
  switch (chainId) {
    case 1:
      return "https://api.reservoir.tools";
    case 8453:
      return "https://api-base.reservoir.tools";
    case 7777777:
      return "https://api-zora.reservoir.tools";
    case 42161:
      return "https://api-arbitrum.reservoir.tools";
  }
}

export { chainIdToReservoirEndpoint };
