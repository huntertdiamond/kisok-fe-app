import { HStack } from "../blocks";
import { KikiLoader } from "./kikiLoader";

function StarLoaderContainer({ size }: { size: number }) {
  return (
    <HStack horizontal="center" vertical="center" padding={8}>
      <KikiLoader size={size} />
    </HStack>
  );
}
export { StarLoaderContainer };
