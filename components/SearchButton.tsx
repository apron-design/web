"use client";

import { useState, useEffect } from "react";

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
      
      <style jsx>{`
        .search-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: var(--color-background-secondary);
          border: 1px solid var(--color-border);
          border-radius: 9999px; /* 胶囊形状 */
          cursor: pointer;
          transition: all 0.2s ease;
          color: var(--color-text-secondary);
          font-size: 14px;
          height: 36px;
        }

        .search-button:hover {
          background: var(--color-background-hover);
          border-color: var(--color-border-hover);
          color: var(--color-text);
        }

        .search-text {
          margin-right: 40px; /* 添加 40px 的右边距 */
        }

        .search-shortcut {
          display: flex;
          gap: 4px;
          margin-left: auto;
        }

        kbd {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 20px;
          padding: 0 4px;
          font-size: 12px;
          font-family: inherit;
          background: var(--color-background);
          border: 1px solid var(--color-border);
          border-radius: 4px;
          color: var(--color-text-secondary);
        }

        .square-key {
          width: 20px;
          height: 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }

        .mac-command-key {
          padding: 0;
        }

        .mac-command-key svg {
          width: 12px;
          height: 12px;
        }

        [data-prefers-color="dark"] kbd {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
          color: var(--color-text-secondary);
        }

        @media (max-width: 768px) {
          .search-text {
            display: none;
          }
          
          .search-shortcut {
            display: none;
          }
        }
      `}</style>
    </button>
  );
}