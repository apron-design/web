# 条形码 Barcode

Apron Design 的机器码部分是独立的项目，您需要额外安装一个扩展包 Code Apron。

Code Apron 是与 Apron Design 最佳搭配使用的机器码渲染独立项目，也是 Apron Design 的分支项目。

虽然 Code Apron 是 Apron Design 的分支项目，但你也可以在其他组件库为 base 开发的项目中使用它。

## 安装 Code Apron React
```bash
npm install @code-apron/react --save-dev
```

## 基本用法

:::demo
```jsx
import { Barcode } from "@code-apron/react";

export default function BarcodeDemo() {
  return <Barcode width={400} height={100}>12345678901</Barcode>
}
```
:::

### 使用 UPC-A
:::demo
```jsx
import { Barcode } from "@code-apron/react";

export default function BarcodeDemo() {
  return <Barcode type="upc-a" width={400} height={100}>12345678901</Barcode>
}
```
:::

### 使用 UPC-E
:::demo
```jsx
import { Barcode } from "@code-apron/react";

export default function BarcodeDemo() {
  return <Barcode type="upc-e" width={400} height={100}>01234565</Barcode>
}
```
:::

### 使用 EAN-13
:::demo
```jsx
import { Barcode } from "@code-apron/react";

export default function BarcodeDemo() {
  return <Barcode type="ean-13" width={400} height={100}>123456789012</Barcode>
}
```
:::

### 使用 EAN-8
:::demo
```jsx
import { Barcode } from "@code-apron/react";

export default function BarcodeDemo() {
  return <Barcode type="ean-8" width={400} height={100}>1234567</Barcode>
}
```
:::

### 使用 Code128
:::demo
```jsx
import { Barcode } from "@code-apron/react";

export default function BarcodeDemo() {
  return <Barcode type="code128" width={400} height={100}>200111171103</Barcode>
}
```
:::

### 使用 Code39
:::demo
```jsx
import { Barcode } from "@code-apron/react";

export default function BarcodeDemo() {
  return <Barcode type="code39" width={400} height={100}>ABC23M</Barcode>
}
```
:::

## API

### Barcode slot

| 插槽名 | 说明 |
| :--- | :--- |
| default | 要渲染的条形码值 |

### Barcode Props

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| type | 条形码类型 | `string` | `upc-a` \| `upc-e` \| `ean-13` \| `ean-8` \| `code128` \| `code39` | `code128` |
| color | 条形码颜色 | `string` | - | `#000000` |
| background | 背景颜色 | `string` | - | `#ffffff` |
| width | 条形码宽度 | `number` | - | `200` |
| height | 条形码高度 | `number` | - | `100` |
| fill | 填满整个父容器 | `boolean` | - | `false` |

# 扩展知识

条形码在各种二维码普遍使用的今天，又可以称作一维码。

目前常见的条形码有以下几种：UPC（Universal Product Code）、EAN（European Article Number）、Code 128、Code 39。

他们的区别是：

| 编码类型 | **类型** | **编码内容** | **长度** | **校验** | **主要用途** | **优点** | **缺点** |
| :------| :-------| :-------| :--------| :-------| :----------| :---------|:---------|
| **UPC-A** | 零售商品码 | 仅数字 | 固定12位 | 强制校验 | 北美零售结算 | 北美标准 | 仅限北美使用 |
| **UPC-E** | 零售商品码 | 仅数字 | 固定6位（压缩版） | 强制校验 | 北美小商品 | 尺寸小 | 应用窄 |
| **EAN-13** | 零售商品码 | 仅数字 | 固定13位 | 强制校验 | **全球零售结算** | 全球通用 | 仅数字 |
| **EAN-8** | 零售商品码 | 仅数字 | 固定8位 | 强制校验 | 全球小商品 | 尺寸极小 | 容量小 |
| **Code 128** | 工业物流码 | 全ASCII字符 | 可变 | 强制校验 | **物流、仓储、医疗** | **高密度、高可靠性** | 技术复杂 |
| **Code 39** | 工业物流码 | 43个字符<br />数字+大写字母+部分符号 | 可变 | 可选校验 | **工业制造、汽车** | **兼容性好、简单** | **密度低、字符有限** |


