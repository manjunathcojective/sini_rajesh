import React from "react";
import PageHero from "@/components/common/PageHero";
import { BlogArticleContent, MoreReads } from "@/components/blogs";
import { SayHello } from "@/components/home";
import Footer from "@/components/common/Footer";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/wordpress";

const DEMO_POSTS = {
  "the-power-of-small-shifts": {
    title: "The Power of Small Shifts: How Changing Your Perspective Can Change Your Life",
    heroTitle: "The Power of Small Shifts: How Changing Your Perspective Can Change Your Life",
    heroInfo: "",
    category: "Mindset",
    date: "2026-03-24",
    featuredImage: "/images/my-philosophy-image.png",
    author: "By Dr. Sini Rajesh",
    sections: [
      {
        heading: "Why Small Shifts Matter",
        subheading: "A New Way of Looking at Everyday Situations",
        paragraphs: [
          "A small shift in the way we think can influence the way we feel, and the way we feel can influence how we respond. Over time, our responses shape our actions, habits and outcomes. Imagine receiving unexpected feedback at work. Your first thought might be that your efforts are not being appreciated. But what if you paused and looked at the same situation differently, asking yourself what you could learn from the feedback? The situation itself has not changed, but your perspective has. Sometimes, that small shift in perspective can change what happens next.",
        ],
      },
      {
        heading: "From Reaction to Response",
        subheading: "Creating Space Between Events and Our Choices",
        paragraphs: [
          "One of the most important parts of personal growth is learning to create space between what happens and how we respond. We cannot control every situation that comes our way, nor can we control the actions of other people or every outcome in our lives. What we can develop is greater awareness of our thoughts, emotions and choices. This awareness gives us the opportunity to move from simply reacting to consciously responding. This idea lies at the heart of The TEA of Your Life — understanding the connection between our Thoughts, Emotions and Actions, and recognising how each can influence the other.",
        ],
      },
      {
        heading: "The Conversations We Have Within",
        subheading: "Examining the Beliefs Behind Our Daily Thoughts",
        paragraphs: [
          "Our inner conversations often happen so naturally that we do not stop to question them. Thoughts such as “I am not good enough,” “I always get this wrong,” or “It is too late for me” can slowly become beliefs that influence the way we see ourselves and the possibilities around us.",
          "But not every thought is a fact. Sometimes, it is simply a belief we have carried for a long time.",
        ],
        prompt: "It can help to pause and ask:",
        bullets: [
          "Is this thought helping me or holding me back?",
          "Is this really true, or is it simply familiar?",
          "What else could be possible?",
          "How could I look at this situation differently?",
        ],
        conclusion:
          "Personal transformation begins when we become curious about these thoughts instead of automatically accepting them.",
      },
      {
        heading: "Growth Does Not Mean Becoming Someone Else",
        subheading: "Embracing Self-Awareness Over Radical Change",
        paragraphs: [
          "Personal growth is not about becoming a completely different person. It is about becoming more aware of who we are, what matters to us, what may be holding us back and what we genuinely want to change.",
        ],
      },
      {
        heading: "Looking Within",
        subheading: "Understanding the Inner Landscape Before Changing the Outer World",
        paragraphs: [
          "There are many areas of life where we may want to experience change our health, relationships, career and business, money and wealth, or our inner self. Yet before trying to change what is happening around us, it can be valuable to pause and understand what is happening within us.",
        ],
        prompt: "The TEA of Your Life encourages us to explore the connection between:",
        bullets: [
          { key: "Thoughts", text: "What am I thinking and believing?" },
          { key: "Emotions", text: "What feelings are these thoughts creating?" },
          { key: "Actions", text: "How are these thoughts and emotions influencing what I do?" },
        ],
      },
      {
        heading: "Transformation Begins With Awareness",
        subheading: "Small Consistent Choices Over Grand Gestures",
        paragraphs: [
          "We often imagine transformation as a destination — a point where everything finally falls into place. In reality, transformation is rarely one big moment. It is built through small choices, new perspectives, honest conversations, conscious actions and moments of awareness that gradually influence the way we experience our lives.",
        ],
      },
      {
        heading: "A Thought to Take With You",
        subheading: "A Daily Reflection for Ongoing Growth",
        paragraphs: [
          "As you move through your day, take a moment to think about one area of your life where you would like to experience a positive change. Instead of immediately asking what needs to change around you, ask yourself what might need to shift within you.",
        ],
        prompt: "It could be:",
        bullets: [
          "A thought you have been carrying",
          "An emotion you have been avoiding",
          "A belief that no longer serves you",
          "A conversation you have been postponing",
          "One small action you know you need to take",
        ],
      },
    ],
  },
  "embracing-authentic-leadership": {
    title: "Embracing Authentic Leadership: Why Vulnerability is a Strength",
    heroTitle: "Embracing Authentic Leadership: Why Vulnerability is a Strength",
    heroInfo: "",
    category: "Leadership",
    date: "2026-03-15",
    featuredImage: "/images/my-story-my-journey.png",
    author: "By Dr. Sini Rajesh",
    sections: [
      {
        heading: "Leading with Authenticity",
        paragraphs: [
          "True leadership is not about projecting perfection. It is rooted in deep self-awareness, empathy, and the courage to show up genuinely. When leaders lead from authenticity rather than authority, they build environments of trust where teams feel safe to innovate and excel.",
        ],
      },
      {
        heading: "Creating a Safe Culture",
        paragraphs: [
          "When vulnerability is embraced as a strength, psychological safety becomes the foundation of organizational growth and high-performance teams.",
        ],
      },
    ],
  },
  "from-reaction-to-response": {
    title: "From Reaction to Response: Mastering Emotional Intelligence in High-Stakes Leadership",
    heroTitle: "From Reaction to Response: Mastering Emotional Intelligence in High-Stakes Leadership",
    heroInfo: "",
    category: "Leadership",
    date: "2026-03-10",
    featuredImage: "/images/my-story-my-journey.png",
    author: "By Dr. Sini Rajesh",
    sections: [
      {
        heading: "Mastering Emotional Agility",
        paragraphs: [
          "Reacting is instinctive and immediate. Responding is intentional and grounded. In leadership, moving from reaction to response is the hallmark of emotional maturity and strategic clarity.",
        ],
      },
    ],
  },
  "the-tea-of-your-life": {
    title: "The TEA Framework: Aligning Thoughts, Emotions, and Actions",
    heroTitle: "The TEA Framework: Aligning Thoughts, Emotions, and Actions",
    heroInfo: "",
    category: "Mindset",
    date: "2026-03-02",
    featuredImage: "/images/my-philosophy-image.png",
    author: "By Dr. Sini Rajesh",
    sections: [
      {
        heading: "The Power of Alignment",
        paragraphs: [
          "The TEA Framework—Thoughts, Emotions, and Actions—is the foundation for personal mastery and sustained organizational impact. When these three elements work in harmony, resistance dissolves and purposeful momentum emerges.",
        ],
      },
    ],
  },
  "fostering-happiness-at-work": {
    title: "Happypreneurship: Building Workplaces Where People Thrive",
    heroTitle: "Happypreneurship: Building Workplaces Where People Thrive",
    heroInfo: "",
    category: "Organisation Development",
    date: "2026-02-18",
    featuredImage: "/images/starting-out.png",
    author: "By Dr. Sini Rajesh",
    sections: [
      {
        heading: "The Business of Joy",
        paragraphs: [
          "Happy organizations outperform their peers across every metric: engagement, retention, and innovation. Creating workplaces where people flourish is both a moral imperative and an exceptional business strategy.",
        ],
      },
    ],
  },
};

