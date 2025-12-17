# 评分 Rate

评分组件用于对事物进行评级操作，或展示事物的评级。

## 何时使用

- 需要对事物进行评级时
- 展示事物的平均评分时
- 收集用户反馈时

## 示例

### 基础用法

最简单的评分组件使用方式。
:::demo
```vue
<template>
  <ad-rate :default-value="0" />
</template>
```
:::

### 展示模式

在展示模式下，评分组件仅用于显示评分，不支持用户交互。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 24px;">
    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">Empty (0 stars)</h4>
      <ad-rate :default-value="0" />
    </div>
    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">Full (5 stars)</h4>
      <ad-rate :default-value="5" />
    </div>
    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">Partial (3.7 stars)</h4>
      <ad-rate :default-value="3.7" show-value />
    </div>
  </div>
</template>
```
:::

### 展示模式示例

展示不同评分值的效果。
:::demo
```vue
<template>
  <div style="display: flex; gap: 48px;">
    <ad-rate :default-value="0" />
    <ad-rate :default-value="5" />
    <ad-rate :default-value="3.7" />
  </div>
</template>
```
:::

### 带小数的展示模式

展示带有小数的评分值。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <ad-rate :default-value="2.3" show-value />
    <ad-rate :default-value="3.5" show-value />
    <ad-rate :default-value="4.2" show-value />
    <ad-rate :default-value="3.7" show-value />
  </div>
</template>
```
:::

### 设置模式

在设置模式下，用户可以点击星星来设置评分。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 24px;">
    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">
        Step: 1 (整星)
      </h4>
      <ad-rate
        :value="Math.round(value)"
        allow-control
        @change="setValue"
        show-value
      />
    </div>
    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">
        Step: 0.5 (半星)
      </h4>
      <ad-rate
        :value="value"
        allow-control
        allow-half
        @change="setValue"
        show-value
      />
    </div>
    <p style="margin: 0; color: #666;">
      Current Value: {{ value }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(2.5);
const setValue = (val) => {
  value.value = val;
};
</script>
```
:::

### 整星设置模式

只允许选择整星的评分组件。
:::demo
```vue
<template>
  <div>
    <ad-rate
      :value="value"
      allow-control
      @change="setValue"
      show-value
    />
    <p style="margin: 12px 0 0 0; color: #666;">
      Selected: {{ value }} stars
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(3);
const setValue = (val) => {
  value.value = val;
};
</script>
```
:::

### 半星设置模式

允许选择半星的评分组件。
:::demo
```vue
<template>
  <div>
    <ad-rate
      :value="value"
      allow-control
      allow-half
      @change="setValue"
      show-value
    />
    <p style="margin: 12px 0 0 0; color: #666;">
      Selected: {{ value }} stars
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(3.5);
const setValue = (val) => {
  value.value = val;
};
</script>
```
:::

### 非受控模式

使用 `default-value` 属性设置默认值的非受控模式。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 24px;">
    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">
        非受控模式（使用 default-value）
      </h4>
      <ad-rate
        :default-value="3"
        allow-control
        @change="(val) => console.log('Selected:', val)"
        show-value
      />
    </div>
    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">
        非受控模式（半星）
      </h4>
      <ad-rate
        :default-value="2.5"
        allow-control
        allow-half
        @change="(val) => console.log('Selected:', val)"
        show-value
      />
    </div>
  </div>
</template>
```
:::

### 禁用状态

通过 `disabled` 属性禁用评分组件。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <ad-rate :default-value="3" allow-control disabled show-value />
    <ad-rate :default-value="4.5" allow-control allow-half disabled show-value />
  </div>
</template>
```
:::

### 不同星星数量

通过 `count` 属性设置星星的总数。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <span style="color: #666; margin-right: 12px;">3 stars:</span>
      <ad-rate :default-value="2" :count="3" show-value />
    </div>
    <div>
      <span style="color: #666; margin-right: 12px;">5 stars:</span>
      <ad-rate :default-value="3.5" :count="5" show-value />
    </div>
    <div>
      <span style="color: #666; margin-right: 12px;">10 stars:</span>
      <ad-rate :default-value="7" :count="10" show-value />
    </div>
  </div>
</template>
```
:::

### 交互式示例

完整的交互式评分组件示例。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <h4 style="margin: 0; color: #393939;">Click to rate:</h4>
    <ad-rate
      :value="value"
      allow-control
      allow-half
      @change="setValue"
      show-value
    />
    <div style="display: flex; gap: 8px;">
      <button @click="() => setValue(0)">Reset</button>
      <button @click="() => setValue(5)">Max</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(0);
const setValue = (val) => {
  value.value = val;
};
</script>
```
:::

### 所有状态概览

展示评分组件的所有可能状态。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 32px;">
    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">展示模式</h4>
      <div style="display: flex; gap: 48px;">
        <ad-rate :default-value="0" />
        <ad-rate :default-value="5" />
        <ad-rate :default-value="3.7" show-value />
      </div>
    </div>

    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">设置模式（整星）</h4>
      <ad-rate :default-value="2" allow-control show-value />
    </div>

    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">设置模式（半星）</h4>
      <ad-rate :default-value="3.5" allow-control allow-half show-value />
    </div>
  </div>
</template>
```
:::

## API

### ad-rate

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前值（受控模式） | number | - |
| default-value | 默认值（非受控模式） | number | `0` |
| count | 星星总数 | number | `5` |
| allow-control | 是否允许交互（设置模式） | boolean | `false` |
| allow-half | 是否允许半星（仅设置模式有效） | boolean | `false` |
| disabled | 是否禁用 | boolean | `false` |
| show-value | 是否显示数值 | boolean | `false` |
| @change | 值改变时的回调 | `(value: number) => void` | - |
| class-name | 自定义类名 | string | - |

## 注意事项

1. 在展示模式下（`allow-control=false`），评分组件仅用于显示评分，不支持用户交互
2. 在设置模式下（`allow-control=true`），用户可以点击星星来设置评分
3. 通过 `allow-half` 属性可以控制是否允许选择半星
4. 通过 `count` 属性可以设置星星的总数
5. 在受控模式下，需要同时提供 `value` 和 `@change` 属性
6. 在非受控模式下，可以使用 `default-value` 设置默认值
7. 通过 `show-value` 属性可以显示当前评分值
8. 评分组件会根据主题自动适配颜色，在暗色模式下会有不同的视觉效果
9. 当鼠标悬停在星星上时，会预览即将设置的评分值