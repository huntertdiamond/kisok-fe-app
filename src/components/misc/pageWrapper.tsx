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
  return (
    <main
      className={cn(
        "flex flex-col h-screen w-screen justify-start items-center  overflow-x-hidden mx-auto p-12 gap-6",
        className
      )}
      {...props}
    >
      <div className="max-w-[1100px] w-full flex items-start justify-start">
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
                    <DropdownMenuItem key={slug.slug}>
                      <Link href={`/${slug.slug}`}>{slug.title}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {children}
    </main>
  );
}

export { PageWrapper };
