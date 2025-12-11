# 深色模式

组件库内置深色模式主题，你可以轻易的切换到深色模式。

### 如何切换为深色模式
组件库通过 `body` 标签上的 `apron-theme` 属性来表明主题，你可以修改这个属性来切换：
```javascript
// 设置为深色模式
document.body.setAttribute('apron-theme', 'dark');

// 恢复
document.body.removeAttribute('apron-theme');
```

跟随系统主题自当切换则使用 `prefers-color-scheme` 属性
```javascript
const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

darkThemeMq.addEventListener('change', e => {
  if (e.matches) {
    document.body.setAttribute('apron-theme', 'dark');
  } else {
    document.body.removeAttribute('apron-theme');
  }
});
```

### 原理
Apron Design 使用 CSS 变量来构建颜色体系，并且在深色模式下有一套完整的颜色组。