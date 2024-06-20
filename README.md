## Notes

There are a variety of data providers used in this project because relying solely on Neynar seemed too easy. To run the app locally, create a .env file and add the API keys as specified in .env.sample.

### Things I would do differently

#### 1. When a user visits the /feed page, there are far too many API calls.

This is a for the most part a result of not using an internal database / having a true backend, but I would've likely removed the calls for users and profiles that occur on the inital feed fetch, and instead had the calls run when a user decides to click on the channel / user profile.
While this isn't the optimal architecture, it does sacrifice the initial load speed for faster rendering on the modal appearance, but it still isn't optimal.

#### 2. I would've liked to spend more time getting the `<CreateCastInput/>` component right.

In the current state of the `<CreateCastInput/>` the rerenders aren't as performant as I'd like, there isn't enough edgecase handling, and the character count is far from perfect. I'd also like to spend more time improving the styling of the dropdown, adding a cached list of users the visiting user is likely to mention, and improve the loading / error states on user query dropdown.

#### 3. I'm torn on the `<InlineChip />` styling.

I do think that having the chips is unique and provides a more whimsical experience, the different colors and harshness of the borders could be a bit overwhelming for some users. Perhaps a styling preference could be an interesting section during the onboarding, where the user could select their preferred style from a list of options.

#### 4. Added an expanded cast view / UI for replies in feed.

I really like that warpcast implemented this, and by the time I started writing these notes I realized I didn't add it.

#### 5. Added swaps / mints in feed.

This is an interesting balance to maintain, as there is a fine line between creating the perfect feed that intertwines onchain activity and farcaster posts and being a yassified etherscan that has a neynar enterprise subscription.
For example, I've had an [0xppl account](https://0xppl.com/) since they launched, and I haven't returned to it in two or three months- I can say the same thing about [interface](https://t.co/5tKfAG4cpj) and [butterfly](https://buttrfly.app/).
It'll require a lot of small tweaks to get it right, but I don't paticularly think that user's want to see the small, random swap that Friend A made, over the same friend's farcaster post. I do however think that they want to see the one swap that Friends A, B, and C all made. (this is just a hypothesis that has no basis aside from my own personal experience. I would love to have a conversation as to why this isn't or is the case.)

## Documentation

### Components

> For the sake of brevity, I'll only go through the primary components that are used heavily throughout the demo, as most of the other custom components are easily understood.

#### `<FeedPost>`

The `<FeedPost>` component handles the rendering of each potential `ParentPostObject` in the user's feed.

Since the `ParentPostObject` is typed via a discriminating union, all we need to do to handle the UI options is a switch statement, and the data is properly typed to each potential post object.

```typescript
/**
 * Renders the post content based on the platform variant.
 * @returns {JSX.Element | null} The rendered post content or null if the post type is invalid.
 */

const renderPostContent = (): JSX.Element | null => {
	switch (post.platform) {
		case "zora":
			return <ZoraPostInner post={post} />;
		case "mirror":
			return <MirrorPostInner post={post} />;
		case "farcaster":
			return <FarcasterPostInner cast={post} />;
		case "onChain":
			return <OnchainPostInner post={post} />;
		default:
			return null;
	}
};
```

#### `<FeedModal>`

The `<FeedModal>` component provides a versatile modal interface for interacting with different types of content within the feed. Depending on the selected modal option, users can:

- Tip a user for a post
- Preview a channel
- Preview a token
- Preview a user's profile
- Because the demo project is a simple Next.js project, a simple modal is used for the feed to demonstrate the desired interaction. When implemented in React Native, this would be an [Action Sheet](https://reactnative.dev/docs/actionsheetios).

```typescript

const SelectedOptionModal: React.FC = () => {
  const { selectedModalOption, selectedItemForModal } = useFeedActionContext();

  return (
    <>
      {selectedModalOption === ModalOptions.Tip && <TipModalIndex />}

      {selectedModalOption === ModalOptions.ProfilePreview &&
      isBaseFarcasterUser(selectedItemForModal) ? (
        <ProfileModalIndex user={selectedItemForModal} />
      ) : null}

      {selectedModalOption === ModalOptions.ChannelPreview &&
      isFarcasterChannel(selectedItemForModal) ? (
        <ChannelModalIndex channel={selectedItemForModal} />
      ) : null}

      {selectedModalOption === ModalOptions.Token &&
      isBaseTokenObject(selectedItemForModal) ? (
        <TokenModalIndex token={selectedItemForModal} />
      ) : null}
    </>
  );
};
```

#### `<CreateCastInput>`

<CreateCastInput>
The <CreateCastInput> component is used to create a new cast with various elements such as text, mentioned users, links, images, and a parent channel.

The hook buildProtocolMessage is used to construct the message in the format outlined by the Farcaster protocol docs.

```typescript

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
    <StyledCard>
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
    </StyledCard>
  );
}
```

This component handles:

- Mentioning and Highlighting: The `<NewCastInput/>` component renders entered text and gives users the option to mention a user (trigger is @), a token (trigger is $), and mention a channel (trigger is /). All mentions are highlighted inline
- Autocomplete for Mentioned Users: Queries for user autocompletion when mentioning users.
- Image Upload: Handles uploading images through the `<CastImagesContainer/>` component.
- Embed Links: Auto Detects a pasted or entered link and displays it in the `<NewCastEmbedRow>`
- Channel Selection: Supports selecting a parent channel for the cast through the ChannelSelectionParentContainer component.
- Cast Creation: Submits the new cast by calling the handleSubmit function, which uses the buildProtocolMessage hook to construct the message in the required format.

### API

### Component Side

Every API route is handled with the `fetchApiData` function shown below:

```typescript
import axios from "axios";
import {
  OurNextApiEndpoints,
  NextApiResponseMap,
  NextApiEndpointParams,
} from "@/types";
import { APP_URL } from "../../constants/environment";

async function fetchApiData<T extends OurNextApiEndpoints>(
  reqType: T,
  params: NextApiEndpointParams[T]
): Promise<NextApiResponseMap[T]> {
  const queryParams = new URLSearchParams(
    params as Record<string, string>
  ).toString();

  const fullUrl = `${APP_URL}/api/${reqType}?${queryParams}`;

  try {
    const response = await axios.get<NextApiResponseMap[T]>(fullUrl);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching ${reqType}`);
  }
}

