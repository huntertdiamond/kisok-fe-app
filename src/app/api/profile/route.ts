import { NextResponse, NextRequest } from "next/server";

import { PinataReqType } from "@/types/internal/props";
import { PinataFeedResponse } from "@/types/external/pinata";
import { ExpandedFarcasterProfile } from "@/types/internal/farcaster";

import { getSharedChannels } from "@/lib/query";
import { queryPinataAPI } from "@/lib/fetch/api";
import { formatPinataFeed } from "@/lib/formatters/pinata";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const viewingFid = searchParams.get("viewingFid");
  const fidBeingViewed = searchParams.get("fidBeingViewed");

  if (!viewingFid || !fidBeingViewed) {
    return new NextResponse(JSON.stringify("ERROR MISSING DATA"), {
      status: 400,
    });
  }

  try {
    const [sharedChannelsData, fidBeingViewedCasts] = await Promise.all([
      getSharedChannels(fidBeingViewed, viewingFid),
      queryPinataAPI<PinataFeedResponse>(
        PinataReqType.CastsByFid,
        fidBeingViewed
      ),
    ]);
    const formattedSharedChannelsData =
      sharedChannelsData.sharedChannels.FarcasterChannelParticipant.filter(
        (participant) => participant.channel && participant.channel.participants
      )
        .flatMap((participant) => participant.channel.participants || [])
        .map((participant) => participant.channel)
        .filter((channel) => channel !== undefined);

    const formattedCasts = await formatPinataFeed(fidBeingViewedCasts);

    const response: ExpandedFarcasterProfile = {
      casts: formattedCasts,
      sharedChannels:
        formattedSharedChannelsData.length > 0
          ? formattedSharedChannelsData
          : [],
    };

    return new NextResponse(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.log("ERROR IN PROCESSING REQUEST", error);
    return new NextResponse(JSON.stringify("ERROR"), { status: 500 });
  }
}
