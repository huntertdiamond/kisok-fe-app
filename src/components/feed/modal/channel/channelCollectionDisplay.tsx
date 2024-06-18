import { Typography, VStack } from "@/components/elements";
import { FrowningKikiAnimated } from "@/assets/icons/frowningKikiAnimated";

function ChannelCollectionDisplay() {
  return (
    <VStack padding={4}>
      <VStack
        gap={2}
        padding={4}
        rounded={12}
        className="bg-neutral-100/50 w-full h-full"
      >
        <FrowningKikiAnimated color="#3B5BF7" width={100} height={100} />
        <Typography variant="h1" className="font-thin">
          {"It's so empty here"}
        </Typography>
        <Typography variant="body" className="text-xs" secondary>
          {"I'm sorry for butchering your kiki, I thought it was funny"}
        </Typography>
      </VStack>
    </VStack>
  );
}

export { ChannelCollectionDisplay };
