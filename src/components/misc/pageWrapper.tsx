"use client";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/tailwind";
import { ChevronDown, Slash } from "lucide-react";
import { useRouter } from "next/navigation";
type PageSlugs = "components" | "feed" | "concepts" | "/";

interface PageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  slug: PageSlugs;
  pageTitle: string;
  className?: string;
}
const nestedSlugs = [
  {
    slug: "components",
    title: "Components",
  },
  {
    slug: "feed",
    title: "Feed",
  },
  {
    slug: "concepts",
    title: "Concepts",
  },
];
function PageWrapper({
  children,
  slug,
  pageTitle,
  className,
  ...props
}: PageWrapperProps) {
  const router = useRouter();
  return (
    <main
      className={cn(
        "flex flex-col h-screen w-screen justify-start items-center  overflow-x-hidden overflow-y-scroll mx-auto p-12 gap-6",
        className
      )}
      {...props}
    >
      <div className="flex max-w-[1100px] w-full flex-col items-start justify-center">
        <div className="w-full flex items-start justify-start">
          <Breadcrumb className="w-full flex items-start justify-start">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    {pageTitle}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {nestedSlugs.map((slug) => (
                      <DropdownMenuItem
                        key={slug.slug}
                        className="hover:cursor-pointer"
                        onClick={() => router.push(`/${slug.slug}`)}
                      >
                        {slug.title}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        {children}
      </div>
    </main>
  );
}

export { PageWrapper };
