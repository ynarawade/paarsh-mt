import Banner from "../components/ui/Banner";
import CreatePost from "../components/ui/CreatePost";
import PostCard from "../components/ui/PostCard";
import TrendingSidebar from "../components/ui/TrendingSidebar";
import { dummyPosts } from "../data/dummyPost";

function Home() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">
      <section className="space-y-4">
        <Banner />
        <CreatePost />
        {dummyPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>

      <TrendingSidebar />
    </div>
  );
}

export default Home;
