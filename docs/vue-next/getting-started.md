# 开始使用

## 安装 Apron Design Vue Next

需要同时安装 vue >= 3.0。

在开始之前，你可能需要安装 npx。

首先，确保你的 Vue 项目已经创建。如果还没有，可以使用以下命令创建：

```bash
npm create vue@latest my-app
cd my-app
```

然后安装 Apron Design

```bash
npm install @apron-design/vue-next --save
```

然后在 `main.ts` 或 `main.js` 中导入样式

```typescript
import '@apron-design/vue-next/styles'
```

## 在 Nuxt.js 上使用

首先，确保你的 Nuxt.js 项目已经创建。如果还没有，可以使用以下命令创建：

```bash
npx nuxi@latest init my-app
cd my-app
```

然后安装 Apron Design：

```bash
npm install @apron-design/vue-next
```

对于 **Nuxt 3+**，在 `nuxt.config.ts` 中添加：

```ts
export default defineNuxtConfig({
  css: [
    '@apron-design/vue-next/styles'
  ],
  modules: [
    '@apron-design/nuxt'
  ]
})
```

### 使用 Vite 创建 Vue 应用

你也可以使用 Vite 快速创建 Vue 应用

```bash
# 使用 npm
npm create vite@latest my-vue-app -- --template vue
# 或使用 yarn
yarn create vite my-vue-app --template vue
# 或使用 pnpm
pnpm create vite my-vue-app --template vue

# 进入项目并安装依赖
cd my-vue-app
npm install
npm run dev
```

# 安全建议

由于 Vue 的安全更新，我们强烈建议您定期更新您的 Vue 版本到最新版。