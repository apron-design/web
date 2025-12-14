<style>
.grid-demo-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.demo-box {
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background-color: #2ecc71;
  border-radius: 4px;
}

.demo-box--light {
  background-color: #2ecc71bf;
}
</style>

# 栅格 Grid

24 栅格系统，帮助开发者快速创建响应式布局。

## 设计理念

在多数业务情况下，Ant Design 需要在设计区域内解决大量信息收纳的问题，因此在 12 栅格系统的基础上，我们将整个设计建议区域按照 24 等分的原则进行划分。

划分之后的信息区块我们称之为『盒子』。建议横向排列的盒子数量最多四个，最少一个。『盒子』在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版布局，以保证整体设计的一致性。

## 示例

### 基础栅格

从堆叠到水平排列。使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统。所有 Col 必须放在 Row 内。
:::demo
```vue
<template>
  <div class="grid-demo-container">
    <ad-row>
      <ad-col :span="24">
        <div class="demo-box">col-24</div>
      </ad-col>
    </ad-row>
    <ad-row>
      <ad-col :span="12">
        <div class="demo-box">col-12</div>
      </ad-col>
      <ad-col :span="12">
        <div class="demo-box demo-box--light">col-12</div>
      </ad-col>
    </ad-row>
    <ad-row>
      <ad-col :span="8">
        <div class="demo-box">col-8</div>
      </ad-col>
      <ad-col :span="8">
        <div class="demo-box demo-box--light">col-8</div>
      </ad-col>
      <ad-col :span="8">
        <div class="demo-box">col-8</div>
      </ad-col>
    </ad-row>
    <ad-row>
      <ad-col :span="6">
        <div class="demo-box">col-6</div>
      </ad-col>
      <ad-col :span="6">
        <div class="demo-box demo-box--light">col-6</div>
      </ad-col>
      <ad-col :span="6">
        <div class="demo-box">col-6</div>
      </ad-col>
      <ad-col :span="6">
        <div class="demo-box demo-box--light">col-6</div>
      </ad-col>
    </ad-row>
  </div>
</template>
```
:::

### 区块间隔

栅格常常需要和间隔进行配合，你可以使用 Row 的 gutter 属性来指定每一栏之间的间隔，推荐使用 (16+8n)px 作为栅格间隔（n 是自然数）。
:::demo
```vue
<template>
  <div class="grid-demo-container">
    <p>水平间隔 16px</p>
    <ad-row :gutter="16">
      <ad-col :span="6">
        <div class="demo-box">col-6</div>
      </ad-col>
      <ad-col :span="6">
        <div class="demo-box">col-6</div>
      </ad-col>
      <ad-col :span="6">
        <div class="demo-box">col-6</div>
      </ad-col>
      <ad-col :span="6">
        <div class="demo-box">col-6</div>
      </ad-col>
    </ad-row>
    
    <p>水平间隔 16px，垂直间隔 24px</p>
    <ad-row :gutter="[16, 24]">
      <ad-col :span="6">
        <div class="demo-box">col-6</div>
      </ad-col>
      <ad-col :span="6">
        <div class="demo-box">col-6</div>
      </ad-col>
      <ad-col :span="6">
        <div class="demo-box">col-6</div>
      </ad-col>
      <ad-col :span="6">
        <div class="demo-box">col-6</div>
      </ad-col>
      <ad-col :span="6">
        <div class="demo-box">col-6</div>
      </ad-col>
      <ad-col :span="6">
        <div class="demo-box">col-6</div>
      </ad-col>
      <ad-col :span="6">
        <div class="demo-box">col-6</div>
      </ad-col>
      <ad-col :span="6">
        <div class="demo-box">col-6</div>
      </ad-col>
    </ad-row>
  </div>
</template>
```
:::

### 左右偏移

使用 offset 可以将列向右侧偏移。
:::demo
```vue
<template>
  <div class="grid-demo-container">
    <ad-row>
      <ad-col :span="8">
        <div class="demo-box">col-8</div>
      </ad-col>
      <ad-col :span="8" :offset="8">
        <div class="demo-box">col-8 offset-8</div>
      </ad-col>
    </ad-row>
    <ad-row>
      <ad-col :span="6" :offset="6">
        <div class="demo-box">col-6 offset-6</div>
      </ad-col>
      <ad-col :span="6" :offset="6">
        <div class="demo-box">col-6 offset-6</div>
      </ad-col>
    </ad-row>
    <ad-row>
      <ad-col :span="12" :offset="6">
        <div class="demo-box">col-12 offset-6</div>
      </ad-col>
    </ad-row>
  </div>
</template>
```
:::

### 栅格排序

