import { FeedIndex } from "@/components/feed/feedIndex";
import { FeedActionsProvider } from "@/lib/providers";

function Feed() {
  return (
    <main className="flex h-screen items-center max-w-screen justify-center mx-auto gap-36">
      <FeedActionsProvider>
        <FeedIndex />
      </FeedActionsProvider>
    </main>
  );
}

export { Feed };
