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

### 完整示例

展示空状态的各种使用方式。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 32px;">
    <div>
      <h3>默认空状态</h3>
      <ad-empty />
    </div>

    <div>
      <h3>自定义文字</h3>
      <ad-empty>没有找到相关数据</ad-empty>
    </div>

    <div>
      <h3>自定义图标</h3>
      <ad-empty :icon="FileIcon">暂无文件</ad-empty>
    </div>

    <div>
      <h3>带操作按钮</h3>
      <ad-empty>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
          <span>暂无数据</span>
          <ad-button variant="primary" size="sm">立即创建</ad-button>
        </div>
      </ad-empty>
    </div>
  </div>
</template>

<script setup>
const FileIcon = {
  template: `
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  `
}
</script>
```
:::

## API

### ad-empty

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | 自定义图标 | `VNode` | - |
| children | 提示文字（插槽） | `string` | `'暂无数据'` |
| className | 自定义类名 | `string` | - |