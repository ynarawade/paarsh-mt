export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  cover?: string;
  bio?: string;
  isOnline?: boolean;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  image?: string;
  createdAt: string;
  likes: number;
  liked: boolean;
  comments: Comment[];
  shares: number;
}

export interface Comment {
  id: string;
  author: User;
  text: string;
  createdAt: string;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  sentAt: string;
}

export interface Conversation {
  id: string;
  participant: User;
  messages: Message[];
  isGroup?: boolean;
  groupName?: string;
}

export type NotificationType =
  | "like"
  | "comment"
  | "friend_request"
  | "message";

export interface Notification {
  id: string;
  type: NotificationType;
  actor: User;
  message: string;
  createdAt: string;
  read: boolean;
}

export interface TrendingTopic {
  id: string;
  tag: string;
  postCount: number;
}
