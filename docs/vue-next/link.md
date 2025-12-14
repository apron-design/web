# 链接 Link

链接组件，用于页面跳转或外部链接。

## 何时使用

- 需要在页面中添加可点击的链接时
- 需要统一链接样式时
- 需要区分不同类型链接（主要、次要、危险）时

## 示例

### 基础用法

最简单的用法，创建一个基本链接。
:::demo
```vue
<template>
  <ad-link href="#">默认链接</ad-link>
</template>
```
:::

### 链接变种

支持主色和次色两种变种。
:::demo
```vue
<template>
  <div style="display: flex; gap: 16px;">
    <ad-link href="#" variant="primary">
      Primary 链接
    </ad-link>
    <ad-link href="#" variant="secondary">
      Secondary 链接
    </ad-link>
  </div>
</template>
```
:::

### 下划线样式

支持三种下划线显示方式：始终显示、悬停显示、从不显示。
:::demo
```vue
<template>
  <div style="display: flex; gap: 16px;">
    <ad-link href="#" underline="always">
      始终有下划线
    </ad-link>
    <ad-link href="#" underline="hover">
      悬停时有下划线
    </ad-link>
    <ad-link href="#" underline="never">
      从不显示下划线
    </ad-link>
  </div>
</template>
```
:::

### 危险链接

用于表示危险操作的链接，显示为红色。
:::demo
```vue
<template>
  <div style="display: flex; gap: 16px;">
    <ad-link href="#" danger>
      危险链接
    </ad-link>
    <ad-link href="#" danger underline="always">
      危险链接 (带下划线)
    </ad-link>
  </div>
</template>
```
:::

### 新窗口打开

设置 target="_blank" 使链接在新窗口打开。
:::demo
```vue
<template>
  <ad-link href="https://example.com" target="_blank" rel="noopener noreferrer">
    新窗口打开
  </ad-link>
</template>
```
:::

### 内联文本中的链接

链接可以嵌入到普通文本中使用。
:::demo
```vue
<template>
  <span>
    这是一段包含 
    <ad-link href="#" variant="primary">
      Primary 链接
    </ad-link> 
    和 
    <ad-link href="#" variant="secondary">
      Secondary 链接
    </ad-link> 
    的文本。
  </span>
</template>
```
:::

### 所有变体展示

展示所有链接变体的组合效果。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <h4>变种 (Variant)</h4>
    <div style="display: flex; gap: 16px;">
      <ad-link href="#" variant="primary">
        Primary 链接
      </ad-link>
      <ad-link href="#" variant="secondary">
        Secondary 链接
      </ad-link>
    </div>

    <h4>下划线 (Underline)</h4>
    <div style="display: flex; gap: 16px;">
      <ad-link href="#" underline="always">
        Always
      </ad-link>
      <ad-link href="#" underline="hover">
        Hover
      </ad-link>
      <ad-link href="#" underline="never">
        Never
      </ad-link>
    </div>

    <h4>危险链接 (Danger)</h4>
    <div style="display: flex; gap: 16px;">
      <ad-link href="#" danger>
        危险链接
      </ad-link>
      <ad-link href="#" danger underline="always">
        危险链接 (带下划线)
      </ad-link>
    </div>

    <h4>内联文本</h4>
    <div>
      <span>
        这是一段包含 
        <ad-link href="#" variant="primary">
          Primary 链接
        </ad-link> 
        和 
        <ad-link href="#" variant="secondary">
          Secondary 链接
        </ad-link> 
        的文本。
      </span>
    </div>
  </div>
</template>
```
:::

## API

### ad-link

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| variant | 链接变种 | `'primary' \| 'secondary'` | `'secondary'` |
| underline | 下划线显示方式 | `'always' \| 'hover' \| 'never'` | `'never'` |
| danger | 是否为危险链接（红色） | `boolean` | `false` |
| href | 链接地址 | `string` | - |
| target | 链接打开方式 | `'_self' \| '_blank' \| '_parent' \| '_top'` | - |
| children | 链接文本 | `string` | - |
| className | 自定义类名 | `string` | - |