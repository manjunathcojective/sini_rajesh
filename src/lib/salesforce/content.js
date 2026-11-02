import { quoteContent, heroContent, taglineItems } from "@/lib/data";

/**
 * Service to fetch content with fallback to local mock data
 */
export async function getHomePageContent() {
  return {
    hero: heroContent,
    quote: quoteContent,
    tagline: taglineItems,
  };
}
