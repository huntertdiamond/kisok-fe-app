export interface ReservoirNftCollectionsResponse {
  collections: ReservoirNftCollection[]
}

export interface ReservoirNftCollection {
  chainId: number
  id: string
  slug: string
  createdAt: Date
  updatedAt: Date
  name: string
  symbol: string
  contractDeployedAt: Date
  image: string
  banner: string
  twitterUrl: null
  discordUrl: string
  externalUrl: string
  twitterUsername: string
  openseaVerificationStatus: string
  magicedenVerificationStatus: null
  description: string
  metadataDisabled: boolean
  isSpam: boolean
  isNsfw: boolean
  isMinting: boolean
  sampleImages: string[]
  tokenCount: string
  onSaleCount: string
  primaryContract: string
  tokenSetId: string
  creator: string
  isSharedContract: boolean
  royalties: Royalties
  allRoyalties: AllRoyalties
  floorAsk: FloorAsk
  topBid: TopBid
  rank: { [key: string]: number | null }
  volume: { [key: string]: number | null }
  volumeChange: { [key: string]: number | null }
  floorSale: { [key: string]: number | null }
  floorSaleChange: { [key: string]: number | null }
  collectionBidSupported: boolean
  ownerCount: number
  contractKind: string
  mintedTimestamp: null
  mintStages: any[]
}

interface AllRoyalties {
  opensea: any[]
}

interface FloorAsk {
  id: string
  sourceDomain: string
  price: FloorAskPrice
  maker: string
  validFrom: number
  validUntil: number
  token: Token
}

interface FloorAskPrice {
  currency: Currency
  amount: Amount
}

interface Amount {
  raw: string
  decimal: number
  usd: number
  native: number
}

interface Currency {
  contract: string
  name: string
  symbol: string
  decimals: number
}

interface Token {
  contract: string
  tokenId: string
  name: string
  image: string
}

interface Royalties {
  recipient: null
  breakdown: any[]
  bps: number
}

interface TopBid {
  id: string
  sourceDomain: string
  price: TopBidPrice
  maker: string
  validFrom: number
  validUntil: number
}

interface TopBidPrice {
  currency: Currency
  amount: Amount
  netAmount: Amount
}
