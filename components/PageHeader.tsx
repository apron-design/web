"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { SearchButton } from './SearchButton'; // 添加导入
import "./PageHeader.scss";

interface PageHeaderProps {
  backgrounded?: number | boolean;
}

export function PageHeader({ backgrounded }: PageHeaderProps) {
  // 使用函数式初始化来避免在useEffect中调用setIsDark
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return stored === "dark" || (!stored && prefersDark);
    }
    return false;
  });
  
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // 应用主题到DOM元素
    if (typeof window !== 'undefined') {
      if (isDark) {
        document.documentElement.setAttribute("data-prefers-color", "dark");
        document.documentElement.style.backgroundColor = "#000000";
        document.body.style.backgroundColor = "#000000";
      } else {
        document.documentElement.setAttribute("data-prefers-color", "light");
        document.documentElement.style.backgroundColor = "#FFFFFF";
        document.body.style.backgroundColor = "#FFFFFF";
      }
    }
  }, [isDark]); // 依赖isDark变化来应用主题

  useEffect(() => {
    // 如果 backgrounded 是数字，监听滚动事件
    if (typeof backgrounded === "number" && typeof window !== 'undefined') {
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
    
    if (typeof window !== 'undefined') {
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
    }
  };

  // 确定是否显示背景
  const showBackground = 
    backgrounded === true || 
    (typeof backgrounded === "number" && isScrolled);

  // 判断导航项是否应该高亮
  const isNavActive = (href: string) => {
    // 根路径特殊处理
    if (href === '/' && pathname === '/') {
      return true;
    }
    
    // 对于根路径，不匹配其他路径
    if (href === '/') {
      return false;
    }
    
    // 移除尾部斜杠进行比较
    const normalizedHref = href.replace(/\/$/, '');
    const normalizedPathname = pathname.replace(/\/$/, '');
    
    // 如果是精确匹配
    if (normalizedHref === normalizedPathname) {
      return true;
    }
    
    // 如果是前缀匹配（处理二级页面）
    if (normalizedPathname.startsWith(normalizedHref) && normalizedHref !== '') {
      return true;
    }
    
    return false;
  };

  // 导航项配置
  const navItems = [
    { href: '/design', label: '设计' },
    { href: '/guide', label: '指南' },
    { href: '/usage', label: '最佳实践' },
    { href: '/react', label: 'React' },
    { href: '/vue-next', label: 'Vue3' },
    { href: '/miniprogram', label: '微信小程序' }
  ];

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
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`page-header-nav-link ${isNavActive(item.href) ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          
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