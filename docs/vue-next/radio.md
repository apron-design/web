# 单选框 Radio

单选框用于在一组选项中选择唯一的一个选项。

## 何时使用

- 在一组互斥的选项中进行单项选择时
- 需要展示所有可选项供用户比较时
- 表单中需要用户做出明确选择时

## 示例

### 基础用法

最简单的单选框使用方式。
:::demo
```vue
<template>
  <ad-radio>Radio</ad-radio>
</template>
```
:::

### 不同状态

单选框支持多种状态：可用、禁用、选中、选中且禁用。
:::demo
```vue
<template>
  <div style="display: flex; gap: 48px;">
    <div style="width: 300px;">
      <ad-radio>I have only one line content</ad-radio>
    </div>
    <div style="width: 300px;">
      <ad-radio disabled>I have only one line content</ad-radio>
    </div>
  </div>
</template>
```
:::

### 选中状态

展示选中状态的单选框。
:::demo
```vue
<template>
  <div style="display: flex; gap: 48px;">
    <div style="width: 300px;">
      <ad-radio checked @change="() => {}">
        I have 2 lines content to show so this is a 2 lines content
      </ad-radio>
    </div>
    <div style="width: 300px;">
      <ad-radio checked disabled @change="() => {}">
        I have 2 lines content to show so this is a 2 lines content
      </ad-radio>
    </div>
  </div>
</template>
```
:::

### 所有状态概览

展示单选框的所有可能状态。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 32px;">
    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">Available</h4>
      <div style="display: flex; gap: 48px;">
        <div style="width: 300px;">
          <ad-radio>I have only one line content</ad-radio>
        </div>
        <div style="width: 300px;">
          <h4 style="margin: 0 0 12px 0; color: #393939;">Disabled</h4>
          <ad-radio disabled>I have only one line content</ad-radio>
        </div>
      </div>
    </div>

    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">Checked</h4>
      <div style="display: flex; gap: 48px;">
        <div style="width: 300px;">
          <ad-radio checked @change="() => {}">
            I have 2 lines content to show so this is a 2 lines content
          </ad-radio>
        </div>
        <div style="width: 300px;">
          <ad-radio checked disabled @change="() => {}">
            I have 2 lines content to show so this is a 2 lines content
          </ad-radio>
        </div>
      </div>
    </div>
  </div>
</template>
```
:::

### 交互式示例

单选框支持受控模式，可以响应用户的点击操作。
:::demo
```vue
<template>
  <ad-radio :checked="checked" @change="setChecked">
    Click to toggle: {{ checked ? 'Checked' : 'Unchecked' }}
  </ad-radio>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
const setChecked = (val) => {
  checked.value = val;
};
</script>
```
:::

### 标签可点击

可以通过 `label-clickable` 属性控制标签是否可点击。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 24px;">
    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">
        label-clickable=false (默认，只能点击圆圈)
      </h4>
      <ad-radio :checked="checked1" @change="setChecked1">
        只有点击左边的圆圈才能选中
      </ad-radio>
    </div>
    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">
        label-clickable=true (点击文字也可以激活)
      </h4>
      <ad-radio :checked="checked2" @change="setChecked2" label-clickable>
        点击这段文字也可以选中
      </ad-radio>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const checked1 = ref(false);
const checked2 = ref(false);

const setChecked1 = (val) => {
  checked1.value = val;
};

const setChecked2 = (val) => {
  checked2.value = val;
};
</script>
```
:::

### RadioGroup 单选框组

使用 RadioGroup 可以方便地管理一组单选框。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 24px;">
    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">Horizontal (default)</h4>
      <ad-radio-group
        :value="value"
        @change="setValue"
        :options="[
          { label: 'Apple', value: 'apple' },
          { label: 'Banana', value: 'banana' },
          { label: 'Orange', value: 'orange' },
          { label: 'Disabled', value: 'disabled', disabled: true },
        ]"
      />
    </div>
    <div>
      <p style="margin: 0; color: #666;">
        Selected: {{ value || 'None' }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('apple');
const setValue = (val) => {
  value.value = val;
};
</script>
```
:::

### 垂直排列

通过 `direction` 属性可以设置单选框组的排列方向。
:::demo
```vue
<template>
  <ad-radio-group
    :value="value"
    @change="setValue"
    direction="vertical"
    :options="[
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ]"
  />
</template>

<script setup>
import { ref } from 'vue';