通过使用 push 和 pull 类就可以很容易的改变列的顺序。
:::demo
```vue
<template>
  <div class="grid-demo-container">
    <ad-row>
      <ad-col :span="18" :push="6">
        <div class="demo-box">col-18 push-6</div>
      </ad-col>
      <ad-col :span="6" :pull="18">
        <div class="demo-box demo-box--light">col-6 pull-18</div>
      </ad-col>
    </ad-row>
  </div>
</template>
```
:::

### 水平排列

通过 Row 的 justify 属性可以设置列在水平方向上的对齐方式。
:::demo
```vue
<template>
  <div class="grid-demo-container">
    <p>justify: start</p>
    <ad-row justify="start" class="grid-demo-bg">
      <ad-col :span="4">
        <div class="demo-box">col-4</div>
      </ad-col>
      <ad-col :span="4">
        <div class="demo-box demo-box--light">col-4</div>
      </ad-col>
      <ad-col :span="4">
        <div class="demo-box">col-4</div>
      </ad-col>
      <ad-col :span="4">
        <div class="demo-box demo-box--light">col-4</div>
      </ad-col>
    </ad-row>

    <p>justify: center</p>
    <ad-row justify="center" class="grid-demo-bg">
      <ad-col :span="4">
        <div class="demo-box">col-4</div>
      </ad-col>
      <ad-col :span="4">
        <div class="demo-box demo-box--light">col-4</div>
      </ad-col>
      <ad-col :span="4">
        <div class="demo-box">col-4</div>
      </ad-col>
      <ad-col :span="4">
        <div class="demo-box demo-box--light">col-4</div>
      </ad-col>
    </ad-row>

    <p>justify: end</p>
    <ad-row justify="end" class="grid-demo-bg">
      <ad-col :span="4">
        <div class="demo-box">col-4</div>
      </ad-col>
      <ad-col :span="4">
        <div class="demo-box demo-box--light">col-4</div>
      </ad-col>
      <ad-col :span="4">
        <div class="demo-box">col-4</div>
      </ad-col>
      <ad-col :span="4">
        <div class="demo-box demo-box--light">col-4</div>
      </ad-col>
    </ad-row>

    <p>justify: space-between</p>
    <ad-row justify="space-between" class="grid-demo-bg">
      <ad-col :span="4">
        <div class="demo-box">col-4</div>
      </ad-col>
      <ad-col :span="4">
        <div class="demo-box demo-box--light">col-4</div>
      </ad-col>
      <ad-col :span="4">
        <div class="demo-box">col-4</div>
      </ad-col>
      <ad-col :span="4">
        <div class="demo-box demo-box--light">col-4</div>
      </ad-col>
    </ad-row>

    <p>justify: space-around</p>
    <ad-row justify="space-around" class="grid-demo-bg">
      <ad-col :span="4">
        <div class="demo-box">col-4</div>
      </ad-col>
      <ad-col :span="4">
        <div class="demo-box demo-box--light">col-4</div>
      </ad-col>
      <ad-col :span="4">
        <div class="demo-box">col-4</div>
      </ad-col>
      <ad-col :span="4">
        <div class="demo-box demo-box--light">col-4</div>
      </ad-col>
    </ad-row>

    <p>justify: space-evenly</p>
    <ad-row justify="space-evenly" class="grid-demo-bg">
      <ad-col :span="4">
        <div class="demo-box">col-4</div>
      </ad-col>
      <ad-col :span="4">
        <div class="demo-box demo-box--light">col-4</div>
      </ad-col>
      <ad-col :span="4">
        <div class="demo-box">col-4</div>
      </ad-col>
      <ad-col :span="4">
        <div class="demo-box demo-box--light">col-4</div>
      </ad-col>
    </ad-row>
  </div>
</template>
```
:::

### 垂直对齐

通过 Row 的 align 属性可以设置列在垂直方向上的对齐方式。
:::demo
```vue
<template>
  <div class="grid-demo-container">
    <p>align: top</p>
    <ad-row align="top" justify="center" class="grid-demo-bg">
      <ad-col :span="4">
        <div class="demo-box" style="height: 100px; line-height: 100px;">col-4</div>
      </ad-col>
      <ad-col :span="4">
        <div class="demo-box demo-box--light" style="height: 50px; line-height: 50px;">col-4</div>
      </ad-col>
      <ad-col :span="4">
        <div class="demo-box" style="height: 120px; line-height: 120px;">col-4</div>
      </ad-col>
      <ad-col :span="4">
        <div class="demo-box demo-box--light" style="height: 80px; line-height: 80px;">col-4</div>
      </ad-col>
    </ad-row>

    <p>align: middle</p>
    <ad-row align="middle" justify="center" class="grid-demo-bg">
      <ad-col :span="4">
        <div class="demo-box" style="height: 100px; line-height: 100px;">col-4</div>
      </ad-col>
      <ad-col :span="4">
        <div class="demo-box demo-box--light" style="height: 50px; line-height: 50px;">col-4</div>
      </ad-col>
      <ad-col :span="4">
        <div class="demo-box" style="height: 120px; line-height: 120px;">col-4</div>
      </ad-col>
      <ad-col :span="4">
        <div class="demo-box demo-box--light" style="height: 80px; line-height: 80px;">col-4</div>
      </ad-col>
    </ad-row>

    <p>align: bottom</p>
    <ad-row align="bottom" justify="center" class="grid-demo-bg">
      <ad-col :span="4">
        <div class="demo-box" style="height: 100px; line-height: 100px;">col-4</div>
      </ad-col>
      <ad-col :span="4">
        <div class="demo-box demo-box--light" style="height: 50px; line-height: 50px;">col-4</div>
      </ad-col>
      <ad-col :span="4">
        <div class="demo-box" style="height: 120px; line-height: 120px;">col-4</div>
      </ad-col>
      <ad-col :span="4">
        <div class="demo-box demo-box--light" style="height: 80px; line-height: 80px;">col-4</div>
      </ad-col>
    </ad-row>
  </div>
</template>
```
:::

