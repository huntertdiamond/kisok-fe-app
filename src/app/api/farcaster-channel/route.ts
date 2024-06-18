import { FarcasterChannel } from "@/types/internal/farcaster";
import { WarpcastChannelResponse } from "@/types/external/farcaster";
import { NextResponse, NextRequest } from "next/server";
import { channelTokens } from "@/lib/staticData/channelTokens";

import { ChannelTokenFromFarTerminal } from "@/types/internal/farcaster/type.farcasterChannel";
import axios from "axios";
export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const channelId = searchParams.get("channelId");

  if (!channelId) {
    return new NextResponse(JSON.stringify("ERROR NO CHANNEL ID "), {
      status: 400,
    });
  }

  const warpcastChannelQuery = await axios.get<WarpcastChannelResponse>(
    `https://api.warpcast.com/v1/channel?channelId=${channelId}`
  );

  if (!warpcastChannelQuery) {
    return new NextResponse(JSON.stringify("ERROR: NO DATA RETURNED "), {
      status: 400,
    });
  }

  const token: ChannelTokenFromFarTerminal | undefined = channelTokens.find(
    (token) => token.channel.id === channelId
  );

  const data: WarpcastChannelResponse = warpcastChannelQuery.data;

  const formattedData: FarcasterChannel = {
    channelId: data.result.channel.id,
    channelName: data.result.channel.name,
    channelDescription: data.result.channel.description,
    chanelNorms: "1. Be Cool \n\n 2.Don't be not cool.",
    channelPfp: data.result.channel.imageUrl,
    channelBanner: "https://kiosk.app/kiosk-banner.svg",
    followerCount: data.result.channel.followerCount,
    hostFids: data.result.channel.hostFids,
    ownerFid: data.result.channel.leadFid,
    createdAt: data.result.channel.createdAt,
    internalColor: "kioskBlue",
    token: token,
  };

  return new NextResponse(JSON.stringify(formattedData), { status: 200 });
}
