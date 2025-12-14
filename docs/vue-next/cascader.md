# 级联选择 Cascader

级联选择框，用于多级联动选择。

## 何时使用

- 需要从一组相关联的数据集合进行选择，例如省市区、公司部门等
- 支持多级联动选择
- 支持异步加载数据

## 代码演示

### 基本用法

最简单的用法，展示省市区三级联动选择。
:::demo
```vue
<template>
  <ad-cascader
    :options="options"
    v-model:value="value"
    placeholder="请选择地区"
  />
</template>

<script setup>
import { ref } from 'vue';

const value = ref([]);

const options = [
  {
    label: '浙江省',
    value: 'zhejiang',
    children: [
      {
        label: '杭州市',
        value: 'hangzhou',
        children: [
          { label: '西湖区', value: 'xihu' },
          { label: '余杭区', value: 'yuhang' },
        ],
      },
      {
        label: '宁波市',
        value: 'ningbo',
        children: [
          { label: '海曙区', value: 'haishu' },
          { label: '江北区', value: 'jiangbei' },
        ],
      },
    ],
  },
  {
    label: '江苏省',
    value: 'jiangsu',
    children: [
      {
        label: '南京市',
        value: 'nanjing',
        children: [
          { label: '玄武区', value: 'xuanwu' },
          { label: '秦淮区', value: 'qinhuai' },
        ],
      },
    ],
  },
];
</script>
```
:::

### 禁用状态

通过 `disabled` 属性设置是否禁用。
:::demo
```vue
<template>
  <ad-cascader
    :options="options"
    :default-value="['option1', 'option1-1']"
    disabled
  />
</template>

<script setup>
const options = [
  {
    label: 'Option 1',
    value: 'option1',
    children: [
      { label: 'Option 1-1', value: 'option1-1' },
      { label: 'Option 1-2', value: 'option1-2' },
    ],
  },
  {
    label: 'Option 2',
    value: 'option2',
    disabled: true,
  },
];
</script>
```
:::

### 加载状态

通过 `loading` 属性设置加载状态。
:::demo
```vue
<template>
  <ad-cascader
    :options="options"
    placeholder="请选择"
    loading
  />
</template>

<script setup>
const options = [
  {
    label: 'Option 1',
    value: 'option1',
    children: [
      { label: 'Option 1-1', value: 'option1-1' },
    ],
  },
];
</script>
```
:::

### 选择即改变

通过 `changeOnSelect` 属性设置在选择过程中就触发 `onChange`，而不是只在选择叶子节点时触发。
:::demo
```vue
<template>
  <ad-cascader
    :options="options"
    v-model:value="value"
    placeholder="请选择地区"
    change-on-select
  />
</template>

<script setup>
import { ref } from 'vue';

const value = ref([]);

const options = [
  {
    label: '浙江省',
    value: 'zhejiang',
    children: [
      {
        label: '杭州市',
        value: 'hangzhou',
        children: [
          { label: '西湖区', value: 'xihu' },
          { label: '余杭区', value: 'yuhang' },
        ],
      },
    ],
  },
];
</script>
```
:::

### 自定义分隔符

通过 `separator` 属性自定义分隔符。
:::demo
```vue
<template>
  <ad-cascader
    :options="options"
    :default-value="['zhejiang', 'hangzhou', 'xihu']"
    separator=" → "
  />
</template>

<script setup>
const options = [
  {
    label: '浙江省',
    value: 'zhejiang',
    children: [
      {
        label: '杭州市',
        value: 'hangzhou',
        children: [
          { label: '西湖区', value: 'xihu' },
        ],
      },
    ],
  },
];
</script>
```
:::

## API

### ad-cascader

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中的值路径（受控） | `(string \| number)[]` | - |
| default-value | 默认选中的值路径（非受控） | `(string \| number)[]` | `[]` |
| options | 选项列表 | `CascaderOption[]` | `[]` |
| placeholder | 占位文本 | `string` | `'Placeholder goes here'` |
| disabled | 是否禁用 | `boolean` | `false` |
| loading | 是否加载中 | `boolean` | `false` |
| inflow | 是否使用 inflow 模式（撑开容器） | `boolean` | `false` |
| change-on-select | 是否在选择过程中触发 onChange（而非只在选择叶子节点时） | `boolean` | `false` |
| separator | 值分隔符，用于显示 | `string` | `' / '` |

### CascaderOption

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 选项标签 | `string` | - |
| value | 选项值 | `string \| number` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| children | 子选项 | `CascaderOption[]` | - |