# 响应式弹窗 ResponsiveModal

响应式弹窗根据屏幕尺寸自动切换显示模式，在宽屏下显示为 Modal，在窄屏下显示为 Drawer。

## 何时使用

- 需要在不同设备上提供一致的用户体验时
- 希望在移动端使用抽屉式弹窗，在桌面端使用模态弹窗时
- 构建响应式应用时需要适配不同屏幕尺寸的弹窗组件时

## 示例

### 基础用法

最基本的响应式弹窗使用方式，根据屏幕宽度自动切换显示模式。
:::demo
```vue
<template>
  <div>
    <div style="margin-bottom: 16px; color: #666; font-size: 14px;">
      调整浏览器窗口宽度查看效果（断点：1024px）
    </div>
    <ad-button @click="open = true">打开响应式弹窗</ad-button>
    <ad-responsive-modal
      v-model:open="open"
      title="响应式弹窗"
      @close="open = false"
      @ok="handleOk"
    >
      <p>在宽屏（≥1024px）下显示为 Modal。</p>
      <p>在窄屏（&lt;1024px）下显示为 Drawer。</p>
    </ad-responsive-modal>
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

### 自定义断点

通过 `breakpoint` 属性自定义响应式断点。
:::demo
```vue
<template>
  <div>
    <div style="margin-bottom: 16px; color: #666; font-size: 14px;">
      断点设置为 768px
    </div>
    <ad-button @click="open = true">打开（768px 断点）</ad-button>
    <ad-responsive-modal
      v-model:open="open"
      title="自定义断点"
      :breakpoint="768"
      @close="open = false"
      @ok="handleOk"
    >
      <p>断点设置为 768px。</p>
      <p>在宽屏（≥768px）下显示为 Modal。</p>
      <p>在窄屏（&lt;768px）下显示为 Drawer。</p>
    </ad-responsive-modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const open = ref(false);

const handleOk = () => {
  open.value = false;
};
</script>
```
:::

### 不同抽屉弹出方向

在移动端可以设置不同的抽屉弹出方向。

#### 从底部弹出（默认）
:::demo
```vue
<template>
  <div>
    <div style="margin-bottom: 16px; color: #666; font-size: 14px;">
      移动端从底部弹出（默认）
    </div>
    <ad-button @click="open = true">底部弹出</ad-button>
    <ad-responsive-modal
      v-model:open="open"
      title="底部弹出"
      drawer-placement="bottom"
      :height="300"
      @close="open = false"
      @ok="handleOk"
    >
      <p>移动端时从底部弹出。</p>
    </ad-responsive-modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const open = ref(false);

const handleOk = () => {
  open.value = false;
};
</script>
```
:::

#### 从右侧弹出
:::demo
```vue
<template>
  <div>
    <div style="margin-bottom: 16px; color: #666; font-size: 14px;">
      移动端从右侧弹出
    </div>
    <ad-button @click="open = true">右侧弹出</ad-button>
    <ad-responsive-modal
      v-model:open="open"
      title="右侧弹出"
      drawer-placement="right"
      @close="open = false"
      @ok="handleOk"
    >
      <p>移动端时从右侧弹出。</p>
    </ad-responsive-modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const open = ref(false);

const handleOk = () => {
  open.value = false;
};
</script>
```
:::

### 表单示例

响应式弹窗常用于表单场景。
:::demo
```vue
<template>
  <div>
    <ad-button @click="open = true">新建用户</ad-button>
    <ad-responsive-modal
      v-model:open="open"
      title="新建用户"
      :width="500"
      :height="400"
      drawer-placement="bottom"
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
      </div>
    </ad-responsive-modal>
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

### 确认对话框

用于确认操作的响应式弹窗。
:::demo
```vue
<template>
  <div>
    <ad-button @click="open = true">确认删除</ad-button>
    <ad-responsive-modal
      v-model:open="open"
      title="确认删除"
      :width="400"
      :height="200"
      drawer-placement="bottom"
      @close="open = false"
      @ok="handleOk"
      ok-text="确认删除"
      :ok-button-props="{ danger: true }"
    >
      <p>确定要删除这条记录吗？此操作不可撤销。</p>
    </ad-responsive-modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const open = ref(false);

const handleOk = () => {
  console.log('已删除');
  open.value = false;
};
</script>
```
:::

