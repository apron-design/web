# 气泡卡片 Popover

气泡卡片是一种轻量级的弹出框，用于显示额外的信息或确认操作。

## 何时使用

- 需要显示简短的提示信息时
- 需要用户确认某个操作时
- 不想打断用户主要流程但又需要提供额外信息时

## 示例

### 基础用法

最简单的气泡卡片，在点击触发元素时显示内容。
:::demo
```jsx
import { Popover, Button } from '@apron-design/react';

export default function BasicPopover() {
  return (
    <Popover title="提示标题" content="这是 Popover 的内容区域，可以放置任何文本信息。">
      <Button>点击显示</Button>
    </Popover>
  );
}
```
:::

### 触发方式

Popover 支持两种触发方式：点击和悬停。

#### 点击触发
:::demo
```jsx
import { Popover, Button } from '@apron-design/react';

export default function ClickPopover() {
  return (
    <Popover mode="click" title="点击触发" content="点击按钮或外部区域关闭。">
      <Button>点击显示</Button>
    </Popover>
  );
}
```
:::

#### 悬停触发
:::demo
```jsx
import { Popover, Button } from '@apron-design/react';

export default function HoverPopover() {
  return (
    <Popover mode="hover" title="悬停触发" content="鼠标移出后自动关闭。">
      <Button>悬停显示</Button>
    </Popover>
  );
}
```
:::

### 搭配不同元素

Popover 可以与多种元素搭配使用。

#### 搭配链接
:::demo
```jsx
import { Popover, Link } from '@apron-design/react';

export default function LinkPopover() {
  return (
    <Popover mode="hover" title="链接提示" content="这是链接的详细说明。">
      <Link>悬停查看详情</Link>
    </Popover>
  );
}
```
:::

#### 搭配文本
:::demo
```jsx
import { Popover } from '@apron-design/react';

export default function TextPopover() {
  return (
    <Popover mode="hover" content="这是一段说明文字">
      <span style={{ cursor: 'pointer', textDecoration: 'underline', color: '#4C9EEA' }}>
        帮助信息
      </span>
    </Popover>
  );
}
```
:::

### 内容变化

Popover 支持不同的内容组合。

#### 只有标题
:::demo
```jsx
import { Popover, Button } from '@apron-design/react';

export default function TitleOnlyPopover() {
  return (
    <Popover title="只有标题">
      <Button variant="secondary">只有标题</Button>
    </Popover>
  );
}
```
:::

#### 只有内容
:::demo
```jsx
import { Popover, Button } from '@apron-design/react';

export default function ContentOnlyPopover() {
  return (
    <Popover content="只有内容，没有标题。">
      <Button variant="secondary">只有内容</Button>
    </Popover>
  );
}
```
:::

#### 长内容
:::demo
```jsx
import { Popover, Button } from '@apron-design/react';

export default function LongContentPopover() {
  return (
    <Popover
      title="详细说明"
      content="这是一段很长的内容，用来测试 Popover 的最大宽度限制。当内容超过 300px 宽度时，会自动换行显示，确保内容可读性良好。"
    >
      <Button>长内容</Button>
    </Popover>
  );
}
```
:::

#### 富文本内容
:::demo
```jsx
import { Popover, Button } from '@apron-design/react';

export default function RichContentPopover() {
  return (
    <Popover
      title="用户信息"
      content={
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div>用户名：admin</div>
          <div>邮箱：admin@example.com</div>
          <div>角色：管理员</div>
        </div>
      }
    >
      <Button>查看用户信息</Button>
    </Popover>
  );
}
```
:::

### 多个 Popover（互斥）

同一时间只能显示一个 Popover，点击新的会关闭旧的。
:::demo
```jsx
import { Popover, Button, Link } from '@apron-design/react';

export default function MultiplePopovers() {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Popover title="Popover 1" content="这是第一个 Popover">
        <Button>Popover 1</Button>
      </Popover>
      <Popover title="Popover 2" content="这是第二个 Popover">
        <Button>Popover 2</Button>
      </Popover>
    </div>
  );
}
```
:::

## API

### Popover Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mode | 触发方式 | `'click'` \| `'hover'` | `'click'` |
| title | 标题 | ReactNode | - |
| content | 内容 | ReactNode | - |
| children | 触发元素 | ReactElement | - |
| className | 自定义类名 | string | - |

## 注意事项

1. Popover 是通过 Portal 渲染到 body 上的，确保层级高于其他元素
2. 同一时间只能显示一个 Popover，点击新的会自动关闭旧的
3. 点击模式下，点击外部区域会关闭 Popover
4. 悬停模式下，鼠标移出触发元素或 Popover 会延迟关闭
5. Popover 会自动计算位置，确保完全显示在视口内
6. 当窗口大小改变或滚动时，Popover 会重新计算位置