const value = ref('option1');
const setValue = (val) => {
  value.value = val;
};
</script>
```
:::

### 使用子组件

可以通过 RadioGroup.Item 子组件来自定义每个选项。
:::demo
```vue
<template>
  <ad-radio-group :value="value" @change="setValue">
    <ad-radio-group-item value="a">Custom Item A</ad-radio-group-item>
    <ad-radio-group-item value="b">Custom Item B</ad-radio-group-item>
    <ad-radio-group-item value="c" disabled>
      Custom Item C (Disabled)
    </ad-radio-group-item>
  </ad-radio-group>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('a');
const setValue = (val) => {
  value.value = val;
};
</script>
```
:::

### 禁用整组

可以通过 `disabled` 属性禁用整个单选框组。
:::demo
```vue
<template>
  <ad-radio-group
    disabled
    default-value="apple"
    :options="[
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Orange', value: 'orange' },
    ]"
  />
</template>
```
:::

### 非受控模式

可以使用 `default-value` 属性设置默认选中项。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 24px;">
    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">非受控模式（使用 default-value）</h4>
      <ad-radio-group
        name="fruit"
        default-value="banana"
        :options="[
          { label: 'Apple', value: 'apple' },
          { label: 'Banana', value: 'banana' },
          { label: 'Orange', value: 'orange' },
        ]"
        @change="(val) => console.log('Selected:', val)"
      />
    </div>
  </div>
</template>
```
:::

### 暗色模式

单选框在暗色模式下会自动适配主题颜色。
:::demo
```vue
<template>
  <div
    data-theme="dark"
    style="
      padding: 32px;
      background-color: #18181b;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      gap: 24px;
    "
  >
    <div>
      <h4 style="margin: 0 0 12px 0; color: #a1a1aa;">Available</h4>
      <div style="display: flex; gap: 32px;">
        <ad-radio>Unchecked</ad-radio>
        <ad-radio checked @change="() => {}">Checked</ad-radio>
      </div>
    </div>

    <div>
      <h4 style="margin: 0 0 12px 0; color: #a1a1aa;">Disabled</h4>
      <div style="display: flex; gap: 32px;">
        <ad-radio disabled>Unchecked</ad-radio>
        <ad-radio checked disabled @change="() => {}">Checked</ad-radio>
      </div>
    </div>

    <div>
      <h4 style="margin: 0 0 12px 0; color: #a1a1aa;">Radio Group</h4>
      <ad-radio-group
        default-value="option1"
        direction="horizontal"
        :options="[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]"
      />
    </div>
  </div>
</template>
```
:::

## API

### ad-radio

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 是否选中（受控模式） | boolean | - |
| default-checked | 默认是否选中（非受控模式） | boolean | - |
| disabled | 是否禁用 | boolean | `false` |
| value | 单选框的值 | string \| number | - |
| @change | 选中状态改变时的回调 | `(checked: boolean) => void` | - |
| label-clickable | 点击文字部分是否可以激活单选框 | boolean | `false` |
| class-name | 自定义类名 | string | - |

### ad-radio-group

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中的值（受控模式） | string \| number | - |
| default-value | 默认选中的值（非受控模式） | string \| number | - |
| options | 选项配置 | RadioOptionType[] | - |
| disabled | 是否禁用整组 | boolean | `false` |
| direction | 排列方向 | `'horizontal'` \| `'vertical'` | `'horizontal'` |
| @change | 选中值改变时的回调 | `(value: string \| number) => void` | - |
| class-name | 自定义类名 | string | - |
| name | RadioGroup 的 name 属性 | string | - |
| label-clickable | 点击文字部分是否可以激活单选框 | boolean | `true` |

### RadioOptionType

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 选项标签 | string | - |
| value | 选项值 | string \| number | - |
| disabled | 是否禁用该选项 | boolean | - |

### ad-radio-group-item

继承 ad-radio 的所有属性，但以下属性除外：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 单选框的值 | string \| number | - |
| checked | 是否选中（由 RadioGroup 控制） | boolean | - |
| @change | 选中状态改变时的回调（由 RadioGroup 控制） | function | - |
| name | name 属性（由 RadioGroup 控制） | string | - |

## 注意事项

1. 单选框在同一组内是互斥的，只能有一个被选中
2. RadioGroup 会自动为每个 Radio 分配相同的 name 属性，确保它们属于同一组
3. 在受控模式下，需要同时提供 `value` 和 `@change` 属性
4. 在非受控模式下，可以使用 `default-value` 设置默认选中项
5. 通过 `label-clickable` 属性可以控制标签是否可点击，默认情况下 Radio 的标签不可点击，RadioGroup 中的标签可点击
6. RadioGroup 支持两种排列方向：水平（horizontal）和垂直（vertical）
7. 可以通过 `options` 属性快速配置选项，也可以通过子组件的方式自定义每个选项