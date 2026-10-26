const GRAPHQL_ENDPOINT =
  process.env.WORDPRESS_GRAPHQL_ENDPOINT ||
  (process.env.NEXT_PUBLIC_WORDPRESS_URL
    ? `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/graphql`
    : null);

/**
 * Generic GraphQL fetcher for WordPress
 */
export async function fetchGraphQL(query, { variables } = {}) {
  if (!GRAPHQL_ENDPOINT) {
    return null;
  }
  try {
    const res = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      next: { revalidate: 30 }, // ISR: Cache response for 30 seconds for fast demo updates
    });

    if (!res.ok) {
      return null;
    }

    const json = await res.json();
    if (json.errors) {
      console.error("GraphQL Errors:", json.errors);
      return null;
    }
    return json.data;
  } catch (error) {
    if (process.env.DEBUG_WORDPRESS) {
      console.warn("WordPress GraphQL unavailable:", error?.message || error);
    }
    return null;
  }
}

/**
 * Calculate reading time from text content
 */
function calculateReadingTime(text = "") {
  const cleanText = text.replace(/<[^>]+>/g, "").trim();
  const words = cleanText ? cleanText.split(/\s+/).length : 0;
  const minutes = Math.max(1, Math.ceil(words / 180));
  return `${minutes} min read`;
}

/**
 * Query all blog posts with featured images, categories, and author
 */
export async function getBlogPosts(first = 20) {
  const query = `
    query GetBlogPosts($first: Int) {
      posts(first: $first, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          databaseId
          title
          slug
          excerpt
          content
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
          author {
            node {
              name
            }
          }
        }
      }
    }
  `;

  const data = await fetchGraphQL(query, { variables: { first } });
  
  if (!data?.posts?.nodes || data.posts.nodes.length === 0) return [];

  return data.posts.nodes.map((post) => {
    const cleanExcerpt = post.excerpt
      ? post.excerpt.replace(/<[^>]+>/g, "").replace(/\n/g, " ").trim()
      : "";

    return {
      id: post.databaseId || post.id,
      title: post.title || "Untitled Post",
      slug: post.slug,
      excerpt: cleanExcerpt || "Click to read this reflection and thought leadership piece.",
      date: post.date,
      readingTime: calculateReadingTime(post.content || post.excerpt || ""),
      featuredImage: post.featuredImage?.node?.sourceUrl || "/images/my-philosophy-image.png",
      altText: post.featuredImage?.node?.altText || post.title,
      category: post.categories?.nodes?.[0]?.name || "Reflection",
      author: post.author?.node?.name || "Dr. Sini Rajesh",
    };
  });
}

/**
 * Query single blog post by slug
 */
export async function getBlogPostBySlug(slug) {
  const query = `
    query GetPostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        databaseId
        title
        slug
        content
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  `;

  let data = await fetchGraphQL(query, { variables: { slug } });
  let post = data?.post;

  // If not found by exact slug, try matching from the live posts list
  if (!post) {
    const allPosts = await getBlogPosts(50);
    const matched = allPosts.find(
      (p) =>
        p.slug === slug ||
        p.slug.startsWith(slug) ||
        slug.startsWith(p.slug) ||
        slug.includes(p.slug)
    );
    if (matched) {
      data = await fetchGraphQL(query, { variables: { slug: matched.slug } });
      post = data?.post;
    }
  }

  if (!post) return null;

  const cleanExcerpt = post.excerpt
    ? post.excerpt.replace(/<[^>]+>/g, "").trim()
    : "";

  let heroInfo =
    post.heroInfo ||
    post.pageHeroInfo ||
    post.blogDetails?.heroInfo ||
    post.blogDetails?.pageHeroInfo ||
    post.heroSettings?.heroInfo ||
    post.heroSettings?.pageHeroInfo ||
    post.blogFields?.heroInfo ||
    post.acf?.hero_info ||
    post.acf?.heroInfo ||
    post.acf?.page_hero_info ||
    "";

  // If heroInfo not in GraphQL, attempt to fetch from WordPress REST API (which automatically includes ACF and meta)
  const restBase =
    process.env.NEXT_PUBLIC_WORDPRESS_URL ||
    (process.env.WORDPRESS_GRAPHQL_ENDPOINT
      ? process.env.WORDPRESS_GRAPHQL_ENDPOINT.replace(/\/graphql\/?$/, "")
      : null);

  if (!heroInfo && (post.databaseId || post.slug) && restBase) {
    try {
      const restUrl = post.databaseId
        ? `${restBase}/wp-json/wp/v2/posts/${post.databaseId}`
        : `${restBase}/wp-json/wp/v2/posts?slug=${post.slug}`;
      const restRes = await fetch(restUrl, { next: { revalidate: 30 } });
      if (restRes.ok) {
        const restData = await restRes.json();
        const postObj = Array.isArray(restData) ? restData[0] : restData;
        if (postObj) {
          const acf = postObj.acf || {};
          const meta = postObj.meta || {};
          heroInfo =
            acf.hero_info ||
            acf.heroInfo ||
            acf.page_hero_info ||
            acf.pageHeroInfo ||
            meta.hero_info ||
            meta.heroInfo ||
            meta.page_hero_info ||
            meta.pageHeroInfo ||
            heroInfo;
        }
      }
    } catch (err) {
      if (process.env.DEBUG_WORDPRESS) {
        console.warn("REST API fallback fetch unavailable:", err?.message || err);
      }
    }
  }

  return {
    id: post.databaseId || post.id,
    title: post.title,
    heroTitle: post.heroTitle || post.title,
    slug: post.slug,
    content: post.content,
    excerpt: cleanExcerpt,
    heroInfo,
    date: post.date,
    readingTime: calculateReadingTime(post.content || ""),
    featuredImage: post.featuredImage?.node?.sourceUrl || null,
    altText: post.featuredImage?.node?.altText || post.title,
    category: post.categories?.nodes?.[0]?.name || "Reflection",
    author: post.author?.node?.name ? `By ${post.author.node.name}` : "By Dr. Sini Rajesh",
  };
}
