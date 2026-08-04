import { Heart, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";
import type { Post } from "../../types";

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  const [liked, setLiked] = useState(post.liked);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);

  function toggleLike() {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  }

  return (
    <article className="rounded-xl border border-border bg-surface p-4">
      <header className="flex items-center gap-3">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <h3 className="text-sm font-semibold text-ink">{post.author.name}</h3>
          <p className="text-xs text-muted">
            @{post.author.username} · {post.createdAt}
          </p>
        </div>
      </header>

      <p className="mt-3 text-sm text-ink">{post.content}</p>

      {post.image && (
        <img
          src={post.image}
          alt="Post attachment"
          className="mt-3 max-h-96 w-full rounded-lg object-cover"
        />
      )}

      <footer className="mt-4 flex items-center gap-6 border-t border-border pt-3">
        <button
          type="button"
          onClick={toggleLike}
          className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
            liked ? "text-primary" : "text-muted hover:text-primary"
          }`}
        >
          <Heart size={18} fill={liked ? "currentColor" : "none"} />
          {likeCount}
        </button>

        <button
          type="button"
          onClick={() => setShowComments((prev) => !prev)}
          className="flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-primary"
        >
          <MessageCircle size={18} />
          {post.comments.length}
        </button>

        <button
          type="button"
          className="flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-primary"
        >
          <Share2 size={18} />
          {post.shares}
        </button>
      </footer>

      {showComments && post.comments.length > 0 && (
        <ul className="mt-3 space-y-3 border-t border-border pt-3">
          {post.comments.map((comment) => (
            <li key={comment.id} className="flex items-start gap-2">
              <img
                src={comment.author.avatar}
                alt={comment.author.name}
                className="h-7 w-7 rounded-full object-cover"
              />
              <div className="rounded-lg bg-bg px-3 py-1.5">
                <p className="text-xs font-semibold text-ink">
                  {comment.author.name}
                </p>
                <p className="text-xs text-muted">{comment.text}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default PostCard;
