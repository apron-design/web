# 版本说明

Apron Design 版本号遵循 Semver 规范，但略有区别：

* 大版本号跟年份执行；
* 中版本号作为功能发布；
* 小版本号作为漏洞修复等使用。

其中：大版本号、中版本号会在各端保持一致，小版本号在各端可能略有区别。

## 举例
<style>
.version-container {
  border: 1px solid #999999;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 300px;
  margin: 40px auto;
}
.version-container > .version-item {
  width: calc(100% / 3);
  text-align: center;
  height: 60px;
  line-height: 60px;
  font-size: 24px;
  position: relative;
}
.version-container > .version-item:before {
  content: '';
  display: block;
  width: 4px;
  height: 4px;
  background: #999999;
  border-radius: 50%;
  position: absolute;
  left: 0;
  bottom: 24px;
}
.version-container > .version-item:first-child::before {
  display: none;
}
</style>

<div class="version-container">
  <div class="version-item version-0">26</div>
  <div class="version-item version-1">4</div>
  <div class="version-item version-2">13</div>
</div>

* 26：大版本号，跟随年份走，例子 26 表示 2026 年发布；
* 4：中版本号，有组件更新、功能发布时更新，例子是第 26 年第 5 个中版本；
* 13：小版本号：各端可能略有差异，主要是用来修复现有功能，例子是第 13 个小版本。