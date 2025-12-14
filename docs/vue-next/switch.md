# 开关 Switch

Switch 组件用于在两个状态之间进行切换，常用于设置选项的开启或关闭。

## 何时使用

- 需要在两个互斥状态之间切换时
- 表单中需要用户进行布尔值选择时
- 快速开关某个功能或设置时

## 示例

### 基础用法

最简单的 Switch 组件使用方式。
:::demo
```vue
<template>
  <ad-switch />
</template>
```
:::

### 尺寸

Switch 组件支持三种尺寸。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 24px; align-items: flex-start;">
    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">Default (84 × 40)</h4>
      <div style="display: flex; gap: 24px;">
        <ad-switch size="default" />
        <ad-switch size="default" :default-checked="true" />
      </div>
    </div>
    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">Small (62 × 30)</h4>
      <div style="display: flex; gap: 24px;">
        <ad-switch size="small" />
        <ad-switch size="small" :default-checked="true" />
      </div>
    </div>
    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">Mini (42 × 20)</h4>
      <div style="display: flex; gap: 24px;">
        <ad-switch size="mini" />
        <ad-switch size="mini" :default-checked="true" />
      </div>
    </div>
  </div>
</template>
```
:::

### 变种

Switch 组件支持多种变种样式。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 24px; align-items: flex-start;">
    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">Default / Primary</h4>
      <div style="display: flex; gap: 24px;">
        <ad-switch variant="default" />
        <ad-switch variant="default" :default-checked="true" />
        <ad-switch variant="primary" :default-checked="true" />
      </div>
    </div>
    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">Secondary</h4>
      <div style="display: flex; gap: 24px;">
        <ad-switch variant="secondary" />
        <ad-switch variant="secondary" :default-checked="true" />
      </div>
    </div>
  </div>
</template>
```
:::

### 状态

Switch 组件支持多种状态。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 24px; align-items: flex-start;">
    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">Off</h4>
      <ad-switch />
    </div>
    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">On</h4>
      <ad-switch :default-checked="true" />
    </div>
    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">Disabled Off</h4>
      <ad-switch disabled />
    </div>
    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">Disabled On</h4>
      <ad-switch disabled :default-checked="true" />
    </div>
  </div>
</template>
```
:::

### 自定义颜色

可以自定义开关的背景颜色。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 24px; align-items: flex-start;">
    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">Custom Checked Color (Green)</h4>
      <ad-switch :default-checked="true" checked-color="#22c55e" />
    </div>
    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">Custom Unchecked Color (Pink)</h4>
      <ad-switch unchecked-color="#fce7f3" />
    </div>
    <div>
      <h4 style="margin: 0 0 12px 0; color: #393939;">Both Custom Colors</h4>
      <div style="display: flex; gap: 24px;">
        <ad-switch unchecked-color="#fce7f3" checked-color="#ec4899" />
        <ad-switch unchecked-color="#fce7f3" checked-color="#ec4899" :default-checked="true" />
      </div>
    </div>
  </div>
</template>
```
:::

### 交互式示例

Switch 组件支持受控模式。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
    <ad-switch v-model:checked="checked" />
    <p style="margin: 0; color: #666;">
      Status: {{ checked ? 'ON' : 'OFF' }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
</script>
```
:::

### 所有尺寸和变种

展示所有尺寸和变种的组合。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 32px;">
    <div v-for="variant in ['default', 'primary', 'secondary']" :key="variant">
      <h4 style="margin: 0 0 16px 0; color: #393939; text-transform: capitalize;">
        {{ variant }}
      </h4>
      <div style="display: flex; gap: 48px; align-items: center;">
        <div v-for="size in ['default', 'small', 'mini']" :key="size" style="display: flex; gap: 16px; align-items: center;">
          <ad-switch :size="size" :variant="variant" />
          <ad-switch :size="size" :variant="variant" :default-checked="true" />
        </div>
      </div>
    </div>
  </div>
</template>
```
:::

### 非受控模式

使用 default-checked 属性的非受控模式。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
    <h4 style="margin: 0; color: #393939;">非受控模式（使用 default-checked）</h4>
    <ad-switch
      :default-checked="true"
      @change="(checked) => console.log('Switch changed:', checked)"
    />
  </div>
</template>
```
:::

### 暗色模式

Switch 组件在暗色模式下会自动适配主题颜色。
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
      <h4 style="margin: 0 0 12px 0; color: #a1a1aa;">Default / Primary</h4>
      <div style="display: flex; gap: 24px;">
        <ad-switch />
        <ad-switch :default-checked="true" />
      </div>
    </div>

    <div>
      <h4 style="margin: 0 0 12px 0; color: #a1a1aa;">Secondary</h4>
      <div style="display: flex; gap: 24px;">
        <ad-switch variant="secondary" />
        <ad-switch variant="secondary" :default-checked="true" />
      </div>
    </div>

    <div>
      <h4 style="margin: 0 0 12px 0; color: #a1a1aa;">Disabled</h4>
      <div style="display: flex; gap: 24px;">
        <ad-switch disabled />
        <ad-switch disabled :default-checked="true" />
      </div>
    </div>

    <div>
      <h4 style="margin: 0 0 12px 0; color: #a1a1aa;">All Sizes</h4>
      <div style="display: flex; gap: 24px; align-items: center;">
        <ad-switch size="default" :default-checked="true" />
        <ad-switch size="small" :default-checked="true" />
        <ad-switch size="mini" :default-checked="true" />
      </div>
    </div>
  </div>
</template>
```
:::

## API

### ad-switch

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 是否开启（受控模式） | boolean | - |
| default-checked | 默认是否开启（非受控模式） | boolean | - |
| disabled | 是否禁用 | boolean | `false` |
| size | 尺寸 | `'default'` \| `'small'` \| `'mini'` | `'default'` |
| variant | 变种 | `'default'` \| `'primary'` \| `'secondary'` | `'default'` |
| checked-color | 自定义开启时的颜色 | string | - |
| unchecked-color | 自定义关闭时的颜色 | string | - |
| @change | 状态改变时的回调 | `(checked: boolean) => void` | - |
| class-name | 自定义类名 | string | - |

## 注意事项

1. Switch 组件用于在两个状态之间进行切换
2. 通过 `checked` 属性控制开关状态（受控模式）
3. 通过 `default-checked` 属性设置默认状态（非受控模式）
4. 通过 `size` 属性设置尺寸：
   - `'default'`：默认尺寸（84 × 40）
   - `'small'`：小尺寸（62 × 30）
   - `'mini'`：迷你尺寸（42 × 20）
5. 通过 `variant` 属性设置变种：
   - `'default'`：默认变种
   - `'primary'`：主色调变种
   - `'secondary'`：次色调变种
6. 通过 `checked-color` 和 `unchecked-color` 属性可以自定义开关的颜色
7. 在受控模式下，需要同时提供 `checked` 和 `@change` 属性，或者使用 `v-model:checked` 实现双向绑定
8. 在非受控模式下，可以使用 `default-checked` 属性设置初始状态
9. Switch 组件支持键盘操作（Tab 键聚焦，空格键切换）
10. 在暗色模式下，Switch 组件会自动适配主题颜色