import { Users } from "lucide-react";
import { useState } from "react";
import ChatWindow from "../components/ui/ChatWindow";
import { dummyConversations } from "../data/dummyConversations";

function Messages() {
  const [activeId, setActiveId] = useState(dummyConversations[0].id);
  const activeConversation = dummyConversations.find(
    (conv) => conv.id === activeId
  )!;

  return (
    <div className="grid h-[calc(100vh-160px)] grid-cols-1 overflow-hidden rounded-xl border border-border bg-surface sm:grid-cols-[280px_1fr]">
      <nav
        aria-label="Conversations"
        className="hidden border-r border-border sm:block"
      >
        <h1 className="border-b border-border p-4 font-display text-lg font-bold text-ink">
          Messages
        </h1>
        <ul className="overflow-y-auto">
          {dummyConversations.map((conv) => {
            const lastMessage = conv.messages[conv.messages.length - 1];
            const title = conv.isGroup ? conv.groupName : conv.participant.name;
            const isActive = conv.id === activeId;

            return (
              <li key={conv.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(conv.id)}
                  className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors ${
                    isActive ? "bg-primary/10" : "hover:bg-bg"
                  }`}
                >
                  {conv.isGroup ? (
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Users size={16} />
                    </span>
                  ) : (
                    <img
                      src={conv.participant.avatar}
                      alt={conv.participant.name}
                      className="h-10 w-10 shrink-0 rounded-full object-cover"
                    />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-ink">
                      {title}
                    </p>
                    <p className="truncate text-xs text-muted">
                      {lastMessage?.text}
                    </p>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <ChatWindow
        key={activeConversation.id}
        conversation={activeConversation}
      />
    </div>
  );
}

export default Messages;
