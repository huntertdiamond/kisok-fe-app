"use client";

import React, { useState } from "react";
import { CreateCastInput } from "@/components/castCreation/createCastInput";
import { FeedModalConcept } from "@/components/exampleComponents/feedModalConcept";

import {
  placeholderCastWithChannel,
  placeholderCastWithMention,
  placeholderCastWithMintFrame,
  placeholderCastWithQuote,
} from "@/lib/staticData";
import { InternalFarcasterCast } from "@/types";
import { PageWrapper } from "@/components/misc/pageWrapper";
import { AllFeedPostVariants } from "@/components/exampleComponents/allFeedPostVariants";
import { DocsRow } from "@/components/docs/docsRow";

type PostMap = {
  key: string;
  display: string;
  post: InternalFarcasterCast;
};

type ModalOptions = "profile" | "channel" | "token";

enum CastOption {
  QuoteCast = "quoteCast",
  Default = "default",
  MintFrame = "mintFrame",
  ExternalCast = "externalCast",
}

function ComponentsScreen() {
  const [selectedModalOption, setSelectedModalOption] =
    useState<ModalOptions>("profile");

  const [selectedPostKey, setSelectedPostKey] = useState<CastOption>(
    CastOption.Default
  );

  const modalOptions: ModalOptions[] = ["profile", "channel", "token"];

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
    { key: "quoteCast", display: "Quote Cast", post: placeholderCastWithQuote },
    {
      key: "externalCast",
      display: "External Embed Cast",
      post: placeholderCastWithChannel,
    },
  ];

  const sections = [
    {
      title: "Create Cast Input",
      description:
        "A component to create a cast. Use @ to mention users, / to mention channels, and $ to mention tokens.  A formatted message is logged on submit. The channel selection slide is very finnicky and will be updated shortly. This is a v0.0.1.",
      contentLeft: <></>,
      contentRight: <CreateCastInput />,
    },
    {
      title: "Feed Post Variants",
      description:
        "This is the component that will render every post in the user's feed. When used in feed, pressing the inline chips will display the modal below.",
      contentLeft: (
        <DocsRow.SelectionRow
          options={Object.values(CastOption)}
          optionSetter={setSelectedPostKey}
          selectedOption={selectedPostKey}
          displayText={(option) => option}
        />
      ),
      contentRight: (
        <AllFeedPostVariants
          selectedCast={
            postMap.find((post) => post.key === selectedPostKey)?.post!
          }
        />
      ),
    },
    {
      title: "Feed Modal",
      description:
        "This modal serves as the preview for whenever a user presses the inline chips. It was inspired by the hover card on the twitter web app, but with more interactivity and a mobile first design.",
      contentLeft: (
        <DocsRow.SelectionRow
          options={modalOptions}
          optionSetter={setSelectedModalOption}
          selectedOption={selectedModalOption}
          displayText={(option) => option}
        />
      ),
      contentRight: (
        <FeedModalConcept
          modalHeight={"full"}
          modalOption={selectedModalOption}
        />
      ),
    },
  ];
  return (
    <PageWrapper pageTitle="Components" slug="components">
      {sections.map(
        ({ title, description, contentLeft, contentRight }, index) => (
          <DocsRow key={index}>
            <DocsRow.LeftColumn title={title} description={description}>
              {contentLeft}
            </DocsRow.LeftColumn>
            <DocsRow.RightColumn>{contentRight}</DocsRow.RightColumn>
          </DocsRow>
        )
      )}
    </PageWrapper>
  );
}

export { ComponentsScreen };
