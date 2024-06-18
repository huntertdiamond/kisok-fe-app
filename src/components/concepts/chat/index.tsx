"use client";
import { VStack } from "@/components/elements";
import { TabBarLine } from "@/components/elements/tabs";
import { useState } from "react";
import "@/styling/messageStyling.css";
import { ChatBody } from "./chatBody";
import { ChatFooter } from "./chatFooter";
import { FancyCard } from "@/components/elements/cards/fancyCard";
import { ChannelHeader } from "@/components/feed/modal/channel/channelModalHeader";
import { placeholderGolfChannel } from "@/lib/staticData/staticChannels";
import { MessageForChat } from "@/types/internal/concept/type.messageType";

enum Tabs {
  Posts = "Posts",
  Members = "Members",
  Collection = "Collection",
  Tokens = "Tokens",
  Chat = "Chat",
}

let placeholderMessages = [
  {
    text: "Woah! Golf Tournament! I can't wait to talk about the golf tournament going on.",
    senderFid: 240865,
    pfpUrl: "https://i.imgur.com/l6DgqTS.jpg",
    username: "htd",
  },
  {
    text: "Hey I just funded the third trading card dApp on farcaster, do you want to pay 1 ETH to learn what a bonding curve is?",
    senderFid: 999,
    pfpUrl:
      "https://i.pinimg.com/736x/9c/a8/7a/9ca87a0d96b510736892b142c9097a10.jpg",
    username: "vc guy",
  },
  {
    text: "Cool, are you watching the golf?",
    senderFid: 240865,
    pfpUrl: "https://i.imgur.com/l6DgqTS.jpg",
    username: "htd",
  },
  {
    text: "GRRRR POLITICS AHHHH ANGRY AHHHH",
    senderFid: 5650,
    pfpUrl:
      "https://www.the-sun.com/wp-content/uploads/sites/6/2023/07/OP_TRP_UPSIDE.jpg?strip=all&quality=100&w=1080&h=1080&crop=1",
    username: "Politics Guy",
  },
  {
    text: "I just want to talk about golf",
    senderFid: 240865,
    pfpUrl: "https://i.imgur.com/l6DgqTS.jpg",
    username: "htd",
  },
];

function FauxChatIndex() {
  const [selectedTab, setSelectedTab] = useState<Tabs>(Tabs.Chat);
  const [messages, setMessages] =
    useState<MessageForChat[]>(placeholderMessages);

  const handleSendMessage = (message: string) => {
    const newMessage = {
      text: message,
      senderFid: 240865,
      pfpUrl: "https://i.imgur.com/l6DgqTS.jpg",
      username: "htd",
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <VStack horizontal="leading" gap={0}>
      <ChannelHeader channel={placeholderGolfChannel} />
      <TabBarLine
        tabs={Object.values(Tabs)}
        selectedTab={selectedTab}
        // @ts-ignore
        setSelectedTab={setSelectedTab}
        layoutId="chatTab"
      />
      <ChatBody messages={messages} />
      <ChatFooter messages={messages} onSubmit={handleSendMessage} />
    </VStack>
  );
}

export { FauxChatIndex };
