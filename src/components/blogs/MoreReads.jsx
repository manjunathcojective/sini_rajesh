"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const FALLBACK_POSTS = [
  {
    id: 1,
    slug: "the-power-of-small-shifts",
    cardTitle: "The Power of Small Shifts",
    title: "The Power of Small Shifts: How Changing Your Perspective Can Change Your Life",
    excerpt:
      "Sometimes, the biggest shift begins with a simple change in the way we think. Discover how small daily perspectives redefine your growth.",
    category: "Mindset",
    date: "2026-03-24",
    readingTime: "4 min read",
    featuredImage: "/images/my-philosophy-image.png",
    author: "Dr. Sini Rajesh",
  },
  {
    id: 2,
    slug: "embracing-authentic-leadership",
    cardTitle: "Authentic Leadership",
    title: "Embracing Authentic Leadership: Why Vulnerability is a Strength",
    excerpt:
      "True leadership is not about having all the answers. It begins with self-awareness and deep listening.",
    category: "Leadership",
    date: "2026-03-15",
    readingTime: "5 min read",
    featuredImage: "/images/portrait.png",
    author: "Dr. Sini Rajesh",
  },
  {
    id: 3,
    slug: "the-tea-of-your-life",
    cardTitle: "The TEA Framework",
    title: "The TEA Framework: Aligning Thoughts, Emotions, and Actions",
    excerpt:
      "When your thoughts, emotions, and actions align, you unlock clarity and sustainable inner peace.",
    category: "Mindset",
    date: "2026-03-02",
    readingTime: "5 min read",
    featuredImage: "/images/my-philosophy-image.png",
    author: "Dr. Sini Rajesh",
  },
  {
    id: 4,
    slug: "fostering-happiness-at-work",
    cardTitle: "Happypreneurship",
    title: "Happypreneurship: Building Workplaces Where People Thrive",
    excerpt:
      "Happiness at work is not a luxury—it is a proven competitive strategy for lasting growth.",
    category: "Organisation Development",
    date: "2026-02-18",
    readingTime: "4 min read",
    featuredImage: "/images/starting-out.png",
    author: "Dr. Sini Rajesh",
  },
  {
    id: 5,
    slug: "from-reaction-to-response",
    cardTitle: "Reaction to Response",
    title: "From Reaction to Response: Mastering Emotional Intelligence in High-Stakes Leadership",
    excerpt:
      "Reacting is instinctive and immediate. Responding is intentional and grounded. In leadership, moving from reaction to response is the hallmark of emotional maturity.",
    category: "Leadership",
    date: "2026-03-10",
    readingTime: "5 min read",
    featuredImage: "/images/my-story-my-journey.png",
    author: "Dr. Sini Rajesh",
  },
];

