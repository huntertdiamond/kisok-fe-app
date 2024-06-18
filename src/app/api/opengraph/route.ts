import axios from "axios";
import { NextResponse, NextRequest } from "next/server";
import cheerio from "cheerio";

import { formatOpenGraphData } from "@/lib/formatters/openGraph/formatOpenGraphData";

/**
 * Fetches OpenGraph data from the given URL.
 *
 * @param {NextRequest} request - The incoming request object.
 * @returns {Promise<NextResponse>} The response containing OpenGraph data.
 */

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return new NextResponse(JSON.stringify("ERROR: Missing URL parameter"), {
      status: 400,
    });
  }

  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          // google inspector tool to get opengraph data
          "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/W.X.Y.Z Mobile Safari/537.36 (compatible; Google-InspectionTool/1.0)",
      },
    });
    const html = response.data;
    const openGraphData = extractOpenGraphData(html);
    // console.log(openGraphData);
    const formattedOpenGraphData = formatOpenGraphData(openGraphData, url);
    return new NextResponse(JSON.stringify(formattedOpenGraphData), {
      status: 200,
    });
  } catch (error) {
    console.error(`Error fetching OpenGraph data for URL: ${url}`, error);
    return new NextResponse("ERROR", { status: 500 });
  }
}
/**
 * Extracts OpenGraph data from the given HTML string using cheerio.
 *
 * @param {string} html - The HTML content of the webpage.
 * @returns {Record<string, string>} The extracted OpenGraph data.
 */
function extractOpenGraphData(html: string): Record<string, string> {
  const $ = cheerio.load(html);
  const ogData: Record<string, string> = {};

  $(
    'meta[property^="og:"], meta[name^="music:"], meta[name^="al:"], meta[name^="twitter:"]'
  ).each((_, element) => {
    const property = $(element).attr("property") || $(element).attr("name");
    const content = $(element).attr("content");
    if (property && content) {
      const key = property.replace(/^(og:|music:|al:|twitter:)/, "");
      ogData[key] = content;
    }
  });

  const title = $("title").text();
  if (title) {
    ogData["site_title"] = title;
  }

  return ogData;
}
