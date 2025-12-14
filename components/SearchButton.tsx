"use client";

import { useState } from "react";
import './search-button.scss'; // 引入外部样式文件

export function SearchButton() {
  // 使用函数初始化来避免在useEffect中设置状态
  const [isMac] = useState(() => {
    if (typeof window !== 'undefined') {
      return navigator.platform.indexOf('Mac') > -1;
    }
    return false;
  });

  const handleSearchClick = () => {
    // 触发 Ctrl+K 或 Cmd+K 快捷键事件
    const event = new KeyboardEvent('keydown', {
      key: 'k',
      ctrlKey: !isMac,
      metaKey: isMac,
      bubbles: true,
      cancelable: true
    });
    
    document.dispatchEvent(event);
  };

  // 为了防止hydration错误，我们需要在服务器端和客户端渲染相同的内容
  // 但实际的平台检测只在客户端进行
  const platformLabel = typeof window === 'undefined' ? "搜索 (Ctrl+K)" : (isMac ? "搜索 (Cmd+K)" : "搜索 (Ctrl+K)");
  const showMacKeys = typeof window === 'undefined' ? false : isMac;

  return (
    <button 
      className="search-button"
      onClick={handleSearchClick}
      aria-label={platformLabel}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <span className="search-text">搜索</span>
      <span className="search-shortcut">
        {showMacKeys ? (
          <>
            <kbd className="mac-command-key square-key">
              ⌘
            </kbd>
            <kbd className="square-key">K</kbd>
          </>
        ) : (
          <>
            <kbd className="square-key">Ctrl</kbd>
            <kbd className="square-key">K</kbd>
          </>
        )}
      </span>
    </button>
  );
}