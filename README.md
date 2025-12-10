# Apron Design Web

这是一个基于 Next.js 的 SSR 静态导出项目。

## 技术栈

- **Next.js 16** - React 框架，配置为静态导出
- **Apron Design** - 组件库 (`@apron-design/react`)
- **AOS** - 滚动动画库
- **GSAP** - 强大的动画库
- **shadcn/ui** - 高质量 UI 组件库
- **Tailwind CSS v4** - 实用优先的 CSS 框架
- **TypeScript** - 类型安全

## 开始使用

### 安装依赖

```bash
npm install
```

### 开发模式

启动开发服务器（运行在 7999 端口）：

```bash
npm run dev
```

打开 [http://localhost:7999](http://localhost:7999) 查看结果。

### 构建静态页面

构建项目生成静态文件：

```bash
npm run build
```

构建完成后，静态文件将输出到 `out` 目录。

### 预览构建结果

```bash
npm start
```

服务器将在 7999 端口启动。

## 项目配置

- **端口**: 7999
- **静态导出**: 已配置 (`next.config.ts`)
- **图片优化**: 已禁用（静态导出需要）

## 目录结构

```
web/
├── app/              # Next.js App Router
│   ├── layout.tsx    # 根布局
│   ├── page.tsx      # 首页
│   └── globals.css   # 全局样式
├── components/       # React 组件
├── lib/              # 工具函数
└── public/           # 静态资源
```

## 使用说明

### Apron Design 组件

```tsx
import { Button } from '@apron-design/react';
```

### AOS 动画

```tsx
<div data-aos="fade-up">内容</div>
```

### GSAP 动画

```tsx
import { gsap } from 'gsap';

gsap.from(element, { opacity: 0, y: -50, duration: 1 });
```

### shadcn/ui 组件

使用 CLI 添加组件：

```bash
npx shadcn@latest add button
```

## 了解更多

- [Next.js 文档](https://nextjs.org/docs)
- [Apron Design 文档](https://apron-design.github.io)
- [shadcn/ui 文档](https://ui.shadcn.com)
- [GSAP 文档](https://greensock.com/docs/)
- [AOS 文档](https://michalsnik.github.io/aos/)