"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FeedActionsProvider } from "./feedActionProvider";

import { Suspense } from "react";

import { StarLoaderContainer } from "@/components/elements/loading/kikiLoaderContainer";
const queryClient = new QueryClient();

function ProviderIndex({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<StarLoaderContainer size={100} />}>
      <QueryClientProvider client={queryClient}>
        <FeedActionsProvider>{children}</FeedActionsProvider>
      </QueryClientProvider>
    </Suspense>
  );
}
export { ProviderIndex };
