import { NextRequest, NextResponse } from "next/server";
import { getTweet } from "react-tweet/api";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const tweetId = searchParams.get("tweetId");
  if (!tweetId) {
    return new NextResponse(JSON.stringify("NO TWEET ID"), { status: 400 });
  }

  try {
    const tweet = await getTweet(tweetId);
    return new NextResponse(JSON.stringify(tweet), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify("ERROR IN GETTING TWEET"), {
      status: 400,
    });
  }
}
