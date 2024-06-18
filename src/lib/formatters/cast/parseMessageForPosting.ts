import { FarcasterProtocolMessage } from "@/types/external/protocol";

function parseFarcasterMessage(input: string): FarcasterProtocolMessage {
  const mentionRegex = /@\[\w+\]\(\d+\)/g;
  const tickerRegex = /\$\[\w+\]\(token:[\w\d]+\)/g;

  let mentions = 0;
  const mentionPositions: number[] = [];
  let processedText = input;

  // Find and count mentions
  const mentionMatches = input.match(mentionRegex);
  if (mentionMatches) {
    mentions = mentionMatches.length;
    mentionMatches.forEach((match) => {
      const position = processedText.indexOf(match);
      if (position !== -1) {
        mentionPositions.push(position);
        // Remove the mention from the text
        processedText = processedText.replace(match, "");
      }
    });
  }

  // Find and replace tickers
  const tickerMatches = input.match(tickerRegex);
  if (tickerMatches) {
    tickerMatches.forEach((match) => {
      const tickerName = match.match(/\$\[(\w+)\]/)?.[1] || "";
      processedText = processedText.replace(match, `$${tickerName}`);
    });
  }

  // Remove extra spaces from processed text
  processedText = processedText.replace(/\s+/g, " ").trim();

  return {
    mentions: [mentions],
    text: processedText,
    mentionPositions,
    embeds: [],
  };
}

export { parseFarcasterMessage };
