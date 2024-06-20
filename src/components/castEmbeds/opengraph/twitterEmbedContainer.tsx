"use client";
import { XLogoIcon } from "@/assets/icons/xLogoIcon";
import { HStack, Typography, VStack } from "@/components/elements";
import { Tweet } from "react-tweet/api";
import { IconButton } from "../../elements/buttons/iconButton";
import { useQuery } from "@tanstack/react-query";
import { fetchApiData } from "@/lib/fetch/api";
import { EmbedSkeleton } from "../../elements/loading";
function TwitterEmbedDisplay({ link }: { link: string }) {
  // https://x.com/micsolana/status/1803441920083108097

  const tweetId = link.split("/status/")[1];
  const {
    data: tweet,
    isLoading: isTweetLoading,
    error,
  } = useQuery({
    queryKey: ["castMedia", tweetId],
    queryFn: () => {
      return fetchApiData("tweet", {
        tweetId,
      });
    },
  });

  if (isTweetLoading) return <EmbedSkeleton />;
  if (error) return <EmbedSkeleton variant="error" />;
  if (!tweet) return <EmbedSkeleton variant="warning" />;

  return (
    <a href={link} className="w-full">
      <VStack
        gap={2}
        padding={2}
        horizontal="leading"
        vertical="center"
        rounded={10}
        className="border bg-neutral-100/30 hover:bg-neutral-100/80 transition-colors px-4"
      >
        {/**/}
        <HStack horizontal="between" vertical="center" gap={2} className="pr-2">
          <span className="flex gap-1 items-center">
            <img
              src={tweet.user.profile_image_url_https}
              className="rounded-full h-10 w-10 object-cover"
            />
            <VStack
              horizontal="leading"
              gap={0}
              vertical="center"
              className="-space-y-1"
            >
              <Typography variant="h3" className="font-medium">
                {tweet.user.name}
              </Typography>
              <Typography variant="body" className="text-sm" secondary>
                @{tweet.user.screen_name}
              </Typography>
            </VStack>
          </span>
          <XLogoIcon height="18" width="18" className="" />
        </HStack>
        <VStack horizontal="leading" gap={0}>
          <Typography variant="body" className="line-clamp-4 leading-5">
            {tweet.text}
          </Typography>
        </VStack>
      </VStack>
    </a>
  );
}
export { TwitterEmbedDisplay };
