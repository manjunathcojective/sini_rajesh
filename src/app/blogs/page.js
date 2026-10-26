import PageHero from "@/components/common/PageHero";
import { BlogGrid } from "@/components/blogs";
import { SayHello } from "@/components/home";
import Footer from "@/components/common/Footer";
import { getBlogPosts } from "@/lib/wordpress";

export const metadata = {
  title: "Blog | Dr. Sini Rajesh",
  description:
    "Small Thoughts, Big Shifts. Reflections on mindset, leadership, and life by Dr. Sini Rajesh.",
};

const blogHeroInfo = `Sometimes, the biggest shift begins with a simple change in the way we think. Here are a few reflections on mindset, leadership and life.`;

export default async function BlogsPage() {
  // Fetch live posts from Headless WordPress GraphQL (with graceful fallback)
  const posts = await getBlogPosts(9);

  return (
    <main className="w-full min-h-screen bg-[#FEFEFE]">
      {/* Blog Page Hero */}
      <PageHero
        card={true}
        heading="Blogs"
        title={"Small Thoughts,\nBig Shifts."}
        info={blogHeroInfo}
        indent={false}
        bgColor="bg-[#BA676A]"
        bgImage="/images/hero-bg-image.png"
        bgPosition="center 20%"
      />

      {/* Latest Reads & Blog Cards */}
      <BlogGrid initialPosts={posts} />

      {/* Say Hello CTA Section */}
      <SayHello />
      <Footer />
    </main>
  );
}
