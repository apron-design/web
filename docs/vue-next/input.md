# 输入框 Input

通过鼠标或键盘输入内容，是最基础的表单域包装。

## 何时使用

- 需要用户输入表单域内容时
- 提供组合型输入框，比如带前后置内容的输入框
- 需要带清除功能的输入框时

## 示例

### 基础用法

最简单的用法，适用于大部分业务场景。
:::demo
```vue
<template>
  <ad-input placeholder="Please enter..." />
</template>
```
:::

### 不同状态

展示输入框的不同状态：空状态、有内容、禁用等。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <h4>空状态（无焦点）</h4>
      <ad-input placeholder="Please enter..." />
    </div>
    <div>
      <h4>有内容</h4>
      <ad-input default-value="Hello World" />
    </div>
    <div>
      <h4>禁用</h4>
      <ad-input disabled placeholder="Disabled" />
    </div>
    <div>
      <h4>禁用（有内容）</h4>
      <ad-input disabled default-value="Disabled with value" />
    </div>
  </div>
</template>
```
:::

### 可清除输入框

带清除图标的输入框，点击图标清除内容。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <ad-input
      v-model:value="value"
      clearable
      @clear="handleClear"
      placeholder="输入内容后显示清除按钮"
    />
    <p style="margin: 0; color: #666; font-size: 14px;">
      当前值: {{ value || '(空)' }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('可清除的内容');

const handleClear = () => {
  value.value = '';
};
</script>
```
:::

### 密码输入框

用于输入密码，可切换明文/密文显示。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <h4>密码输入框（点击眼睛图标切换显示）</h4>
      <ad-input type="password" default-value="password123" />
    </div>
    <div>
      <h4>密码输入框 + 可清除</h4>
      <ad-input type="password" default-value="password123" clearable />
    </div>
  </div>
</template>
```
:::

### 前置/后置内容

用于配置一些固定组合，如域名、货币单位等。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <h4>前置文字 (65px)</h4>
      <ad-input prepend="https://" placeholder="example.com" />
    </div>
    <div>
      <h4>后置文字 (50px)</h4>
      <ad-input append=".com" placeholder="domain" />
    </div>
    <div>
      <h4>前置 + 后置</h4>
      <ad-input prepend="$" append="USD" placeholder="0.00" />
    </div>
    <div>
      <h4>前置自定义内容</h4>
      <ad-input
        :prepend="searchIcon"
        placeholder="Search..."
      />
    </div>
  </div>
</template>

<script setup>
const searchIcon = `
<span style="padding: 0 8px; display: flex; align-items: center;">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
</span>
`;
</script>
```
:::

### 组合使用

将各种功能组合使用。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <ad-input
      prepend="$"
      append="USD"
      clearable
      default-value="100.00"
    />
  </div>
</template>
```
:::

## API

### ad-input

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 输入框类型 | `'text' \| 'password' \| 'email' \| 'number' \| 'tel' \| 'url' \| 'search'` | `'text'` |
| clearable | 是否显示清除按钮 | `boolean` | `false` |
| on-clear | 清除时的回调 | `() => void` | - |
| prepend | 输入框前置内容（内部） | `string` | - |
| append | 输入框后置内容（内部） | `string` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| value | 输入框内容（受控） | `string` | - |
| default-value | 输入框默认内容 | `string` | - |
| on-change | 输入框内容变化时的回调 | `React.ChangeEventHandler<HTMLInputElement>` | - |
| on-focus | 输入框获得焦点时的回调 | `React.FocusEventHandler<HTMLInputElement>` | - |
| on-blur | 输入框失去焦点时的回调 | `React.FocusEventHandler<HTMLInputElement>` | - |
| class-name | 自定义类名 | `string` | - |
