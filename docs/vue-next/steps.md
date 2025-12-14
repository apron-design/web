# 步骤条 Steps

Steps 组件用于引导用户按照流程完成任务，显示当前所在步骤和进度。

## 何时使用

- 需要引导用户按步骤完成复杂任务时
- 显示多步骤表单的进度时
- 展示操作流程或状态变更过程时

## 示例

### 基础用法

最简单的 Steps 组件使用方式。
:::demo
```vue
<template>
  <ad-steps :items="defaultItems" :current="2" label-placement="bottom" />
</template>

<script setup>
const defaultItems = [
  { title: 'Step 1' },
  { title: 'Step 2' },
  { title: 'Current' },
  { title: 'Not reach' },
];
</script>
```
:::

### 标签位置

Steps 组件支持多种标签位置。

#### 标签在底部（默认）
:::demo
```vue
<template>
  <ad-steps :items="defaultItems" :current="2" label-placement="bottom" />
</template>

<script setup>
const defaultItems = [
  { title: 'Step 1' },
  { title: 'Step 2' },
  { title: 'Current' },
  { title: 'Not reach' },
];
</script>
```
:::

#### 标签在顶部
:::demo
```vue
<template>
  <ad-steps :items="defaultItems" :current="2" label-placement="top" />
</template>

<script setup>
const defaultItems = [
  { title: 'Step 1' },
  { title: 'Step 2' },
  { title: 'Current' },
  { title: 'Not reach' },
];
</script>
```
:::

#### 标签在上下两侧
:::demo
```vue
<template>
  <ad-steps
    :items="items"
    :current="1"
    label-placement="both"
  />
</template>

<script setup>
const items = [
  { title: 'Step 1', subtitle: 'Step 2' },
  { title: 'Current', subtitle: 'Step 2' },
  { title: 'Current', subtitle: 'Not reach' },
  { title: 'Not reach', subtitle: '' },
];
</script>
```
:::

#### 所有标签位置对比
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 48px;">
    <div>
      <p style="margin: 0 0 16px 0; color: #666; font-size: 14px;">Label Bottom (Default)</p>
      <ad-steps :items="defaultItems" :current="2" label-placement="bottom" />
    </div>
    <div>
      <p style="margin: 0 0 16px 0; color: #666; font-size: 14px;">Label Top</p>
      <ad-steps :items="defaultItems" :current="2" label-placement="top" />
    </div>
    <div>
      <p style="margin: 0 0 16px 0; color: #666; font-size: 14px;">Label Both</p>
      <ad-steps
        :items="bothItems"
        :current="1"
        label-placement="both"
      />
    </div>
  </div>
</template>

<script setup>
const defaultItems = [
  { title: 'Step 1' },
  { title: 'Step 2' },
  { title: 'Current' },
  { title: 'Not reach' },
];

const bothItems = [
  { title: 'Step 1', subtitle: 'Step 2' },
  { title: 'Current', subtitle: 'Step 2' },
  { title: 'Current', subtitle: 'Not reach' },
  { title: 'Not reach', subtitle: '' },
];
</script>
```
:::

### 不同当前步骤

展示不同当前步骤的效果。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 32px;">
    <div>
      <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">Current: 0 (First)</p>
      <ad-steps :items="defaultItems" :current="0" />
    </div>
    <div>
      <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">Current: 1</p>
      <ad-steps :items="defaultItems" :current="1" />
    </div>
    <div>
      <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">Current: 2</p>
      <ad-steps :items="defaultItems" :current="2" />
    </div>
    <div>
      <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">Current: 3 (Last)</p>
      <ad-steps :items="defaultItems" :current="3" />
    </div>
  </div>
</template>

<script setup>
const defaultItems = [
  { title: 'Step 1' },
  { title: 'Step 2' },
  { title: 'Current' },
  { title: 'Not reach' },
];
</script>
```
:::

### 全部完成

