# 加载中 Spin

Spin 组件用于页面或组件的加载状态指示，提供多种展示方式和位置选项。

## 何时使用

- 页面或组件内容需要异步加载时
- 执行耗时操作需要给用户反馈时
- 需要阻止用户在加载过程中进行操作时

## 示例

### 基础用法

最简单的 Spin 组件使用方式。
:::demo
```vue
<template>
  <ad-spin :loading="true">
    <div style="height: 200px;"></div>
  </ad-spin>
</template>
```
:::

### 带提示文字

可以添加提示文字来说明加载状态。
:::demo
```vue
<template>
  <ad-spin :loading="true" text="请稍候...">
    <div style="height: 200px;"></div>
  </ad-spin>
</template>
```
:::

### 无提示文字

可以通过设置空字符串隐藏提示文字。
:::demo
```vue
<template>
  <ad-spin :loading="true" text="">
    <div style="height: 200px;"></div>
  </ad-spin>
</template>
```
:::

### 包裹模式

Spin 组件可以包裹其他内容，在加载时显示遮罩层。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 400px;">
    <ad-button @click="loading = !loading">
      {{ loading ? '关闭 Loading' : '开启 Loading' }}
    </ad-button>
    <ad-spin :loading="loading">
      <div
        style="
          padding: 40px;
          background: #f5f5f5;
          border-radius: 8px;
        "
      >
        <h3 style="margin: 0 0 16px 0;">卡片内容</h3>
        <p style="margin: 0;">
          这是被 Spin 包裹的内容，当 loading 为 true 时，会显示加载蒙层。
        </p>
      </div>
    </ad-spin>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(true);
</script>
```
:::

### 位置选项

Spin 组件支持多种位置选项。
:::demo
```vue
<template>
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
    <ad-spin
      v-for="placement in placements"
      :key="placement"
      :loading="true"
      :placement="placement"
    >
      <div
        style="
          width: 200px;
          height: 150px;
          background: #f5f5f5;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #999;
        "
      >
        {{ placement }}
      </div>
    </ad-spin>
  </div>
</template>

<script setup>
const placements = [
  'top-left',
  'top',
  'top-right',
  'left',
  'center',
  'right',
  'bottom-left',
  'bottom',
  'bottom-right',
];
</script>
```
:::

### 位置演示

可以通过按钮切换不同的位置选项。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 500px;">
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <ad-button
        v-for="p in placements"
        :key="p"
        :variant="placement === p ? 'primary' : 'default'"
        size="sm"
        @click="placement = p"
      >
        {{ p }}
      </ad-button>
    </div>
    <ad-spin :loading="true" :placement="placement">
      <div
        style="
          width: 100%;
          height: 300px;
          background: #f5f5f5;
          border-radius: 8px;
        "
      />
    </ad-spin>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const placement = ref('center');

const placements = [
  'center',
  'top',
  'bottom',
  'left',
  'right',
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
];
</script>
```
:::

### 自定义图标

可以使用自定义图标替换默认的加载图标。
:::demo
```vue
<template>
  <ad-spin :loading="true" :icon="customIcon" text="自定义图标" />
</template>

<script setup>
import { h } from 'vue';

const customIcon = h('svg', {
  width: '32',
  height: '32',
  viewBox: '0 0 32 32',
  fill: 'none',
  style: {
    animation: 'spin 1s linear infinite'
  }
}, [
  h('circle', { cx: '16', cy: '4', r: '3', fill: 'currentColor', opacity: '1' }),
  h('circle', { cx: '24.5', cy: '7.5', r: '3', fill: 'currentColor', opacity: '0.875' }),
  h('circle', { cx: '28', cy: '16', r: '3', fill: 'currentColor', opacity: '0.75' }),
  h('circle', { cx: '24.5', cy: '24.5', r: '3', fill: 'currentColor', opacity: '0.625' }),
  h('circle', { cx: '16', cy: '28', r: '3', fill: 'currentColor', opacity: '0.5' }),
  h('circle', { cx: '7.5', cy: '24.5', r: '3', fill: 'currentColor', opacity: '0.375' }),
  h('circle', { cx: '4', cy: '16', r: '3', fill: 'currentColor', opacity: '0.25' }),
  h('circle', { cx: '7.5', cy: '7.5', r: '3', fill: 'currentColor', opacity: '0.125' }),
  h('style', {}, '@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }')
]);
</script>
```
:::

### 全屏模式

