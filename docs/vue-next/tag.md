# 标签 Tag

Tag 组件用于标记和分类内容，可以作为关键词或小型状态指示器使用。

## 基础用法

最简单的用法是直接使用 Tag 组件包裹文本内容。
:::demo
```vue
<template>
  <ad-tag>标签</ad-tag>
</template>
```
:::

## 变体

Tag 组件提供两种变体：`primary` 和 `default`。
:::demo
```vue
<template>
  <ad-space>
    <ad-tag variant="primary">Primary 标签</ad-tag>
    <ad-tag variant="default">Default 标签</ad-tag>
  </ad-space>
</template>
```
:::

## 可关闭标签

通过设置 `closable` 属性，可以让标签变成可关闭的状态。当用户点击关闭按钮时会触发 `onClose` 回调。
:::demo
```vue
<template>
  <ad-space>
    <ad-tag variant="primary" closable @close="() => console.log('Primary closed')">
      Primary 可关闭
    </ad-tag>
    <ad-tag variant="default" closable @close="() => console.log('Default closed')">
      Default 可关闭
    </ad-tag>
  </ad-space>
</template>
```
:::

## 交互示例

以下是一个更复杂的交互示例，展示了如何动态管理标签：
:::demo
```vue
<template>
  <ad-space wrap>
    <ad-tag v-for="tag in dynamicTags" :key="tag" closable @close="handleClose(tag)">
      {{ tag }}
    </ad-tag>
    <span v-if="dynamicTags.length === 0" style="color: #a1a1aa;">所有标签已删除</span>
  </ad-space>
</template>

<script setup>
import { ref } from 'vue';

const dynamicTags = ref(['标签1', '标签2', '标签3', '标签4']);
const aaa = 'aaa'

const handleClose = (tagToRemove) => {
  dynamicTags.value = dynamicTags.value.filter((tag) => tag !== tagToRemove);
};
</script>
```
:::

## 使用场景

### 标签组

在实际应用中，Tag 组件通常以组的形式出现，用于表示技术栈、分类等信息。
:::demo
```vue
<template>
  <ad-space wrap>
    <ad-tag variant="primary">React</ad-tag>
    <ad-tag variant="primary">TypeScript</ad-tag>
    <ad-tag variant="primary">Vue</ad-tag>
    <ad-tag variant="default">JavaScript</ad-tag>
    <ad-tag variant="default">CSS</ad-tag>
  </ad-space>
</template>
```
:::

### 状态标签

Tag 组件也常用于表示不同的状态。
:::demo
```vue
<template>
  <ad-space>
    <ad-tag variant="primary">进行中</ad-tag>
    <ad-tag variant="default">已完成</ad-tag>
    <ad-tag variant="default">待处理</ad-tag>
  </ad-space>
</template>
```
:::

### 可编辑标签

结合状态管理，可以创建可编辑的标签系统。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div style="color: #71717a; font-size: 14px;">点击 X 删除标签</div>
    <ad-space wrap>
      <ad-tag
        v-for="tag in editableTags"
        :key="tag"
        variant="default"
        closable
        @close="handleTagClose(tag)"
      >
        {{ tag }}
      </ad-tag>
    </ad-space>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const editableTags = ref(['前端', '后端', '设计']);

const handleTagClose = (tagToRemove) => {
  editableTags.value = editableTags.value.filter((tag) => tag !== tagToRemove);
};
</script>
```
:::

## API

### ad-tag

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| variant | 标签变体 | `'primary' \| 'default'` | `'default'` |
| closable | 是否可关闭 | `boolean` | `false` |
| onClose | 关闭回调 | `Function` | `-` |
| children | 子元素 | `string` | `-` |