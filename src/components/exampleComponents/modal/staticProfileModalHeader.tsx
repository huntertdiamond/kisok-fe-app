import React, { useMemo, useState } from "react";
import { HStack, VStack } from "@/components/elements";
import { RichTextDisplay } from "@/components/misc/richTextDisplay";

import { FollowerFollowingLabel } from "@/components/misc/followerFollowingLabel";
import { UserHeader } from "@/components/misc/userHeader";
import { BaseFarcasterUser } from "@/types/internal/user";

import { parseRichText } from "@/lib/formatters/cast";
import { formatNumberWithCommas } from "@/lib/formatters/numbers";

import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/elements/buttons/animatedButton";

function StaticProfileModalHeader({
  user,
  modalHeight,
}: {
  user: BaseFarcasterUser;
  modalHeight: "small" | "full";
}) {
  const [isHeaderInView, setIsHeaderInView] = useState(true);
  const parsedBio = useMemo(() => parseRichText(user.bio), [user]);

  return (
    <VStack horizontal="leading" vertical="center" gap={2} className="relative">
      <VStack horizontal="leading" vertical="center" gap={1}>
        <HStack horizontal="between" vertical="center">
          <motion.div
            onViewportLeave={() => setIsHeaderInView(false)}
            onViewportEnter={() => setIsHeaderInView(true)}
          >
            <UserHeader
              user={user}
              datePosted={new Date()}
              variant="profile"
              hideTime
            />
          </motion.div>
          <span className="w-1/4">
            <AnimatedButton
              idleText="Follow"
              loadingText="Loading"
              successText="Followed"
            />
          </span>
        </HStack>
        <RichTextDisplay richTextObject={parsedBio} text={user.bio} />
        <HStack className="w-min" gap={2}>
          <FollowerFollowingLabel
            value={formatNumberWithCommas(user.noOfFollowing)}
          />
          <FollowerFollowingLabel
            value={formatNumberWithCommas(user.noOfFollowers)}
            isFollowers
          />
        </HStack>
      </VStack>
    </VStack>
  );
}

export { StaticProfileModalHeader };
