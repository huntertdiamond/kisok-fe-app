"use client";
import { ParentPostObject } from "@/types/internal/feed";

import { FeedWrapper } from "./feedWrapper";
import { useFeedActionContext } from "@/lib/providers";
import { KikiLoader } from "../elements/loading/kikiLoader";
import { useQuery } from "@tanstack/react-query";
import { FeedModalIndex } from "./modal";
import { FeedPost } from "../post";

function FeedIndex() {
  const { viewingFid, showModal } = useFeedActionContext();

  const {
    data: feed,
    isLoading: isFeedLoading,
    error,
  } = useQuery<ParentPostObject[]>({
    queryKey: ["feed", viewingFid],
    queryFn: async () => {
      const res = await fetch(`/api/feed?fid=${viewingFid}`);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();

      return data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  if (isFeedLoading) {
    return <KikiLoader size={100} />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!feed || !Array.isArray(feed)) {
    return <div>No feed data available</div>;
  }

  return (
    <FeedWrapper className="max-w-[500px] min-w-[400px]">
      {feed.map((post) => (
        <FeedPost post={post} key={post.postId} />
      ))}
      {showModal && <FeedModalIndex />}
    </FeedWrapper>
  );
}

export { FeedIndex };
