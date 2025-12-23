# 文本域 Textarea

用于多行文本输入。

## 何时使用

- 需要输入多行文本时
- 需要限制字数的文本输入时
- 需要可清除功能的多行文本输入时

## 示例

### 基础用法

最简单的文本域用法。

:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <h4 style="margin: 0 0 8px 0; color: #393939; font-size: 14px;">默认 (3行)</h4>
      <ad-textarea placeholder="Please enter..." />
    </div>
    <div>
      <h4 style="margin: 0 0 8px 0; color: #393939; font-size: 14px;">有内容</h4>
      <ad-textarea default-value="This is a textarea with some content. It supports multiple lines of text." />
    </div>
  </div>
</template>
```
:::

### 不同行数

可以设置不同的行数。

:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <h4 style="margin: 0 0 8px 0; color: #393939; font-size: 14px;">3 行（默认）</h4>
      <ad-textarea :rows="3" placeholder="3 rows textarea..." />
    </div>
    <div>
      <h4 style="margin: 0 0 8px 0; color: #393939; font-size: 14px;">5 行</h4>
      <ad-textarea :rows="5" placeholder="5 rows textarea..." />
    </div>
  </div>
</template>
```
:::

### 可清除文本域

带清除图标的文本域，点击图标清除内容。

:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <ad-textarea
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

### 字数限制

可以设置最大字数限制，并在右下角显示计数。

:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <h4 style="margin: 0 0 8px 0; color: #393939; font-size: 14px;">字数限制（右下角显示计数）</h4>
      <ad-textarea :max="200" default-value="This is some text content." placeholder="最多输入200字..." />
    </div>
    <div>
      <h4 style="margin: 0 0 8px 0; color: #393939; font-size: 14px;">字数限制 + 可清除</h4>
      <ad-textarea :max="100" clearable default-value="Combined features" />
    </div>
  </div>
</template>
```
:::

### 禁用状态

展示禁用状态的文本域。

:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <h4 style="margin: 0 0 8px 0; color: #393939; font-size: 14px;">禁用</h4>
      <ad-textarea disabled default-value="Disabled textarea" />
    </div>
    <div>
      <h4 style="margin: 0 0 8px 0; color: #393939; font-size: 14px;">禁用（有内容）</h4>
      <ad-textarea disabled default-value="Disabled textarea with content" />
    </div>
  </div>
</template>
```
:::

## API

### ad-textarea

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| rows | 默认行数 | `number` | `3` |
| clearable | 是否显示清除按钮 | `boolean` | `false` |
| on-clear | 清除时的回调 | `() => void` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| max | 最大字数限制，设置后显示字数计数 | `number` | - |
| value | 输入框内容（受控） | `string` | - |
| default-value | 输入框默认内容 | `string` | - |
| on-change | 输入框内容变化时的回调 | `(event: Event) => void` | - |
| on-focus | 输入框获得焦点时的回调 | `(event: FocusEvent) => void` | - |
| on-blur | 输入框失去焦点时的回调 | `(event: FocusEvent) => void` | - |
| class-name | 自定义类名 | `string` | - |
| placeholder | 占位文本 | `string` | - |