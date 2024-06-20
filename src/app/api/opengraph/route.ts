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
    const decodedUrl = decodeURIComponent(url);
    console.log("DECODED URL IS", decodedUrl);
    const response = await axios.get(decodedUrl, {
      // I DON"T KNOW WHY THIS USER-AGENT WORKS, BUT IT DOES ¯\_(ツ)_/¯
      headers: {
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      },
      timeout: 5000, // Set a timeout for the request
    });
    const html = response.data;
    const openGraphData = extractOpenGraphData(html);

    const formattedOpenGraphData = formatOpenGraphData(
      openGraphData,
      decodedUrl
    );
    return new NextResponse(JSON.stringify(formattedOpenGraphData), {
      status: 200,
    });
  } catch (error) {
    console.error(`Error fetching OpenGraph data for URL: ${url}`);
    let errorMessage = "ERROR: Unable to fetch OpenGraph data.";
    if (axios.isAxiosError(error)) {
      if (error.code === "ECONNREFUSED") {
        errorMessage =
          "ERROR: Connection refused. The server might be down or blocking requests.";
      } else if (error.code === "ECONNABORTED") {
        errorMessage =
          "ERROR: Request timeout. The server took too long to respond.";
      } else if (error.response) {
        errorMessage = `ERROR: Received status code ${error.response.status}`;
      }
    }

    return new NextResponse(JSON.stringify({ error: error }), {
      status: 500,
    });
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