### 无底部弹窗

通过 `show-footer` 属性隐藏底部操作区域。
:::demo
```vue
<template>
  <div>
    <ad-button @click="open = true">无底部弹窗</ad-button>
    <ad-responsive-modal
      v-model:open="open"
      title="提示信息"
      :show-footer="false"
      @close="open = false"
    >
      <p>这是一个没有底部的弹窗。</p>
      <p>点击蒙层或关闭按钮可以关闭。</p>
    </ad-responsive-modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const open = ref(false);
</script>
```
:::

### 自定义底部

通过 `footer` 属性自定义底部内容。
:::demo
```vue
<template>
  <div>
    <ad-button @click="open = true">自定义底部</ad-button>
    <ad-responsive-modal
      v-model:open="open"
      title="自定义底部"
      :footer="customFooter"
      @close="open = false"
    >
      <p>这个弹窗有自定义的底部布局。</p>
    </ad-responsive-modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { h } from 'vue';

const open = ref(false);

const customFooter = h('div', {
  style: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  }
}, [
  h('ad-button', {
    onClick: () => console.log('帮助')
  }, '帮助'),
  h('div', {
    style: {
      display: 'flex',
      gap: '8px'
    }
  }, [
    h('ad-button', {
      onClick: () => open.value = false
    }, '取消'),
    h('ad-button', {
      onClick: () => open.value = false
    }, '确定')
  ])
]);
</script>
```
:::

## API

### ad-responsive-modal

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:open | 是否显示 | boolean | `false` |
| title | 标题 | string | - |
| closable | 是否显示关闭按钮 | boolean | `true` |
| close-by-overlay | 点击蒙层是否可以关闭 | boolean | `true` |
| @close | 关闭时的回调 | `() => void` | - |
| @ok | 点击确认按钮的回调 | `() => void` | - |
| width | Modal 宽度（PC端） | number \| string | `520` |
| height | Drawer 高度（移动端上下弹出时） | number \| string | `'auto'` |
| footer | 自定义 footer，设置为 null 则不显示 | VNode \| null | - |
| show-footer | 是否显示 footer | boolean | `true` |
| ok-text | 确认按钮文字 | string | `'确定'` |
| cancel-text | 取消按钮文字 | string | `'取消'` |
| ok-button-props | 确认按钮属性 | [ButtonProps](./button) | - |
| cancel-button-props | 取消按钮属性 | [ButtonProps](./button) | - |
| show-cancel | 是否显示取消按钮 | boolean | `true` |
| class-name | 自定义类名 | string | - |
| breakpoint | 响应式断点，小于此值使用 Drawer，大于等于此值使用 Modal | number | `1024` |
| drawer-placement | 移动端 Drawer 弹出方向 | `'top'` \| `'right'` \| `'bottom'` \| `'left'` | `'bottom'` |
| @after-open-change | 打开/关闭动画完成后的回调 | `(open: boolean) => void` | - |

## 注意事项

1. 响应式弹窗会根据屏幕宽度自动切换显示模式：
   - 宽屏（≥ breakpoint）：显示为 Modal
   - 窄屏（< breakpoint）：显示为 Drawer
2. 默认断点为 1024px，可通过 `breakpoint` 属性自定义
3. 在移动端，可以通过 `drawer-placement` 属性设置抽屉的弹出方向
4. 在移动端，可以通过 `height` 属性设置抽屉的高度
5. 在桌面端，可以通过 `width` 属性设置模态框的宽度
6. 其他属性与 Modal 和 Drawer 组件保持一致
7. 组件会监听窗口大小变化，自动切换显示模式
8. 在 SSR 环境中，组件会根据初始窗口大小决定首次渲染的模式