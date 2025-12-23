# 视频 Video

Video 组件提供了强大的视频播放功能，支持单个视频播放和播放列表功能。

## 安装

```bash
npm install @media-apron/react --save
```

## 单个视频

最简单的用法是播放单个视频，可以设置封面图和字幕。

:::demo
```jsx
import { Video } from "@media-apron/react";

export default function VideoDemo() {
  return (
    <Video
      src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
      cc="./subtitles.vtt"
    />
  );
}
```
:::

## 播放列表（简单模式）

可以通过传入字符串数组来创建简单的播放列表。

:::demo
```jsx
import { Video } from "@media-apron/react";

export default function VideoPlaylistSimpleDemo() {
  const playlist = [
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  ];

  return (
    <Video source={playlist} />
  );
}
```
:::

## 播放列表（完整模式）

使用对象数组可以创建功能完整的播放列表，支持标题、摘要、封面图和字幕。

:::demo
```jsx
import { Video } from "@media-apron/react";

export default function VideoPlaylistFullDemo() {
  const playlist = [
    {
      title: '正在播放的视频标题（带字幕）',
      summary: '视频摘要，没有可以不显示。点击设置按钮可以开关字幕。',
      poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      cc: './subtitles.vtt',
    },
    {
      title: '下一个要播放的视频标题',
      summary: '视频摘要，没有可以不显示',
      poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    },
    {
      title: '没有封面的视频（显示占位图标）',
      summary: '当没有提供 poster 时，会显示深灰色背景和视频图标占位符',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    },
  ];

  return (
    <Video
      source={playlist}
      primaryColor="#1890ff"
    />
  );
}
```
:::

## API

### Video Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| src | 视频源地址（单个视频模式） | `string` | - |
| source | 播放列表（数组模式） | `string[] \| VideoItem[]` | - |
| poster | 封面图地址 | `string` | - |
| cc | 字幕文件地址 | `string` | - |
| primaryColor | 主题色 | `string` | - |

### VideoItem

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| title | 视频标题 | `string` | - |
| summary | 视频摘要 | `string` | - |
| poster | 封面图地址 | `string` | - |
| url | 视频地址 | `string` | - |
| cc | 字幕文件地址 | `string` | - |
