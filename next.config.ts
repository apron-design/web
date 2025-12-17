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
  
  // 配置 Turbopack（Next.js 16 默认使用）
  // 注意：@code-apron/vue-next 使用动态导入，避免构建时的 .vue 文件解析错误
  // Turbopack 会自动处理动态导入，不需要额外配置
  turbopack: {},
  
  // 注意：@code-apron/vue-next 使用动态导入，避免构建时的 .vue 文件解析错误
};

export default nextConfig;
