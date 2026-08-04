import { Heart, MessageCircle, UserPlus } from "lucide-react";
import type { Notification } from "../../types";
interface NotificationCardProps {
  notification: Notification;
}

export function NotificationCard({ notification }: NotificationCardProps) {
  const getIcon = () => {
    switch (notification.type) {
      case "like":
        return <Heart className="size-4 fill-current" />;
      case "comment":
        return <MessageCircle className="size-4" />;
      case "friend_request":
        return <UserPlus className="size-4" />;
      case "message":
        return <MessageCircle className="size-4" />;
    }
  };

  return (
    <button className="group flex w-full items-start gap-4 rounded-xl border border-border bg-surface p-4 text-left transition-colors hover:border-primary/30 hover:bg-primary/5">
      <div className="relative shrink-0">
        <img
          src={notification.actor.avatar}
          alt={notification.actor.name}
          className="size-12 rounded-full object-cover"
        />

        {notification.actor.isOnline && (
          <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-green-500" />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-4">
          <p className="text-sm leading-6 text-ink">
            <span className="font-semibold">{notification.actor.name}</span>{" "}
            <span className="text-muted">{notification.message}</span>
          </p>

          {!notification.read && (
            <span className="mt-1 size-2 shrink-0 rounded-full bg-primary" />
          )}
        </div>

        <div className="mt-2 flex items-center gap-2">
          <div className="flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary">
            {getIcon()}
          </div>

          <span className="text-xs text-muted">2h ago</span>
        </div>
      </div>
    </button>
  );
}
