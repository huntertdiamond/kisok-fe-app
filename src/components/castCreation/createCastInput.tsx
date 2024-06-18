"use client";
import { useState } from "react";

import { CastCreationBottomRow } from "./bottomRow";
import { NewCastEmbedRow } from "./embedRow";
import { CastImagesContainer } from "./imageRow";
import { NewCastInput } from "./input";
import { FancyCard } from "../elements/cards/fancyCard";
import { channelOptions } from "@/lib/staticData/createCastPlaceholders";
import { CreateCastMentionedChannel } from "@/types/internal/mention";

import {
  CreateCastMentionedLink,
  CreateCastMentionedUserWithParentIndex,
} from "@/types/internal/mention";
import { useCreateCast } from "@/lib/hooks/useCreateCast";
import { ChannelSelectionParentContainer } from "./channelSelectionRow";

import "@/styling/mentionsTwoStyling.css";
function CreateCastInput() {
  const [textValue, setTextValue] = useState<string>("");
  const [links, setLinks] = useState<CreateCastMentionedLink[]>([]);
  const [mentionedUsers, setMentionedUsers] = useState<
    CreateCastMentionedUserWithParentIndex[]
  >([]);

  const [parentChannel, setParentChannel] =
    useState<CreateCastMentionedChannel | null>(null);

  const [imagesToUpload, setImagesToUpload] = useState<File[]>([]);

  const { buildProtocolMessage } = useCreateCast();

  const handleSubmit = () => {
    const newCast = buildProtocolMessage(
      textValue,
      mentionedUsers,
      links,
      parentChannel
    );
    console.log(
      "This is the JSON string for the cast you submitted",
      JSON.stringify(newCast)
    );
  };

  return (
    <FancyCard>
      <NewCastInput
        textValue={textValue}
        setTextValue={setTextValue}
        setLinks={setLinks}
        setMentionedUsers={setMentionedUsers}
      />
      <CastImagesContainer
        imagesToUpload={imagesToUpload}
        setImagesToUpload={setImagesToUpload}
      />
      <NewCastEmbedRow links={links} setLinks={setLinks} />
      <ChannelSelectionParentContainer
        channels={channelOptions}
        parentChannel={parentChannel}
        setParentChannel={setParentChannel}
      />
      <CastCreationBottomRow
        handleSubmit={handleSubmit}
        textValue={textValue}
        setImagesToUpload={setImagesToUpload}
      />
    </FancyCard>
  );
}

export { CreateCastInput };
