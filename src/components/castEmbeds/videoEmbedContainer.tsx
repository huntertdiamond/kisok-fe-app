import { VideoIcon } from "@/assets/icons/videoIcon";
import { HStack } from "../elements";

interface VideoEmbedProps {
  link: string;
}

function VideoEmbedDisplay({ link }: VideoEmbedProps) {
  return (
    <HStack
      rounded={12}
      horizontal="center"
      vertical="center"
      className="bg-kioskBlue-100 h-72"
    >
      <VideoIcon stroke="#5f84fb" height={100} width={100} />
    </HStack>
  );
}

export { VideoEmbedDisplay };
