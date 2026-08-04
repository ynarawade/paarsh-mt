import { Pencil } from "lucide-react";
import { useState } from "react";
import { currentUser } from "../../data/dummyUsers";
import EditProfileModal from "./EditProfileModal";

function ProfileHeader() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section className="overflow-hidden rounded-xl border border-border bg-surface">
      <img
        src={currentUser.cover}
        alt="Cover"
        className="h-40 w-full object-cover sm:h-52"
      />

      <div className="relative px-5 pb-5">
        <img
          src={currentUser.avatar}
          alt={currentUser.name}
          className="absolute -top-12 h-24 w-24 rounded-full border-4 border-surface object-cover"
        />

        <div className="flex justify-end pt-3">
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-1.5 rounded-full border border-border px-4 py-1.5 text-sm font-medium text-muted transition-colors hover:border-primary hover:text-primary"
          >
            <Pencil size={14} />
            Edit Profile
          </button>
        </div>

        <div className="mt-6">
          <h1 className="font-display text-xl font-bold text-ink">
            {currentUser.name}
          </h1>
          <p className="text-sm text-muted">@{currentUser.username}</p>
          {currentUser.bio && (
            <p className="mt-2 text-sm text-ink">{currentUser.bio}</p>
          )}
        </div>
      </div>

      {isEditing && <EditProfileModal onClose={() => setIsEditing(false)} />}
    </section>
  );
}

export default ProfileHeader;
