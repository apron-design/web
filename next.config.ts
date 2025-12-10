import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages deployment
  // If deploying to https://<username>.github.io/<repo>/
  // Uncomment the following line and replace 'repo-name' with your repository name
  // basePath: '/repo-name',
  // assetPrefix: '/repo-name',
  
  // Ensure trailing slashes are handled correctly
  trailingSlash: true,
};

export default nextConfig;