// Generate static params for all known blog posts (merges live WP + fallbacks)
export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts(50);
    const fallbackSlugs = Object.keys(DEMO_POSTS).map((slug) => ({ slug }));
    const postSlugs = (posts || []).map((post) => ({ slug: post.slug }));
    const allSlugs = [...fallbackSlugs, ...postSlugs];
    const uniqueSlugs = Array.from(new Set(allSlugs.map((s) => s.slug))).map((slug) => ({ slug }));
    return uniqueSlugs;
  } catch {
    return Object.keys(DEMO_POSTS).map((slug) => ({ slug }));
  }
}

// Dynamic SEO metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  const display = post || DEMO_POSTS[slug];

  if (!display) {
    return {
      title: "Blog Post | Dr. Sini Rajesh",
    };
  }

  return {
    title: `${display.heroTitle || display.title} | Dr. Sini Rajesh`,
    description: (display.heroInfo || display.excerpt || "").slice(0, 160),
  };
}

export default async function SingleBlogPage({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  const allPosts = await getBlogPosts(10).catch(() => []);

  // If post is not found on WP, use matched fallback demo post
  const fallback = DEMO_POSTS[slug] || {
    title: slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" "),
    heroTitle: slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" "),
    category: "Leadership & Mindset",
    date: new Date().toISOString(),
    author: "By Dr. Sini Rajesh",
    featuredImage: "/images/my-philosophy-image.png",
    heroInfo: "",
    sections: DEMO_POSTS["the-power-of-small-shifts"].sections,
  };

  const displayPost = post || fallback;

  // Constant Page Hero Heading across ALL blog inner pages:
  const heroHeading = "By Dr. Sini Rajesh";

  // Dedicated dynamic Page Hero Title for this blog post:
  const heroTitle = displayPost.heroTitle || displayPost.title;

  // Dedicated dynamic Page Hero Info for this blog post (completely separate from card excerpt):
  const heroInfo = displayPost.heroInfo || "";

  return (
    <main className="w-full min-h-screen bg-[#FEFEFE]">
      {/* Article Page Hero with Dynamic Featured Image as Hero Background and 0.4 Dark Overlay */}
      <PageHero
        heading={heroHeading}
        title={heroTitle}
        info={heroInfo}
        bgImage={displayPost.featuredImage || "/images/bg.png"}
        bgPosition="center 25%"
        bgStyle={{ top: 0, left: 0, width: "100%", height: "100%" }}
        overlay="rgba(0, 0, 0, 0.4)"
        leftBlockStyle={{
          maxWidth: "652px",
          width: "100%",
          height: "auto",
          gap: "20px",
          opacity: 1,
        }}
        titleStyle={{
          maxWidth: "529px",
          width: "100%",
          minHeight: "auto",
          height: "auto",
          opacity: 1,
          fontFamily: 'var(--font-serif), "Cormorant Garamond", Georgia, serif',
          fontWeight: 700,
          fontStyle: "italic",
          fontSize: "clamp(26px, 2.5vw + 16px, 41.62px)",
          lineHeight: "clamp(30px, 2.6vw + 18px, 45px)",
          letterSpacing: "0%",
          color: "rgba(255, 255, 255, 1)",
        }}
      />

      {/* Article Content Section (Frame 18 with exact 1240px width and separator lines) */}
      <BlogArticleContent
        sections={displayPost.sections}
        rawHtml={displayPost.content}
        slug={slug}
      />

      {/* Similar Blogs Section */}
      <MoreReads initialPosts={allPosts} currentSlug={slug} />

      {/* Say Hello CTA Section */}
      <SayHello />

      <Footer />
    </main>
  );
}
