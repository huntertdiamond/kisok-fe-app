import { DefaultToken, TokenWithBalance } from "@/types/internal/tokens";
import { zeroAddress } from "viem";

const enjoyTokenObject: TokenWithBalance = {
  name: "enjoy",
  image: "https://www.enjoy.tech/zora.png",
  ticker: "ENJOY",
  address: "0x123456789",
  currentPrice: 0.0002,
  oneDayPriceChange: 3.43,
  chainId: 7777777,
  userBalance: 100_300,
  internalColor: "kioskBlueSecondary",
  coinGeckoEndpoint: "enjoy",
  description:
    "$ENJOY, the first tradable ERC-20 token on Zora Network, is reshaping onchain media creation and curation by enabling the easy rewarding of enjoyable onchain content. Our points system recognizes unique contributions to the scene, effectively bridging the gap between online creators and enjoyoors and real-world value.",
} as const;

const degenTokenObject: TokenWithBalance = {
  name: "Degen",
  image:
    "https://dd.dexscreener.com/ds-data/tokens/base/0x4ed4e862860bed51a9570b96d89af5e1b0efefed.png?size=lg&key=e17c44",
  ticker: "DEGEN",
  address: "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
  currentPrice: 0.022,
  oneDayPriceChange: -1.94,
  chainId: 8453,
  userBalance: 90,
  internalColor: "kioskPurple",
  dexScreenerEndpoint: "/base/0xc9034c3E7F58003E6ae0C8438e7c8f4598d5ACAA",
  description: ` Degen (DEGEN) started as a reward token for participants in the
  Farcaster Degen channel. What began as a meme coin now boasts a
  substantial following of developers, crypto content creators, and
  enthusiasts who have bought into the coin. During its initial
  launch, 15% of the total supply was airdropped to active members of
  the Farcaster's Degen channel, and there are plans to airdrop 70% of
  the token's total supply eventually.`,
} as const;

const higherStaticBaseToken: DefaultToken = {
  name: "Higher",
  image:
    "https://dd.dexscreener.com/ds-data/tokens/base/0x0578d8a44db98b23bf096a382e016e29a5ce0ffe.png?size=lg&key=53aa1f",
  ticker: "HIGHER",
  address: "0x0578d8A44db98B23BF096A382e016e29a5Ce0ffe",
  currentPrice: 0.04,
  oneDayPriceChange: -8.21,
  chainId: 8453,
  internalColor: "kioskGreen",
  dexScreenerEndpoint: "/base/0xcc28456d4ff980cee3457ca809a257e52cd9cdb0",
  description: `
  Higher is for the artists, the athletes, the builders, the onchain fanatics. It's for all those aiming to do more, to think bigger, to leave their mark on the world.
  Higher is an experiment in discovering a brand, together. It's yours, everyone's, no one's. You can add to it, remix it, destroy and rebuild it. It’s an open canvas for creativity.
  `,
};

const tn100xTokenObject: DefaultToken = {
  name: "The Next 100x",
  image:
    "https://dd.dexscreener.com/ds-data/tokens/base/0x5b5dee44552546ecea05edea01dcd7be7aa6144a.png?size=lg&key=de70f1",
  ticker: "TN100X",
  address: "0x5B5dee44552546ECEA05EDeA01DCD7Be7aa6144A",
  currentPrice: 0.002878,
  oneDayPriceChange: -3.14,
  chainId: 8453,
  internalColor: "kioskBlue",
  dexScreenerEndpoint: "/base/0x8f5F1D63599362115e7F9fe71BFD5ab883D82c82",
  description: `
  TN100x is "The Next 100x Memecoin on Base". Born on Warpcast and backed by a community of over 5,000 degens. Join us in the /lp channel on Warpcast and learn more about Community Points, Liquidity Mining, and The Based LP NFT at based.thelp.xyz.
  `,
};
const ethereumTokenObject: DefaultToken = {
  name: "Ethereum",
  image:
    "https://dd.dexscreener.com/ds-data/tokens/base/0x5b5dee44552546ecea05edea01dcd7be7aa6144a.png?size=lg&key=de70f1",
  ticker: "ETH",
  address: zeroAddress,
  currentPrice: 3413.45,
  oneDayPriceChange: -3.14,
  chainId: 8453,
  internalColor: "kioskBlue",
  dexScreenerEndpoint: "/base/0x0000000000000000000000000000000000000000",
  description: `
 It is ethereum. Not alot more to say.
  `,
};

const placeholderTokens = [degenTokenObject, enjoyTokenObject];

const placeholderBaseTokens = [
  degenTokenObject,
  enjoyTokenObject,
  tn100xTokenObject,
];

export {
  placeholderBaseTokens,
  placeholderTokens,
  degenTokenObject,
  enjoyTokenObject,
  ethereumTokenObject,
  higherStaticBaseToken,
};
