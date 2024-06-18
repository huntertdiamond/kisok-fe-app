type AirstackSharedChannelsResponse = {
  sharedChannels: SharedChannels;
};

type SharedChannels = {
  FarcasterChannelParticipant: FarcasterChannelParticipant[];
};

type FarcasterChannelParticipant = {
  channel: FarcasterChannelParticipantChannel;
};

type FarcasterChannelParticipantChannel = {
  participants: Participant[] | null;
};

type Participant = {
  channel: ParticipantChannel;
};

type ParticipantChannel = {
  name: string;
  channelId: string;
  description: string;
  url: string;
  imageUrl: string;
};

export type { AirstackSharedChannelsResponse };
