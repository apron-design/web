# 图片 Image

增强版的 img 标签，提供多种图片填充方式和加载状态处理。

## 何时使用

- 需要设置图片的 object-fit 属性
- 需要优雅地处理图片加载失败的情况
- 需要在图片加载过程中显示占位内容

## 示例

### 基础用法

最简单的用法，直接传入图片地址。
:::demo
```vue
<template>
  <ad-image
    src="https://picsum.photos/400/300"
    alt="示例图片"
    style="width: 400px; height: 300px;"
  />
</template>
```
:::

### 不同状态

展示图片组件的不同状态：无图片、正常加载、加载失败。
:::demo
```vue
<template>
  <div style="display: flex; gap: 24px; flex-wrap: wrap;">
    <div>
      <p style="margin: 0 0 8px 0; color: #71717a; font-size: 14px;">无图片</p>
      <ad-image style="width: 150px; height: 100px;" />
    </div>
    <div>
      <p style="margin: 0 0 8px 0; color: #71717a; font-size: 14px;">正常加载</p>
      <ad-image
        src="https://picsum.photos/150/100?random=1"
        alt="正常"
        style="width: 150px; height: 100px;"
      />
    </div>
    <div>
      <p style="margin: 0 0 8px 0; color: #71717a; font-size: 14px;">加载失败</p>
      <ad-image
        src="https://invalid-url.com/fail.jpg"
        alt="失败"
        style="width: 150px; height: 100px;"
      />
    </div>
  </div>
</template>
```
:::

### 图片填充方式

通过 `object-fit` 属性控制图片在容器中的填充方式。
:::demo
```vue
<template>
  <div style="display: flex; flex-wrap: wrap; gap: 24px;">
    <div>
      <p style="margin: 0 0 8px 0; color: #71717a; font-size: 14px;">cover（默认）</p>
      <ad-image
        src="https://picsum.photos/400/600"
        alt="Cover"
        object-fit="cover"
        style="width: 150px; height: 100px;"
      />
    </div>
    <div>
      <p style="margin: 0 0 8px 0; color: #71717a; font-size: 14px;">contain</p>
      <ad-image
        src="https://picsum.photos/400/600"
        alt="Contain"
        object-fit="contain"
        style="width: 150px; height: 100px;"
      />
    </div>
    <div>
      <p style="margin: 0 0 8px 0; color: #71717a; font-size: 14px;">fill</p>
      <ad-image
        src="https://picsum.photos/400/600"
        alt="Fill"
        object-fit="fill"
        style="width: 150px; height: 100px;"
      />
    </div>
    <div>
      <p style="margin: 0 0 8px 0; color: #71717a; font-size: 14px;">scale-down</p>
      <ad-image
        src="https://picsum.photos/400/600"
        alt="Scale Down"
        object-fit="scale-down"
        style="width: 150px; height: 100px;"
      />
    </div>
  </div>
</template>
```
:::

### 图片画廊

展示多张图片组成的画廊。
:::demo
```vue
<template>
  <div style="display: flex; gap: 16px; flex-wrap: wrap;">
    <ad-image
      src="https://picsum.photos/200/150?random=1"
      alt="图片1"
      style="width: 200px; height: 150px;"
    />
    <ad-image
      src="https://picsum.photos/200/150?random=2"
      alt="图片2"
      style="width: 200px; height: 150px;"
    />
    <ad-image
      src="https://picsum.photos/200/150?random=3"
      alt="图片3"
      style="width: 200px; height: 150px;"
    />
    <ad-image
      style="width: 200px; height: 150px;"
    />
  </div>
</template>
```
:::

## API

### ad-image

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 图片地址 | `string` | - |
| alt | 图片替代文本 | `string` | - |
| objectFit | 图片填充方式 | `'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'` | `'cover'` |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `object` | - |
| onLoad | 图片加载完成回调 | `Function` | - |
| onError | 图片加载失败回调 | `Function` | - |

### objectFit 说明

- `cover`: 保持图片纵横比，缩放图片使图片完全覆盖容器
- `contain`: 保持图片纵横比，缩放图片使图片完整显示在容器内
- `fill`: 拉伸图片以完全填充容器，可能改变图片纵横比
- `none`: 保持图片原始尺寸
- `scale-down`: 在 `none` 和 `contain` 中选择较小的一个