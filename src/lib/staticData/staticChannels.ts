import { FarcasterChannel } from "@/types/internal/farcaster";

const placeholderLightChannel: FarcasterChannel = {
  channelId: "light",
  channelName: "NOT BY DESIGN™",
  chanelNorms: "",
  channelBanner: "https://kiosk.app/kiosk-banner.svg",
  channelDescription: "sketchbook channel :: memes.how",
  channelPfp:
    "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/f13b04fd-90fe-48bf-af95-8c81c0e04d00/original",
  followerCount: 7889,
  hostFids: [13121, 368422],
  ownerFid: 13121,
  createdAt: 1709698601,
  internalColor: "kioskBlueSecondary",
};

const placeholderGolfChannel: FarcasterChannel = {
  channelId: "golf",
  channelName: "Golf",
  chanelNorms: "Play golf",
  channelBanner: "https://kiosk.app/kiosk-banner.svg",
  channelDescription: "a channel unlike any other",
  channelPfp:
    "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/f2135594-0cf5-4ff7-4bf7-9c50a0976d00/rectcrop3",
  followerCount: 7889,
  hostFids: [13121, 368422],
  ownerFid: 13121,
  createdAt: 1709698601,
  internalColor: "kioskBlueSecondary",
  token: {
    _id: "5f9ae0ee8d4ef10001d9d0a3",
    id: "5f9ae0ee8d4ef10001d9d0a3",
    channel: {
      id: "5f9ae0ee8d4ef10001d9d0a3",
      image_url:
        "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/f2135594-0cf5-4ff7-4bf7-9c50a0976d00/rectcrop3",
      name: "GOLF",
      description: "play moar golf",
      follower_count: 7889,
      lead_fid: 13121,
    },
    name: "Golf",
    description: "Golf",
    symbol: "GOLF",
    creator: {
      fid: 13121,
      username: "golfer",
      pfp: "",
      address: "0x3B5Bf7EA8956B8Df5E1e4E6cFdAe1C4Bf7EA895",
      follower_count: 7889,
    },
    deployment: {
      status: "active",
    },
    status: "active",
    stats: {
      base_token_price_usd: "0.00136059318964803",
      base_token_price_native_currency: "0.00000040230061632562",
      quote_token_price_usd: "3405.53",
      quote_token_price_native_currency: "1.0",
      base_token_price_quote_token: "0.00000040",
      quote_token_price_base_token: "2485703",
      address: "0xe5926b7621fa74c369ee1bb98e28e999cc3cefaa",
      name: "terminal / WETH 1%",
      pool_created_at: "2024-06-13T17:21:29Z",
      token_price_usd: "0.00136059318964803",
      fdv_usd: "1360593",
      market_cap_usd: null,
      price_change_percentage: {
        m5: "-0.69",
        h1: "-7.33",
        h6: "-26.28",
        h24: "230.89",
      },
      transactions: {
        m5: {
          buys: 0,
          sells: 2,
          buyers: 0,
          sellers: 2,
        },
        m15: {
          buys: 0,
          sells: 2,
          buyers: 0,
          sellers: 2,
        },
        m30: {
          buys: 0,
          sells: 5,
          buyers: 0,
          sellers: 5,
        },
        h1: {
          buys: 3,
          sells: 9,
          buyers: 3,
          sellers: 9,
        },
        h24: {
          buys: 634,
          sells: 390,
          buyers: 363,
          sellers: 197,
        },
      },
      volume_usd: "720155.80",
      reserve_in_usd: "170236.9921",
      total_reserve_in_usd: "170236.99",
      holders_count: 280,
    },
    is_euro_2024: false,
  },
};
export { placeholderLightChannel, placeholderGolfChannel };
