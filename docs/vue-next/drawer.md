# 抽屉 Drawer

屏幕边缘滑出的浮层面板，用于承载临时内容或操作。

## 何时使用

- 需要从屏幕边缘滑出一个面板来承载内容
- 用于移动端或空间受限的场景
- 替代 Modal 对话框，提供更自然的过渡效果

## 示例

### 基础用法

最简单的用法，从右侧滑出抽屉。
:::demo
```vue
<template>
  <div>
    <ad-button @click="open = true">打开抽屉</ad-button>
    <ad-drawer
      :open="open"
      title="基础抽屉"
      @close="open = false"
      @ok="handleOk"
    >
      <p>这是抽屉的内容。</p>
      <p>默认从右侧展开。</p>
    </ad-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const open = ref(false);

const handleOk = () => {
  console.log('确认');
  open.value = false;
};
</script>
```
:::

### 不同方向

支持从上、右、下、左四个方向滑出。
:::demo
```vue
<template>
  <div>
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <ad-button @click="openTop = true">上</ad-button>
      <ad-button @click="openRight = true">右</ad-button>
      <ad-button @click="openBottom = true">下</ad-button>
      <ad-button @click="openLeft = true">左</ad-button>
    </div>

    <ad-drawer
      :open="openRight"
      title="右侧抽屉"
      placement="right"
      @close="openRight = false"
      @ok="openRight = false"
    >
      <p>从右侧展开</p>
    </ad-drawer>

    <ad-drawer
      :open="openLeft"
      title="左侧抽屉"
      placement="left"
      @close="openLeft = false"
      @ok="openLeft = false"
    >
      <p>从左侧展开</p>
    </ad-drawer>

    <ad-drawer
      :open="openTop"
      title="顶部抽屉"
      placement="top"
      :height="250"
      @close="openTop = false"
      @ok="openTop = false"
    >
      <p>从顶部展开</p>
    </ad-drawer>

    <ad-drawer
      :open="openBottom"
      title="底部抽屉"
      placement="bottom"
      :height="250"
      @close="openBottom = false"
      @ok="openBottom = false"
    >
      <p>从底部展开</p>
    </ad-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const openRight = ref(false);
const openLeft = ref(false);
const openTop = ref(false);
const openBottom = ref(false);
</script>
```
:::

### 自定义尺寸

可以自定义抽屉的宽度（左右方向）或高度（上下方向）。
:::demo
```vue
<template>
  <div>
    <ad-button @click="open = true">宽抽屉（600px）</ad-button>
    <ad-drawer
      :open="open"
      title="自定义宽度"
      :width="600"
      @close="open = false"
      @ok="open = false"
    >
      <p>这是一个宽度为 600px 的抽屉。</p>
    </ad-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const open = ref(false);
</script>
```
:::

### 移动端模式

为移动端优化的抽屉样式，提供更好的用户体验。
:::demo
```vue
<template>
  <div>
    <div style="display: flex; gap: 8px;">
      <ad-button @click="openRight = true">移动端右侧抽屉</ad-button>
      <ad-button @click="openBottom = true">移动端底部抽屉</ad-button>
    </div>

    <ad-drawer
      :open="openRight"
      title="移动端抽屉"
      placement="right"
      :is-mobile="true"
      @close="openRight = false"
      @ok="openRight = false"
    >
      <p>移动端模式会给非靠边的角落加上 20px 的圆角。</p>
    </ad-drawer>

    <ad-drawer
      :open="openBottom"
      title="移动端底部抽屉"
      placement="bottom"
      :height="300"
      :is-mobile="true"
      @close="openBottom = false"
      @ok="openBottom = false"
    >
      <p>这是移动端底部抽屉，常用于操作菜单。</p>
    </ad-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const openRight = ref(false);
const openBottom = ref(false);
</script>
```
:::

### 无底部抽屉

通过 `show-footer` 属性隐藏底部操作栏。
:::demo
```vue
<template>
  <div>
    <ad-button @click="open = true">无底部抽屉</ad-button>
    <ad-drawer
      :open="open"
      title="无底部抽屉"
      :show-footer="false"
      @close="open = false"
    >
      <p>这是一个没有底部的抽屉。</p>
      <p>你可以通过关闭按钮或点击蒙层来关闭它。</p>
    </ad-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const open = ref(false);
</script>
```
:::

### 表单抽屉

在抽屉中放置表单，常用于新建或编辑操作。
:::demo
```vue
<template>
  <div>
    <ad-button @click="open = true">新建用户</ad-button>
    <ad-drawer
      :open="open"
      title="新建用户"
      :width="450"
      @close="open = false"
      @ok="handleOk"
      ok-text="创建"
    >
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <label style="display: block; margin-bottom: 8px; font-weight: 500;">
            用户名
          </label>
          <input
            type="text"
            style="
              width: 100%;
              padding: 8px 12px;
              border: 1px solid #e0e0e0;
              border-radius: 8px;
              box-sizing: border-box;
            "
            placeholder="请输入用户名"
          />
        </div>
        <div>
          <label style="display: block; margin-bottom: 8px; font-weight: 500;">
            邮箱
          </label>
          <input
            type="email"
            style="
              width: 100%;
              padding: 8px 12px;
              border: 1px solid #e0e0e0;
              border-radius: 8px;
              box-sizing: border-box;
            "
            placeholder="请输入邮箱"
          />
        </div>
        <div>
          <label style="display: block; margin-bottom: 8px; font-weight: 500;">
            角色
          </label>
          <select
            style="
              width: 100%;
              padding: 8px 12px;
              border: 1px solid #e0e0e0;
              border-radius: 8px;
              box-sizing: border-box;
            "
          >
            <option>管理员</option>
            <option>编辑</option>
            <option>访客</option>
          </select>
        </div>
      </div>
    </ad-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const open = ref(false);

const handleOk = () => {
  console.log('提交表单');
  open.value = false;
};
</script>
```
:::

## API

### ad-drawer

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| open | 是否显示抽屉 | `boolean` | `false` |
| title | 标题 | `string` | - |
| placement | 抽屉方向 | `'top' \| 'right' \| 'bottom' \| 'left'` | `'right'` |
| closable | 是否显示关闭按钮 | `boolean` | `true` |
| close-by-overlay | 点击蒙层是否可以关闭 | `boolean` | `true` |
| width | 抽屉宽度（左右方向时有效） | `number \| string` | `378` |
| height | 抽屉高度（上下方向时有效） | `number \| string` | `378` |
| footer | 自定义 footer，设置为 null 则不显示 | `string` | - |
| show-footer | 是否显示 footer | `boolean` | `true` |
| ok-text | 确认按钮文字 | `string` | `'确定'` |
| cancel-text | 取消按钮文字 | `string` | `'取消'` |
| show-cancel | 是否显示取消按钮 | `boolean` | `true` |
| is-mobile | 是否为移动端模式 | `boolean` | `false` |