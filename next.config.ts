import type { NextConfig } from "next";
import path from 'path';

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
  
  // 配置 Turbopack（Next.js 16 默认使用）
  // 使用 stub 文件替换 @code-apron/vue-next，避免构建时的 .vue 文件解析错误
  turbopack: {
    resolveAlias: {
      '@code-apron/vue-next': './lib/code-apron-stub.js',
    },
  },
  
  // 配置 webpack（用于非 Turbopack 构建）
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@code-apron/vue-next': path.resolve('./lib/code-apron-stub.js'),
    };
    return config;
  },
};

export default nextConfig;
