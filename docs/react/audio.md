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
      src="https://cdn.offontime.com/mp3/Ambala%2CSantino%20Surfers%20-%20Morning%20Lights.mp3"
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
      src="https://cdn.offontime.com/mp3/Simone%20Stella%20-%20Chaconne%20in%20F%20Minor%2C%20P.43.mp3"
      poster="https://cdn.offontime.com/images/p03.jpg"
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
    'https://cdn.offontime.com/mp3/Ambala%2CSantino%20Surfers%20-%20Morning%20Lights.mp3',
    'https://cdn.offontime.com/mp3/%E5%BD%AD%E5%AF%92%20-%203%EF%BC%9A7%EF%BC%88%E8%AF%86%E5%88%AB%E6%95%B0%E5%AD%97%EF%BC%89.mp3',
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
      poster: 'https://cdn.offontime.com/images/p03.jpg',
      url: 'https://cdn.offontime.com/mp3/Ambala%2CSantino%20Surfers%20-%20Morning%20Lights.mp3',
    },
    {
      title: '第二首歌曲',
      summary: '这是第二首歌曲的简介',
      poster: 'https://cdn.offontime.com/images/pexels-photo-39771661.jpg',
      url: 'https://cdn.offontime.com/mp3/Simone%20Stella%20-%20Chaconne%20in%20F%20Minor%2C%20P.43.mp3',
    },
    {
      title: '第三首歌曲（无封面）',
      summary: '没有封面的歌曲会显示背景色',
      url: 'https://cdn.offontime.com/mp3/%E5%BD%AD%E5%AF%92%20-%203%EF%BC%9A7%EF%BC%88%E8%AF%86%E5%88%AB%E6%95%B0%E5%AD%97%EF%BC%89.mp3',
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

## 带歌词的音频

Audio 组件支持显示歌词，歌词会随着音频播放进度自动高亮显示当前时间点的歌词。支持 LRC 格式的歌词文件。

:::demo
```jsx
import { Audio } from "@media-apron/react";

export default function AudioWithLyricsDemo() {
  return (
    <Audio
      src="https://cdn.offontime.com/mp3/Ambala%2CSantino%20Surfers%20-%20Morning%20Lights.mp3"
      poster="https://cdn.offontime.com/images/p03.jpg"
      primaryColor="#1890ff"
      lyrics="/lyrics.lrc"
    />
  );
}
```
:::

## 播放列表（带歌词）

播放列表中的每个音频项都可以单独配置歌词文件。

:::demo
```jsx
import { Audio } from "@media-apron/react";

export default function AudioPlaylistWithLyricsDemo() {
  const playlist = [
    {
      title: '第一首歌曲',
      summary: '这是第一首歌曲的简介',
      poster: 'https://cdn.offontime.com/images/p03.jpg',
      url: 'https://cdn.offontime.com/mp3/Ambala%2CSantino%20Surfers%20-%20Morning%20Lights.mp3',
      lyrics: '/lyrics.lrc',
    },
    {
      title: '第二首歌曲',
      summary: '这是第二首歌曲的简介',
      poster: 'https://cdn.offontime.com/images/pexels-photo-39771661.jpg',
      url: 'https://cdn.offontime.com/mp3/Simone%20Stella%20-%20Chaconne%20in%20F%20Minor%2C%20P.43.mp3',
      lyrics: '/lyrics.lrc',
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
| lyrics | 歌词文件路径（LRC 格式，单个音频模式） | `string` | - |

### AudioItem

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| title | 音频标题 | `string` | - |
| summary | 音频摘要 | `string` | - |
| poster | 封面图地址 | `string` | - |
| url | 音频地址 | `string` | - |
| lyrics | 歌词文件路径（LRC 格式） | `string` | - |

### LRC 歌词文件格式

歌词文件使用标准的 LRC 格式，每行格式为 `[mm:ss.xx]歌词文本`，例如：

```
[00:00.00]音乐播放器歌词演示
[00:03.50]这是一个美妙的开始
[00:07.00]音符在空气中跳跃
[00:10.50]旋律轻轻流淌
```

歌词文件应放置在 `public` 目录下，然后通过相对路径引用，如 `/lyrics.lrc`。
