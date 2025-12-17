# 骨架屏 Skeleton

骨架屏是一种用于在内容加载过程中提供视觉反馈的 UI 组件，通过显示占位元素来提升用户体验。

## 何时使用

- 页面或组件内容需要异步加载时
- 希望在内容加载过程中提供更好的用户体验时
- 需要减少页面闪烁和布局跳动时

## 示例

### 基础用法

最简单的骨架屏使用方式。
:::demo
```vue
<template>
  <div style="width: 400px;">
    <ad-skeleton :loading="true" />
  </div>
</template>
```
:::

### 与内容结合使用

骨架屏常与实际内容结合使用，在加载完成时切换显示。
:::demo
```vue
<template>
  <div style="width: 400px;">
    <ad-button @click="loading = !loading" style="margin-bottom: 16px;">
      {{ loading ? '显示内容' : '显示骨架屏' }}
    </ad-button>
    <ad-skeleton :loading="loading">
      <div style="display: flex; gap: 16px;">
        <img
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
          alt="avatar"
          style="width: 40px; height: 40px; border-radius: 50%;"
        />
        <div>
          <h4 style="margin: 0 0 8px 0;">用户名称</h4>
          <p style="margin: 0; color: #666;">
            这是用户的个人简介，可以包含多行文本内容。
          </p>
        </div>
      </div>
    </ad-skeleton>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(true);
</script>
```
:::

### 无动画效果

通过 `animated` 属性可以关闭骨架屏的动画效果。
:::demo
```vue
<template>
  <div style="width: 400px;">
    <ad-skeleton :loading="true" :animated="false" />
  </div>
</template>
```
:::

### 基础元素变体

Skeleton 提供了多种基础元素变体。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
    <div>
      <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">Text</p>
      <ad-skeleton-element variant="text" width="100%" />
    </div>
    <div>
      <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">Circular</p>
      <ad-skeleton-element variant="circular" :width="40" :height="40" />
    </div>
    <div>
      <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">Rectangular</p>
      <ad-skeleton-element variant="rectangular" width="100%" :height="100" />
    </div>
    <div>
      <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">Rounded</p>
      <ad-skeleton-element variant="rounded" width="100%" :height="100" />
    </div>
  </div>
</template>
```
:::

### 头像骨架

用于显示用户头像的加载状态。
:::demo
```vue
<template>
  <div style="display: flex; gap: 16px; align-items: center;">
    <ad-skeleton-avatar size="sm" />
    <ad-skeleton-avatar size="md" />
    <ad-skeleton-avatar size="lg" />
    <ad-skeleton-avatar :size="64" />
    <ad-skeleton-avatar size="md" shape="square" />
  </div>
</template>
```
:::

### 标题和段落骨架

用于显示标题和段落文本的加载状态。
:::demo
```vue
<template>
  <div style="width: 400px; display: flex; flex-direction: column; gap: 16px;">
    <ad-skeleton-title />
    <ad-skeleton-paragraph :rows="3" />
  </div>
</template>
```
:::

### 段落宽度控制

可以自定义段落每一行的宽度。
:::demo
```vue
<template>
  <div style="width: 400px; display: flex; flex-direction: column; gap: 24px;">
    <div>
      <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">默认宽度</p>
      <ad-skeleton-paragraph :rows="4" />
    </div>
    <div>
      <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">自定义每行宽度</p>
      <ad-skeleton-paragraph :rows="4" :width="['100%', '80%', '90%', '50%']" />
    </div>
    <div>
      <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">统一宽度</p>
      <ad-skeleton-paragraph :rows="4" width="80%" />
    </div>
  </div>
</template>
```
:::

### 按钮骨架

用于显示按钮的加载状态。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div style="display: flex; gap: 16px; align-items: center;">
      <ad-skeleton-button size="sm" />
      <ad-skeleton-button size="md" />
      <ad-skeleton-button size="lg" />
    </div>
    <div style="display: flex; gap: 16px; align-items: center;">
      <ad-skeleton-button shape="default" />
      <ad-skeleton-button shape="circle" />
      <ad-skeleton-button shape="round" />
    </div>
    <div style="width: 300px;">
      <ad-skeleton-button block />
    </div>
  </div>
</template>
```
:::

### 图片骨架

用于显示图片的加载状态。
:::demo
```vue
<template>
  <div style="display: flex; gap: 16px;">
    <ad-skeleton-image :width="100" :height="100" />
    <ad-skeleton-image :width="150" :height="100" />
    <ad-skeleton-image :width="200" :height="150" />
  </div>
</template>
```
:::

### 卡片骨架

用于显示卡片组件的加载状态。
:::demo
```vue
<template>
  <div
    style="
      width: 300px;
      padding: 16px;
      border: 1px solid #e0e0e0;
      border-radius: 12px;
    "
  >
    <ad-skeleton-image width="100%" :height="150" />
    <div style="margin-top: 16px;">
      <ad-skeleton-title width="60%" />
      <div style="margin-top: 12px;">
        <ad-skeleton-paragraph :rows="2" />
      </div>
    </div>
    <div style="margin-top: 16px; display: flex; gap: 8px;">
      <ad-skeleton-button size="sm" />
      <ad-skeleton-button size="sm" />
    </div>
  </div>
</template>
```
:::

