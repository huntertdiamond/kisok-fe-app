function parseMirrorUrlForContentDigest(url: string): string | null {
  try {
    const parsedUrl = new URL(url);
    const pathname = parsedUrl.pathname;
    const contentDigest = pathname.split("/").pop();
    return contentDigest || null;
  } catch (error) {
    console.error("Invalid URL:", error);
    return null;
  }
}

export { parseMirrorUrlForContentDigest };