function BlogCardItem({ post, index }) {
  return (
    <motion.article
      id={`similar-card-${post.slug || index}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-full flex flex-col h-full"
    >
      <div className="group w-full h-full min-h-[clamp(470px,46vw+100px,535px)] bg-white rounded-[clamp(14px,1vw+10px,16px)] p-[clamp(12px,0.8vw+9px,16px)] border border-[#D07578]/50 hover:border-[#D07578] hover:shadow-[0_16px_36px_rgba(208,117,120,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between gap-[clamp(12px,1.2vw+6px,18px)]">
        {/* Fluid Proportional Card Image */}
        <Link
          href={`/blogs/${post.slug}`}
          className="relative w-full aspect-[363/270] sm:aspect-[363/255] md:aspect-[324/245] lg:aspect-[363/270] min-h-[200px] max-h-[300px] rounded-[clamp(10px,0.6vw+8px,12px)] overflow-hidden bg-[#F4EAE6] shrink-0 block"
          aria-label={post.title}
        >
          <Image
            src={post.featuredImage || "/images/starting-out.png"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 767px) 94vw, (max-width: 1023px) 360px, 397px"
          />
        </Link>

        {/* Card Content with Fluid Clamps */}
        <div className="w-full flex flex-col justify-between flex-grow gap-[clamp(8px,1vw,12px)] min-h-0">
          <Link href={`/blogs/${post.slug}`} className="block">
            <h3 className="font-sans font-bold text-[clamp(17px,0.35vw+15px,20.32px)] leading-[1.22] text-[#141414] group-hover:text-[#D07578] transition-colors line-clamp-1 m-0">
              {post.cardTitle ||
                (post.title?.includes(":")
                  ? post.title.split(":")[0].trim()
                  : post.title)}
            </h3>
          </Link>

          <p className="font-sans font-normal text-[clamp(13.5px,0.2vw+12.5px,16px)] leading-[1.38] text-[#141414]/80 line-clamp-2 m-0 h-[44px] overflow-hidden">
            {post.excerpt ||
              "Sometimes, the biggest shift begins with a simple change in the way we think."}
          </p>

          {/* Meta: Reading Time & Date */}
          <div className="w-full flex items-center justify-between pt-[clamp(8px,0.8vw+6px,12px)] border-t border-[#D07578]/50 text-[clamp(12px,0.2vw+12px,14px)] text-[#141414]/70 font-sans">
            <span className="font-sans font-normal text-[#141414]">
              {post.readingTime || "5 min read"}
            </span>
            <span className="font-sans font-normal text-[#141414]">
              {post.date
                ? new Date(post.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                : "12 Oct 2024"}
            </span>
          </div>
        </div>

        {/* Read More Button with Fluid Clamps */}
        <Button
          href={`/blogs/${post.slug}`}
          variant="primary"
          size="full"
          showDot={false}
          className="!w-full !h-[clamp(40px,0.5vw+38px,44px)] !rounded-[6px] !bg-[#D07578] hover:!bg-[#C25F69] text-white font-sans font-medium text-[clamp(14px,0.2vw+13px,16px)] flex items-center justify-center transition-colors shrink-0"
          ariaLabel={`Read more about ${post.title}`}
        >
          Read More
        </Button>
      </div>
    </motion.article>
  );
}

export default function MoreReads({ initialPosts = [], currentSlug = "" }) {
  // Combine initial posts and fallbacks, ensuring we always have enough posts to display
  const rawPosts = initialPosts.length >= 4 ? initialPosts : FALLBACK_POSTS;
  const filteredPosts = currentSlug
    ? rawPosts.filter((p) => p.slug !== currentSlug)
    : rawPosts;

  // 1. Duplicated list for smooth infinite scrolling marquee on desktop
  const displayPosts = [...filteredPosts, ...filteredPosts];

  // 2. Mobile: Exactly 3 blogs
  const threePosts = filteredPosts.slice(0, 3);

  // 3. Tablet: Up to 5 blogs for horizontal swipe
  const tabletPosts = filteredPosts.slice(0, 5);

  return (
    <section
      id="more-reads-section"
      className="w-full bg-[#FEFEFE] py-[clamp(36px,4.5vw,72px)] px-[clamp(16px,5.5vw,100px)] flex justify-center"
      aria-labelledby="more-reads-heading"
    >
      <div
        id="more-reads-container"
        className="w-full max-w-[1240px] flex flex-col"
      >
        {/* Header Block: Heading + View All CTA Button */}
        <div
          id="more-reads-header"
          className="w-full flex items-center justify-between gap-4 mb-[clamp(24px,3vw,36px)]"
        >
          <h2
            id="more-reads-heading"
            className="font-serif font-bold italic text-[#141414] text-[clamp(26px,2vw+18px,41.62px)] leading-[1.1] m-0"
          >
            Similar Blogs
          </h2>

          <Button
            href="/blogs"
            variant="outline"
            size="sm"
            showDot={false}
            ariaLabel="View all blogs"
            className="!h-[38px] !px-4 !rounded-[4px] shrink-0 text-[#D07578] border-[#D07578]/40 hover:border-[#D07578]"
          >
            View All
          </Button>
        </div>

        {/* 1. MOBILE LAYOUT (< 768px): One below the other, exactly 3 blogs in total */}
        <div
          id="similar-blogs-mobile"
          className="flex md:hidden flex-col gap-6 w-full items-center"
        >
          {threePosts.map((post, index) => (
            <div
              key={post.id || post.slug || index}
              className="w-full max-w-[clamp(290px,94vw,420px)] flex flex-col"
            >
              <BlogCardItem post={post} index={index} />
            </div>
          ))}
        </div>

        {/* 2. TABLET LAYOUT (768px - 1023px): 2 cards completely visible, 3rd card 8% visible and horizontally scrollable */}
        <div
          id="similar-blogs-tablet"
          className="hidden md:flex lg:hidden overflow-x-auto w-full gap-5 pb-6 pt-1 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {tabletPosts.map((post, index) => (
            <div
              key={post.id || post.slug || index}
              className="w-[calc((100%-40px)/2.08)] shrink-0 snap-start flex flex-col"
            >
              <BlogCardItem post={post} index={index} />
            </div>
          ))}
        </div>

        {/* 3. DESKTOP LAYOUT (>= 1024px): Automatic Scrolling Carousel Track */}
        <div
          id="similar-blogs-desktop"
          className="hidden lg:block relative w-full overflow-hidden py-2"
          aria-label="Similar Blogs Auto-scrolling Carousel"
        >
          {/* Smooth Edge Fade Gradients */}
          <div
            className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FEFEFE] to-transparent z-10 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FEFEFE] to-transparent z-10 pointer-events-none"
            aria-hidden="true"
          />

          {/* Marquee Track: Automatic Infinite Animation on Desktop, Paused on Hover */}
          <div
            id="similar-blogs-track"
            className="flex flex-row w-max desktop-marquee gap-6"
            style={{
              "--carousel-gap": "24px",
            }}
          >
            {displayPosts.map((post, index) => (
              <div
                key={`${post.id || post.slug || index}-${index}`}
                className="w-[360px] xl:w-[380px] shrink-0 flex flex-col"
              >
                <BlogCardItem post={post} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
