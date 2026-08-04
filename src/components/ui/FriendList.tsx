import { dummyUsers } from "../../data/dummyUsers";

function FriendsList() {
  return (
    <section className="rounded-xl border border-border bg-surface p-4">
      <h2 className="text-sm font-semibold text-ink">Friends</h2>
      <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {dummyUsers.map((user) => (
          <li
            key={user.id}
            className="flex flex-col items-center gap-1.5 text-center"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="h-14 w-14 rounded-full object-cover"
            />
            <p className="text-xs font-medium text-ink">{user.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FriendsList;
