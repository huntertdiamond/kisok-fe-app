import { Dispatch, useState } from "react";
import { Mentions, Option } from "./boilerplate";
import {
  channelOptions,
  tokenOptions,
} from "@/lib/staticData/createCastPlaceholders";

import {
  CreateCastMentionedLink,
  CreateCastMentionedUser,
  CreateCastMentionedUserWithParentIndex,
} from "@/types";

import { highlightVariants } from "@/lib/constants/highlightVariants";
import { useCreateCast } from "@/lib/hooks/useCreateCast";
import { Typography } from "../elements";

function NewCastInput({
  textValue,
  setTextValue,
  setLinks,
  setMentionedUsers,
}: {
  textValue: string;
  setTextValue: Dispatch<React.SetStateAction<string>>;
  setLinks: Dispatch<React.SetStateAction<CreateCastMentionedLink[]>>;
  setMentionedUsers: Dispatch<
    React.SetStateAction<CreateCastMentionedUserWithParentIndex[]>
  >;
}) {
  const [prefix, setPrefix] = useState<"@" | "$" | "/">("@");
  // @ts-ignore
  const [rows, setRows] = useState<number>(7);
  const [queriedUsers, setQueriedUsers] = useState<CreateCastMentionedUser[]>(
    []
  );

  const [isQueryLoading, setQueryIsLoading] = useState(false);

  const optionsMap = {
    "@": {
      trigger: "@",
      data: queriedUsers,
    },
    "/": {
      trigger: "/",
      data: channelOptions,
    },
    $: {
      trigger: "$",
      data: tokenOptions,
    },
  };

  const { handleTextChange, getQueriedUser } = useCreateCast();

  const handleSearch = async (query: string, newPrefix: string) => {
    if (newPrefix === "@" || newPrefix === "$" || newPrefix === "/") {
      setPrefix(newPrefix);
    }

    if (newPrefix === "@") {
      setQueryIsLoading(true);
      const newUsersFromQuery = await getQueriedUser(query);
      setQueryIsLoading(false);
      setQueriedUsers(newUsersFromQuery);
    }
  };
  const handleChange = (text: string) => {
    const {
      cleanedText,
      mentions,
      links: newLinks,
    } = handleTextChange(queriedUsers, text);

    setLinks((prevLinks) => [...prevLinks, ...newLinks]);

    setMentionedUsers((prevMentions) => {
      const newMentionedUsers = [...prevMentions];
      mentions.forEach((mention) => {
        if (!newMentionedUsers.some((user) => user.id === mention.id)) {
          newMentionedUsers.push(mention);
        }
      });
      return newMentionedUsers;
    });

    setTextValue(cleanedText);
  };

  const renderOptions = () => {
    if (isQueryLoading) {
      return (
        <Option disabled>
          <Typography variant="body">Loading...</Typography>
        </Option>
      );
    } else if (!isQueryLoading) {
      return optionsMap[prefix].data.map((option, index) => (
        // FIX INDEX AS KEY
        <Option
          value={option.displayValue}
          key={index.toString()}
          className="w-full flex gap-2 font-medium items-center justify-start "
        >
          <img
            src={option.image}
            alt={option.displayValue}
            className="size-4 rounded-full"
          />
          {option.displayValue.toLowerCase()}
        </Option>
      ));
    }
  };
  return (
    <>
      <Mentions
        placeholder="What's happening?!"
        // I WOULD USE THE KEYS OF THE OPTIONS MAP HERE, BUT FOR AN UNKOWN REASON IT BREAKS THE COMPOENNT. WILL LOOK INTO IT
        prefix={["@", "/", "$"]}
        transitionName="motion-zoom"
        onSearch={handleSearch}
        onChange={handleChange}
        rows={rows}
        value={textValue}
        mentionVariants={highlightVariants}
        className="w-full"
      >
        {renderOptions()}
      </Mentions>
    </>
  );
}
export { NewCastInput };
