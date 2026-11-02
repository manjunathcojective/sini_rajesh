/**
 * Blog Posts Data
 * This file is left clean so all blog posts are loaded live from WordPress.
 * A backup of previous fallback posts is saved in src/data/blogPosts.backup.js.
 */

export const BLOG_POSTS = {};

export const BLOG_LIST = [];

export function getBlogPost(slug) {
  if (!slug) return null;
  return BLOG_POSTS[slug] || null;
}
