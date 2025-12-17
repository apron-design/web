# 时间轴 Timeline

Timeline 组件用于垂直展示时间流信息，常用于项目里程碑、订单跟踪、版本历史等场景。

## 基础用法

Timeline 组件由两个部分组成：
- `ad-timeline`: 容器组件
- `ad-timeline-item`: 时间轴上的每一个节点
:::demo
```vue
<template>
  <ad-timeline>
    <ad-timeline-item title="The first milestone" date="2017-03-10" />
    <ad-timeline-item title="The second milestone" date="2018-05-10" />
    <ad-timeline-item title="The third milestone" date="2019-01-31" />
  </ad-timeline>
</template>
```
:::

## 内容位置

通过设置 `side` 属性可以控制内容的显示位置，支持 `right`（默认）、`left` 和 `both` 三种模式。

### 内容在右边（默认）
:::demo
```vue
<template>
  <ad-timeline side="right">
    <ad-timeline-item title="The first milestone" date="2017-03-10" />
    <ad-timeline-item title="The second milestone" date="2018-05-10" />
    <ad-timeline-item title="The third milestone" date="2019-01-31" />
  </ad-timeline>
</template>
```
:::

### 内容在左边
:::demo
```vue
<template>
  <ad-timeline side="left">
    <ad-timeline-item title="The first milestone" date="2017-03-10" />
    <ad-timeline-item title="The second milestone" date="2018-05-10" />
  </ad-timeline>
</template>
```
:::

### 内容交替左右
:::demo
```vue
<template>
  <ad-timeline side="both">
    <ad-timeline-item title="The first milestone" date="2017-03-10" />
    <ad-timeline-item title="The second milestone" date="2018-05-10" />
    <ad-timeline-item title="The third milestone" date="2018-05-10" />
  </ad-timeline>
</template>
```
:::

## 不同颜色的点

通过 `dot-color` 属性可以设置时间轴节点的颜色，支持 `default`、`primary`、`main`、`success`、`warning` 和 `danger` 六种颜色。
:::demo
```vue
<template>
  <ad-timeline>
    <ad-timeline-item title="A Primary Dot" date="2017-03-10" dot-color="primary" />
    <ad-timeline-item title="A Main Dot" date="2018-05-10" dot-color="main" />
    <ad-timeline-item title="A Success Dot" date="2019-01-31" dot-color="success" />
    <ad-timeline-item title="A Warning Dot" date="2019-01-31" dot-color="warning" />
    <ad-timeline-item title="A Danger Dot" date="2019-01-31" dot-color="danger" />
  </ad-timeline>
</template>
```
:::

## 带内容描述

除了标题和日期，还可以通过 `content` 属性添加详细的内容描述。
:::demo
```vue
<template>
  <ad-timeline>
    <ad-timeline-item
      title="项目启动"
      content="完成项目立项和团队组建"
      date="2023-01-15"
      dot-color="success"
    />
    <ad-timeline-item
      title="需求评审"
      content="完成产品需求文档评审"
      date="2023-02-20"
      dot-color="success"
    />
    <ad-timeline-item
      title="开发中"
      content="功能开发进行中"
      date="2023-03-10"
      dot-color="main"
    />
    <ad-timeline-item
      title="待测试"
      content="等待QA测试"
      date="2023-04-01"
    />
  </ad-timeline>
</template>
```
:::

## 使用场景

### 订单跟踪

Timeline 组件非常适合用于展示订单的物流跟踪信息。
:::demo
```vue
<template>
  <ad-timeline>
    <ad-timeline-item
      title="订单已签收"
      content="您的订单已由本人签收，感谢您的购买"
      date="2023-12-05 14:30"
      dot-color="success"
    />
    <ad-timeline-item
      title="派送中"
      content="快递员正在派送，请保持电话畅通"
      date="2023-12-05 09:15"
      dot-color="success"
    />
    <ad-timeline-item
      title="已到达"
      content="快件已到达【北京朝阳区营业点】"
      date="2023-12-04 18:20"
      dot-color="success"
    />
    <ad-timeline-item
      title="运输中"
      content="快件正在运往【北京转运中心】"
      date="2023-12-03 22:00"
      dot-color="success"
    />
    <ad-timeline-item
      title="已发货"
      content="商家已发货，快递公司：顺丰速运"
      date="2023-12-02 16:00"
      dot-color="success"
    />
  </ad-timeline>
</template>
```
:::

### 版本历史

Timeline 组件也可用于展示产品的版本迭代历史。
:::demo
```vue
<template>
  <ad-timeline side="left">
    <ad-timeline-item
      title="v2.0.0"
      content="全新设计系统，支持暗色模式"
      date="2023-12-01"
      dot-color="primary"
    />
    <ad-timeline-item
      title="v1.5.0"
      content="新增 Timeline 组件"
      date="2023-11-15"
      dot-color="main"
    />
    <ad-timeline-item
      title="v1.0.0"
      content="首个正式版本发布"
      date="2023-10-01"
    />
  </ad-timeline>
</template>
```
:::

## API

### ad-timeline

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| side | 内容显示位置 | `'left' \| 'right' \| 'both'` | `'right'` |
| children | 子元素 | `VNode` | `-` |

### ad-timeline-item

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `string` | `-` |
| content | 内容 | `string` | `-` |
| date | 日期 | `string` | `-` |
| dotColor | 点颜色 | `'default' \| 'primary' \| 'main' \| 'success' \| 'warning' \| 'danger'` | `'default'` |
| children | 子元素（作为 content 使用） | `string` | `-` |