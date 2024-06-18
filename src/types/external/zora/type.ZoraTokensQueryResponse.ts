type ZoraTokensQueryResponse = {
  tokens: Tokens;
};

type Tokens = {
  nodes: ZoraNftFromQuery[];
};

type ZoraNftFromQuery = {
  token: ZoraNft;
};

type ZoraNft = {
  description: string;
  lastRefreshTime: Date;
  tokenId: string;
  tokenUrl: string;
  metadata: Metadata;
  name: string;
  mintInfo: MintInfo | null;
};

type Metadata = {
  name: string;
  description: string;
  image: string;
  animation_url?: string;
  content?: Content;
  attributes?: any[];
};

type Content = {
  mime: string;
  uri: string;
};

type MintInfo = {
  price: Price;
};

type Price = {
  nativePrice: NativePrice;
  chainTokenPrice: null;
  usdcPrice: null;
};

type NativePrice = {
  decimal: number;
  raw: string;
  currency: Currency;
};

type Currency = {
  name: string;
  address: string;
  decimals: number;
};
export type { ZoraTokensQueryResponse, ZoraNftFromQuery, ZoraNft };
