# 快速开始
跟随一下步骤，快速上手组件库的使用。

您需要首先确认自己使用什么框架来开发网站或页面。

Apron Design 支持 React、Vue3 和微信小程序，请根据您使用的框架来安装组件库：

* [在 React 上使用](/guide/installation#react)
* [在 Vue3 上使用](/guide/installation#vue-next)
* [在微信小程序使用](/guide/installation#miniprogram)

组件库同时支持 React 的服务端渲染框架 Next.js 和 Vue 的 Nuxt3，详细使用方法请点击上面的链接。

## 兼容性

Apron Design 支持最近两个版本的浏览器。

如果您需要支持旧版本的浏览器，请自行添加 Babel 和相应的 Polyfill。

由于 React16 和 Vue3 不再支持 IE11，因此 Apron Design 也不支持 IE 浏览器。


| 版本 | <img src="/assets/icons/chrome.svg" width="16" height="16" style="vertical-align: middle; display: inline-block;"/> Chrome | <img src="/assets/icons/edge.svg" width="16" height="16" style="vertical-align: middle; display: inline-block;"/> Edge | <img src="/assets/icons/firefox.svg" width="16" height="16" style="vertical-align: middle; display: inline-block;"/> Firefox | <img src="/assets/icons/Safari.svg" width="16" height="16" style="vertical-align: middle; display: inline-block;"/> Safari | <img src="/assets/icons/electron.svg" width="16" height="16" style="vertical-align: middle; display: inline-block;"/> Electron |
| :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| 26.0.x | Chrome ≥ 85 | Edge ≥ 85| Firefox ≥ 79 | Safari ≥ 14.1 | 最后两个版本 |

## 样式
### React + Sass
React 原生支持 Sass 直接开发。但组件库已经打包成 `css`，因此不存在兼容性问题。

### Vue3 + less
Vue3 版本组件库我们选用的 less 作为样式预处理，组件库样式已经打包成 `css`，不存在兼容性问题。

## 包管理器
我们建议您使用包管理器（例如 [NPM](https://npmjs.com)、[Yarn](https://classic.yarnpkg.com/lang/en/) 或 [pnpm](https://classic.yarnpkg.com/lang/en/)）安装 Apron Design，然后使用打包工具（例如 [Vite](https://vitejs.dev/) 或 [webpack](https://webpack.js.org/)）打包。

```bash
### 使用 npm 安装
npm install @apron-design/react --save # React
npm install @apron-design/vue-next --save # Vue3
### 使用 yarn 安装
yarn add @apron-design/react
yarn add @apron-design/vue-next
### 使用 pnpm 安装
pnpm install @apron-design/react
pnpm install @apron-design/vue-next

```

如果你在防火墙内无法获取最佳的安装体验，也可以使用 [cnpm](https://github.com/cnpm/cnpm) 或 [npmmirror](https://github.com/cnpm/cnpm)

```bash
npm config set registry https://registry.npmmirror.com
```

## 不推荐
虽然你可以使用 CDN 来使用 Apron Design（例如 unpkg 或者 jsDelivr），但我们依旧不建议你在浏览器直接引入。

因此，我们就不在这里展示相关的代码了。