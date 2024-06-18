import { DefaultToken } from "@/types/internal/tokens";
import { RichTextObjects } from "@/types/internal/feed";
import { fetchOurNextApi } from "./api";

async function handleMentionedTokens(
  cast: RichTextObjects
): Promise<DefaultToken[]> {
  if (cast.mentionedTokens.length === 0) return [];

  const mentionedTickers = cast.mentionedTokens
    .map((token) => token.value.replace(/^\$/, "").toLowerCase())
    .join("&tickers=");

  const tokens = await fetchOurNextApi("tokens-by-ticker", {
    tickers: mentionedTickers,
  });

  return tokens;
}

export { handleMentionedTokens };
