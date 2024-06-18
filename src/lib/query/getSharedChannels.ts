import { gql } from "graphql-request";
import { airstackGraphQlCLient } from "../configs/airstackGqlClient";

import { AirstackSharedChannelsResponse } from "@/types/external";

async function getSharedChannels(fidBeingViewed: string, viewingFid: string) {
  const query = gql`
    query GetSharedChannelsAndCasts(
      $viewingFid: Identity
      $fidBeingViewed: Identity
    ) {
      sharedChannels: FarcasterChannelParticipants(
        input: {
          filter: { participant: { _eq: $viewingFid } }
          blockchain: ALL
          limit: 30
        }
      ) {
        FarcasterChannelParticipant {
          channel {
            participants(
              input: { filter: { participant: { _eq: $fidBeingViewed } } }
            ) {
              channel {
                name
                channelId
                description
                url
                imageUrl
              }
            }
          }
        }
      }
    }
  `;

  const variables = {
    viewingFid: `fc_fid:${viewingFid}`,
    fidBeingViewed: `fc_fid:${fidBeingViewed}`,
  };

  const data =
    await airstackGraphQlCLient.request<AirstackSharedChannelsResponse>(
      query,
      variables
    );

  return data;
}

export { getSharedChannels };
