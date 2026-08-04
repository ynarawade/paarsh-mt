import { X } from "lucide-react";
import { useState } from "react";
import { currentUser } from "../../data/dummyUsers";

interface EditProfileModalProps {
  onClose: () => void;
}

function EditProfileModal({ onClose }: EditProfileModalProps) {
  const [name, setName] = useState(currentUser.name);
  const [bio, setBio] = useState(currentUser.bio ?? "");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 px-4">
      <div className="w-full max-w-md rounded-xl border border-border bg-surface p-5">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-bold text-ink">
            Edit Profile
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="text-muted hover:text-ink"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label
              htmlFor="edit-name"
              className="text-xs font-medium text-muted"
            >
              Name
            </label>
            <input
              id="edit-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-1 w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-ink focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label
              htmlFor="edit-bio"
              className="text-xs font-medium text-muted"
            >
              Bio
            </label>
            <textarea
              id="edit-bio"
              value={bio}
              onChange={(event) => setBio(event.target.value)}
              rows={3}
              className="mt-1 w-full resize-none rounded-lg border border-border bg-bg px-3 py-2 text-sm text-ink focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-border px-4 py-1.5 text-sm font-medium text-muted hover:text-ink"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-white hover:bg-primary-dark"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfileModal;
