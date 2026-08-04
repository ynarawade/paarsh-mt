import { Image, Send, Video } from "lucide-react";
import { useState } from "react";
import { currentUser } from "../../data/dummyUsers";

function CreatePost() {
  const [content, setContent] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setContent("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-border bg-surface p-4"
    >
      <div className="flex items-start gap-3">
        <img
          src={currentUser.avatar}
          alt={currentUser.name}
          className="h-10 w-10 rounded-full object-cover"
        />
        <label htmlFor="create-post" className="sr-only">
          Create a post
        </label>
        <textarea
          id="create-post"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="What's on your mind?"
          rows={2}
          className="w-full resize-none bg-transparent text-sm text-ink placeholder:text-muted focus:outline-none"
        />
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
        <div className="flex gap-2">
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:bg-bg hover:text-ink"
          >
            <Image size={16} />
            Photo
          </button>
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:bg-bg hover:text-ink"
          >
            <Video size={16} />
            Video
          </button>
        </div>

        <button
          type="submit"
          disabled={!content.trim()}
          className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark disabled:opacity-40"
        >
          <Send size={14} />
          Post
        </button>
      </div>
    </form>
  );
}

export default CreatePost;
