import type { User } from "../types";

export const currentUser: User = {
  id: "u1",
  name: "Yadnesh Narawade",
  username: "yadnesh",
  avatar:
    "https://plus.unsplash.com/premium_photo-1739786995646-480d5cfd83dc?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  cover: "https://picsum.photos/seed/cover1/800/200",
  bio: "Full-stack developer. Building things that work.",
};

export const dummyUsers: User[] = [
  {
    id: "u2",
    name: "Riya Sharma",
    username: "riyasharma",
    avatar: "https://i.pravatar.cc/150?img=5",
    isOnline: true,
  },
  {
    id: "u3",
    name: "Arjun Mehta",
    username: "arjunmehta",
    avatar: "https://i.pravatar.cc/150?img=8",
    isOnline: false,
  },
  {
    id: "u4",
    name: "Sneha Patil",
    username: "snehapatil",
    avatar: "https://i.pravatar.cc/150?img=9",
    isOnline: true,
  },
  {
    id: "u5",
    name: "Karan Joshi",
    username: "karanjoshi",
    avatar: "https://i.pravatar.cc/150?img=15",
    isOnline: false,
  },
];
