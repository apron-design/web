"use client";

import { useState } from "react";
import './search-button.scss'; // 引入外部样式文件

export function SearchButton() {
  const [isMac, setIsMac] = useState(
    typeof window !== 'undefined' && navigator.platform.indexOf('Mac') > -1
  );

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
      aria-label={isMac ? "搜索 (Cmd+K)" : "搜索 (Ctrl+K)"}
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