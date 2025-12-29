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
      src="https://mitkimi-prod.oss-cn-beijing.aliyuncs.com/2025/12/29/%E4%B8%93%E8%AE%BF%EF%BC%9A%E4%B8%80%E4%B8%AA%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91%E8%80%85%E5%AF%B9%E6%9A%B4%E8%B5%B0%E9%9E%8B%E7%9A%84%E7%83%AD%E7%88%B1%E2%80%94%E2%80%94%E5%85%A8%E6%B0%91%E6%9A%B4%E8%B5%B0%E7%BD%91%E7%AB%99%E5%88%B6%E4%BD%9C%E4%BA%BA%E7%94%B0%E6%98%8A%E5%A4%A9%E7%9A%84%E4%B8%93%E8%AE%BF.mp4"
      poster="https://mitkimi-prod.oss-cn-beijing.aliyuncs.com/2025-12-29T16%3A44%3A45-otexlabd.jpg"
      cc="https://mitkimi-prod.oss-cn-beijing.aliyuncs.com/2025/12/29/2025-12-29T16%3A46%3A55-iaqgyogo.srt"
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
    'https://mitkimi-prod.oss-cn-beijing.aliyuncs.com/2025/12/29/%E4%B8%93%E8%AE%BF%EF%BC%9A%E4%B8%80%E4%B8%AA%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91%E8%80%85%E5%AF%B9%E6%9A%B4%E8%B5%B0%E9%9E%8B%E7%9A%84%E7%83%AD%E7%88%B1%E2%80%94%E2%80%94%E5%85%A8%E6%B0%91%E6%9A%B4%E8%B5%B0%E7%BD%91%E7%AB%99%E5%88%B6%E4%BD%9C%E4%BA%BA%E7%94%B0%E6%98%8A%E5%A4%A9%E7%9A%84%E4%B8%93%E8%AE%BF.mp4',
    'https://mitkimi-prod.oss-cn-beijing.aliyuncs.com/2025/12/29/Sunday%20chill%20in%20full%20rubber.mp4',
    'https://mitkimi-prod.oss-cn-beijing.aliyuncs.com/2025/12/29/720P30fps%E3%80%90%E5%A5%BD%E7%94%9C%E5%BC%80%E7%AE%B1%E3%80%91%E4%B8%9C%E6%8B%BC%E8%A5%BF%E5%87%91%E4%B8%80%E5%8F%B0NAS.mp4',
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
      title: '东拼西凑一台 NAS',
      summary: '系列节目【好甜开箱】第3集',
      poster: 'https://mitkimi-prod.oss-cn-beijing.aliyuncs.com/2025-12-29T16%3A44%3A45-otexlabd.jpg',
      url: 'https://mitkimi-prod.oss-cn-beijing.aliyuncs.com/2025/12/29/720P30fps%E3%80%90%E5%A5%BD%E7%94%9C%E5%BC%80%E7%AE%B1%E3%80%91%E4%B8%9C%E6%8B%BC%E8%A5%BF%E5%87%91%E4%B8%80%E5%8F%B0NAS.mp4',
      cc: 'https://mitkimi-prod.oss-cn-beijing.aliyuncs.com/2025/12/29/2025-12-29T16%3A46%3A55-iaqgyogo.srt',
    },
    {
      title: '专访：一个软件开发者对暴走鞋的热爱',
      summary: '全民暴走节目创始人专访',
      url: 'https://mitkimi-prod.oss-cn-beijing.aliyuncs.com/2025/12/29/%E4%B8%93%E8%AE%BF%EF%BC%9A%E4%B8%80%E4%B8%AA%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91%E8%80%85%E5%AF%B9%E6%9A%B4%E8%B5%B0%E9%9E%8B%E7%9A%84%E7%83%AD%E7%88%B1%E2%80%94%E2%80%94%E5%85%A8%E6%B0%91%E6%9A%B4%E8%B5%B0%E7%BD%91%E7%AB%99%E5%88%B6%E4%BD%9C%E4%BA%BA%E7%94%B0%E6%98%8A%E5%A4%A9%E7%9A%84%E4%B8%93%E8%AE%BF.mp4',
    },
    {
      title: '1 个阳光少年',
      summary: '竖屏视频',
      url: 'https://mitkimi-prod.oss-cn-beijing.aliyuncs.com/2025/12/29/2025-12-29T16%3A49%3A17-pysagitn.mp4',
    },
    {
      title: 'Sundy chill in full rubber',
      summary: '擦边视频',
      url: 'https://mitkimi-prod.oss-cn-beijing.aliyuncs.com/2025/12/29/Sunday%20chill%20in%20full%20rubber.mp4',
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
