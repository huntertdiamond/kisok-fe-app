"use client";

import React, { useState } from "react";

import { HStack, Typography, VStack } from "@/components/elements";

import { CreateCastInput } from "@/components/castCreation/createCastInput";

import { FeedModalConcept } from "@/components/exampleComponents/feedModalConcept";

import {
  placeholderCastWithChannel,
  placeholderCastWithMention,
  placeholderCastWithMintFrame,
  placeholderCastWithQuote,
} from "@/lib/staticData";
import { InternalFarcasterCast, ParentPostObject } from "@/types";
import { PageWrapper } from "@/components/misc/pageWrapper";

import { AllFeedPostVariants } from "@/components/exampleComponents/allFeedPostVariants";
import { DocsRow } from "@/components/docs/docsRow";

type PostMap = {
  key: string;
  display: string;
  post: InternalFarcasterCast;
};

type ModalOptions = "tip" | "profile" | "channel" | "token";
type CastOption = "quoteCast" | "default" | "mintFrame" | "externalCast";
function ComponentsScreen() {
  const [modalHeight, setModalHeight] = useState<"small" | "full">("full");

  const modalOptions: ModalOptions[] = ["profile", "channel", "token", "tip"];

  const castOptions: CastOption[] = [
    "quoteCast",
    "default",
    "mintFrame",
    "externalCast",
  ];

  const [selectedModalOption, setSelectedModalOption] =
    useState<ModalOptions>("profile");

  const [selectedPostKey, setSelectedPostKey] = useState<CastOption>("default");

  const postMap: PostMap[] = [
    {
      key: "default",
      display: "Default Cast",
      post: placeholderCastWithMention,
    },
    {
      key: "mintFrame",
      display: "Mint Frame",
      post: placeholderCastWithMintFrame,
    },
    {
      key: "quoteCast",
      display: "Quote Cast",
      post: placeholderCastWithQuote,
    },
    {
      key: "externalCast",
      display: "External Embed Cast",
      post: placeholderCastWithChannel,
    },
  ];
  return (
    <PageWrapper pageTitle="Components" slug="components">
      <DocsRow>
        <DocsRow.LeftColumn
          title="Create Cast Input"
          description="A component to create a cast. Use @ to mention users, / to mention channels, and $ to mention tokens. This is a v0.0.1. A formatted message is logged on submit. There are a handful of bugs that I would've taken care of if I had
          the time, but for now this is a good starting point"
        >
          <></>
        </DocsRow.LeftColumn>
        <DocsRow.RightColumn>
          <CreateCastInput />
        </DocsRow.RightColumn>
      </DocsRow>

      <DocsRow>
        <DocsRow.LeftColumn
          title="Feed Post Variants"
          description="This is the component that will render every post in the user's feed.When used in feed, pressing the inline chips will display the modal below."
        >
          <DocsRow.SelectionRow
            options={castOptions}
            optionSetter={setSelectedPostKey}
            selectedOption={selectedPostKey}
            displayText={(option) => option}
          />
        </DocsRow.LeftColumn>
        <DocsRow.RightColumn>
          <AllFeedPostVariants
            selectedCast={
              postMap.filter((post) => post.key === selectedPostKey)[0].post
            }
          />
        </DocsRow.RightColumn>
      </DocsRow>

      <DocsRow>
        <DocsRow.LeftColumn
          title="Feed Modal"
          description="This modal serves as the preview for whenever a user presses the inline chips, or internal actions like the tip modal."
        >
          <DocsRow.SelectionRow
            options={modalOptions}
            optionSetter={setSelectedModalOption}
            selectedOption={selectedModalOption}
            displayText={(option) => option as string}
          />
        </DocsRow.LeftColumn>
        <DocsRow.RightColumn>
          <FeedModalConcept
            modalHeight={modalHeight}
            modalOption={selectedModalOption}
          />
        </DocsRow.RightColumn>
      </DocsRow>
    </PageWrapper>
  );
}

export { ComponentsScreen };
