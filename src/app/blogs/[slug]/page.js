import React from "react";
import { notFound } from "next/navigation";
import PageHero from "@/components/common/PageHero";
import { BlogArticleContent, MoreReads } from "@/components/blogs";
import { SayHello } from "@/components/home";
import Footer from "@/components/common/Footer";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/wordpress";

// Generate static params for all known blog posts from WordPress
export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts(50);
    return (posts || []).map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

// Dynamic SEO metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post | Dr. Sini Rajesh",
    };
  }

  return {
    title: `${post.heroTitle || post.title} | Dr. Sini Rajesh`,
    description: (post.heroInfo || post.subtitle || post.excerpt || "").slice(0, 160),
  };
}

export default async function SingleBlogPage({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  // If the post does not exist in WordPress, return 404
  if (!post) {
    notFound();
  }

  const allPosts = await getBlogPosts(10).catch(() => []);

  // Constant Page Hero Heading or WordPress Author
  const heroHeading = post.author ? `By ${post.author}` : "By Dr. Sini Rajesh";

  // Dedicated dynamic Page Hero Title for this blog post:
  const heroTitle = post.heroTitle || post.title;

  return (
    <main className="w-full min-h-screen bg-[#FEFEFE]">
      {/* Page Hero matching service pages */}
      <PageHero
        card={true}
        heading={heroHeading}
        title={heroTitle}
        height="clamp(220px, 18.61vw, 268px)"
        cardClassName="!h-[clamp(220px,18.61vw,268px)] !min-h-[clamp(220px,18.61vw,268px)]"
        bgColor="bg-[#BA676A]"
        bgImage="/images/hero-bg-image.png"
        bgPosition="center 24%"
        leftBlockClassName="!max-w-full lg:!max-w-[950px] xl:!max-w-[1050px]"
        titleClassName="!max-w-full"
      />

      {/* Article Content Section (Styled from WordPress HTML) */}
      <BlogArticleContent
        elements={post.elements || []}
        sections={post.sections || []}
        rawHtml={post.content || ""}
        slug={slug}
      />

      {/* Similar Blogs Section */}
      <MoreReads initialPosts={allPosts} currentSlug={slug} />

      {/* Say Hello CTA Section */}
      <SayHello heading="Your next chapter may begin with a simple conversation." />

      <Footer />
    </main>
  );
}
