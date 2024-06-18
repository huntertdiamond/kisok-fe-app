import {
  CreateCastMentionedChannel,
  CreateCastMentionedToken,
} from "@/types/internal/mention";

const channelOptions: CreateCastMentionedChannel[] = [
  {
    id: "yoink",
    name: "yoink",
    displayValue: "yoink",
    image: "https://i.imgur.com/aUikzn6.png",
    parent_url: "https://warpcast.com/~/channel/yoink",
  },
  {
    id: "higher",
    name: "higher",
    displayValue: "higher",
    image: "https://i.imgur.com/bdQcnVI.png",
    parent_url: "https://warpcast.com/~/channel/higher",
  },
  {
    id: "skininthegame",
    name: "skininthegame",
    displayValue: "skininthegame",
    image: "https://i.imgur.com/cFday9f.jpg",
    parent_url: "https://warpcast.com/~/channel/skininthegame",
  },
  {
    id: "light",
    name: "NOT BY DESIGN™",
    displayValue: "NOT BY DESIGN™",
    image:
      "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/f13b04fd-90fe-48bf-af95-8c81c0e04d00/original",
    parent_url: "https://warpcast.com/~/channel/light",
  },
  {
    id: "bad-takes",
    name: "bad-takes",
    displayValue: "bad-takes",
    image: "https://i.imgur.com/iMPXYvM.jpg",
    parent_url: "https://warpcast.com/~/channel/bad-takes",
  },
];

const tokenOptions: CreateCastMentionedToken[] = [
  {
    id: "0x234654",
    name: "DEGEN",
    displayValue: "DEGEN",
    image:
      "https://dd.dexscreener.com/ds-data/tokens/base/0x4ed4e862860bed51a9570b96d89af5e1b0efefed.png?size=lg&key=e17c44",
  },
  {
    id: "0x432432",
    name: "HIGHER",
    displayValue: "HIGHER",
    image:
      "https://dd.dexscreener.com/ds-data/tokens/base/0x0578d8a44db98b23bf096a382e016e29a5ce0ffe.png?size=lg&key=53aa1f",
  },
  {
    id: "0x5B5dee44552546ECEA05EDeA01DCD7Be7aa6144A",
    name: "TN100X",
    displayValue: "TN100X",
    image:
      "https://dd.dexscreener.com/ds-data/tokens/base/0x5b5dee44552546ecea05edea01dcd7be7aa6144a.png?size=lg&key=de70f1",
  },
  {
    id: "0x5B5dee44552546ECEA05EDeA01DCD7Be7aa6144A",
    name: "ENJOY",
    displayValue: "ENJOY",
    image: "https://www.enjoy.tech/zora.png",
  },
];

export { channelOptions, tokenOptions };
