const userMentionRegex = /(@[\w.]+)/g;
const channelRegex = /(?<=\s)(\/[\w-]+)/g;

const tokenRegex = /\$[^\d\s][\w.]*/g;
const urlRegex = /https:\/\/\S+/g;

export { userMentionRegex, channelRegex, tokenRegex, urlRegex };
