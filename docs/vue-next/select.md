# 选择器 Select

选择器用于从一组选项中选择一个或多个选项。

## 何时使用

- 需要从多个选项中选择一个值时
- 选项数量较多，不适合使用单选框时
- 表单中需要用户提供选择时

## 示例

### 基础用法

最简单的选择器使用方式。
:::demo
```vue
<template>
  <div style="width: 400px;">
    <ad-select :options="options" placeholder="Placeholder goes here" />
  </div>
</template>

<script setup>
const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2', disabled: true },
  { label: 'Selected Option', value: 'selected' },
  { label: 'Hover Option', value: 'hover' },
  { label: 'Option 5 goes here', value: 'option5' },
];
</script>
```
:::

### 不同状态

选择器支持多种状态：正常、选中/聚焦、加载中、禁用。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 32px; width: 600px;">
    <div style="display: flex; gap: 48px;">
      <div style="flex: 1;">
        <h4 style="margin: 0 0 12px 0; color: #393939;">Normal</h4>
        <ad-select :options="defaultOptions" placeholder="Placeholder goes here" />
      </div>
      <div style="flex: 1;">
        <h4 style="margin: 0 0 12px 0; color: #393939;">Selected/Focused</h4>
        <ad-select :options="defaultOptions" default-value="option1" />
      </div>
    </div>

    <div style="display: flex; gap: 48px;">
      <div style="flex: 1;">
        <h4 style="margin: 0 0 12px 0; color: #393939;">Loading</h4>
        <ad-select :options="defaultOptions" placeholder="Placeholder goes here" loading />
      </div>
      <div style="flex: 1;">
        <h4 style="margin: 0 0 12px 0; color: #393939;">Loading (with value)</h4>
        <ad-select :options="defaultOptions" default-value="option1" loading />
      </div>
    </div>

    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">Disabled</h4>
      <div style="width: 50%;">
        <ad-select :options="defaultOptions" default-value="option1" disabled />
      </div>
    </div>
  </div>
</template>

<script setup>
const defaultOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2', disabled: true },
  { label: 'Selected Option', value: 'selected' },
  { label: 'Hover Option', value: 'hover' },
  { label: 'Option 5 goes here', value: 'option5' },
];
</script>
```
:::

### 正常状态
:::demo
```vue
<template>
  <div style="width: 400px;">
    <h4 style="margin: 0 0 12px 0; color: #393939;">Normal</h4>
    <ad-select :options="defaultOptions" placeholder="Placeholder goes here" />
  </div>
</template>

<script setup>
const defaultOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2', disabled: true },
  { label: 'Selected Option', value: 'selected' },
  { label: 'Hover Option', value: 'hover' },
  { label: 'Option 5 goes here', value: 'option5' },
];
</script>
```
:::

### 选中/聚焦状态
:::demo
```vue
<template>
  <div style="width: 400px;">
    <h4 style="margin: 0 0 12px 0; color: #393939;">Selected/Focused</h4>
    <ad-select
      :options="defaultOptions"
      default-value="option1"
      placeholder="Placeholder goes here"
    />
  </div>
</template>

<script setup>
const defaultOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2', disabled: true },
  { label: 'Selected Option', value: 'selected' },
  { label: 'Hover Option', value: 'hover' },
  { label: 'Option 5 goes here', value: 'option5' },
];
</script>
```
:::

### 加载状态
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 24px; width: 400px;">
    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">Loading (no value)</h4>
      <ad-select
        :options="defaultOptions"
        placeholder="Placeholder goes here"
        loading
      />
    </div>
    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">Loading (with value)</h4>
      <ad-select
        :options="defaultOptions"
        default-value="option1"
        loading
      />
    </div>
  </div>
</template>

<script setup>
const defaultOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2', disabled: true },
  { label: 'Selected Option', value: 'selected' },
  { label: 'Hover Option', value: 'hover' },
  { label: 'Option 5 goes here', value: 'option5' },
];
</script>
```
:::

### 禁用状态
:::demo
```vue
<template>
  <div style="width: 400px;">
    <h4 style="margin: 0 0 12px 0; color: #393939;">Disabled</h4>
    <ad-select
      :options="defaultOptions"
      default-value="option1"
      disabled
    />
  </div>
</template>

<script setup>
const defaultOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2', disabled: true },
  { label: 'Selected Option', value: 'selected' },
  { label: 'Hover Option', value: 'hover' },
  { label: 'Option 5 goes here', value: 'option5' },
];
</script>
```
:::

### 下拉框展开
:::demo
```vue
<template>
  <div style="width: 400px;">
    <h4 style="margin: 0 0 12px 0; color: #393939;">Dropdown</h4>
    <ad-select
      :options="defaultOptions"
      :value="value"
      @change="setValue"
      placeholder="Select an option"
    />
    <p style="margin: 12px 0 0; color: #666;">
      Selected: {{ value || 'None' }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const defaultOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2', disabled: true },
  { label: 'Selected Option', value: 'selected' },
  { label: 'Hover Option', value: 'hover' },
  { label: 'Option 5 goes here', value: 'option5' },
];

const value = ref('selected');
const setValue = (val) => {
  value.value = val;
};
</script>
```
:::

