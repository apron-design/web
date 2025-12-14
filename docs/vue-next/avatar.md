# 头像 Avatar

用来代表用户或事物，支持图片、图标或字符展示。

## 何时使用

- 需要展示用户或事物的头像
- 需要多种尺寸和形状的头像展示
- 需要展示一组用户的头像

## 代码演示

### 基本用法

头像有三种类型：图片、图标和字符，其中图标和字符会自动根据内容调整背景色。

:::demo
```vue
<template>
  <ad-space>
    <ad-avatar>A</ad-avatar>
    <ad-avatar><UserIcon /></ad-avatar>
    <ad-avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" />
  </ad-space>
</template>

<script setup>
const UserIcon = {
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="4" fill="#393939" />
      <path d="M20 19C20 16.7909 16.4183 15 12 15C7.58172 15 4 16.7909 4 19" stroke="#393939" stroke-width="2" stroke-linecap="round" />
    </svg>
  `
}
</script>
```
:::

### 尺寸

头像有四种尺寸：迷你（mini）、小（small）、中（middle，默认）、大（large）。

:::demo
```vue
<template>
  <ad-space>
    <ad-avatar size="mini">U</ad-avatar>
    <ad-avatar size="small">U</ad-avatar>
    <ad-avatar size="middle">U</ad-avatar>
    <ad-avatar size="large">U</ad-avatar>
  </ad-space>
</template>
```
:::

### 形状

头像支持两种形状：圆形（默认）和方形。

:::demo
```vue
<template>
  <ad-space>
    <ad-avatar>A</ad-avatar>
    <ad-avatar square>A</ad-avatar>
  </ad-space>
</template>
```
:::

### 头像组

头像组合展现，常用于展示一组用户。

:::demo
```vue
<template>
  <ad-avatar-group>
    <ad-avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=User1" />
    <ad-avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=User2" />
    <ad-avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=User3" />
    <ad-avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=User4" />
  </ad-avatar-group>
</template>
```
:::

### 自定义样式

可以自定义头像的背景色、字体颜色等样式。

:::demo
```vue
<template>
  <ad-space>
    <ad-avatar style="background-color: #4C9EEA; color: #fff;">A</ad-avatar>
    <ad-avatar style="background-color: #22c55e; color: #fff;">B</ad-avatar>
    <ad-avatar style="background-color: #f59e0b; color: #fff;">C</ad-avatar>
  </ad-space>
</template>
```
:::

## API

### ad-avatar

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 设置头像尺寸 | `mini` \| `small` \| `middle` \| `large` | `middle` |
| square | 是否为方形头像 | boolean | false |
| src | 图片头像的资源地址 | string | - |
| alt | 图片头像的替代文本 | string | - |
| children | 子元素（文字或图标） | string | - |

### ad-avatar-group

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| children | 子元素（ad-avatar 组件） | VNode | - |