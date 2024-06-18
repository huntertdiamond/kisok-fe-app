import { formatPinataFeed } from "@/lib/formatters/pinata";
import { NextResponse, NextRequest } from "next/server";
import { queryPinataAPI } from "@/lib/fetch/api";
import { PinataFeedResponse } from "@/types/external/pinata";
import { PinataReqType } from "@/types/internal/props";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const fid = searchParams.get("fid");

  if (!fid) {
    return new NextResponse(JSON.stringify("ERROR"), { status: 400 });
  }

  const feedData = await queryPinataAPI<PinataFeedResponse>(
    PinataReqType.Feed,
    fid
  );

  const formattedFeedData = await formatPinataFeed(feedData);

  formattedFeedData.sort(
    (a, b) =>
      new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime()
  );

  return new NextResponse(JSON.stringify(formattedFeedData), { status: 200 });
}
