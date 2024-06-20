type LinkChipProps = {
  className?: string;
  size: "small" | "medium" | "large";
  linkType: "external" | "internal";
  variant: "ghost" | "outline";
  children: React.ReactNode;
  link: string;
};

export type { LinkChipProps };