### 带滚动条（超过5个选项）
:::demo
```vue
<template>
  <div style="width: 400px;">
    <h4 style="margin: 0 0 12px 0; color: #393939;">With Scrolling (8 options)</h4>
    <ad-select
      :options="manyOptions"
      placeholder="Select an option"
    />
  </div>
</template>

<script setup>
const manyOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5' },
  { label: 'Option 6', value: '6' },
  { label: 'Option 7', value: '7' },
  { label: 'Option 8', value: '8' },
];
</script>
```
:::

### Inflow 模式

在 Inflow 模式下，下拉框会展开容器高度。
:::demo
```vue
<template>
  <div style="width: 400px;">
    <h4 style="margin: 0 0 12px 0; color: #393939;">Inflow Mode</h4>
    <div style="border: 1px solid #e4e4e7; border-radius: 12px; padding: 16px;">
      <p style="margin: 0 0 12px; color: #666;">
        Container will expand when dropdown opens
      </p>
      <ad-select
        :options="defaultOptions"
        :value="value"
        @change="setValue"
        placeholder="Select an option"
        inflow
      />
      <p style="margin: 12px 0 0; color: #666;">
        Selected: {{ value || 'None' }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const defaultOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2', disabled: true },
  { label: 'Selected Option', value: 'selected' },
  { label: 'Hover Option', value: 'hover' },
  { label: 'Option 5 goes here', value: 'option5' },
];

const value = ref();
const setValue = (val) => {
  value.value = val;
};
</script>
```
:::

### Float 模式（默认）

在 Float 模式下，下拉框会浮动在内容之上。
:::demo
```vue
<template>
  <div style="width: 400px;">
    <h4 style="margin: 0 0 12px 0; color: #393939;">Float Mode (Default)</h4>
    <div style="border: 1px solid #e4e4e7; border-radius: 12px; padding: 16px;">
      <p style="margin: 0 0 12px; color: #666;">
        Dropdown floats over content
      </p>
      <ad-select
        :options="defaultOptions"
        :value="value"
        @change="setValue"
        placeholder="Select an option"
      />
      <p style="margin: 12px 0 0; color: #666;">
        Selected: {{ value || 'None' }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const defaultOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2', disabled: true },
  { label: 'Selected Option', value: 'selected' },
  { label: 'Hover Option', value: 'hover' },
  { label: 'Option 5 goes here', value: 'option5' },
];

const value = ref();
const setValue = (val) => {
  value.value = val;
};
</script>
```
:::

### 带禁用选项
:::demo
```vue
<template>
  <div style="width: 400px;">
    <h4 style="margin: 0 0 12px 0; color: #393939;">With Disabled Options</h4>
    <ad-select
      :options="[{
        label: 'Available Option 1', value: '1' }, {
        label: 'Disabled Option', value: '2', disabled: true }, {
        label: 'Available Option 3', value: '3' }, {
        label: 'Another Disabled', value: '4', disabled: true }, {
        label: 'Available Option 5', value: '5' },
      ]"
      placeholder="Select an option"
    />
  </div>
</template>
```
:::

### 受控模式

在受控模式下，可以通过 `value` 和 `@change` 属性控制选择器的值。
:::demo
```vue
<template>
  <div style="width: 400px;">
    <h4 style="margin: 0 0 12px 0; color: #393939;">Controlled Mode</h4>
    <ad-select
      :options="defaultOptions"
      :value="value"
      @change="setValue"
    />
    <div style="margin-top: 16px; display: flex; gap: 8px;">
      <button @click="() => setValue('option1')">Set Option 1</button>
      <button @click="() => setValue('selected')">Set Selected</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const defaultOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2', disabled: true },
  { label: 'Selected Option', value: 'selected' },
  { label: 'Hover Option', value: 'hover' },
  { label: 'Option 5 goes here', value: 'option5' },
];

const value = ref('option1');
const setValue = (val) => {
  value.value = val;
};
</script>
```
:::

## API

### ad-select

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中的值（受控模式） | string \| number | - |
| default-value | 默认选中的值（非受控模式） | string \| number | - |
| options | 选项列表 | SelectOption[] | `[]` |
| placeholder | 占位文本 | string | `'Placeholder goes here'` |
| disabled | 是否禁用 | boolean | `false` |
| loading | 是否加载中 | boolean | `false` |
| inflow | 是否使用 inflow 模式（撑开容器） | boolean | `false` |
| @change | 选中值改变时的回调 | `(value: string \| number) => void` | - |
| class-name | 自定义类名 | string | - |
| @open-change | 下拉框展开/收起回调 | `(open: boolean) => void` | - |

### SelectOption

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 选项标签 | string | - |
| value | 选项值 | string \| number | - |
| disabled | 是否禁用该选项 | boolean | - |

## 注意事项

1. 选择器支持两种模式：
   - 受控模式：通过 `value` 和 `@change` 属性控制值
   - 非受控模式：通过 `default-value` 属性设置默认值
2. 通过 `inflow` 属性可以切换下拉框的显示模式：
   - `inflow=false`（默认）：下拉框浮动显示
   - `inflow=true`：下拉框撑开容器显示
3. 在加载状态下，选择器会显示加载图标，此时无法进行交互
4. 可以为选项设置 `disabled` 属性来禁用特定选项
5. 选择器支持键盘导航：
   - Enter 或空格键：打开/关闭下拉框
   - Escape 键：关闭下拉框
   - 方向键：导航选项
6. 选择器会自动处理点击外部区域关闭下拉框的逻辑
7. 在暗色模式下，选择器会自动适配主题颜色