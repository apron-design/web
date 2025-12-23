# 音频 Audio

Audio 组件提供了强大的音频播放功能，支持单个音频播放和播放列表功能。

## 安装

```bash
npm install @media-apron/react --save
```

## 单个音频（无封面）

最简单的用法是播放单个音频文件。

:::demo
```jsx
import { Audio } from "@media-apron/react";

export default function AudioDemo() {
  return (
    <Audio
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    />
  );
}
```
:::

## 单个音频（有封面）

可以为音频添加封面图，提升视觉体验。

:::demo
```jsx
import { Audio } from "@media-apron/react";

export default function AudioWithPosterDemo() {
  return (
    <Audio
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
      primaryColor="#1890ff"
    />
  );
}
```
:::

## 播放列表（简单模式）

可以通过传入字符串数组来创建简单的播放列表。

:::demo
```jsx
import { Audio } from "@media-apron/react";

export default function AudioPlaylistSimpleDemo() {
  const playlist = [
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  ];

  return (
    <Audio source={playlist} />
  );
}
```
:::

## 播放列表（完整模式）

使用对象数组可以创建功能完整的播放列表，支持标题、摘要和封面图。

:::demo
```jsx
import { Audio } from "@media-apron/react";

export default function AudioPlaylistFullDemo() {
  const playlist = [
    {
      title: '第一首歌曲',
      summary: '这是第一首歌曲的简介',
      poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
    {
      title: '第二首歌曲',
      summary: '这是第二首歌曲的简介',
      poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    },
    {
      title: '第三首歌曲（无封面）',
      summary: '没有封面的歌曲会显示背景色',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    },
  ];

  return (
    <Audio
      source={playlist}
      primaryColor="#1890ff"
    />
  );
}
```
:::

## API

### Audio Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| src | 音频源地址（单个音频模式） | `string` | - |
| source | 播放列表（数组模式） | `string[] \| AudioItem[]` | - |
| poster | 封面图地址 | `string` | - |
| primaryColor | 主题色 | `string` | - |

### AudioItem

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| title | 音频标题 | `string` | - |
| summary | 音频摘要 | `string` | - |
| poster | 封面图地址 | `string` | - |
| url | 音频地址 | `string` | - |
