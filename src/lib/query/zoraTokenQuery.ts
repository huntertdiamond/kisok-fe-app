import { gql } from "graphql-request";

const zoraTokenQuery = gql`
  query CollectionInfo(
    $network: NetworkInput!
    $collectionAddresses: [String!]!
  ) {
    tokens(
      networks: [$network]
      pagination: { limit: 10 }
      where: { collectionAddresses: $collectionAddresses }
    ) {
      nodes {
        token {
          description
          lastRefreshTime
          tokenId
          tokenUrl
          name
          metadata
          mintInfo {
            price {
              nativePrice {
                decimal
                raw
                currency {
                  name
                  address
                  decimals
                }
              }
              chainTokenPrice {
                currency {
                  name
                  decimals
                  address
                }
              }
              usdcPrice {
                decimal
              }
            }
          }
        }
      }
    }
  }
`;
export { zoraTokenQuery };
