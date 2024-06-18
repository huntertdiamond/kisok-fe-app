import Image from "next/image";
import { Typography, VStack } from "@/components/elements";
import { cn } from "@/lib/tailwind";

import "@/styling/messageStyling.css";
import { MessageForChat } from "@/types/internal/concept/type.messageType";

function ChatBody({ messages }: { messages: MessageForChat[] }) {
  const viewerFid = 240865;

  return (
    <VStack padding="2">
      <ol className="chat">
        {messages.map((message, i) => {
          const didSend = viewerFid === message.senderFid;
          const isLast = i === messages.length - 1;
          const noTail =
            !isLast && messages[i + 1]?.senderFid === message.senderFid;

          const messageClass = cn(
            "flex gap-1",
            "shared",
            didSend ? "sent" : "received",
            noTail && "noTail"
          );

          return (
            <li
              key={i}
              className={cn("flex", didSend ? "justify-end" : "justify-start")}
            >
              {!didSend && (
                <div className="flex items-end justify-end mr-2 z-30 shrink-0 mb-4">
                  <Image
                    src={message.pfpUrl}
                    alt={message.username}
                    width={20}
                    height={20}
                    className="rounded-full h-[28px] w-[28px] object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col gap-0">
                {!didSend && (
                  <span className="ml-2 mb-1 text-sm">{message.username}</span>
                )}
                <div className={messageClass}>
                  <Typography
                    variant="body"
                    className={cn(didSend ? "text-[#fff]" : "text-black")}
                  >
                    {message.text}
                  </Typography>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </VStack>
  );
}
export { ChatBody };
