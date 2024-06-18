import { NextResponse, NextRequest } from "next/server";
import { queryPinataAPI } from "@/lib/fetch/api";
import { formatSinglePinataCast } from "@/lib/formatters/pinata";

import { PinataSingleCastResponse } from "@/types/external/pinata";
import { PinataReqType } from "@/types/internal/props";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const hash = searchParams.get("hash");

  if (!hash) {
    return new NextResponse(JSON.stringify("ERROR NO HASH"), { status: 400 });
  }

  try {
    const cast = await queryPinataAPI<PinataSingleCastResponse>(
      PinataReqType.SingleCast,
      hash
    );

    const formattedCast = await formatSinglePinataCast(cast.cast);

    return new NextResponse(JSON.stringify(formattedCast), { status: 200 });
  } catch (error) {
    console.log("ERROR IN SINGLE CAST", error);
    return new NextResponse(JSON.stringify("ERROR"), { status: 500 });
  }
}
