/**
 * Parses the type from the URL.
 *
 * @param {string} url - The URL to parse the type from.
 * @returns {string} The parsed type.
 */
function parseOpenGraphTypeFromUrl(
  url: string
): "spotify" | "twitter" | "instagram" | "youtube" | "default" {
  if (url.includes("spotify")) return "spotify";
  if (url.includes("twitter")) return "twitter";
  if (url.includes("instagram")) return "instagram";
  if (url.includes("youtube")) return "youtube";
  return "default";
}

export { parseOpenGraphTypeFromUrl };
