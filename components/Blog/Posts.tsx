import { fetchPosts } from "@/utils/fetchPosts";
import PostsCard from "./PostCard";
import VerticalAnimation from "@/utils/Animations/VerticalAnimation";

export default async function Posts() {
  const posts = await fetchPosts();

  return (
    <section className="py-[150px] max-w-[1200px] mx-auto px-6 max-lg:py-20 max-sm:px-4">
      <VerticalAnimation
        delay={0.4}
        className="flex justify-between items-center mb-[60px]"
      >
        <h3 className="h3-title">Latest posts</h3>
      </VerticalAnimation>
      <div className="grid grid-cols-2 gap-[50px] max-[820px]:grid-cols-1 max-lg:gap-6">
        {posts?.map((post, index) => (
          <VerticalAnimation key={post.id} delay={index * 0.2}>
            <PostsCard group={post.group} src={post.img} title={post.title} />
          </VerticalAnimation>
        ))}
      </div>
    </section>
  );
}
