import type { Post } from "../types";
import { currentUser, dummyUsers } from "./dummyUsers";

export const dummyPosts: Post[] = [
  {
    id: "p1",
    author: dummyUsers[0],
    content: "Just shipped a new feature at work. Small win but feels good.",
    image: "https://picsum.photos/seed/post1/600/400",
    createdAt: "2h ago",
    likes: 24,
    liked: false,
    shares: 3,
    comments: [
      {
        id: "c1",
        author: dummyUsers[1],
        text: "Congrats! What did you build?",
        createdAt: "1h ago",
      },
    ],
  },
  {
    id: "p2",
    author: dummyUsers[1],
    content: "Pune weather today is unreal. Perfect for a long walk.",
    createdAt: "4h ago",
    likes: 12,
    liked: true,
    shares: 0,
    comments: [],
  },
  {
    id: "p3",
    author: currentUser,
    content:
      "Working on a social networking UI for a machine test. React + Tailwind, no shortcuts.",
    image: "https://picsum.photos/seed/post3/600/400",
    createdAt: "6h ago",
    likes: 41,
    liked: false,
    shares: 5,
    comments: [
      {
        id: "c2",
        author: dummyUsers[2],
        text: "This looks clean, good luck!",
        createdAt: "5h ago",
      },
      {
        id: "c3",
        author: dummyUsers[3],
        text: "Share the repo when it's done",
        createdAt: "4h ago",
      },
    ],
  },
];
