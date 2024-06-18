import Image from "next/image";
import { Typography, VStack } from "@/components/elements";
import { cn } from "@/lib/tailwind";

import "@/styling/messageStyling.css";
import { MessageForChat } from "@/types/internal/concept/type.messageType";

function ChatBody({ messages }: { messages: MessageForChat[] }) {
  const viewerFid = 240865;

  return (
    <VStack padding={2}>
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
                <Image
                  src={message.pfpUrl}
                  alt={message.username}
                  width={20}
                  height={20}
                  className="rounded-full h-[28px] w-[28px] object-cover"
                />
              )}
              <VStack horizontal="leading" vertical="center" gap={0}>
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
              </VStack>
            </li>
          );
        })}
      </ol>
    </VStack>
  );
}
export { ChatBody };
