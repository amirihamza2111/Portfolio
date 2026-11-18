import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async headers() {
    return [
      {
        // The pages only change on a new deploy, and every Netlify deploy clears this cache,
        // so Netlify's edge can serve them directly instead of asking the server each time.
        source: "/:lang(en|fr)",
        headers: [
          {
            key: "Netlify-CDN-Cache-Control",
            value: "public, durable, s-maxage=31536000, stale-while-revalidate=31536000",
          },
        ],
      },
    ];
  },
  turbopack: {
    // A stray package-lock.json in the home folder otherwise confuses root detection.
    root: import.meta.dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
