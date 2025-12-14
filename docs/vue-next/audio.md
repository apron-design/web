# 音频 Audio

## 何时使用

音频组件用于播放音频内容，支持多种音频格式。

## 代码演示

### 基本用法

最简单的用法，创建一个基本音频播放器。

:::demo
```vue
<template>
  <ad-audio src="/path/to/audio.mp3" />
</template>
```
:::

### 自定义控件

可以通过 `controls` 属性控制是否显示默认控件。

:::demo
```vue
<template>
  <ad-audio src="/path/to/audio.mp3" :controls="false" />
</template>
```
:::

### 自动播放

通过 `autoplay` 属性设置音频自动播放。

:::demo
```vue
<template>
  <ad-audio src="/path/to/audio.mp3" autoplay />
</template>
```
:::

### 循环播放

通过 `loop` 属性设置音频循环播放。

:::demo
```vue
<template>
  <ad-audio src="/path/to/audio.mp3" loop />
</template>
```
:::

### 预加载

通过 `preload` 属性设置音频预加载策略。

:::demo
```vue
<template>
  <ad-audio src="/path/to/audio.mp3" preload="auto" />
</template>
```
:::

## API

### ad-audio

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 音频文件地址 | string | - |
| controls | 是否显示默认控件 | boolean | true |
| autoplay | 是否自动播放 | boolean | false |
| loop | 是否循环播放 | boolean | false |
| preload | 预加载策略 | `'auto' \| 'metadata' \| 'none'` | `'metadata'` |
| muted | 是否静音 | boolean | false |
| volume | 音量（0-1之间） | number | 1 |