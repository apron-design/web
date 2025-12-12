"use client";

import { useState, useEffect } from "react";
import './search-button.scss'; // 引入外部样式文件

export function SearchButton() {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    // 检测是否为 Mac 系统
    if (typeof window !== 'undefined') {
      setIsMac(navigator.platform.indexOf('Mac') > -1);
    }
  }, []);

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

  return (
    <button 
      className="search-button"
      onClick={handleSearchClick}
      aria-label="搜索 (Ctrl+K)"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <span className="search-text">搜索</span>
      <span className="search-shortcut">
        {isMac ? (
          <>
            <kbd className="mac-command-key square-key">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 12h4l-4 4 4 4m0-16h4l-4 4 4 4" />
              </svg>
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