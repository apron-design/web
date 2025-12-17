# 按钮 Button

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 代码演示

### 基本用法

基础的按钮用法。

:::demo
```vue
<template>
  <AdButton>Button</AdButton>
</template>
```
:::

### 按钮类型

按钮有五种类型：主按钮、次按钮、默认按钮、文字按钮和链接按钮。

:::demo
```vue
<template>
  <ad-space>
    <ad-button variant="primary">Primary</ad-button>
    <ad-button variant="secondary">Secondary</ad-button>
    <ad-button variant="default">Default</ad-button>
    <ad-button variant="text">Text</ad-button>
    <ad-button variant="link">Link</ad-button>
  </ad-space>
</template>
```
:::

### 按钮尺寸

按钮有两种尺寸：中号（40px）和小号（30px）。

:::demo
```vue
<template>
  <ad-space>
    <ad-button size="md" variant="primary">Medium (40px)</ad-button>
    <ad-button size="sm" variant="primary">Small (30px)</ad-button>
  </ad-space>
</template>
```
:::

### 虚线边框

通过 `dashed` 属性设置按钮边框为虚线样式。

:::demo
```vue
<template>
  <div style="display: flex; gap: 12px; align-items: center;">
    <ad-button variant="primary" dashed>Primary Dashed</ad-button>
    <ad-button variant="secondary" dashed>Secondary Dashed</ad-button>
    <ad-button variant="default" dashed>Default Dashed</ad-button>
  </div>
</template>
```
:::

### 危险按钮

通过 `danger` 属性设置危险按钮样式，可与其他属性组合使用。

:::demo
```vue
<template>
  <div style="display: flex; gap: 12px; align-items: center;">
    <ad-button variant="primary" danger>Primary Danger</ad-button>
    <ad-button variant="secondary" danger>Secondary Danger</ad-button>
    <ad-button variant="default" danger>Default Danger</ad-button>
    <ad-button variant="text" danger>Text Danger</ad-button>
    <ad-button variant="link" danger>Link Danger</ad-button>
  </div>
</template>
```
:::

### 危险虚线按钮

危险样式与虚线样式的组合。

:::demo
```vue
<template>
  <div style="display: flex; gap: 12px; align-items: center;">
    <ad-button variant="primary" danger dashed>Primary</ad-button>
    <ad-button variant="secondary" danger dashed>Secondary</ad-button>
    <ad-button variant="default" danger dashed>Default</ad-button>
  </div>
</template>
```
:::

### 加载中状态

通过 `loading` 属性设置按钮为加载中状态。

:::demo
```vue
<template>
  <ad-button loading>Loading...</ad-button>
</template>
```
:::

### 块级按钮

通过 `block` 属性将按钮宽度调整为其父容器宽度。

:::demo
```vue
<template>
  <div style="width: 300px;">
    <ad-button block>Block Button</ad-button>
  </div>
</template>
```
:::

### 禁用状态

通过 `disabled` 属性禁用按钮。

:::demo
```vue
<template>
  <div style="display: flex; gap: 12px; align-items: center;">
    <ad-button variant="primary" disabled>Primary</ad-button>
    <ad-button variant="secondary" disabled>Secondary</ad-button>
    <ad-button variant="default" disabled>Default</ad-button>
    <ad-button variant="text" disabled>Text</ad-button>
    <ad-button variant="link" disabled>Link</ad-button>
  </div>
</template>
```
:::

### 带图标按钮

通过 `#iconLeft` 和 `#iconRight` 命名插槽添加图标。
:::demo
```vue
<template>
  <div style="display: flex; gap: 12px; align-items: center;">
    <ad-button>
      <template #iconLeft>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </template>
      Search
    </ad-button>
    <ad-button>
      <template #iconRight>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </template>
      Next
    </ad-button>
    <ad-button>
      <template #iconLeft>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </template>
      <template #iconRight>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </template>
      Both Icons
    </ad-button>
  </div>
</template>
```
:::

## API

通过设置 Button 的属性来产生不同的按钮样式。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| variant | 设置按钮类型 | `primary` \| `secondary` \| `default` \| `text` \| `link` | `primary` |
| size | 设置按钮大小 | `md` \| `sm` | `md` |
| dashed | 设置按钮边框为虚线 | boolean | false |
| danger | 设置危险按钮 | boolean | false |
| loading | 设置按钮载入状态 | boolean | false |
| block | 将按钮宽度调整为其父宽度的选项 | boolean | false |
| disabled | 按钮失效状态 | boolean | false |
| class | 自定义类名 | `string` | - |

### Button Slots

| 名称 | 说明 |
| --- | --- |
| default | 按钮内容 |
| iconLeft | 左侧图标 |
| iconRight | 右侧图标 |

### Button Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击按钮时的回调 | `(event: MouseEvent) => void` |