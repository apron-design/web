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
  
  // 配置 webpack（用于非 Turbopack 构建或作为后备）
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@code-apron/vue-next': path.resolve('./lib/code-apron-stub.js'),
    };
    
    // 处理组件库的 CSS 文件（包含 SCSS 语法但缺少源文件）
    // 配置 sass-loader 来静默处理缺失的依赖
    const sassRules = config.module.rules.find(
      (rule: any) => rule && rule.test && rule.test.toString().includes('scss')
    );
    
    if (sassRules && Array.isArray(sassRules.use)) {
      sassRules.use.forEach((loader: any) => {
        if (loader && loader.loader && loader.loader.includes('sass-loader')) {
          loader.options = {
            ...loader.options,
            sassOptions: {
              ...loader.options?.sassOptions,
              quietDeps: true,
              silenceDeprecations: ['legacy-js-api'],
            },
          };
        }
      });
    }
    
    // 处理从 node_modules 导入的 CSS 文件，如果包含 SCSS 语法，使用 sass-loader
    config.module.rules.push({
      test: /node_modules\/@apron-design\/react\/dist\/index\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              quietDeps: true,
              silenceDeprecations: ['legacy-js-api'],
            },
          },
        },
      ],
    });
    
    return config;
  },
};

export default nextConfig;
