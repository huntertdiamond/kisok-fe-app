import { NextResponse, NextRequest } from "next/server";

import { placeholderBaseTokens } from "@/lib/staticData/baseTokens";
export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const tickers = searchParams.getAll("tickers");

  if (tickers.length === 0) {
    return new NextResponse(JSON.stringify("ERROR"), { status: 500 });
  }

  /*
  PLACEHOLDER LOGIC TO SIMULATE QUERYING THE DB TO FIND MATCHING TICKERS
  WOULD BE REPLACED BY A QUERY TO INTERNAL DB BY TOKEN TICKER
  IF FAIL, COULD TRY QUERYING  https://api.dexscreener.com/latest/dex/search/?q=:q


  INTERNAL DB WOULD BE POPULATED BY THE TOKENS WE FIND FROM EACH USER WALLET
  */

  const foundTickers = placeholderBaseTokens.filter((storedToken) =>
    tickers.includes(storedToken.ticker.toLowerCase())
  );

  // console.log(foundTickers);
  if (foundTickers.length > 0) {
    return new NextResponse(JSON.stringify(foundTickers), { status: 200 });
  }

  return new NextResponse(JSON.stringify("no ticker match"), { status: 200 });
}
