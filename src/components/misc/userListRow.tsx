import { HStack, Typography, VStack } from "@/components/elements";

import { IconButton } from "../elements/buttons/iconButton";
import { PowerBadge } from "@/components/ui";
import { cn } from "@/lib/tailwind";
import { Check, Plus } from "lucide-react";
import Image from "next/image";
import { AnimatedListItemWrapper } from "./animatedListItemWrapper";

function UserListRow({
  pfpUrl,
  name,
  username,
  isFollowing,
  index,
}: {
  pfpUrl: string;
  name: string;
  username: string;
  isFollowing: boolean;
  index: number;
}) {
  const key = isFollowing ? "isFollowing" : "notFollowing";
  const buttonVariants = {
    isFollowing: `bg-kioskBlue-50 text-kioskBlue-500 hover:bg-kioskBlue-100 hover:stroke-kioskBlue-400 transition transform duration-200 group`,
    notFollowing: `bg-neutral-200 stroke-neutral-600`,
  }[key];
  return (
    <AnimatedListItemWrapper index={index}>
      <>
        <HStack gap={2} vertical="center">
          <Image
            src={pfpUrl}
            alt="user pfp"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <VStack
            horizontal="leading"
            vertical="top"
            gap={0}
            className="-space-y-0.5"
          >
            <HStack horizontal="leading" vertical="center" gap={1}>
              <Typography variant="h3">{name}</Typography>
              <PowerBadge variant="feed" />
            </HStack>
            <Typography variant="body" secondary>
              {username}
            </Typography>
          </VStack>
        </HStack>
        <IconButton className={cn("rounded-[10px]", buttonVariants)}>
          {isFollowing ? <Check size={18} /> : <Plus size={18} />}
        </IconButton>
      </>
    </AnimatedListItemWrapper>
  );
}

export { UserListRow };
