# 复选框 Checkbox

复选框用于在一组可选项中进行多项选择。

## 何时使用

- 需要在多个选项中选择一个或多个选项时
- 支持单独使用或组合使用
- 支持全选/反选等复杂交互

## 代码演示

### 基本用法

最简单的用法，展示可用、选中、禁用等状态。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <ad-checkbox>未选中状态</ad-checkbox>
    <ad-checkbox v-model:checked="checked1">已选中状态</ad-checkbox>
    <ad-checkbox disabled>禁用状态</ad-checkbox>
    <ad-checkbox v-model:checked="checked2" disabled>选中且禁用状态</ad-checkbox>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const checked1 = ref(true);
const checked2 = ref(true);
</script>
```
:::

### 半选状态

通过 `indeterminate` 属性设置半选状态，常用于实现全选效果。
:::demo
```vue
<template>
  <ad-checkbox v-model:indeterminate="indeterminate">
    半选状态
  </ad-checkbox>
</template>

<script setup>
import { ref } from 'vue';

const indeterminate = ref(true);
</script>
```
:::

### 受控组件

通过 `v-model:checked` 实现受控组件。
:::demo
```vue
<template>
  <ad-checkbox v-model:checked="checked">
    点击切换状态: {{ checked ? '已选中' : '未选中' }}
  </ad-checkbox>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
</script>
```
:::

### 文字点击

通过 `label-clickable` 属性控制点击文字是否可以激活复选框。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <ad-checkbox v-model:checked="checked1">
      默认状态（只能点击方框）
    </ad-checkbox>
    <ad-checkbox v-model:checked="checked2" label-clickable>
      可点击文字（点击文字也可以激活）
    </ad-checkbox>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const checked1 = ref(false);
const checked2 = ref(false);
</script>
```
:::

### 复选框组

使用 `ad-checkbox-group` 组合多个复选框。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <ad-checkbox-group v-model:value="value" :options="options" />
    <p style="margin: 0;">
      已选中: {{ value.join(', ') || '无' }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(['apple']);

const options = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
  { label: '葡萄', value: 'grape' },
];
</script>
```
:::

### 垂直排列

通过 `direction` 属性设置垂直排列。
:::demo
```vue
<template>
  <ad-checkbox-group
    v-model:value="value"
    direction="vertical"
    :options="options"
  />
</template>

<script setup>
import { ref } from 'vue';

const value = ref(['option1']);

const options = [
  { label: '选项一', value: 'option1' },
  { label: '选项二', value: 'option2' },
  { label: '选项三', value: 'option3' },
];
</script>
```
:::

### 全选效果

实现全选/反选的典型交互模式。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <ad-checkbox
      v-model:indeterminate="indeterminate"
      v-model:checked="checkAll"
      @change="onCheckAllChange"
    >
      全选
    </ad-checkbox>
    <div style="border-left: 2px solid #e4e4e7; padding-left: 16px;">
      <ad-checkbox-group
        direction="vertical"
        v-model:value="checkedList"
        :options="checkboxOptions"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const allOptions = ['apple', 'banana', 'orange', 'grape'];
const checkedList = ref(['apple', 'banana']);

const checkAll = computed({
  get: () => allOptions.length === checkedList.value.length,
  set: (val) => {
    checkedList.value = val ? [...allOptions] : [];
  }
});

const indeterminate = computed(() => {
  return checkedList.value.length > 0 && checkedList.value.length < allOptions.length;
});

const onCheckAllChange = (checked) => {
  checkedList.value = checked ? [...allOptions] : [];
};

const checkboxOptions = allOptions.map((item) => ({
  label: item.charAt(0).toUpperCase() + item.slice(1),
  value: item,
}));
</script>
```
:::

## API

### ad-checkbox

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 是否选中（受控） | `boolean` | - |
| default-checked | 默认是否选中（非受控） | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| indeterminate | 是否为半选状态 | `boolean` | `false` |
| value | 复选框的值 | `string \| number` | - |
| label-clickable | 点击文字部分是否可以激活复选框 | `boolean` | `false` |

### ad-checkbox-group

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中的值数组（受控） | `(string \| number)[]` | - |
| default-value | 默认选中的值数组（非受控） | `(string \| number)[]` | `[]` |
| options | 选项配置 | `(CheckboxOptionType \| string \| number)[]` | - |
| disabled | 是否禁用整组 | `boolean` | `false` |
| direction | 排列方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| label-clickable | 点击文字部分是否可以激活复选框 | `boolean` | `true` |

### CheckboxOptionType

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 选项标签 | `string` | - |
| value | 选项值 | `string \| number` | - |
| disabled | 是否禁用 | `boolean` | `false` |