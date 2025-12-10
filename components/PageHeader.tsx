"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./PageHeader.scss";

export function PageHeader() {
  const [isDark, setIsDark] = useState(false);

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

  return (
    <header className="page-header">
      <div className="page-header-container">
        <div className="page-header-logo">
          <Image
            src={isDark ? "/assets/images/logo-dark.svg" : "/assets/images/logo-light.svg"}
            alt="Logo"
            fill
            priority
          />
        </div>
        
        <div className="page-header-actions">
          <a
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
          </a>
          
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