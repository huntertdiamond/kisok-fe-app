type AirstackActiveChannelUsersResponse = {
  FarcasterChannelParticipants: {
    FarcasterChannelParticipant: AirstackAbbreviatedChannelParticipant[];
  };
};

type AirstackChannelUsersAbb = {
  FarcasterChannelParticipant: AirstackAbbreviatedChannelParticipant[];
};

type AirstackAbbreviatedChannelParticipant = {
  participant: Participant;
  lastActionTimestamp: Date;
};

type Participant = {
  profileName: string;
  userAddress: string;
};

export type { AirstackActiveChannelUsersResponse, AirstackChannelUsersAbb };