export { fetchApiData };
```

This function simplifies data fetching and ensures that both the request parameters and responses are properly typed. An example implementation is as follows:

```typescript
const {
  data: fullCast,
  isLoading: isFullCastLoading,
  error: isError,
} = useQuery({
  queryKey: ["quoteCast", quoteCast.hash],

  queryFn: async () => {
    const cast = await fetchApiData("single-cast", {
      hash: quoteCast.hash,
    });

    return cast;
  },
  staleTime: 1000 * 60 * 10, // 10 minutes
});
```

In this example, the response is correctly typed as `InternalFarcasterCast`, and the cast's hash is passed in the URL via the fetchApiData function.

### Server Side

Since there isn't a separate backend for this app, all external API calls are routed through Next.js API endpoints. This serves as a proxy to protect API keys and other non-public data, as well as a middleware to sanitize and format data.

#### /feed

```typescript
export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const fid = searchParams.get("fid");

  if (!fid) {
    return new NextResponse(JSON.stringify("ERROR"), { status: 400 });
  }

  const feedData = await queryPinataAPI<PinataFeedResponse>(
    PinataReqType.Feed,
    fid
  );

  const formattedFeedData = await formatPinataFeed(feedData);

  formattedFeedData.sort(
    (a, b) =>
      new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime()
  );

  return new NextResponse(JSON.stringify(formattedFeedData), { status: 200 });
}
```

This is pretty simple, we are getting the user's feed from pinata, then using the formatPinataFeed function to parse the text to ensure we are properly higlighting mentioned users, tokens, and channels, as well as fetching the data for the aforementioned items. This needs to be improved for performance, but served the purpose for the demo 🙃. It returns an array of the `InternalFarcasterCast` type.

I won't go deeper into the server side documentation, but if you have any questions about technical decisions please feel free to reach out :)
