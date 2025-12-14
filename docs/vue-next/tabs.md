# 标签页 Tabs

Tabs 组件用于组织和展示不同类别的内容，允许用户在不同的视图之间进行切换。

## 基础用法

Tabs 组件由四个部分组成：
- `ad-tabs`: 容器组件
- `ad-tab-list`: 标签列表容器
- `ad-tab`: 单个标签项
- `ad-tab-panel`: 标签对应的内容面板
:::demo
```vue
<template>
  <ad-tabs default-active-key="1">
    <ad-tab-list>
      <ad-tab tab-key="1">标签一</ad-tab>
      <ad-tab tab-key="2">标签二</ad-tab>
      <ad-tab tab-key="3">标签三</ad-tab>
    </ad-tab-list>
    <ad-tab-panel tab-key="1">
      这是标签一的内容区域。Tab 组件可以用于组织和展示不同类别的信息。
    </ad-tab-panel>
    <ad-tab-panel tab-key="2">
      这是标签二的内容区域。点击不同的标签可以切换显示不同的内容。
    </ad-tab-panel>
    <ad-tab-panel tab-key="3">
      这是标签三的内容区域。每个 ad-tab-panel 对应一个 ad-tab。
    </ad-tab-panel>
  </ad-tabs>
</template>
```
:::

## 胶囊模式

通过设置 `capsule` 属性，可以启用胶囊样式的标签页，这种样式更加紧凑且具有视觉焦点。
:::demo
```vue
<template>
  <ad-tabs default-active-key="1" capsule>
    <ad-tab-list>
      <ad-tab tab-key="1">标签一</ad-tab>
      <ad-tab tab-key="2">标签二</ad-tab>
      <ad-tab tab-key="3">标签三</ad-tab>
    </ad-tab-list>
    <ad-tab-panel tab-key="1">
      胶囊模式的标签一内容。选中的标签有圆角背景。
    </ad-tab-panel>
    <ad-tab-panel tab-key="2">
      胶囊模式的标签二内容。
    </ad-tab-panel>
    <ad-tab-panel tab-key="3">
      胶囊模式的标签三内容。
    </ad-tab-panel>
  </ad-tabs>
</template>
```
:::

## 带额外操作

可以通过 `extra` 插槽在标签栏右侧添加额外的操作元素。
:::demo
```vue
<template>
  <ad-tabs default-active-key="1">
    <template #extra>
      <ad-button size="sm">操作按钮</ad-button>
    </template>
    <ad-tab-list>
      <ad-tab tab-key="1">标签一</ad-tab>
      <ad-tab tab-key="2">标签二</ad-tab>
      <ad-tab tab-key="3">标签三</ad-tab>
    </ad-tab-list>
    <ad-tab-panel tab-key="1">
      右侧有额外操作按钮的 Tab 组件。
    </ad-tab-panel>
    <ad-tab-panel tab-key="2">
      标签二内容。
    </ad-tab-panel>
    <ad-tab-panel tab-key="3">
      标签三内容。
    </ad-tab-panel>
  </ad-tabs>
</template>
```
:::

## 要禁用状态

通过给 `ad-tab` 组件设置 `disabled` 属性来禁用某个标签。
:::demo
```vue
<template>
  <ad-tabs default-active-key="1">
    <ad-tab-list>
      <ad-tab tab-key="1">可用</ad-tab>
      <ad-tab tab-key="2" disabled>禁用</ad-tab>
      <ad-tab tab-key="3">可用</ad-tab>
    </ad-tab-list>
    <ad-tab-panel tab-key="1">
      标签一内容。标签二被禁用，无法点击。
    </ad-tab-panel>
    <ad-tab-panel tab-key="2">
      标签二内容（无法访问）。
    </ad-tab-panel>
    <ad-tab-panel tab-key="3">
      标签三内容。
    </ad-tab-panel>
  </ad-tabs>
</template>
```
:::

## 使用场景

### 用户资料页

