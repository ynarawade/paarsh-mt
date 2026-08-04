import { TrendingUp } from "lucide-react";
import { dummyTrending } from "../../data/dummyTrending";

function TrendingSidebar() {
  return (
    <aside className="rounded-xl border border-border bg-surface p-4">
      <h2 className="flex items-center gap-2 text-sm font-semibold text-ink">
        <TrendingUp size={16} className="text-primary" />
        Trending Topics
      </h2>
      <ul className="mt-3 space-y-3">
        {dummyTrending.map((topic) => (
          <li key={topic.id}>
            <p className="text-sm font-medium text-ink">#{topic.tag}</p>
            <p className="text-xs text-muted">
              {topic.postCount.toLocaleString()} posts
            </p>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default TrendingSidebar;
