"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from '@apron-design/react';
import { SearchButton } from './SearchButton'; // 添加导入
import "./PageHeader.scss";

interface PageHeaderProps {
  backgrounded?: number | boolean;
}

export function PageHeader({ backgrounded }: PageHeaderProps) {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // 检查 localStorage 和系统偏好
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = stored === "dark" || (!stored && prefersDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.setAttribute("data-prefers-color", "dark");
      document.documentElement.style.backgroundColor = "#000000";
      document.body.style.backgroundColor = "#000000";
    } else {
      document.documentElement.setAttribute("data-prefers-color", "light");
      document.documentElement.style.backgroundColor = "#FFFFFF";
      document.body.style.backgroundColor = "#FFFFFF";
    }
  }, []);

  useEffect(() => {
    // 如果 backgrounded 是数字，监听滚动事件
    if (typeof backgrounded === "number") {
      const handleScroll = () => {
        setIsScrolled(window.scrollY >= backgrounded);
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll(); // 初始检查

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [backgrounded]);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.setAttribute("data-prefers-color", "dark");
      document.documentElement.style.backgroundColor = "#000000";
      document.body.style.backgroundColor = "#000000";
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-prefers-color", "light");
      document.documentElement.style.backgroundColor = "#FFFFFF";
      document.body.style.backgroundColor = "#FFFFFF";
      localStorage.setItem("theme", "light");
    }
  };

  // 确定是否显示背景
  const showBackground = 
    backgrounded === true || 
    (typeof backgrounded === "number" && isScrolled);

  return (
    <header className={`page-header ${showBackground ? "page-header--backgrounded" : ""}`}>
      <div className="page-header-container">
        <div className="page-header-left">
          <Link href="/" className="page-header-logo">
            <Image
              src={isDark ? "/assets/images/logo-dark.svg" : "/assets/images/logo-light.svg"}
              alt="Logo"
              fill
              priority
            />
          </Link>
          
          {/* 将搜索按钮放在 logo 右边 */}
          <SearchButton />
        </div>
        
        <div className="page-header-actions">
          <Link
            variant="primary"
            href="/design/principles"
          >
            设计
          </Link>
          <Link
            variant="primary"
            href="/guide/quick-start"
          >
            指南
          </Link>
          <Link
            variant="primary"
            href="/usage/best-practices"
          >
            最佳实践
          </Link>
          <Link
            variant="primary"
            href="/react"
          >
            React
          </Link>
          <Link
            variant="primary"
            href="/vue-next"
          >
            Vue3
          </Link>
          <Link
            variant="primary"
            href="/miniprogram"
          >
            微信小程序
          </Link>
          <Link 
            href="https://github.com/apron-design"
            target="_blank"
            rel="noopener noreferrer"
            className="page-header-icon-button"
            aria-label="GitHub"
          >
            <Image
              src="/assets/icons/github.svg"
              alt="GitHub"
              width={24}
              height={24}
              className="page-header-icon"
            />
          </Link>
          
          <button
            onClick={toggleTheme}
            className="page-header-icon-button page-header-theme-toggle"
            aria-label="切换主题"
          >
            <Image
              src={isDark ? "/assets/icons/sun.svg" : "/assets/icons/moon.svg"}
              alt={isDark ? "切换到浅色模式" : "切换到深色模式"}
              width={24}
              height={24}
              className="page-header-icon"
            />
          </button>
        </div>
      </div>
    </header>
  );
}