import { MirrorFeedPost } from "@/types/internal/feed";
import { parseMirrorUrlForContentDigest } from "@/lib/formatters/mirror";
import { useQuery } from "@tanstack/react-query";
import { fetchOurNextApi } from "@/lib/fetch/api";

import { Typography, VStack } from "@/components/elements";
import { UserHeader } from "@/components/misc/userHeader";

function MirrorPostContainer({ post }: { post: MirrorFeedPost }) {
  const mirrorContentDigest = parseMirrorUrlForContentDigest(post.url);

  const {
    data: mirrorPostData,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["mirrorPost", post.postId],
    queryFn: async () => {
      return fetchOurNextApi("mirror-content", {
        mirrorContentDigest: mirrorContentDigest!,
      });
    },
  });

  if (isError) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <VStack
      className="relative w-[640px] overflow-x-hidden shadow-heavyShadow "
      rounded={12}
    >
      <VStack horizontal="leading" vertical="top" padding={4}>
        <UserHeader user={post.postedBy} datePosted={post.datePosted} />
        <Typography variant="body" secondary>
          {mirrorPostData?.arweaveData.contentDigest}
        </Typography>
      </VStack>
    </VStack>
  );
}
export { MirrorPostContainer };