### 列表骨架

用于显示列表项的加载状态。
:::demo
```vue
<template>
  <div style="width: 400px; display: flex; flex-direction: column; gap: 16px;">
    <div v-for="i in [1, 2, 3]" :key="i" style="display: flex; gap: 12px;">
      <ad-skeleton-avatar />
      <div style="flex: 1;">
        <ad-skeleton-title width="40%" />
        <div style="margin-top: 8px;">
          <ad-skeleton-paragraph :rows="2" />
        </div>
      </div>
    </div>
  </div>
</template>
```
:::

### 表格骨架

用于显示表格的加载状态。
:::demo
```vue
<template>
  <div style="width: 600px;">
    <table style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr>
          <th
            v-for="header in ['ID', '名称', '状态', '操作']"
            :key="header"
            style="
              padding: 12px;
              text-align: left;
              border-bottom: 1px solid #e0e0e0;
              background: #f5f5f5;
            "
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in [1, 2, 3, 4, 5]" :key="i">
          <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">
            <ad-skeleton-element variant="text" :width="30" />
          </td>
          <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">
            <ad-skeleton-element variant="text" :width="100" />
          </td>
          <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">
            <ad-skeleton-element variant="text" :width="60" />
          </td>
          <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">
            <ad-skeleton-button size="sm" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
```
:::

### 个人信息卡片骨架

用于显示个人信息卡片的加载状态。
:::demo
```vue
<template>
  <div
    style="
      width: 300px;
      padding: 24px;
      border: 1px solid #e0e0e0;
      border-radius: 12px;
      text-align: center;
    "
  >
    <div style="display: flex; justify-content: center;">
      <ad-skeleton-avatar :size="80" />
    </div>
    <div style="margin-top: 16px;">
      <ad-skeleton-title width="50%" />
    </div>
    <div style="margin-top: 8px; display: flex; justify-content: center;">
      <ad-skeleton-element variant="text" :width="120" />
    </div>
    <div style="margin-top: 16px;">
      <ad-skeleton-paragraph :rows="2" :width="['80%', '60%']" />
    </div>
    <div style="margin-top: 16px; display: flex; justify-content: center; gap: 8px;">
      <ad-skeleton-button shape="round" />
      <ad-skeleton-button shape="round" />
    </div>
  </div>
</template>
```
:::

## API

### ad-skeleton

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| loading | 是否显示骨架屏 | boolean | `true` |
| animated | 是否显示动画 | boolean | `true` |
| class-name | 自定义类名 | string | - |

### ad-skeleton-element

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| variant | 形状 | `'text'` \| `'circular'` \| `'rectangular'` \| `'rounded'` | `'text'` |
| width | 宽度 | number \| string | - |
| height | 高度 | number \| string | - |
| animated | 是否显示动画 | boolean | `true` |
| class-name | 自定义类名 | string | - |

### ad-skeleton-avatar

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 尺寸 | number \| `'sm'` \| `'md'` \| `'lg'` | `'md'` |
| shape | 形状 | `'circle'` \| `'square'` | `'circle'` |
| animated | 是否显示动画 | boolean | `true` |
| class-name | 自定义类名 | string | - |

### ad-skeleton-title

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 宽度 | number \| string | `'40%'` |
| animated | 是否显示动画 | boolean | `true` |
| class-name | 自定义类名 | string | - |

### ad-skeleton-paragraph

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| rows | 行数 | number | `3` |
| width | 每行宽度，可以是数组 | number \| string \| (number \| string)[] | - |
| animated | 是否显示动画 | boolean | `true` |
| class-name | 自定义类名 | string | - |

### ad-skeleton-button

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 尺寸 | `'sm'` \| `'md'` \| `'lg'` | `'md'` |
| shape | 形状 | `'default'` \| `'circle'` \| `'round'` | `'default'` |
| block | 是否块级 | boolean | `false` |
| animated | 是否显示动画 | boolean | `true` |
| class-name | 自定义类名 | string | - |

### ad-skeleton-image

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 宽度 | number \| string | `200` |
| height | 高度 | number \| string | `200` |
| animated | 是否显示动画 | boolean | `true` |
| class-name | 自定义类名 | string | - |

## 注意事项

1. 骨架屏主要用于在内容加载过程中提供视觉反馈，提升用户体验
2. 通过 `loading` 属性控制是否显示骨架屏
3. 通过 `animated` 属性可以控制是否显示加载动画效果
4. Skeleton 提供了多种预设组件：
   - `ad-skeleton-element`：基础元素骨架
   - `ad-skeleton-avatar`：头像骨架
   - `ad-skeleton-title`：标题骨架
   - `ad-skeleton-paragraph`：段落骨架
   - `ad-skeleton-button`：按钮骨架
   - `ad-skeleton-image`：图片骨架
5. 可以通过 `width` 和 `height` 属性自定义骨架元素的尺寸
6. `ad-skeleton-paragraph` 支持自定义每行的宽度，可以通过数组形式分别设置每行宽度
7. 在暗色模式下，骨架屏会自动适配主题颜色
8. 骨架屏组件不包含任何业务逻辑，仅用于UI展示