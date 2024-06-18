import { NextResponse, NextRequest } from "next/server";
import { queryReservoirAPI } from "@/lib/fetch/api";
import { allChains } from "@/types/internal/chains";
import { filterReservoirUserActivityForOwnedNfts } from "@/lib/formatters/reservoir";
import { ReservoirActivityWithChain } from "@/types/external/reservoir/type.userActivityResponse";
import { isAddress } from "viem";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const userAddress = searchParams.get("userAddress");

  if (!userAddress) {
    return new NextResponse(JSON.stringify("ERROR: Missing parameters"), {
      status: 400,
    });
  }
  if (!isAddress(userAddress)) {
    return new NextResponse(JSON.stringify("ERROR: NOT AN ADDRESS"), {
      status: 400,
    });
  }

  try {
    const promises = allChains.map(async (typedChain) => {
      return queryReservoirAPI<"userActivity">(
        "userActivity",
        {
          users: [userAddress],
          excludeSpam: true,
        },
        typedChain
      ).then((response) =>
        response.activities.map((activity) => ({
          ...activity,
          chain: typedChain,
        }))
      );
    });

    const responses = await Promise.all(promises);

    const allActivities = responses.flat() as ReservoirActivityWithChain[];

    const filteredActivities = filterReservoirUserActivityForOwnedNfts(
      allActivities,
      userAddress
    );

    return new NextResponse(JSON.stringify(filteredActivities), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify("ERROR: Unable to fetch user collection"),
      {
        status: 500,
      }
    );
  }
}
