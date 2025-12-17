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
```vue
<template>
  <ad-popover title="提示标题" content="这是 Popover 的内容区域，可以放置任何文本信息。">
    <template #trigger="{ handleClick, triggerRef }">
      <ad-button :ref="triggerRef" @click="handleClick">点击显示</ad-button>
    </template>
  </ad-popover>
</template>
```
:::

### 触发方式

Popover 支持两种触发方式：点击和悬停。

#### 点击触发
:::demo
```vue
<template>
  <ad-popover mode="click" title="点击触发" content="点击按钮或外部区域关闭。">
    <template #trigger="{ handleClick, triggerRef }">
      <ad-button :ref="triggerRef" @click="handleClick">点击显示</ad-button>
    </template>
  </ad-popover>
</template>
```
:::

#### 悬停触发
:::demo
```vue
<template>
  <ad-popover mode="hover" title="悬停触发" content="鼠标移出后自动关闭。">
    <template #trigger="{ handleMouseEnter, handleMouseLeave, triggerRef }">
      <ad-button :ref="triggerRef" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">悬停显示</ad-button>
    </template>
  </ad-popover>
</template>
```
:::

### 搭配不同元素

Popover 可以与多种元素搭配使用。

#### 搭配链接
:::demo
```vue
<template>
  <ad-popover mode="hover" title="链接提示" content="这是链接的详细说明。">
    <template #trigger="{ handleMouseEnter, handleMouseLeave, triggerRef }">
      <ad-link :ref="triggerRef" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">悬停查看详情</ad-link>
    </template>
  </ad-popover>
</template>
```
:::

#### 搭配文本
:::demo
```vue
<template>
  <ad-popover mode="hover" content="这是一段说明文字">
    <template #trigger="{ handleMouseEnter, handleMouseLeave, triggerRef }">
      <span :ref="triggerRef" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" style="cursor: pointer; text-decoration: underline; color: #4C9EEA;">
        帮助信息
      </span>
    </template>
  </ad-popover>
</template>
```
:::

### 内容变化

Popover 支持不同的内容组合。

#### 只有标题
:::demo
```vue
<template>
  <ad-popover title="只有标题">
    <template #trigger="{ handleClick, triggerRef }">
      <ad-button :ref="triggerRef" @click="handleClick" variant="secondary">只有标题</ad-button>
    </template>
  </ad-popover>
</template>
```
:::

#### 只有内容
:::demo
```vue
<template>
  <ad-popover content="只有内容，没有标题。">
    <template #trigger="{ handleClick, triggerRef }">
      <ad-button :ref="triggerRef" @click="handleClick" variant="secondary">只有内容</ad-button>
    </template>
  </ad-popover>
</template>
```
:::

#### 长内容
:::demo
```vue
<template>
  <ad-popover
    title="详细说明"
    content="这是一段很长的内容，用来测试 Popover 的最大宽度限制。当内容超过 300px 宽度时，会自动换行显示，确保内容可读性良好。"
  >
    <template #trigger="{ handleClick, triggerRef }">
      <ad-button :ref="triggerRef" @click="handleClick">长内容</ad-button>
    </template>
  </ad-popover>
</template>
```
:::

#### 富文本内容
:::demo
```vue
<template>
  <ad-popover
    title="用户信息"
    content="<div style='display: flex; flex-direction: column; gap: 8px;'><div>用户名：admin</div><div>邮箱：admin@example.com</div><div>角色：管理员</div></div>"
  >
    <template #trigger="{ handleClick, triggerRef }">
      <ad-button :ref="triggerRef" @click="handleClick">查看用户信息</ad-button>
    </template>
  </ad-popover>
</template>
```
:::

### 多个 Popover（互斥）

同一时间只能显示一个 Popover，点击新的会关闭旧的。
:::demo
```vue
<template>
  <div style="display: flex; gap: 16px;">
    <ad-popover title="Popover 1" content="这是第一个 Popover">
      <template #trigger="{ handleClick, triggerRef }">
        <ad-button :ref="triggerRef" @click="handleClick">Popover 1</ad-button>
      </template>
    </ad-popover>
    <ad-popover title="Popover 2" content="这是第二个 Popover">
      <template #trigger="{ handleClick, triggerRef }">
        <ad-button :ref="triggerRef" @click="handleClick">Popover 2</ad-button>
      </template>
    </ad-popover>
  </div>
</template>
```
:::

## API

### ad-popover Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mode | 触发方式 | `'click'` \| `'hover'` | `'click'` |
| title | 标题 | string | - |
| content | 内容 | string | - |
| className | 自定义类名 | string | - |

### ad-popover Slots

| 插槽名 | 说明 | 作用域参数 |
| --- | --- | --- |
| trigger | 触发元素 | `{ handleClick, handleMouseEnter, handleMouseLeave, triggerRef }` |

**作用域参数说明：**
- `handleClick`: 点击事件处理函数（用于 `mode="click"`）
- `handleMouseEnter`: 鼠标进入事件处理函数（用于 `mode="hover"`）
- `handleMouseLeave`: 鼠标离开事件处理函数（用于 `mode="hover"`）
- `triggerRef`: 触发元素的 ref，需要绑定到触发元素上

## 注意事项

1. Popover 是通过 Portal 渲染到 body 上的，确保层级高于其他元素
2. 同一时间只能显示一个 Popover，点击新的会自动关闭旧的
3. 点击模式下，点击外部区域会关闭 Popover
4. 悬停模式下，鼠标移出触发元素或 Popover 会延迟关闭
5. Popover 会自动计算位置，确保完全显示在视口内
6. 当窗口大小改变或滚动时，Popover 会重新计算位置