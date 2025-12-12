# 开始使用

## 安装 Apron Design React
需要同时安装 react >= 16.8 和 react-dom >= 16.8。

在开始之前，你可能需要安装 npx。

首先，确保你的 React 项目已经创建。如果还没有，可以使用以下命令创建：

```bash
npx create-react-app my-app
cd my-app
```

然后安装 Apron Design

```bash
npm install @apron-design/react --save
```

然后在 `main.ts` 或 `main.js` 中导入样式

```typescript
import '@apron-desing/react/styles'
```

## 在 Next.js 上使用
首先，确保你的 Next.js 项目已经创建。如果还没有，可以使用以下命令创建：

```bash
npx create-next-app@latest my-app
cd my-app
```

然后安装 Apron Design：

```bash
npm install @apron-design/react
```

对于 **App Router** (Next.js 13+)，在 `app/layout.tsx` 中添加：

```tsx
import '@apron-design/react/styles';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
```

对于 **Pages Router**，在 `pages/_app.tsx` 中添加：

```tsx
import '@apron-design/react/styles';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```


### 使用 Vite 创建 React 应用
你也可以使用 Vite 快速创建 React 应用

```bash
# 使用 npm
npm create vite@latest my-react-app -- --template react
# 或使用 yarn
yarn create vite my-react-app --template react
# 或使用 pnpm
pnpm create vite my-react-app --template react

# 进入项目并安装依赖
cd my-react-app
npm install
npm run dev
```