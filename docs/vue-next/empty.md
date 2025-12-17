# 空状态 Empty

用于展示空状态的组件，通常在没有数据时显示。

## 何时使用

- 数据加载完成但为空时
- 搜索无结果时
- 页面初始化状态时
- 任何需要提示用户当前无数据的场景

## 示例

### 基础用法

最简单的用法，显示默认的空状态图标和文字。
:::demo
```vue
<template>
  <ad-empty />
</template>
```
:::

### 自定义文字

可以通过子元素来自定义提示文字。
:::demo
```vue
<template>
  <ad-empty>没有找到相关数据</ad-empty>
</template>
```
:::

### 自定义图标

通过 `icon` 属性可以自定义空状态图标。
:::demo
```vue
<template>
  <ad-empty :icon="SearchIcon">未找到搜索结果</ad-empty>
</template>

<script setup>
const SearchIcon = {
  template: `
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  `
}
</script>
```
:::

### 带操作按钮

可以在空状态中添加操作按钮，引导用户进行下一步操作。
:::demo
```vue
<template>
  <ad-empty>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
      <span>暂无数据</span>
      <ad-button variant="primary" size="sm">立即创建</ad-button>
    </div>
  </ad-empty>
</template>
```
:::

## API

### ad-empty

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | 自定义图标 | `VNode` | - |
| children | 提示文字（插槽） | `string` | `'暂无数据'` |
| className | 自定义类名 | `string` | - |