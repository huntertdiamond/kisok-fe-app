import {
  OpenGraphParent,
  DefaultOpenGraph,
  InstagramOpenGraph,
  SpotifyOpenGraph,
  YoutubeOpenGraph,
} from "@/types/internal/opengraph";
import { parseOpenGraphTypeFromUrl } from "./parseUrlForOpenGraphType";

/**
 * Formats the OpenGraph data into a typed object based on the URL.
 *
 * @param {Record<string, string>} data - The extracted OpenGraph data.
 * @param {string} url - The original URL.
 * @returns {OpenGraphParent} The formatted OpenGraph data.
 */
function formatOpenGraphData(
  data: Record<string, string>,
  url: string
): OpenGraphParent {
  const type = parseOpenGraphTypeFromUrl(url);

  switch (type) {
    case "spotify":
      return formatSpotifyOpenGraphData(data, url);
    case "instagram":
      return formatInstagramOpenGraphData(data, url);
    case "youtube":
      return formatYoutubeOpenGraphData(data, url);
    default:
      return formatDefaultOpenGraphData(data, url);
  }
}

/**
 * Formats Spotify OpenGraph data.
 *
 * @param {Record<string, string>} data - The extracted OpenGraph data.
 * @param {string} url - The original URL.
 * @returns {SpotifyOpenGraph} The formatted Spotify OpenGraph data.
 */
function formatSpotifyOpenGraphData(
  data: Record<string, string>,
  url: string
): SpotifyOpenGraph {
  const description = data.description || "";
  const { artistName, spotifyOptions, features, cleanedDescription } =
    parseSpotifyDescription(description, data["og:type"]);

  const duration = data["music:duration"]
    ? parseInt(data["music:duration"])
    : 0;
  const albumUrl = data["music:album"] || "";
  const trackNumber = data["music:album:track"]
    ? parseInt(data["music:album:track"])
    : 0;
  const dateReleased =
    data["music:release_date"] || new Date().toISOString().split("T")[0];
  const musicianUrls = Object.keys(data)
    .filter((key) => key.startsWith("music:musician"))
    .map((key) => data[key]);

  return {
    title: data.title || "",
    siteName: "Spotify",
    description: cleanedDescription,
    url: data.url || url,
    image: data.image || "",
    type: "spotify",
    artistName: artistName,
    spotifyOptions: spotifyOptions,
    features: features,
    dateReleased: dateReleased,
    duration: duration,
    albumUrl: albumUrl,
    trackNumber: trackNumber,
    musicianUrls: musicianUrls,
  };
}

/**
 * Parses the Spotify description to extract artist name, Spotify options, featured artists, and additional details.
 *
 * @param {string} description - The description string to parse.
 * @param {string} ogType - The OpenGraph type to parse.
 * @returns {object} The extracted data including artist name, Spotify options, featured artists, and cleaned description.
 */
function parseSpotifyDescription(
  description: string,
  ogType: string
): {
  artistName: string;
  spotifyOptions: "playlist" | "album" | "track" | "episode" | "show";
  features: string[];
  cleanedDescription: string;
  additionalDescription: string;
} {
  const artistNameMatch = description.match(
    /(.+?)\s+·\s+(Song|Album|Playlist|Track|Episode|Show)/i
  );
  const optionsMatch = description.match(
    /·\s(Song|Album|Playlist|Track|Episode|Show)\s·/i
  );
  const featuresMatch = description.match(/feat\.\s(.+?)\s·/);
  const songsAndLikesMatch = description.match(
    /·\s+(\d+)\s+songs\s+·\s+(\d+)\s+likes/i
  );

  const artistName = artistNameMatch ? artistNameMatch[1] : "";
  const spotifyOptions = optionsMatch
    ? (optionsMatch[1].toLowerCase() as
        | "playlist"
        | "album"
        | "track"
        | "episode"
        | "show")
    : "track";
  const features = featuresMatch
    ? featuresMatch[1].split(",").map((f) => f.trim())
    : [];

  let cleanedDescription = description;
  let additionalDescription = "";

  if (songsAndLikesMatch) {
    cleanedDescription = `${songsAndLikesMatch[1]} songs | ${songsAndLikesMatch[2]} likes`;
    additionalDescription = "";
  } else {
    if (optionsMatch) {
      cleanedDescription = cleanedDescription
        .replace(optionsMatch[0], "")
        .trim();
    }
    if (featuresMatch) {
      cleanedDescription = cleanedDescription
        .replace(featuresMatch[0], "")
        .trim();
    }
  }

  if (ogType === "music.playlist" && !songsAndLikesMatch) {
    additionalDescription = "Playlist";
  } else if (ogType === "music.album") {
    additionalDescription = "Album";
  } else if (ogType === "music.track") {
    additionalDescription = "Track";
  } else if (ogType === "music.episode") {
    additionalDescription = "Episode";
  } else if (ogType === "music.show") {
    additionalDescription = "Show";
  }

  return {
    artistName,
    spotifyOptions,
    features,
    cleanedDescription,
    additionalDescription,
  };
}

