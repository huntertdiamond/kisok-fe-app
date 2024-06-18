import { gql } from "graphql-request";

const nftCreatorAirstackQuery = gql`
  query GetFarcasterProfile($_eq: Address) {
    Socials(
      input: {
        filter: {
          userAssociatedAddresses: { _eq: $_eq }
          dappName: { _eq: farcaster }
        }
        blockchain: ethereum
      }
    ) {
      Social {
        dappName
        profileName
        isFarcasterPowerUser
        followerCount
        followingCount
        profileBio
        profileImage
        fnames
        profileTokenId
        userRecoveryAddress
      }
    }
  }
`;

export { nftCreatorAirstackQuery };
