import { HStack } from "@/components/elements";
import { MessageForChat } from "@/types/internal/concept/type.messageType";
import { PlusIcon, ArrowUp } from "lucide-react";
import { useState } from "react";

function ChatFooter({
  messages,
  onSubmit,
}: {
  messages: MessageForChat[];
  onSubmit: (message: string) => void;
}) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      onSubmit(inputValue);
      setInputValue("");
    }
  };

  return (
    <HStack horizontal="leading" gap="2" vertical="center" padding="2">
      <div className="bg-neutral-200 rounded-full flex items-center justify-center w-[36px] h-[36px] shrink-0">
        <PlusIcon size={18} className="text-neutral-500" />
      </div>
      <div className="pl-3 py-1 pr-1.5 rounded-full border w-full flex justify-center">
        <input
          placeholder="Yap Yap Yap"
          className="outline-none w-full"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
        />
        <span
          className="bg-[#1689ff] rounded-full flex items-center justify-center p-1 cursor-pointer"
          onClick={handleSubmit}
        >
          <ArrowUp size={18} className="text-white" />
        </span>
      </div>
    </HStack>
  );
}

export { ChatFooter };
