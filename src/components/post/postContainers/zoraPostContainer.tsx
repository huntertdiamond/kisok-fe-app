"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PrimaryButton } from "@/components/elements/buttons/primaryButton";
import { placeholderPfps } from "@/lib/constants/placeholderPfps";
import { HStack, Typography, VStack } from "@/components/elements";
import { ZoraFeedPost } from "@/types/internal/feed";
import { AvatarStack } from "@/components/ui";
import { cn } from "@/lib/tailwind/utils";

function ZoraPostContainer({ post }: { post: ZoraFeedPost }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className="flex flex-col w-full items-start justify-start gap-3"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExpanded ? 1 : 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="flex justify-center w-full"
        initial={{ y: 0 }}
        animate={{ y: isExpanded ? 0 : 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <Image
          src={post.media}
          alt="nft"
          className={cn(`rounded-[12px]`)}
          height={500}
          width={500}
          loading="eager"
          onClick={() => toggleExpand()}
        />
      </motion.div>
      <VStack horizontal="center" vertical="top" gap={1}>
        <HStack horizontal="between">
          <VStack>
            <Typography variant="h2" className="font-bold">
              {post.postTitle}
            </Typography>
            <Typography variant="h3" secondary>
              {post.collectionName}
            </Typography>
          </VStack>

          <span>
            <Typography variant="body" className="text-sm" secondary>
              Minted by
            </Typography>
            <AvatarStack
              avatars={placeholderPfps}
              variant="small"
              noOfOthers={7}
            />
          </span>
        </HStack>
        <Typography variant="body" secondary>
          {post.postDescription}
        </Typography>
      </VStack>
      <PrimaryButton variant="mint" icon={true}>
        Mint
      </PrimaryButton>
    </motion.div>
  );
}

export { ZoraPostContainer };
