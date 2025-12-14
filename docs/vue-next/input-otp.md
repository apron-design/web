# 验证码输入框 InputOtp

用于输入验证码的专用输入框，支持多种格式和交互方式。

## 何时使用

- 需要用户输入短信验证码、邮箱验证码等场景
- 需要格式化显示验证码（如 123-456 格式）
- 需要在移动端弹出数字键盘
- 需要验证完成后自动触发回调

## 示例

### 基础用法

最简单的用法，默认为6位数字验证码。
:::demo
```vue
<template>
  <ad-input-otp format="******" />
</template>
```
:::

### 不同格式

支持多种验证码格式，可以自定义分隔符。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 32px;">
    <div>
      <h4>4位验证码 (****)</h4>
      <ad-input-otp format="****" />
    </div>
    <div>
      <h4>6位验证码 (******)</h4>
      <ad-input-otp format="******" />
    </div>
    <div>
      <h4>带分隔符 (***-***)</h4>
      <ad-input-otp format="***-***" />
    </div>
    <div>
      <h4>自定义分隔 (**-**-**)</h4>
      <ad-input-otp format="**-**-**" />
    </div>
    <div>
      <h4>带空格分隔 (*** ***)</h4>
      <ad-input-otp format="*** ***" />
    </div>
  </div>
</template>
```
:::

### 不同尺寸

支持默认和小尺寸两种规格。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 32px;">
    <div>
      <h4>默认尺寸 (高60 宽40)</h4>
      <ad-input-otp format="****" />
    </div>
    <div>
      <h4>小尺寸 (高40 宽28)</h4>
      <ad-input-otp format="****" size="small" />
    </div>
  </div>
</template>
```
:::

### 正方形样式

可以设置为正方形样式，使每个输入位呈现为正方形。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 32px;">
    <div>
      <h4>正方形 - 默认尺寸 (40x40)</h4>
      <ad-input-otp format="****" square />
    </div>
    <div>
      <h4>正方形 - 小尺寸 (28x28)</h4>
      <ad-input-otp format="****" size="small" square />
    </div>
  </div>
</template>
```
:::

### 输入类型

支持数字和文本两种输入类型，数字类型在移动端会弹出数字键盘。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 32px;">
    <div>
      <h4>数字类型 (移动端弹出数字键盘)</h4>
      <ad-input-otp format="****" type="number" />
    </div>
    <div>
      <h4>文本类型 (允许字母)</h4>
      <ad-input-otp format="****" type="text" />
    </div>
  </div>
</template>
```
:::

### 不同状态

展示输入框的不同状态：空状态、部分填充、完全填充、禁用等。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 32px;">
    <div>
      <h4>空状态</h4>
      <ad-input-otp format="****" />
    </div>
    <div>
      <h4>部分填充</h4>
      <ad-input-otp format="****" default-value="12" />
    </div>
    <div>
      <h4>完全填充</h4>
      <ad-input-otp format="****" default-value="1234" />
    </div>
    <div>
      <h4>禁用</h4>
      <ad-input-otp format="****" disabled default-value="12" />
    </div>
  </div>
</template>
```
:::

### 状态反馈

支持成功和错误状态的视觉反馈。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 32px;">
    <div>
      <h4>默认状态</h4>
      <ad-input-otp format="****" default-value="1234" />
    </div>
    <div>
      <h4>成功状态 (success)</h4>
      <ad-input-otp format="****" default-value="1234" status="success" />
    </div>
    <div>
      <h4>错误状态 (error) - 按退格键一次性清空</h4>
      <ad-input-otp format="****" default-value="1234" status="error" />
    </div>
  </div>
</template>
```
:::

### 交互示例

展示完整的交互流程，包括值变化和输入完成回调。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
    <ad-input-otp
      format="***-***"
      v-model:value="value"
      @finish="handleFinish"
      auto-focus
    />
    <div style="font-size: 14px; color: #666;">
      <p style="margin: 0;">当前值: {{ value || '(空)' }}</p>
      <p style="margin: 4px 0 0 0;">
        状态: {{ completed ? '✅ 输入完成' : '输入中...' }}
      </p>
    </div>
    <button
      @click="handleReset"
      style="
        padding: 8px 16px;
        border-radius: 8px;
        border: 1px solid #ccc;
        background: #fff;
        cursor: pointer;
      "
    >
      重置
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
const completed = ref(false);

const handleFinish = () => {
  completed.value = true;
};

const handleReset = () => {
  value.value = '';
  completed.value = false;
};
</script>
```
:::

### 验证流程

模拟完整的验证码验证流程。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
    <p style="margin: 0; color: #666; font-size: 14px;">
      提示：正确验证码是 123456
    </p>
    <ad-input-otp
      format="***-***"
      v-model:value="value"
      @finish="handleFinish"
      :status="status"
      @status-reset="handleStatusReset"
      auto-focus
    />
    <p
      v-if="message"
      :style="{
        margin: 0,
        color: status === 'success' ? '#16a34a' : '#ef4444',
        fontSize: '14px'
      }"
    >
      {{ message }}
    </p>
    <button
      @click="handleReset"
      style="
        padding: 8px 16px;
        border-radius: 8px;
        border: 1px solid #ccc;
        background: #fff;
        cursor: pointer;
      "
    >
      重置
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
const status = ref('default');
const message = ref('');

const handleFinish = (val) => {
  // 模拟验证：123456 为正确验证码
  if (val === '123456') {
    status.value = 'success';
    message.value = '✅ 验证成功！';
  } else {
    status.value = 'error';
    message.value = '❌ 验证码错误，按退格键重新输入';
  }
};

const handleStatusReset = () => {
  status.value = 'default';
  message.value = '';
};

const handleReset = () => {
  value.value = '';
  status.value = 'default';
  message.value = '';
};
</script>
```
:::

## API

### ad-input-otp

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| format | 格式：* 表示输入位，其他字符直接渲染，如 "****" 或 "***-***" | `string` | `'******'` |
| size | 尺寸 | `'default' \| 'small'` | `'default'` |
| square | 是否为正方形（以宽为准） | `boolean` | `false` |
| type | 输入类型，影响移动端键盘 | `'number' \| 'text'` | `'number'` |
| value | 当前值（受控模式） | `string` | - |
| default-value | 默认值 | `string` | `''` |
| status | 状态：success 显示成功样式，error 显示错误样式 | `'default' \| 'success' \| 'error'` | `'default'` |
| auto-focus | 是否自动聚焦 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| on-change | 值改变时的回调 | `(value: string) => void` | - |
| on-finish | 输入完成时的回调（满足长度时自动触发） | `(value: string) => void` | - |
| on-complete | 输入完成时的回调（同 onFinish） | `(value: string) => void` | - |
| on-status-reset | error 状态下按退格键重置时的回调 | `() => void` | - |
| class-name | 自定义类名 | `string` | - |