当 current 值大于最大索引时，所有步骤都会显示为已完成状态。
:::demo
```vue
<template>
  <ad-steps
    :items="items"
    :current="4"
  />
</template>

<script setup>
const items = [
  { title: 'Step 1' },
  { title: 'Step 2' },
  { title: 'Step 3' },
  { title: 'Step 4' },
];
</script>
```
:::

### 自定义步骤宽度

可以为每个步骤单独设置宽度。
:::demo
```vue
<template>
  <ad-steps
    :items="items"
    :current="1"
  />
</template>

<script setup>
const items = [
  { title: 'Short', width: 100 },
  { title: 'Medium Step', width: 150 },
  { title: 'Longer Step Name', width: 200 },
  { title: 'End' },
];
</script>
```
:::

### 三步骤
:::demo
```vue
<template>
  <ad-steps
    :items="items"
    :current="1"
  />
</template>

<script setup>
const items = [
  { title: 'First' },
  { title: 'Second' },
  { title: 'Third' },
];
</script>
```
:::

### 五步骤
:::demo
```vue
<template>
  <ad-steps
    :items="items"
    :current="2"
  />
</template>

<script setup>
const items = [
  { title: 'Step 1' },
  { title: 'Step 2' },
  { title: 'Step 3' },
  { title: 'Step 4' },
  { title: 'Step 5' },
];
</script>
```
:::

### 订单流程
:::demo
```vue
<template>
  <ad-steps
    :items="items"
    :current="2"
  />
</template>

<script setup>
const items = [
  { title: '下单' },
  { title: '付款' },
  { title: '发货' },
  { title: '签收' },
];
</script>
```
:::

### 注册流程
:::demo
```vue
<template>
  <ad-steps
    :items="items"
    :current="1"
    label-placement="both"
  />
</template>

<script setup>
const items = [
  { title: '填写信息', subtitle: '基本信息' },
  { title: '验证身份', subtitle: '手机验证' },
  { title: '设置密码', subtitle: '安全设置' },
  { title: '完成注册', subtitle: '开始使用' },
];
</script>
```
:::

### 暗色模式

Steps 组件在暗色模式下会自动适配主题颜色。
:::demo
```vue
<template>
  <div
    data-theme="dark"
    style="
      padding: 32px;
      background-color: #18181b;
      border-radius: 12px;
    "
  >
    <ad-steps :items="defaultItems" :current="2" />
  </div>
</template>

<script setup>
const defaultItems = [
  { title: 'Step 1' },
  { title: 'Step 2' },
  { title: 'Current' },
  { title: 'Not reach' },
];
</script>
```
:::

## API

### Steps Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| items | 步骤数据 | StepItem[] | - |
| current | 当前步骤索引（从 0 开始） | number | `0` |
| label-placement | 标签位置 | `'top'` \| `'bottom'` \| `'both'` | `'bottom'` |
| class-name | 自定义类名 | string | - |

### StepItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 步骤标题 | string | - |
| subtitle | 步骤副标题（用于 both 模式） | string | - |
| status | 步骤状态 | `'completed'` \| `'current'` \| `'pending'` | - |
| width | 单独设置宽度 | number \| string | - |

## 注意事项

1. Steps 组件用于展示多步骤流程的进度状态
2. 通过 `current` 属性控制当前步骤，索引从 0 开始
3. 通过 `label-placement` 属性控制标签位置：
   - `'bottom'`（默认）：标签显示在步骤图标下方
   - `'top'`：标签显示在步骤图标上方
   - `'both'`：标签同时显示在步骤图标上下方，需要设置 `subtitle` 属性
4. 步骤状态会根据 `current` 值自动计算：
   - 索引小于 `current` 的步骤为已完成（completed）
   - 索引等于 `current` 的步骤为当前步骤（current）
   - 索引大于 `current` 的步骤为待处理（pending）
5. 可以为每个步骤单独设置宽度，通过 `width` 属性实现
6. 当 `current` 值大于最大索引时，所有步骤都会显示为已完成状态
7. 连接线的颜色会根据相邻步骤的状态动态变化
8. 在暗色模式下，Steps 组件会自动适配主题颜色