### Flex 布局

通过 Col 的 flex 属性可以设置弹性布局。
:::demo
```vue
<template>
  <div class="grid-demo-container">
    <p>百分比</p>
    <ad-row>
      <ad-col :flex="2">
        <div class="demo-box">2 / 5</div>
      </ad-col>
      <ad-col :flex="3">
        <div class="demo-box demo-box--light">3 / 5</div>
      </ad-col>
    </ad-row>

    <p>固定宽度</p>
    <ad-row>
      <ad-col flex="100px">
        <div class="demo-box">100px</div>
      </ad-col>
      <ad-col flex="auto">
        <div class="demo-box demo-box--light">auto</div>
      </ad-col>
    </ad-row>

    <p>flex 属性</p>
    <ad-row>
      <ad-col flex="1 1 200px">
        <div class="demo-box">1 1 200px</div>
      </ad-col>
      <ad-col flex="0 1 300px">
        <div class="demo-box demo-box--light">0 1 300px</div>
      </ad-col>
    </ad-row>
  </div>
</template>
```
:::

### 响应式布局

预设六个响应尺寸：xs、sm、md、lg、xl、xxl。
:::demo
```vue
<template>
  <div class="grid-demo-container">
    <ad-row :gutter="[16, 16]">
      <ad-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
        <div class="demo-box">Col</div>
      </ad-col>
      <ad-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
        <div class="demo-box">Col</div>
      </ad-col>
      <ad-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
        <div class="demo-box">Col</div>
      </ad-col>
      <ad-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
        <div class="demo-box">Col</div>
      </ad-col>
      <ad-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
        <div class="demo-box">Col</div>
      </ad-col>
      <ad-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
        <div class="demo-box">Col</div>
      </ad-col>
    </ad-row>
  </div>
</template>
```
:::

## API

### ad-row

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| gutter | 栅格间隔，可以是数字或数组 [水平间距, 垂直间距] | `number \| [number, number] \| { xs?: Gutter; sm?: Gutter; md?: Gutter; lg?: Gutter; xl?: Gutter; xxl?: Gutter }` | `0` |
| justify | 水平排列方式 | `'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly'` | `'start'` |
| align | 垂直对齐方式 | `'top' \| 'middle' \| 'bottom' \| 'stretch'` | `'top'` |
| wrap | 是否自动换行 | `boolean` | `true` |
| children | 子元素 | `VNode` | - |

### ad-col

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| span | 栅格占位格数，为 0 时相当于 display: none | `number \| string` | - |
| offset | 栅格左侧的间隔格数 | `number` | `0` |
| order | 栅格顺序 | `number` | `0` |
| push | 栅格向右移动格数 | `number` | `0` |
| pull | 栅格向左移动格数 | `number` | `0` |
| flex | flex 布局属性 | `string \| number` | - |
| xs | <576px 响应式栅格 | `number \| string \| { span?: number \| string; offset?: number; order?: number; push?: number; pull?: number }` | - |
| sm | ≥576px 响应式栅格 | `number \| string \| { span?: number \| string; offset?: number; order?: number; push?: number; pull?: number }` | - |
| md | ≥768px 响应式栅格 | `number \| string \| { span?: number \| string; offset?: number; order?: number; push?: number; pull?: number }` | - |
| lg | ≥992px 响应式栅格 | `number \| string \| { span?: number \| string; offset?: number; order?: number; push?: number; pull?: number }` | - |
| xl | ≥1200px 响应式栅格 | `number \| string \| { span?: number \| string; offset?: number; order?: number; push?: number; pull?: number }` | - |
| xxl | ≥1600px 响应式栅格 | `number \| string \| { span?: number \| string; offset?: number; order?: number; push?: number; pull?: number }` | - |
| children | 子元素 | `VNode` | - |