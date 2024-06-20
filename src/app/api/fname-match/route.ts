import { NeynarUsernameQueryResponse } from "@/types";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const NEYNAR_API_KEY = process.env.NEYNAR_API_KEY;
if (!NEYNAR_API_KEY) {
  throw new Error("NEYNAR_API_KEY is not set in the environment variables");
}

const constructQueryUrl = (
  username: string,
  viewingFid: string = "3"
): string => {
  const baseUrl = "https://api.neynar.com/v2/farcaster/user/search";
  return `${baseUrl}?q=${username}&viewer_fid=${viewingFid}&limit=8`;
};

/**
 * Handles GET requests to fetch user data from the Neynar API.
 * @param {NextRequest} request - The Request should include a username, and a viewingFid as query params.
 * @returns {Promise<NextResponse>} - The response object with fetched data or error messages.
 */

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");
  const viewingFid = searchParams.get("viewingFid") || "3";

  if (!username) {
    return new NextResponse(
      JSON.stringify({ error: "ERROR: Missing username parameter" }),
      { status: 400 }
    );
  }

  const queryUrl = constructQueryUrl(username, viewingFid);
  const options = {
    headers: {
      accept: "application/json",
      api_key: NEYNAR_API_KEY,
    },
  };

  try {
    const response = await axios.get<NeynarUsernameQueryResponse>(
      queryUrl,
      options
    );

    const formattedData = response.data.result.users;

    return new NextResponse(JSON.stringify(formattedData), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
