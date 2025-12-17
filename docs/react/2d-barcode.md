# 二维码 2D Barcode

目前常见的条形码有以下几种：
QR Code、Data Matrix、PDF417、Aztec Code 和 MaxiCode，
他们的区别是：

| 类型 | 特点 | 主要用途 |
| :------| :------| :----------|
| **QR码** | 最普及、识别快、容错高、支持汉字 | 移动支付、网址链接、广告、电子票务 |
| **Data Matrix** | 尺寸极小、密度高、有“L”形定位边 | 电子元件、医疗器械、小零件标识 |
| **PDF417** | 堆叠式（多行）、容量大、长方形 | 驾驶证、护照、物流单据（存储大量数据） |
| **Aztec Code** | 中心靶心定位、无需空白边、适曲面打印 | 火车票、登机牌、交通票务 |
| **MaxiCode** | 固定点阵、中心靶眼、高速扫描优化 | 快递包裹分拣（UPS/FedEx）、物流仓储 |



Apron Design 的机器码部分是独立的项目，您需要额外安装一个扩展包 Code Apron。

Code Apron 是与 Apron Design 最佳搭配使用的机器码渲染独立项目，也是 Apron Design 的分支项目。

虽然 Code Apron 是 Apron Design 的分支项目，但你也可以在其他组件库为 base 开发的项目中使用它。

## 安装 Code Apron React
```bash
npm install @code-apron/react --save-dev
```

## 在页面上渲染二维码
:::demo
```jsx
'use client';
import { Barcode } from "@code-apron/react";

export default function BarcodeDemo() {
  return <Barcode type="qr-code">139912478900</Barcode>
}
```
:::

# 扩展知识
我们强烈建议您观看这期视频，将有助于您理解条形码、二维码的各种类型和使用场景。

<iframe width="100%" style="aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/XW8sgT_D0To?si=yOGasUF97e1Sy-X6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
