enum ChainIdOption {
  Mainnet = 1,
  Base = 8453,
  Arbitrum = 42161,
  Zora = 7777777,
}

const allChains: ChainIdOption[] = Object.values(ChainIdOption).filter(
  (value) => typeof value === "number"
) as ChainIdOption[];

export { allChains };
export { ChainIdOption };
