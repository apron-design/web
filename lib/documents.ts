// 文档数据 - 实际项目中可以从文件系统或API获取
export const documents = [
  { 
    id: "installation", 
    title: "安装指南", 
    path: "/guide/installation", 
    content: "在本页面将会展示如果安装在项目中。在 React 上使用，在开始之前，你可能需要安装 npx。首先，确保你的 React 项目已经创建。然后安装 Apron Design。对于 App Router (Next.js 13+)，在 app/layout.tsx 中添加样式导入。对于 Pages Router，则在 pages/_app.tsx 中添加样式导入。在 Vue3 上使用时，推荐使用 Vite 创建项目，然后安装 Apron Design 并在 main.ts 中导入样式。在 Nuxt3 上使用时，可以在 plugins/apron-design.ts 中导入样式或在 nuxt.config.ts 中配置。" 
  },
  { 
    id: "quick-start", 
    title: "快速开始", 
    path: "/guide/quick-start", 
    content: "跟随以下步骤，快速上手组件库的使用。您需要首先确认自己使用什么框架来开发网站或页面。Apron Design 支持 React、Vue3 和微信小程序。组件库同时支持 React 的服务端渲染框架 Next.js 和 Vue 的 Nuxt3。兼容性方面，Apron Design 支持最近两个版本的浏览器。如果您需要支持旧版本的浏览器，请自行添加 Babel 和相应的 Polyfill。由于 React16 和 Vue3 不再支持 IE11，因此 Apron Design 也不支持 IE 浏览器。" 
  },
  { 
    id: "principles", 
    title: "设计原则", 
    path: "/design/principles", 
    content: "Apron Design 的名字就是他的设计原则：Agreement - 一致、Peace - 平和、Realizing - 意识、Open - 开放、Necessity - 必要。一致原则要求保持整个系统的视觉语言统一，让用户在不同场景下都能获得连贯的体验。平和原则通过合理的布局和设计，营造舒适、宁静的视觉氛围。意识原则时刻关注用户的真实需求，而不是仅仅完成功能。开放原则设计应该包容不同用户的需求和使用习惯。必要原则只提供用户真正需要的功能，避免界面臃肿。" 
  },
  { 
    id: "changelog", 
    title: "更新日志", 
    path: "/guide/changelog", 
    content: "记录 Apron Design 的更新内容和版本变化。最新版本增加了更多组件支持，修复了已知问题，优化了性能表现。我们定期发布更新以提供更好的用户体验。" 
  },
  { 
    id: "faq", 
    title: "常见问题", 
    path: "/guide/faq", 
    content: "解答用户在使用 Apron Design 过程中遇到的常见问题。包括安装问题、使用问题、兼容性问题等。如果您遇到了文档中未提及的问题，请通过反馈渠道联系我们。" 
  },
  { 
    id: "dark-mode", 
    title: "暗色模式", 
    path: "/guide/dark-mode", 
    content: "介绍如何在项目中使用和配置暗色模式。Apron Design 提供了完整的暗色主题支持，可以通过系统偏好或手动切换来启用。暗色模式不仅节省电量，还能在弱光环境下提供更舒适的浏览体验。" 
  },
  { 
    id: "versions", 
    title: "版本说明", 
    path: "/guide/versions", 
    content: "详细介绍各版本之间的差异和升级注意事项。我们遵循语义化版本控制规范，主版本号的重大变更可能需要您调整代码。建议在升级前仔细阅读版本说明。" 
  },
  { 
    id: "feedback", 
    title: "意见反馈", 
    path: "/guide/feedback", 
    content: "如何提交反馈和建议。我们非常重视用户的反馈，您可以通过 GitHub Issues、邮件或社区论坛来提交您的意见。我们会认真考虑每一条反馈，并在后续版本中不断改进。" 
  },
  { 
    id: "color", 
    title: "色彩系统", 
    path: "/design/color", 
    content: "Apron Design 的色彩设计理念和使用规范。我们采用了一套完整的色彩体系，包括主色、辅助色、中性色等。色彩的使用遵循一致性、可访问性和美观性原则。" 
  },
  { 
    id: "specifications", 
    title: "设计规范", 
    path: "/design/specifications", 
    content: "详细的界面设计规范和组件使用标准。包括间距规范、字体层级、图标风格等方面的要求。遵循这些规范可以帮助您创建一致且高质量的用户界面。" 
  },
  { 
    id: "best-practices", 
    title: "最佳实践", 
    path: "/usage/best-practices", 
    content: "推荐的使用方式和最佳实践案例。包括组件使用建议、性能优化技巧、可访问性改进等方面的指导。遵循最佳实践可以让您的项目更加健壮和易于维护。" 
  },
  { 
    id: "recommends", 
    title: "推荐搭配", 
    path: "/usage/recommends", 
    content: "推荐的第三方项目和工具。我们不创造一个简单、不好用的走马灯组件或者类似功能的组件来让我们的组件库显得很庞大，我们需要轻量化。因此各种其他可以用于搭配使用的组件参考推荐搭配。" 
  },
  { 
    id: "codes", 
    title: "代码示例", 
    path: "/usage/codes", 
    content: "各种使用场景下的代码示例。包括基础用法、高级技巧、常见问题解决方案等。这些示例可以帮助您更好地理解和使用 Apron Design 组件库。" 
  },
  { 
    id: "icons", 
    title: "图标使用", 
    path: "/usage/icons", 
    content: "如何使用和自定义图标。Apron Design 提供了丰富的图标集合，支持 SVG 和字体图标两种方式。您可以根据需要选择合适的图标使用方式。" 
  },
  { 
    id: "media", 
    title: "媒体资源", 
    path: "/usage/media", 
    content: "图片、视频等媒体资源的使用规范。包括响应式图片处理、视频播放优化、媒体资源压缩等方面的建议。合理使用媒体资源可以提升用户体验并优化性能。" 
  },
];