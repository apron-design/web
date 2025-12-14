# 全局提示 Message

全局展示操作反馈信息，常用于通知用户操作结果。

## 何时使用

- 需要向用户显示操作反馈时
- 需要全局性的简短通知时
- 不希望打断用户操作流程的通知场景

## 示例

### 基础用法

最简单的用法，通过不同方法显示不同类型的消息。
:::demo
```vue
<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <ad-button @click="() => $message.info('This is an info message')">
      Info
    </ad-button>
    <ad-button @click="() => $message.success('Operation successful!')">
      Success
    </ad-button>
    <ad-button @click="() => $message.warning('Please be careful!')">
      Warning
    </ad-button>
    <ad-button @click="() => $message.error('Something went wrong!')">
      Error
    </ad-button>
  </div>
</template>

<script setup>
// 在 Vue 3 中，message 通常通过插件方式全局注入
// 使用时可以直接通过 this.$message 或 $message 调用
</script>
```
:::

### 使用 message.show() 方法

可以通过 message.show() 方法动态指定提示类型。
:::demo
```vue
<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <ad-button @click="() => $message.show('info', 'Info message via show()')">
      Show Info
    </ad-button>
    <ad-button @click="() => $message.show('success', 'Success message via show()')">
      Show Success
    </ad-button>
    <ad-button @click="() => $message.show('warning', 'Warning message via show()')">
      Show Warning
    </ad-button>
    <ad-button @click="() => $message.show('error', 'Error message via show()')">
      Show Error
    </ad-button>
  </div>
</template>
```
:::

### 多个提示排列

多个提示会按顺序向下排列，先进先出。
:::demo
```vue
<template>
  <ad-button @click="showMultiple">
    Show Multiple Messages
  </ad-button>
</template>

<script setup>
const showMultiple = () => {
  $message.info('First message');
  setTimeout(() => $message.success('Second message'), 500);
  setTimeout(() => $message.warning('Third message'), 1000);
  setTimeout(() => $message.error('Fourth message'), 1500);
};
</script>
```
:::

### 自定义显示时长

可以自定义消息显示时长，设置为 0 则不自动关闭。
:::demo
```vue
<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <ad-button @click="() => $message.info('2 seconds', 2000)">
      2s Duration
    </ad-button>
    <ad-button @click="() => $message.success('10 seconds', 10000)">
      10s Duration
    </ad-button>
    <ad-button @click="() => $message.warning('Will not auto close', 0)">
      No Auto Close
    </ad-button>
  </div>
</template>
```
:::

### 富文本内容

支持 VNode 类型的内容，可以显示富文本。
:::demo
```vue
<template>
  <ad-button @click="showRichContent">
    Show Rich Content
  </ad-button>
</template>

<script setup>
import { h } from 'vue';

const showRichContent = () => {
  $message.success(
    h('span', null, [
      'Your file ',
      h('strong', null, 'report.pdf'),
      ' has been uploaded successfully!'
    ])
  );
};
</script>
```
:::

### 移除单个消息

可以通过 message.remove(id) 方法移除指定的消息。
:::demo
```vue
<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <ad-button @click="showMessage">
      Show Message
    </ad-button>
    <ad-button @click="removeMessage" :disabled="!messageId">
      Remove Message
    </ad-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const messageId = ref(null);

const showMessage = () => {
  messageId.value = $message.info('This message can be removed manually', 0);
};

const removeMessage = () => {
  if (messageId.value) {
    $message.remove(messageId.value);
    messageId.value = null;
  }
};
</script>
```
:::

### 清除所有消息

可以通过 message.clear() 方法一次性清除所有消息。
:::demo
```vue
<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <ad-button @click="showMultiple">
      Show Multiple Messages
    </ad-button>
    <ad-button @click="() => $message.clear()">
      Clear All
    </ad-button>
  </div>
</template>

<script setup>
const showMultiple = () => {
  $message.info('Message 1', 0);
  $message.success('Message 2', 0);
  $message.warning('Message 3', 0);
  $message.error('Message 4', 0);
};
</script>
```
:::

### 完整示例

展示 Message 组件的各种使用场景。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <ad-button @click="handleSuccess" variant="primary">
        成功操作
      </ad-button>
      <ad-button @click="handleError" variant="default">
        错误操作
      </ad-button>
      <ad-button @click="handleWarning">
        警告提示
      </ad-button>
      <ad-button @click="handleInfo">
        信息提示
      </ad-button>
    </div>
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <ad-button @click="handleCustom">
        自定义时长
      </ad-button>
      <ad-button @click="() => $message.clear()">
        清除所有
      </ad-button>
    </div>
  </div>
</template>

<script setup>
const handleSuccess = () => {
  $message.success('操作成功！');
};

const handleError = () => {
  $message.error('操作失败，请重试');
};

const handleWarning = () => {
  $message.warning('请注意：此操作不可撤销');
};

const handleInfo = () => {
  $message.info('提示：请检查您的输入');
};

const handleCustom = () => {
  const id = $message.show('info', '自定义消息，3秒后关闭', 3000);
  setTimeout(() => {
    $message.remove(id);
  }, 2000);
};
</script>
```
:::

## API

### $message

| 方法 | 说明 | 类型 |
| --- | --- | --- |
| $message.show | 显示消息 | `(type: 'info' \| 'success' \| 'warning' \| 'error', message: string \| VNode, duration?: number) => string` |
| $message.info | 显示信息消息 | `(message: string \| VNode, duration?: number) => string` |
| $message.success | 显示成功消息 | `(message: string \| VNode, duration?: number) => string` |
| $message.warning | 显示警告消息 | `(message: string \| VNode, duration?: number) => string` |
| $message.error | 显示错误消息 | `(message: string \| VNode, duration?: number) => string` |
| $message.remove | 移除指定消息 | `(id: string) => void` |
| $message.clear | 清除所有消息 | `() => void` |

### 参数说明

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 消息类型 | `'info' \| 'success' \| 'warning' \| 'error'` | - |
| message | 消息内容 | `string \| VNode` | - |
| duration | 显示时长（毫秒），设置为 0 则不自动关闭 | `number` | `5000` |
| id | 消息唯一标识符，用于移除消息 | `string` | - |