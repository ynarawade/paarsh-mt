import { Send, Users } from "lucide-react";
import { useState } from "react";
import { currentUser } from "../../data/dummyUsers";
import type { Conversation } from "../../types";

interface ChatWindowProps {
  conversation: Conversation;
}

function ChatWindow({ conversation }: ChatWindowProps) {
  const [messages, setMessages] = useState(conversation.messages);
  const [draft, setDraft] = useState("");

  function handleSend(event: React.FormEvent) {
    event.preventDefault();
    if (!draft.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: `m${Date.now()}`,
        senderId: currentUser.id,
        text: draft,
        sentAt: "Just now",
      },
    ]);
    setDraft("");
  }

  const title = conversation.isGroup
    ? conversation.groupName
    : conversation.participant.name;

  return (
    <div className="flex h-full flex-col">
      <header className="flex items-center gap-3 border-b border-border p-4">
        {conversation.isGroup ? (
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Users size={18} />
          </span>
        ) : (
          <img
            src={conversation.participant.avatar}
            alt={conversation.participant.name}
            className="h-10 w-10 rounded-full object-cover"
          />
        )}
        <div>
          <h2 className="text-sm font-semibold text-ink">{title}</h2>
          {!conversation.isGroup && conversation.participant.isOnline && (
            <p className="text-xs text-accent">Online</p>
          )}
        </div>
      </header>

      <ul className="flex-1 space-y-3 overflow-y-auto p-4">
        {messages.map((message) => {
          const isOwn = message.senderId === currentUser.id;
          return (
            <li
              key={message.id}
              className={`flex ${isOwn ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs rounded-2xl px-4 py-2 text-sm ${
                  isOwn ? "bg-primary text-white" : "bg-bg text-ink"
                }`}
              >
                <p>{message.text}</p>
                <p
                  className={`mt-1 text-[10px] ${isOwn ? "text-white/70" : "text-muted"}`}
                >
                  {message.sentAt}
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      <form
        onSubmit={handleSend}
        className="flex items-center gap-2 border-t border-border p-3"
      >
        <label htmlFor="message-input" className="sr-only">
          Type a message
        </label>
        <input
          id="message-input"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Type a message..."
          className="w-full rounded-full border border-border bg-bg px-4 py-2 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <button
          type="submit"
          disabled={!draft.trim()}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-dark disabled:opacity-40"
        >
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}

export default ChatWindow;
