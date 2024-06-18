import { ChainIdOption } from "@/types";
import { Chain, createPublicClient, http } from "viem";
import { arbitrumNova, base, mainnet, zora } from "viem/chains";

function returnViemClientForChainId(chainId: ChainIdOption) {
  let chain: Chain;
  switch (chainId) {
    case 1:
      chain = mainnet;
      break;
    case 8453:
      chain = base;
      break;
    case 42161:
      chain = arbitrumNova;
    case 7777777:
      chain = zora;
      break;
      break;
    default:
      chain = mainnet;
  }

  const client = createPublicClient({
    chain: chain,
    transport: http(),
  });
  return client;
}

export { returnViemClientForChainId };
