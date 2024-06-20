import React from "react";
import { Typography, VStack, HStack } from "@/components/elements";
import { BaseFarcasterUser } from "@/types/internal/user";
import { PowerBadge } from "../ui";
import { cn } from "@/lib/tailwind/utils";
import { returnDateAsTimeAgoString } from "@/lib/formatters/date";

interface UserHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  user: BaseFarcasterUser;
  datePosted: Date;
  variant?: "feed" | "quoteCast" | "profile";
  hideTime?: boolean;
}

const UserHeader = React.forwardRef<HTMLDivElement, UserHeaderProps>(
  (
    {
      user,
      datePosted,
      variant = "feed",
      hideTime = false,
      className,
      ...props
    },
    ref
  ) => {
    const formattedTimeAgo = returnDateAsTimeAgoString(datePosted);

    const pfpImageVariants = {
      feed: "w-[36px] h-[36px]",
      quoteCast: "w-[30px] h-[30px]",
      profile: "w-[42px] h-[42px]",
    } as const;

    const displayNameVariants = {
      quoteCast: "body",
      feed: "h3",
      profile: "h2",
    } as const;

    const spacingVariants = {
      feed: "-space-y-1",
      quoteCast: "-space-y-0.5",
      profile: "-space-y-0",
    };
    return (
      <HStack
        ref={ref}
        vertical="center"
        horizontal="between"
        className={cn("mb-0.5", className)}
        {...props}
      >
        <HStack vertical="center" horizontal="leading" gap={1} className="">
          <img
            src={user.pfpUrl}
            alt="user pfp"
            width={80}
            height={80}
            className={cn(
              "aspect:square rounded-full shrink-0",
              pfpImageVariants[variant]
            )}
          />
          <VStack
            horizontal="leading"
            vertical="top"
            className={spacingVariants[variant]}
          >
            <HStack vertical="center" horizontal="leading" gap={1}>
              <Typography
                variant={displayNameVariants[variant]}
                className="font-bold"
              >
                {user.displayName}
              </Typography>
              {user.isPowerUser ? <PowerBadge variant={variant} /> : null}
            </HStack>
            <Typography variant="body" className="text-[14px]" secondary>
              @{user.username}
            </Typography>
          </VStack>
        </HStack>
        {!hideTime ? (
          <Typography variant="body" secondary>
            {formattedTimeAgo}
          </Typography>
        ) : null}
      </HStack>
    );
  }
);

UserHeader.displayName = "UserHeader";

export { UserHeader };
