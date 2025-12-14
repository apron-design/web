# 卡片 Card

通用卡片容器，用于展示结构化内容。

## 何时使用

- 需要展示结构化的信息块
- 需要分组展示相关内容
- 需要在页面中组织内容布局

## 代码演示

### 基础用法

最简单的卡片用法，只包含内容区域。
:::demo
```vue
<template>
  <ad-card>
    <ad-card-body>
      这是一个只有 CardBody 的简单卡片。
    </ad-card-body>
  </ad-card>
</template>
```
:::

### 带标题的卡片

使用 CardHeader 组件添加标题。
:::demo
```vue
<template>
  <ad-card>
    <ad-card-header title="卡片标题" />
    <ad-card-body>
      带有头部的卡片，头部显示标题。
    </ad-card-body>
  </ad-card>
</template>
```
:::

### 带额外操作的卡片

在 CardHeader 中使用 extra 属性添加额外操作。
:::demo
```vue
<template>
  <ad-card>
    <ad-card-header 
      title="卡片标题" 
      extra="<ad-button variant='link' size='sm'>更多</ad-button>"
    />
    <ad-card-body>
      头部右侧可以放置额外的操作按钮或链接。
    </ad-card-body>
  </ad-card>
</template>
```
:::

### 带底部的卡片

使用 CardFooter 组件添加底部操作区域。
:::demo
```vue
<template>
  <ad-card>
    <ad-card-header title="卡片标题" />
    <ad-card-body>
      带有底部的卡片，底部通常用于放置操作按钮。
    </ad-card-body>
    <ad-card-footer>
      <ad-space>
        <ad-button variant="primary" size="sm">确认</ad-button>
        <ad-button variant="secondary" size="sm">取消</ad-button>
      </ad-space>
    </ad-card-footer>
  </ad-card>
</template>
```
:::

### 完整卡片

包含头部、正文和底部的完整卡片结构。
:::demo
```vue
<template>
  <ad-card>
    <ad-card-header 
      title="完整卡片" 
      extra="<ad-button variant='text' size='sm'>编辑</ad-button>"
    />
    <ad-card-body>
      <p style="margin: 0 0 12px 0;">
        这是一个完整的卡片示例，包含头部、正文和底部三个部分。
      </p>
      <p style="margin: 0; color: #71717a; font-size: 14px;">
        卡片可以用于展示结构化的内容，如用户资料、文章预览、设置面板等。
      </p>
    </ad-card-body>
    <ad-card-footer>
      <div style="display: flex; justify-content: flex-end;">
        <ad-space>
          <ad-button variant="secondary" size="sm">取消</ad-button>
          <ad-button variant="primary" size="sm">保存</ad-button>
        </ad-space>
      </div>
    </ad-card-footer>
  </ad-card>
</template>
```
:::

## API

### ad-card

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| children | 子元素 | VNode | - |

### ad-card-header

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | string | - |
| extra | 右侧额外内容 | string | - |
| children | 子元素 | VNode | - |

### ad-card-body

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| children | 子元素 | VNode | - |

### ad-card-footer

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| children | 子元素 | VNode | - |