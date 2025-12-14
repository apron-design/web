# 文字提示 Tooltip

Tooltip 组件用于在用户将鼠标悬停在元素上时显示简短的提示信息。

## 基础用法

Tooltip 组件需要包裹一个触发元素，并通过 `content` 属性设置提示内容。
:::demo
```vue
<template>
  <ad-tooltip content="这是一个提示信息">
    <button style="padding: 8px 16px; cursor: pointer;">悬停显示提示</button>
  </ad-tooltip>
</template>
```
:::

## 不同内容

Tooltip 支持不同长度和类型的提示内容。
:::demo
```vue
<template>
  <div style="display: flex; gap: 24px; align-items: center;">
    <ad-tooltip content="简短提示">
      <span style="cursor: pointer; text-decoration: underline;">短文本</span>
    </ad-tooltip>
    <ad-tooltip content="这是一段较长的提示信息，用于说明某个功能的具体用途">
      <span style="cursor: pointer; text-decoration: underline;">长文本</span>
    </ad-tooltip>
    <ad-tooltip content="🎉 支持 Emoji">
      <span style="cursor: pointer; text-decoration: underline;">Emoji</span>
    </ad-tooltip>
  </div>
</template>
```
:::

## 在按钮上使用

Tooltip 常用于为按钮提供额外的说明信息。
:::demo
```vue
<template>
  <div style="display: flex; gap: 16px;">
    <ad-tooltip content="保存当前内容">
      <button style="padding: 8px 16px; cursor: pointer;">保存</button>
    </ad-tooltip>
    <ad-tooltip content="删除此项目">
      <button style="padding: 8px 16px; cursor: pointer; color: #ef4444;">删除</button>
    </ad-tooltip>
    <ad-tooltip content="此操作不可用">
      <button style="padding: 8px 16px; cursor: not-allowed; opacity: 0.5;" disabled>
        要用
      </button>
    </ad-tooltip>
  </div>
</template>
```
:::

## 在图标上使用

Tooltip 也常用于为图标提供说明信息。
:::demo
```vue
<template>
  <div style="display: flex; gap: 24px; align-items: center;">
    <ad-tooltip content="设置">
      <span style="font-size: 20px; cursor: pointer;">⚙️</span>
    </ad-tooltip>
    <ad-tooltip content="帮助">
      <span style="font-size: 20px; cursor: pointer;">❓</span>
    </ad-tooltip>
    <ad-tooltip content="通知">
      <span style="font-size: 20px; cursor: pointer;">🔔</span>
    </ad-tooltip>
    <ad-tooltip content="用户">
      <span style="font-size: 20px; cursor: pointer;">👤</span>
    </ad-tooltip>
  </div>
</template>
```
:::

## 富文本内容

Tooltip 的内容可以是任意的元素，支持富文本格式。
:::demo
```vue
<template>
  <ad-tooltip content="<div style='text-align: center;'><strong>快捷键</strong><br /><code style='font-size: 12px;'>Ctrl + S</code></div>">
    <button style="padding: 8px 16px; cursor: pointer;">查看快捷键</button>
  </ad-tooltip>
</template>
```
:::

## API

### ad-tooltip

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 提示内容 | `string` | `-` |
| children | 触发元素 | `VNode` | `-` |