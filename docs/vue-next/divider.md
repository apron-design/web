# 分割线 Divider

区隔内容的分割线，可用于对不同内容进行分组或分隔。

## 何时使用

- 对不同内容区域进行分隔
- 对长列表或表单进行分组
- 创建视觉上的层次感

## 示例

### 基础用法

最简单的用法，渲染一条水平分割线。
:::demo
```vue
<template>
  <div>
    <p>这是第一段内容</p>
    <ad-divider />
    <p>这是第二段内容</p>
  </div>
</template>
```
:::

### 虚线分割线

通过设置 `dashed` 属性渲染虚线分割线。
:::demo
```vue
<template>
  <div>
    <p>实线分割线</p>
    <ad-divider />
    <p>虚线分割线</p>
    <ad-divider dashed />
    <p>内容继续</p>
  </div>
</template>
```
:::

### 带文字的分割线

给分割线添加文字，方便描述或分隔不同内容。
:::demo
```vue
<template>
  <div>
    <p>第一部分内容</p>
    <ad-divider>或者</ad-divider>
    <p>第二部分内容</p>
  </div>
</template>
```
:::

### 文字对齐方式

通过 `align` 属性控制文字在分割线中的对齐方式。
:::demo
```vue
<template>
  <div>
    <ad-divider align="left">左对齐</ad-divider>
    <ad-divider align="center">居中对齐</ad-divider>
    <ad-divider align="right">右对齐</ad-divider>
  </div>
</template>
```
:::

### 虚线带文字

结合 `dashed` 和文字内容，创建虚线带文字的分割线。
:::demo
```vue
<template>
  <div>
    <ad-divider dashed>虚线分割</ad-divider>
    <ad-divider align="center" dashed>居中虚线分割</ad-divider>
    <ad-divider align="right" dashed>右对齐虚线分割</ad-divider>
  </div>
</template>
```
:::

### 完整示例

展示分割线的各种使用方式。
:::demo
```vue
<template>
  <div>
    <p>这是第一段内容，展示无文字分割线。</p>
    <ad-divider />
    
    <p>这是第二段内容，展示虚线分割线。</p>
    <ad-divider dashed />
    
    <p>这是第三段内容，展示带文字的分割线。</p>
    <ad-divider align="center">或者</ad-divider>
    
    <p>这是第四段内容，展示右对齐的虚线分割。</p>
    <ad-divider align="right" dashed>结束</ad-divider>
    
    <p>最后一段内容。</p>
  </div>
</template>
```
:::

## API

### ad-divider

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dashed | 是否为虚线 | `boolean` | `false` |
| align | 文字对齐方式 | `'left' \| 'center' \| 'right'` | `'left'` |
| children | 分割线中的文字内容 | `string` | - |
| className | 自定义类名 | `string` | - |