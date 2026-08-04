import type { Conversation } from "../types";
import { currentUser, dummyUsers } from "./dummyUsers";

export const dummyConversations: Conversation[] = [
  {
    id: "conv1",
    participant: dummyUsers[0],
    messages: [
      {
        id: "m1",
        senderId: dummyUsers[0].id,
        text: "Hey, how's the machine test going?",
        sentAt: "10:02 AM",
      },
      {
        id: "m2",
        senderId: currentUser.id,
        text: "Almost done with the UI, deploying tonight.",
        sentAt: "10:05 AM",
      },
      {
        id: "m3",
        senderId: dummyUsers[0].id,
        text: "Nice, send me the link once it's live.",
        sentAt: "10:06 AM",
      },
    ],
  },
  {
    id: "conv2",
    participant: dummyUsers[2],
    messages: [
      {
        id: "m4",
        senderId: dummyUsers[2].id,
        text: "Are we still on for the call tomorrow?",
        sentAt: "Yesterday",
      },
      {
        id: "m5",
        senderId: currentUser.id,
        text: "Yes, 10 AM works for me.",
        sentAt: "Yesterday",
      },
    ],
  },
  {
    id: "conv3",
    participant: dummyUsers[3],
    isGroup: true,
    groupName: "Paarsh Team",
    messages: [
      {
        id: "m6",
        senderId: dummyUsers[3].id,
        text: "Deployed the discount feature for client app",
        sentAt: "2 days ago",
      },
    ],
  },
];
