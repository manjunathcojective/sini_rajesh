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
    title: "Happypreneurship: Building Workplaces Where People Thrive",
    excerpt:
      "Happiness at work is not a luxury—it is a proven competitive strategy for lasting growth.",
    category: "Organisation Development",
    date: "2026-02-18",
    readingTime: "4 min read",
    featuredImage: "/images/starting-out.png",
    author: "Dr. Sini Rajesh",
  },
];

export default function BlogGrid({
  initialPosts = [],
  badge = "Latest Reads",
  heading = "Thoughts Worth Pausing For",
  maxPosts = null,
  currentSlug = "",
}) {
  // Filter out current active post if on inner blog page, and limit posts if maxPosts is specified
  const rawPosts = initialPosts.length > 0 ? initialPosts : FALLBACK_POSTS;
  const filteredPosts = currentSlug
    ? rawPosts.filter((p) => p.slug !== currentSlug)
    : rawPosts;
  const posts = maxPosts ? filteredPosts.slice(0, maxPosts) : filteredPosts;

  return (
    <section
      id="blog-grid-section"
      className="w-full bg-[#FEFEFE] py-[clamp(44px,5.5vw,84px)] px-[clamp(16px,4vw,60px)] flex justify-center"
      aria-labelledby="blog-grid-heading"
    >
      <div
        id="blog-grid-container"
        className="w-full max-w-[1240px] flex flex-col items-center gap-[clamp(32px,3.8vw,56px)]"
      >
        {/* Header Block: Badge + Heading */}
        <motion.div
          id="blog-grid-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[700px] flex flex-col items-center text-center gap-[clamp(12px,1.2vw+6px,20px)]"
        >
          {/* Badge: Latest Reads */}
          <div
            id="blog-grid-badge"
            className="inline-flex items-center gap-[clamp(6px,0.4vw+4px,10px)] justify-center"
          >
            <span className="w-[6px] h-[6px] rounded-full bg-[#D07578] shrink-0 translate-y-[1px]" />
            <span className="font-serif font-bold italic text-[#D07578] text-[clamp(16px,0.5vw+14px,20px)] leading-none whitespace-nowrap">
              {badge}
            </span>
          </div>

          {/* Heading: Thoughts Worth Pausing For */}
          <h2
            id="blog-grid-heading"
            className="font-serif font-bold italic text-[#141414] text-[clamp(28px,1.8vw+20px,41.62px)] leading-[1.12] tracking-normal m-0"
          >
            {heading}
          </h2>
        </motion.div>

        {/* Fluid Responsive Grid: 1 Col Mobile, 2 Col Tablet, 3 Col Desktop */}
        <div
          id="blog-cards-grid"
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(20px,2.5vw,30px)] justify-items-center items-stretch"
        >
          {posts.map((post, index) => (
            <motion.article
              key={post.id || index}
              id={`blog-card-${post.slug || index}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: (index % 3) * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-full max-w-[clamp(290px,94vw,420px)] md:max-w-none flex flex-col h-full"
            >
              <div className="group w-full h-full min-h-[clamp(470px,46vw+100px,535px)] bg-white rounded-[clamp(14px,1vw+10px,16px)] p-[clamp(12px,0.8vw+9px,16px)] border border-[#D07578]/50 hover:border-[#D07578] hover:shadow-[0_16px_36px_rgba(208,117,120,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between gap-[clamp(12px,1.2vw+6px,18px)]">
                {/* Fluid Proportional Card Image */}
                <Link
                  href={`/blogs/${post.slug}`}
                  className="relative w-full aspect-[363/270] sm:aspect-[363/255] md:aspect-[324/245] lg:aspect-[363/270] min-h-[200px] max-h-[300px] rounded-[clamp(10px,0.6vw+8px,12px)] overflow-hidden bg-[#F4EAE6] shrink-0 block"
                  aria-label={post.title}
                >
                  <Image
                    src={post.featuredImage || "/images/portrait.png"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 767px) 94vw, (max-width: 1023px) 46vw, 397px"
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
          ))}
        </div>
      </div>
    </section>
  );
}
