"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { documents } from '@/lib/documents';

interface SearchResult {
  id: string;
  title: string;
  path: string;
  content: string;
}

export function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1); // 用于跟踪选中的结果索引
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const resultRefs = useRef<HTMLDivElement[]>([]);

  // 处理键盘事件
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Windows/Linux: Ctrl+K, Mac: Cmd+K
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      setIsOpen(true);
      setSelectedIndex(-1); // 打开时重置选中索引
    }

    // ESC 关闭模态框
    if (e.key === 'Escape' && isOpen) {
      setIsOpen(false);
      setSelectedIndex(-1);
    }
  }, [isOpen]);

  // 处理输入框键盘事件
  const handleInputKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    // 处理搜索结果导航
    if (searchResults.length > 0) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        // 如果没有选中项，跳转到第一个
        // 如果已选中项，跳转到下一个
        // 到达最后一个时不继续向下
        if (selectedIndex === -1) {
          setSelectedIndex(0);
        } else if (selectedIndex < searchResults.length - 1) {
          setSelectedIndex(selectedIndex + 1);
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        // 如果没有选中项，跳转到最后一个
        // 如果已选中项，跳转到上一个
        // 到达第一个时不继续向上
        if (selectedIndex === -1) {
          setSelectedIndex(searchResults.length - 1);
        } else if (selectedIndex > 0) {
          setSelectedIndex(selectedIndex - 1);
        }
      } else if (e.key === 'Enter' && selectedIndex >= 0) {
        e.preventDefault();
        handleNavigate(searchResults[selectedIndex].path);
      }
    }
  }, [searchResults, selectedIndex]);

  // 处理点击外部关闭
  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsOpen(false);
      setSelectedIndex(-1);
    }
  }, []);

  // 搜索功能
  const performSearch = useCallback((query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      setSelectedIndex(-1);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const results = documents.filter(doc => 
      doc.title.toLowerCase().includes(lowerQuery) || 
      doc.content.toLowerCase().includes(lowerQuery)
    ).slice(0, 8); // 限制结果数量

    setSearchResults(results);
    setSelectedIndex(results.length > 0 ? 0 : -1); // 有结果时默认选中第一个
  }, []);

  // 监听键盘事件
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // 监听点击外部事件
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen, handleClickOutside]);

  // 当模态框打开时聚焦输入框
  useEffect(() => {
    if (isOpen && inputRef.current) {
      // 等待模态框完全渲染后再聚焦
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // 处理搜索输入变化
  useEffect(() => {
    performSearch(searchQuery);
  }, [searchQuery, performSearch]);

  // 滚动选中的结果到视野中
  useEffect(() => {
    if (selectedIndex >= 0 && resultRefs.current[selectedIndex]) {
      resultRefs.current[selectedIndex].scrollIntoView({
        block: 'nearest',
        behavior: 'smooth'
      });
    } else if (selectedIndex === -1 && inputRef.current) {
      // 当选中索引为-1时，聚焦到输入框
      inputRef.current.focus();
    }
  }, [selectedIndex]);

  // 跳转到文档页面
  const handleNavigate = (path: string) => {
    setIsOpen(false);
    setSelectedIndex(-1);
    router.push(path);
  };

  // 阻止事件冒泡
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // 处理结果项的键盘事件
  const handleResultKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>, index: number) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      // 如果当前是最后一个结果，则不再向下移动
      if (index < searchResults.length - 1) {
        setSelectedIndex(index + 1);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      // 如果当前是第一个结果，则不再向上移动
      if (index > 0) {
        setSelectedIndex(index - 1);
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      handleNavigate(searchResults[index].path);
    }
  }, [searchResults]);

  // 处理结果项的点击
  const handleResultClick = (index: number, path: string) => {
    setSelectedIndex(index);
    handleNavigate(path);
  };

  // 处理结果项的鼠标悬停
  const handleResultHover = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      {/* 搜索触发按钮 */}
      <button 
        className="search-trigger"
        onClick={() => setIsOpen(true)}
        aria-label="打开搜索"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <span className="search-text">搜索</span>
        <span className="search-shortcut">
          <kbd className="square-key">⌘</kbd>
          <kbd className="square-key">K</kbd>
        </span>
      </button>

      {/* 搜索模态框 */}
      {isOpen && (
        <div className="search-modal-overlay">
          <div 
            className="search-modal" 
            ref={modalRef}
            onClick={handleModalClick}
          >
            <div className="search-input-container">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                placeholder="搜索文档..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleInputKeyDown}
                className="search-input"
              />
              <button 
                className="search-close-button"
                onClick={() => setIsOpen(false)}
                aria-label="关闭搜索"
              >
                ESC
              </button>
            </div>

            <div className="search-results">
              {searchResults.length > 0 ? (
                searchResults.map((result, index) => (
                  <div 
                    key={result.id}
                    ref={(el) => {
                      if (el) resultRefs.current[index] = el;
                    }}
                    className={`search-result-item ${index === selectedIndex ? 'selected' : ''}`}
                    onClick={() => handleResultClick(index, result.path)}
                    onMouseEnter={() => handleResultHover(index)}
                    onKeyDown={(e) => handleResultKeyDown(e, index)}
                    tabIndex={0}
                  >
                    <h3 className="search-result-title">{result.title}</h3>
                    <p className="search-result-content">
                      {result.content.substring(0, 100)}...
                    </p>
                  </div>
                ))
              ) : searchQuery ? (
                <div className="no-results">
                  <p>未找到与 "{searchQuery}" 相关的结果</p>
                </div>
              ) : (
                <div className="search-placeholder">
                  <p>输入关键词开始搜索文档</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 全局样式 */}
      <style jsx global>{`
        .search-trigger {
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

        .search-trigger:hover {
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

        .search-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-top: 10vh;
          z-index: 1000;
        }

        .search-modal {
          width: 100%;
          max-width: 600px;
          background: var(--color-background);
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          overflow: hidden;
          border: 1px solid var(--color-border);
        }

        .search-input-container {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          border-bottom: 1px solid var(--color-border);
        }

        .search-input {
          flex: 1;
          padding: 12px 0;
          font-size: 16px;
          border: none;
          outline: none;
          background: transparent;
          color: var(--color-text);
        }

        .search-input::placeholder {
          color: var(--color-text-secondary);
        }

        .search-close-button {
          padding: 4px 8px;
          font-size: 12px;
          color: var(--color-text-secondary);
          background: var(--color-background-secondary);
          border: 1px solid var(--color-border);
          border-radius: 4px;
          cursor: pointer;
        }

        .search-results {
          max-height: 60vh;
          overflow-y: auto;
          /* 修复 overflow hidden 问题 */
          overflow-x: hidden;
          padding: 0;
        }

        .search-result-item {
          padding: 16px 24px;
          border-bottom: 1px solid var(--color-border);
          cursor: pointer;
          transition: all 0.2s ease;
          /* 修复 overflow hidden 问题 */
          white-space: normal;
          word-wrap: break-word;
        }

        .search-result-item:hover {
          background: var(--color-background-hover);
        }

        /* 改进选中状态的视觉效果 - 移除位置变换，仅保留背景色 */
        .search-result-item.selected {
          background: linear-gradient(90deg, rgba(76, 158, 234, 0.1) 0%, rgba(76, 158, 234, 0.05) 100%);
        }

        [data-prefers-color="dark"] .search-result-item.selected {
          background: linear-gradient(90deg, rgba(76, 158, 234, 0.2) 0%, rgba(76, 158, 234, 0.1) 100%);
        }

        .search-result-item:last-child {
          border-bottom: none;
        }

        .search-result-title {
          font-size: 16px;
          font-weight: 500;
          margin: 0 0 4px 0;
          color: var(--color-text);
        }

        .search-result-content {
          font-size: 14px;
          color: var(--color-text-secondary);
          margin: 0;
          line-height: 1.4;
        }

        .no-results, .search-placeholder {
          padding: 40px 24px;
          text-align: center;
          color: var(--color-text-secondary);
        }

        [data-prefers-color="dark"] .search-modal {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
        }

        [data-prefers-color="dark"] kbd {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
          color: var(--color-text-secondary);
        }

        @media (max-width: 768px) {
          .search-modal-overlay {
            padding-top: 5vh;
            align-items: center;
          }

          .search-modal {
            margin: 0 16px;
            max-height: 90vh;
          }

          .search-text {
            display: none;
          }
          
          .search-shortcut {
            display: none;
          }
        }
      `}</style>
    </>
  );
}