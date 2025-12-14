# 警告提示 Alert

警告提示，展现需要关注的信息。

## 何时使用

- 当某个页面需要向用户显示警告的信息时
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭

## 代码演示

### 基本用法

最简单的用法，适用于简短的警告提示。

:::demo
```vue
<template>
  <ad-alert>
    Information goes here
  </ad-alert>
</template>
```
:::

### 四种样式

共有四种样式 `info`、`success`、`warning`、`error`。

:::demo
```vue
<template>
  <ad-space orientation="vertical">
    <ad-alert type="info">
      Information goes here
    </ad-alert>
    <ad-alert type="success">
      Success information goes here
    </ad-alert>
    <ad-alert type="warning">
      Warning information goes here
    </ad-alert>
    <ad-alert type="error">
      Error information goes here
    </ad-alert>
  </ad-space>
</template>
```
:::

### 自定义内容

可以自定义内容，以适应不同的场景。

:::demo
```vue
<template>
  <ad-alert type="success">
    <span>Your file <strong>report.pdf</strong> has been uploaded successfully!</span>
  </ad-alert>
</template>
```
:::

## API

通过设置 ad-alert 的属性来产生不同的警告提示样式。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 指定警告提示的样式 | `info` \| `success` \| `warning` \| `error` | `info` |
| class | 自定义类名 | string | - |