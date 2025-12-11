# 安装指南

在本页面将会展示如果安装在项目中。

## 在 React 上使用
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

然后在 `main.ts(js)` 中导入样式

```typescript
import '@apron-desing/react/styles'
```

### 按需加载
`@apron-design/react` 的组件默认支持按需加载。

```jsx
import { Button } from '@apron-design/react'

export const App = () => {
  return (<>
    <Button>按钮</Button>
  </>)
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

### 在 Next.js 上使用
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

## 在 Vue3 上使用
由于 Vue3 官方推荐使用 Vite 创建项目，这里也推荐使用 Vite：
```bash
# 直接创建基本项目
npm create vite@latest my-vue-app -- --template vue
# 或创建 Vue + TypeScript 项目
npm create vite@latest my-vue-app -- --template vue-ts

cd my-vue-app
npm install
npm run dev
```


然后安装 Apron Design：

```bash
npm install @apron-design/react --save
```

在 `main.ts` 或 `main.js` 中导入样式：
```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import '@apron-design/react/styles'

createApp(App).mount('#app')
```

### 全局引用
```typescript
import { createApp } from 'vue'
import App from './App.vue'
import ApronDesignVue from '@apron-design/vue'
import '@apron-design/react/styles'

createApp(App)
  .use(ApronDesignVue)
  .mount('#app')
```


### 按需加载
`@apron-design/vue` 的组件默认支持按需加载。

```vue
<template>
  <ad-button>按钮</ad-button>
</template>

<script setup>
import { AdButton } from '@apron-design/react'
</script>
```
### 在 Nuxt3 上使用
首先，确保你的 Nuxt3 项目已经创建。如果还没有，可以使用以下命令创建：
```bash
npx nuxt@latest init my-nuxt-app
cd my-nuxt-app
```
然后安装 Apron Design：
```bash
npm install @apron-design/react
```
在项目根目录创建 `plugins/apron-design.ts`：
```typescript
import '@apron-design/react/styles'

export default defineNuxtPlugin(() => {
  // 插件初始化
})
```
或者直接在 `nuxt.config.ts` 中配置：
```typescript
export default defineNuxtConfig({
  css: ['@apron-design/react/styles'],
})
```
在组件中使用：
```vue
<template>
  <ad-button>按钮</ad-button>
</template>

<script setup>
import { AdButton } from '@apron-design/react'
</script>
```