可以显示全屏的加载状态。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <p style="margin: 0; color: #666; font-size: 14px;">
      点击按钮显示全屏 Spin，3秒后自动关闭
    </p>
    <ad-button @click="handleShow">显示全屏 Spin</ad-button>
  </div>
</template>

<script setup>
const handleShow = () => {
  // 注意：在实际使用中，需要通过全局方法调用
  console.log('显示全屏 Spin');
  // 模拟3秒后关闭
  setTimeout(() => {
    console.log('关闭全屏 Spin');
  }, 3000);
};
</script>
```
:::

### 全屏不同位置

全屏模式也支持不同的位置选项。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <p style="margin: 0; color: #666; font-size: 14px;">
      点击按钮显示不同位置的全屏 Spin
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <ad-button
        v-for="p in placements"
        :key="p"
        @click="() => handleShow(p)"
      >
        {{ p }}
      </ad-button>
    </div>
  </div>
</template>

<script setup>
const placements = [
  'center',
  'top',
  'bottom',
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
];

const handleShow = (placement) => {
  // 注意：在实际使用中，需要通过全局方法调用
  console.log(`显示位置为 ${placement} 的全屏 Spin`);
  // 模拟2秒后关闭
  setTimeout(() => {
    console.log('关闭全屏 Spin');
  }, 2000);
};
</script>
```
:::

### 卡片中使用

在卡片组件中使用 Spin 显示加载状态。
:::demo
```vue
<template>
  <div style="width: 400px;">
    <ad-spin :loading="loading">
      <div
        style="
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          padding: 24px;
        "
      >
        <h3 style="margin: 0 0 16px 0;">数据统计</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <div style="font-size: 24px; font-weight: 600;">1,234</div>
            <div style="color: #666; font-size: 14px;">总用户</div>
          </div>
          <div>
            <div style="font-size: 24px; font-weight: 600;">5,678</div>
            <div style="color: #666; font-size: 14px;">总订单</div>
          </div>
          <div>
            <div style="font-size: 24px; font-weight: 600;">¥12,345</div>
            <div style="color: #666; font-size: 14px;">总收入</div>
          </div>
          <div>
            <div style="font-size: 24px; font-weight: 600;">98%</div>
            <div style="color: #666; font-size: 14px;">满意度</div>
          </div>
        </div>
      </div>
    </ad-spin>
    <div style="margin-top: 16px;">
      <ad-button @click="loading = !loading">
        {{ loading ? '加载完成' : '重新加载' }}
      </ad-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(true);
</script>
```
:::

### 表格加载

在表格中使用 Spin 显示加载状态。
:::demo
```vue
<template>
  <div style="width: 600px;">
    <ad-spin :loading="loading" text="数据加载中...">
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background: #f5f5f5;">
            <th style="padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;">ID</th>
            <th style="padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;">名称</th>
            <th style="padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;">状态</th>
            <th style="padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in [1, 2, 3, 4, 5]" :key="i">
            <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">{{ i }}</td>
            <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">项目 {{ i }}</td>
            <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">进行中</td>
            <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">编辑</td>
          </tr>
        </tbody>
      </table>
    </ad-spin>
    <div style="margin-top: 16px;">
      <ad-button @click="loading = !loading">
        {{ loading ? '加载完成' : '重新加载' }}
      </ad-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(true);
</script>
```
:::

## API

### ad-spin

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| loading | 是否显示加载中 | boolean | `true` |
| icon | 自定义图标 | VNode | - |
| text | 提示文字 | string | - |
| placement | 位置 | `'center'` \| `'top'` \| `'bottom'` \| `'left'` \| `'right'` \| `'top-left'` \| `'top-right'` \| `'bottom-left'` \| `'bottom-right'` | `'center'` |
| class-name | 自定义类名 | string | - |

## 注意事项

1. Spin 组件有两种使用方式：
   - 独立使用：直接显示加载状态
   - 包裹使用：包裹其他内容，在加载时显示遮罩层
2. 通过 `loading` 属性控制是否显示加载状态
3. 通过 `placement` 属性可以设置加载图标的位置：
   - `'center'`：居中（默认）
   - `'top'`、`'bottom'`、`'left'`、`'right'`：对应边缘居中
   - `'top-left'`、`'top-right'`、`'bottom-left'`、`'bottom-right'`：对应角落
4. 通过 `text` 属性可以设置提示文字
5. 通过 `icon` 属性可以自定义加载图标
6. 全屏模式需要通过全局方法调用（具体实现可能因框架而异）
7. Spin 组件在显示和隐藏时都有淡入淡出动画效果
8. 在暗色模式下，Spin 组件会自动适配主题颜色