import { UserCheck, UserPlus } from "lucide-react";
import { dummyUsers } from "../data/dummyUsers";

function Friends() {
  return (
    <div className="space-y-4">
      <h1 className="font-display text-xl font-bold text-ink">Friends</h1>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {dummyUsers.map((user) => (
          <li
            key={user.id}
            className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4"
          >
            <div className="relative shrink-0">
              <img
                src={user.avatar}
                alt={user.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              {user.isOnline && (
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-surface bg-accent" />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-ink">
                {user.name}
              </p>
              <p className="truncate text-xs text-muted">@{user.username}</p>
            </div>

            <button
              type="button"
              className="flex shrink-0 items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-primary hover:text-primary"
            >
              <UserCheck size={14} />
              Friends
            </button>
          </li>
        ))}
      </ul>

      <div className="rounded-xl border border-border bg-surface p-4">
        <h2 className="text-sm font-semibold text-ink">Suggestions</h2>
        <p className="mt-1 text-xs text-muted">No new suggestions right now.</p>
        <button
          type="button"
          className="mt-3 flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-white hover:bg-primary-dark"
          disabled
        >
          <UserPlus size={14} />
          Find friends
        </button>
      </div>
    </div>
  );
}

export default Friends;
