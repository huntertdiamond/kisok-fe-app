function parseZoraURL(url: string) {
  const urlPattern =
    /https:\/\/zora.co\/collect\/(\w+):(\w+)\/(\d+)(?:\?referrer=(\w+))?/;
  const match = url.match(urlPattern);

  if (match) {
    const [, chain, tokenAddress, tokenId, referrer] = match;
    return {
      chain,
      tokenAddress,
      tokenId,
      referrer: referrer || null,
    };
  } else {
    return null;
  }
}

export { parseZoraURL };
