"use client";

import { SearchModal } from '@/components/SearchModal';
import { SearchButton } from '@/components/SearchButton';

export default function SearchTestPage() {
  return (
    <div style={{ padding: '50px 20px', fontFamily: 'sans-serif' }}>
      <h1>搜索功能测试页面</h1>
      <p>此页面用于测试搜索功能的实现</p>
      
      <div style={{ marginTop: '30px' }}>
        <h2>搜索模态框测试</h2>
        <p>点击下面的按钮或使用快捷键 (Ctrl/Cmd + K) 打开搜索模态框：</p>
        <SearchModal />
      </div>
      
      <div style={{ marginTop: '30px' }}>
        <h2>搜索按钮测试</h2>
        <p>这个按钮应该出现在页面头部 logo 的右侧：</p>
        <SearchButton />
      </div>
      
      <div style={{ marginTop: '30px' }}>
        <h2>功能说明</h2>
        <ul>
          <li>支持键盘快捷键：Windows/Linux 使用 Ctrl+K，Mac 使用 Cmd+K</li>
          <li>支持鼠标点击激活搜索</li>
          <li>搜索结果会显示匹配的文档标题和内容摘要</li>
          <li>点击搜索结果可以跳转到相应页面</li>
          <li>支持 ESC 键关闭搜索模态框</li>
          <li>点击模态框外部区域也可以关闭</li>
        </ul>
      </div>
    </div>
  );
}