/**
 * Formats Instagram OpenGraph data.
 *
 * @param {Record<string, string>} data - The extracted OpenGraph data.
 * @param {string} url - The original URL.
 * @returns {InstagramOpenGraph} The formatted Instagram OpenGraph data.
 */
/**
 * Formats Instagram OpenGraph data.
 *
 * @param {Record<string, string>} data - The extracted OpenGraph data.
 * @param {string} url - The original URL.
 * @returns {InstagramOpenGraph} The formatted Instagram OpenGraph data.
 */
function formatInstagramOpenGraphData(
  data: Record<string, string>,
  url: string
): InstagramOpenGraph {
  const description = data.description || "";
  const { likes, comments, postingUser, datePosted, cleanedDescription } =
    parseInstagramDescription(description);

  return {
    siteName: "Instagram",
    title: postingUser,
    description: cleanedDescription,
    url: data.url || url,
    image: data.image || "",
    likes: parseInt(likes),
    comments: parseInt(comments),
    postingUser: postingUser,
    datePosted: datePosted,
    type: "instagram",
  };
}
/**
 * Parses the Instagram description to extract the likes, comments, username, date posted, and cleaned description.
 *
 * @param {string} description - The description from the OpenGraph data.
 * @returns {object} The parsed data including likes, comments, postingUser, datePosted, and cleanedDescription.
 */
function parseInstagramDescription(description: string) {
  const regex =
    /(\d+K?) likes?, (\d+) comments? - ([\w.]+) on (\w+ \d+, \d{4}): (.*)/;
  const match = description.match(regex);

  if (match) {
    const [_, likes, comments, postingUser, datePosted, cleanedDescription] =
      match;
    return {
      likes: likes.trim(),
      comments: comments.trim(),
      postingUser: `@${postingUser}`,
      datePosted: new Date(datePosted),
      cleanedDescription: cleanedDescription.replace(/&quot;/g, '"').trim(),
    };
  }

  return {
    likes: "",
    comments: "",
    postingUser: "",
    datePosted: new Date(),
    cleanedDescription: description,
  };
}

/**
 * Formats Youtube OpenGraph data.
 *
 * @param {Record<string, string>} data - The extracted OpenGraph data.
 * @param {string} url - The original URL.
 * @returns {YoutubeOpenGraph} The formatted Youtube OpenGraph data.
 */

function formatYoutubeOpenGraphData(
  data: Record<string, string>,
  url: string
): YoutubeOpenGraph {
  return {
    siteName: "Youtube",
    title: data.title || "",
    description: data.description || "",
    url: data.url || url,
    image: data.image || "",
    type: "youtube",
    safeVideoUrl: data["player"] || "",
  };
}

/**
 * Formats Default OpenGraph data.
 *
 * @param {Record<string, string>} data - The extracted OpenGraph data.
 * @param {string} url - The original URL.
 * @returns {DefaultOpenGraph} The formatted Default OpenGraph data.
 */
function formatDefaultOpenGraphData(
  data: Record<string, string>,
  url: string
): DefaultOpenGraph {
  const domain = new URL(url).hostname.replace("www.", "");
  const siteName =
    domain.split(".")[0].charAt(0).toUpperCase() +
    domain.split(".")[0].slice(1);

  return {
    siteName: siteName,
    title: data.title || "",
    description: data.description || "",
    url: data.url || url,
    image: data.image || "",
    type: "default",
  };
}

export { formatOpenGraphData };
