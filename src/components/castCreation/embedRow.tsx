import { CreateCastMentionedLink } from "@/types/internal/mention";
import { HStack } from "../elements";
import { XIcon } from "lucide-react";
import { OpenGraphEmbedContainer } from "../castEmbeds/opengraph/openGraphIndex";

function NewCastEmbedRow({
  links,
  setLinks,
}: {
  links: CreateCastMentionedLink[];
  setLinks: (value: CreateCastMentionedLink[]) => void;
}) {
  const removeLink = (linkToRemove: CreateCastMentionedLink) => {
    setLinks(links.filter((link) => link !== linkToRemove));
  };

  const showingLinks = links.length > 0;
  return (
    <HStack horizontal="leading">
      {links.map((linkObj) => (
        <div
          className="relative group w-full transition transform duration-500 ease-in-out"
          key={linkObj.parentIndex}
        >
          {showingLinks ? (
            <button
              className="absolute right-4 top-4 z-[100] group-hover:bg-white rounded-full text-white group-hover:text-kioskRed-500"
              onClick={() => removeLink(linkObj)}
            >
              <XIcon />
            </button>
          ) : null}
          <div className="w-full h-full group-hover:opacity-50">
            <OpenGraphEmbedContainer url={linkObj.value} />
          </div>
        </div>
      ))}
    </HStack>
  );
}

export { NewCastEmbedRow };
