import FriendsList from "../components/ui/FriendList";
import PostCard from "../components/ui/PostCard";
import ProfileHeader from "../components/ui/ProfileHeader";
import { dummyPosts } from "../data/dummyPost";

import { currentUser } from "../data/dummyUsers";

function Profile() {
  const userPosts = dummyPosts.filter(
    (post) => post.author.id === currentUser.id
  );

  return (
    <div className="space-y-4">
      <ProfileHeader />
      <FriendsList />

      <section className="space-y-4">
        <h2 className="text-sm font-semibold text-ink">Posts</h2>
        {userPosts.length > 0 ? (
          userPosts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <p className="text-sm text-muted">No posts yet.</p>
        )}
      </section>
    </div>
  );
}

export default Profile;
