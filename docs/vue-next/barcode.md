# 条形码 Barcode

条形码在各种二维码普遍使用的今天，又可以称作一维码。

目前常见的条形码有以下几种：
UPC（Universal Product Code）、EAN（European Article Number）、Code 128、Code 39；
他们的区别是：

| 特性 | UPC-A | UPC-E | EAN-13 | EAN-8 | Code 128 | Code 39 |
| :------| :-------| :-------| :--------| :-------| :----------| :---------|
| **类型** | 零售商品码 | 零售商品码 | 零售商品码 | 零售商品码 | 工业物流码 | 工业物流码 |
| **编码内容** | 仅数字 | 仅数字 | 仅数字 | 仅数字 | 全ASCII字符 | 43个字符（数字+大写字母+部分符号） |
| **长度** | 固定12位 | 固定6位（压缩版） | 固定13位 | 固定8位 | 可变 | 可变 |
| **校验** | 强制校验 | 强制校验 | 强制校验 | 强制校验 | 强制校验 | 可选校验 |
| **主要用途** | 北美零售结算 | 北美小商品 | **全球零售结算** | 全球小商品 | **物流、仓储、医疗** | **工业制造、汽车** |
| **优点** | 北美标准 | 尺寸小 | 全球通用 | 尺寸极小 | **高密度、高可靠性** | **兼容性好、简单** |
| **缺点** | 仅限北美使用 | 应用窄 | 仅数字 | 容量小 | 技术复杂 | **密度低、字符有限** |


Apron Design 的机器码部分是独立的项目，您需要额外安装一个扩展包 Code Apron。

Code Apron 是与 Apron Design 最佳搭配使用的机器码渲染独立项目，也是 Apron Design 的分支项目。

虽然 Code Apron 是 Apron Design 的分支项目，但你也可以在其他组件库为 base 开发的项目中使用它。

## 安装 Code Apron Vue Next
```bash
npm install @code-apron/vue-next --save-dev
```

## 在页面上渲染条形码
:::demo
```vue
<template>
  <ad-barcode type="upc-a">139912478900</ad-barcode>
</template>
```
:::

# 扩展知识
我们强烈建议您观看这期视频，将有助于您理解条形码、二维码的各种类型和使用场景。

<iframe width="100%" style="aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/XW8sgT_D0To?si=yOGasUF97e1Sy-X6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## API

### ad-barcode

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 条形码类型 | `'upc-a' \| 'upc-e' \| 'ean-13' \| 'ean-8' \| 'code-128' \| 'code-39'` | `'code-128'` |
| value | 条形码值 | string | - |
| width | 条形码宽度 | number | 200 |
| height | 条形码高度 | number | 100 |
| color | 条形码颜色 | string | '#000000' |
| backgroundColor | 背景颜色 | string | '#ffffff' |
| displayValue | 是否显示值文本 | boolean | true |
| fontSize | 字体大小 | number | 12 |
| textAlign | 文本对齐方式 | `'left' \| 'center' \| 'right'` | `'center'` |