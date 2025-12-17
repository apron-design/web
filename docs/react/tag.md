# 标签 Tag

Tag 组件用于标记和分类内容，可以作为关键词或小型状态指示器使用。

## 基础用法

最简单的用法是直接使用 Tag 组件包裹文本内容。
:::demo
```jsx
import { Tag } from '@apron-design/react';

export default () => <Tag>标签</Tag>;
```
:::

## 变体

Tag 组件提供两种变体：`primary` 和 `default`。
:::demo
```jsx
import { Tag, Space } from '@apron-design/react';

export default () => (
  <Space>
    <Tag variant="primary">Primary 标签</Tag>
    <Tag variant="default">Default 标签</Tag>
  </Space>
);
```
:::

## 可关闭标签

通过设置 `closable` 属性，可以让标签变成可关闭的状态。当用户点击关闭按钮时会触发 `onClose` 回调。
:::demo
```jsx
import { Tag, Space } from '@apron-design/react';

export default () => (
  <Space>
    <Tag variant="primary" closable onClose={() => console.log('Primary closed')}>
      Primary 可关闭
    </Tag>
    <Tag variant="default" closable onClose={() => console.log('Default closed')}>
      Default 可关闭
    </Tag>
  </Space>
);
```
:::

## 交互示例

以下是一个更复杂的交互示例，展示了如何动态管理标签：
:::demo
```jsx
import React, { useState } from 'react';
import { Space, Tag } from '@apron-design/react';

export default () => {
  const [tags, setTags] = useState(['标签1', '标签2', '标签3', '标签4']);

  const handleClose = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <Space wrap>
      {tags.map((tag) => (
        <Tag key={tag} closable onClose={() => handleClose(tag)}>
          {tag}
        </Tag>
      ))}
      {tags.length === 0 && <span style={{ color: '#a1a1aa' }}>所有标签已删除</span>}
    </Space>
  );
};
```
:::


## API

### Tag

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| variant | 标签变体 | `'primary' \| 'default'` | `'default'` |
| closable | 是否可关闭 | `boolean` | `false` |
| onClose | 关闭回调 | `() => void` | `-` |
| children | 子元素 | `ReactNode` | `-` |