import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export estático (HTML/CSS/JS em out/) para publicar no GitHub Pages
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
