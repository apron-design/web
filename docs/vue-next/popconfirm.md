# 气泡确认框 Popconfirm

专门用于确认操作的气泡卡片。

## 何时使用

- 需要用户确认某个重要操作时
- 删除、提交等不可逆操作前的确认
- 不想打断用户主要流程但又需要确认操作时

## 示例

### 基础用法

最简单的确认框用法。
:::demo
```vue
<template>
  <ad-popconfirm
    title="确认删除"
    content="删除后将无法恢复，确定要删除吗？"
    @cancel="handleCancel"
    @confirm="handleConfirm"
  >
    <template #trigger="{ handleClick, triggerRef }">
      <ad-button :ref="triggerRef" @click="handleClick" variant="primary" danger>删除</ad-button>
    </template>
  </ad-popconfirm>
</template>

<script setup>
const handleCancel = () => {
  console.log('取消');
};

const handleConfirm = () => {
  console.log('确认');
};
</script>
```
:::

### 自定义按钮文字

可以自定义确认框中的按钮文字。
:::demo
```vue
<template>
  <ad-popconfirm
    title="提交确认"
    content="确定要提交此表单吗？"
    cancel-text="返回修改"
    confirm-text="确定提交"
    @cancel="handleCancel"
    @confirm="handleConfirm"
  >
    <template #trigger="{ handleClick, triggerRef }">
      <ad-button :ref="triggerRef" @click="handleClick" variant="primary">提交</ad-button>
    </template>
  </ad-popconfirm>
</template>

<script setup>
const handleCancel = () => {
  console.log('返回修改');
};

const handleConfirm = () => {
  console.log('确定提交');
};
</script>
```
:::

### 自定义按钮样式

可以自定义确认框中按钮的样式。
:::demo
```vue
<template>
  <ad-popconfirm
    title="危险操作"
    content="此操作不可逆，请谨慎操作。"
    cancel-text="取消"
    confirm-text="确认删除"
    cancel-variant="text"
    confirm-variant="primary"
    @cancel="handleCancel"
    @confirm="handleConfirm"
  >
    <template #trigger="{ handleClick, triggerRef }">
      <ad-button :ref="triggerRef" @click="handleClick" danger>危险操作</ad-button>
    </template>
  </ad-popconfirm>
</template>

<script setup>
const handleCancel = () => {
  console.log('取消');
};

const handleConfirm = () => {
  console.log('确认删除');
};
</script>
```
:::

### 搭配链接

确认框也可以与链接搭配使用。
:::demo
```vue
<template>
  <ad-popconfirm
    title="退出登录"
    content="确定要退出登录吗？"
    @cancel="handleCancel"
    @confirm="handleConfirm"
  >
    <template #trigger="{ handleClick, triggerRef }">
      <ad-link :ref="triggerRef" @click="handleClick">退出登录</ad-link>
    </template>
  </ad-popconfirm>
</template>

<script setup>
const handleCancel = () => {
  console.log('取消');
};

const handleConfirm = () => {
  console.log('退出登录');
};
</script>
```
:::

### 多个 Popconfirm（互斥）

同一时间只能显示一个 Popconfirm，点击新的会关闭旧的。
:::demo
```vue
<template>
  <div style="display: flex; gap: 16px;">
    <ad-popconfirm
      title="确认删除"
      content="确定要删除此项目吗？"
      @confirm="handleDelete"
    >
      <template #trigger="{ handleClick, triggerRef }">
        <ad-button :ref="triggerRef" @click="handleClick" danger>删除项目</ad-button>
      </template>
    </ad-popconfirm>
    <ad-popconfirm
      title="提交确认"
      content="确定要提交此表单吗？"
      cancel-text="返回"
      confirm-text="提交"
      @confirm="handleSubmit"
    >
      <template #trigger="{ handleClick, triggerRef }">
        <ad-button :ref="triggerRef" @click="handleClick" variant="primary">提交表单</ad-button>
      </template>
    </ad-popconfirm>
  </div>
</template>

<script setup>
const handleDelete = () => {
  console.log('删除项目');
};

const handleSubmit = () => {
  console.log('提交表单');
};
</script>
```
:::

## API

### ad-popconfirm Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | string | - |
| content | 内容 | string | - |
| cancel-text | 取消按钮文字 | string | `'取消'` |
| confirm-text | 确定按钮文字 | string | `'确定'` |
| cancel-variant | 取消按钮变种 | [ButtonVariant](./button) | `'default'` |
| confirm-variant | 确定按钮变种 | [ButtonVariant](./button) | `'primary'` |
| @cancel | 取消回调 | `() => void` | - |
| @confirm | 确定回调 | `() => void` | - |
| class-name | 自定义类名 | string | - |

### ad-popconfirm Slots

| 插槽名 | 说明 | 作用域参数 |
| --- | --- | --- |
| trigger | 触发元素 | `{ handleClick, triggerRef }` |

**作用域参数说明：**
- `handleClick`: 点击事件处理函数
- `triggerRef`: 触发元素的 ref，需要绑定到触发元素上

## 注意事项

1. Popconfirm 是通过 Portal 渲染到 body 上的，确保层级高于其他元素
2. 同一时间只能显示一个 Popconfirm，点击新的会自动关闭旧的
3. 点击外部区域或取消按钮会关闭 Popconfirm
4. Popconfirm 会自动计算位置，确保完全显示在视口内
5. 当窗口大小改变或滚动时，Popconfirm 会重新计算位置
6. Popconfirm 专门用于确认操作，提供了取消和确定两个按钮