Tabs 组件常用于用户资料页，用来组织不同类型的信息。
:::demo
```vue
<template>
  <ad-tabs default-active-key="info">
    <ad-tab-list>
      <ad-tab tab-key="info">基本信息</ad-tab>
      <ad-tab tab-key="security">安全设置</ad-tab>
      <ad-tab tab-key="notification">通知设置</ad-tab>
    </ad-tab-list>
    <ad-tab-panel tab-key="info">
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div><strong>用户名：</strong>admin</div>
        <div><strong>邮箱：</strong>admin@example.com</div>
        <div><strong>注册时间：</strong>2024-01-01</div>
      </div>
    </ad-tab-panel>
    <ad-tab-panel tab-key="security">
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div><strong>密码：</strong>******** <ad-button variant="link" size="sm">修改</ad-button></div>
        <div><strong>两步验证：</strong>已开启</div>
      </div>
    </ad-tab-panel>
    <ad-tab-panel tab-key="notification">
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div><strong>邮件通知：</strong>开启</div>
        <div><strong>短信通知：</strong>关闭</div>
      </div>
    </ad-tab-panel>
  </ad-tabs>
</template>
```
:::

### 筛选标签

在数据列表页面中，Tabs 组件也可以作为筛选条件使用。
:::demo
```vue
<template>
  <ad-tabs default-active-key="all" capsule>
    <template #extra>
      <span style="color: #71717a; font-size: 14px;">共 128 条</span>
    </template>
    <ad-tab-list>
      <ad-tab tab-key="all">全部</ad-tab>
      <ad-tab tab-key="pending">待审核 (12)</ad-tab>
      <ad-tab tab-key="approved">已通过</ad-tab>
      <ad-tab tab-key="rejected">已拒绝</ad-tab>
    </ad-tab-list>
    <ad-tab-panel tab-key="all">
      显示所有数据...
    </ad-tab-panel>
    <ad-tab-panel tab-key="pending">
      显示待审核数据...
    </ad-tab-panel>
    <ad-tab-panel tab-key="approved">
      显示已通过数据...
    </ad-tab-panel>
    <ad-tab-panel tab-key="rejected">
      显示已拒绝数据...
    </ad-tab-panel>
  </ad-tabs>
</template>
```
:::

## 暗色模式

Tabs 组件支持暗色模式，在暗色主题下会自动应用合适的样式。
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
      gap: 32px;
    "
  >
    <div>
      <h4 style="margin: 0 0 16px 0; color: #a1a1aa;">默认模式</h4>
      <ad-tabs default-active-key="1">
        <ad-tab-list>
          <ad-tab tab-key="1">标签一</ad-tab>
          <ad-tab tab-key="2">标签二</ad-tab>
        </ad-tab-list>
        <ad-tab-panel tab-key="1">
          默认模式下的标签页内容。
        </ad-tab-panel>
        <ad-tab-panel tab-key="2">
          默认模式下的标签页内容。
        </ad-tab-panel>
      </ad-tabs>
    </div>
    
    <div>
      <h4 style="margin: 0 0 16px 0; color: #a1a1aa;">胶囊模式</h4>
      <ad-tabs default-active-key="1" capsule>
        <ad-tab-list>
          <ad-tab tab-key="1">标签一</ad-tab>
          <ad-tab tab-key="2">标签二</ad-tab>
        </ad-tab-list>
        <ad-tab-panel tab-key="1">
          胶囊模式下的标签页内容。
        </ad-tab-panel>
        <ad-tab-panel tab-key="2">
          胶囊模式下的标签页内容。
        </ad-tab-panel>
      </ad-tabs>
    </div>
  </div>
</template>
```
:::

## API

### ad-tabs

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey | 当前激活的标签页 | string | - |
| defaultActiveKey | 默认激活的标签页 | string | - |
| capsule | 是否启用胶囊模式 | boolean | false |
| onChange | 切换标签页时的回调函数 | function(activeKey) | - |

### ad-tab

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tabKey | 标签页的唯一标识 | string | - |
| disabled | 是否禁用标签页 | boolean | false |

### ad-tab-panel

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tabKey | 对应标签页的唯一标识 | string | - |