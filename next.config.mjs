/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
  async rewrites() {
    const wpBase =
      process.env.NEXT_PUBLIC_WORDPRESS_URL ||
      (process.env.WORDPRESS_GRAPHQL_ENDPOINT
        ? process.env.WORDPRESS_GRAPHQL_ENDPOINT.replace(/\/graphql\/?$/, "")
        : "http://209.50.240.218:8080");

    return [
      {
        source: "/wp-content/:path*",
        destination: `${wpBase}/wp-content/:path*`,
      },
      {
        source: "/wp-includes/:path*",
        destination: `${wpBase}/wp-includes/:path*`,
      },
    ];
  },
};

export default nextConfig;
