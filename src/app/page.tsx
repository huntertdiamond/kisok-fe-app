import { HStack, Typography, VStack } from "@/components/elements";
import { StyledCard } from "@/components/elements/cards/styledCard";

import { cn } from "@/lib/tailwind";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start h-screen p-4 md:p-12 gap-4">
      <nav className="w-full max-w-[1100px] flex items-center justify-evenly gap-5">
        <HStack
          padding={2}
          gap={2}
          rounded={20}
          horizontal="leading"
          vertical="center"
          className={cn(
            "border border-[#F1F1F1]",
            "bg-gradient-to-b from-[#F7F7F7]/50 to-white"
          )}
        >
          <HStack
            padding={4}
            rounded={12}
            horizontal="between"
            className="bg-white border border-[#F1F1F1] "
          >
            <a href="https://github.com/huntertdiamond" target="_blank">
              <p>Github</p>
            </a>
            <a href="https://warpcast.com/huntertdiamond" target="_blank">
              <p>Farcaster</p>
            </a>
            <a href="https://twitter.com/huntertdiamond" target="_blank">
              <p>Twitter</p>
            </a>
            <a
              href="https://github.com/huntertdiamond/kisok-fe-app"
              target="_blank"
            >
              <p>This Repo</p>
            </a>
          </HStack>
        </HStack>
      </nav>
      <section className="items-center justify-center gap-6 flex flex-col lg:flex-row  max-w-[1100px]">
        <CardLink
          href="/feed"
          title="Feed Demo"
          description="An interpretation of a feed on kiosk. Append the URL with `?fid=<fid>` to view a specific user's feed."
        />
        <CardLink
          href="/components"
          title="Components"
          description="A direct look at the components used for the feed demo, as well
        as some auxillary components that offer a variety of unique interactions."
        />
        <CardLink
          href="/concepts"
          title="Concepts"
          description="A handful of UI / UX concepts that could provide inspiration for
        further brainstorming. Not meant to be taken at face value."
        />
      </section>
    </main>
  );
}
interface CardLinkProps {
  href: string;
  title: string;
  description: string;
}

const CardLink = ({ href, title, description }: CardLinkProps) => (
  <a href={href} className="w-full lg:w-1/3">
    <StyledCard parentClassName="w-full lg:h-[500px]" variant="fancy">
      <VStack horizontal="leading" gap={2} className="h-full">
        <div className="h-full w-full bg-kioskBlue-500">f</div>
        <Typography variant="h1">{title}</Typography>
        <Typography secondary variant="body" className="leading-16">
          {description}
        </Typography>
      </VStack>
    </StyledCard>
  </a>
);
