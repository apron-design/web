"use client";

import { useState, useEffect } from "react";
import { SearchButton } from '@/components/SearchButton';
import { SearchModal } from '@/components/SearchModal';

export default function SearchDemoPage() {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    // 检测是否为 Mac 系统
    if (typeof window !== 'undefined') {
      setIsMac(navigator.platform.indexOf('Mac') > -1);
    }
  }, []);

  return (
    <div style={{ 
      padding: '50px 20px', 
      fontFamily: 'sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: 'var(--color-background)',
      color: 'var(--color-text)',
      minHeight: '100vh'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>搜索功能演示</h1>
      
      <div style={{ 
        backgroundColor: 'var(--color-background-secondary)', 
        border: '1px solid var(--color-border)',
        borderRadius: '12px',
        padding: '30px',
        marginBottom: '30px'
      }}>
        <h2>页面头部搜索按钮</h2>
        <p>这个按钮应该出现在页面头部 logo 的右侧：</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '20px' }}>
          <div style={{ 
            width: '120px', 
            height: '40px', 
            backgroundColor: 'var(--color-background-hover)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold'
          }}>
            Logo
          </div>
          <SearchButton />
        </div>
        <div style={{ 
          marginTop: '20px', 
          padding: '15px', 
          backgroundColor: 'rgba(76, 158, 234, 0.1)',
          borderLeft: '4px solid #4c9eea',
          borderRadius: '4px'
        }}>
          <h3 style={{ marginTop: 0 }}>设计说明:</h3>
          <ul style={{ paddingLeft: '20px' }}>
            <li>采用胶囊形状设计</li>
            <li>放大镜图标右侧显示"搜索"文本</li>
            <li>"搜索"文本与快捷键提示之间有40px的间隔</li>
            <li>{isMac ? "Mac显示带有图标的 '⌘ + K' 快捷键" : "Windows/Linux显示 'Ctrl + K' 快捷键"}</li>
            <li>在小屏幕上隐藏"搜索"文本和快捷键提示以节省空间</li>
            <li>支持深色和浅色主题</li>
            <li>悬停时有视觉反馈效果</li>
          </ul>
        </div>
      </div>
      
      <div style={{ 
        backgroundColor: 'var(--color-background-secondary)', 
        border: '1px solid var(--color-border)',
        borderRadius: '12px',
        padding: '30px',
        marginBottom: '30px'
      }}>
        <h2>搜索模态框触发器</h2>
        <p>点击下面的按钮或使用快捷键 ({isMac ? 'Cmd' : 'Ctrl'} + K) 打开搜索模态框：</p>
        <div style={{ marginTop: '20px' }}>
          <SearchModal />
        </div>
      </div>
      
      <div style={{ 
        backgroundColor: 'var(--color-background-secondary)', 
        border: '1px solid var(--color-border)',
        borderRadius: '12px',
        padding: '30px'
      }}>
        <h2>功能特性</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>快捷键支持:</strong> {isMac ? "Mac 使用 Cmd+K" : "Windows/Linux 使用 Ctrl+K"} 激活搜索</li>
          <li><strong>鼠标点击:</strong> 支持鼠标点击激活搜索</li>
          <li><strong>实时搜索:</strong> 输入关键词实时显示匹配结果</li>
          <li><strong>结果跳转:</strong> 点击搜索结果跳转到相应页面</li>
          <li><strong>关闭方式:</strong> 支持 ESC 键、点击外部区域或关闭按钮关闭搜索模态框</li>
          <li><strong>响应式设计:</strong> 适配不同屏幕尺寸</li>
          <li><strong>主题支持:</strong> 自动适配深色和浅色主题</li>
        </ul>
      </div>
    </div>
  );
}