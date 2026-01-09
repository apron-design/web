# 安装指南

在本页面将会展示如果安装在项目中。

## 在 React 上使用
阅读[React 开始使用](/react/getting-started)
```bash
npm install @apron-design/react --save
```

### 导入样式
```typescript
import '@apron-design/react/styles'
```

### 按需加载
```jsx
import { Button } from '@apron-design/react'

export const App = () => {
  return <>
    <Button>按钮</Button>
  </>
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


## 在微信小程序使用

微信小程序版本正在探索一种最佳的构建模式，将会尽快公布。