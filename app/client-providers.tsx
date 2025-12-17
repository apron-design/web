"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { SearchModal } from '@/components/SearchModal';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [progressColor, setProgressColor] = useState("#393939");

  useEffect(() => {
    // 初始化主题，避免闪烁
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = stored === "dark" || (!stored && prefersDark);
    
    const themeValue = shouldBeDark ? "dark" : "light";
    document.documentElement.setAttribute("data-prefers-color", themeValue);
    
    // 强制设置背景色
    document.documentElement.style.backgroundColor = shouldBeDark ? "#000000" : "#FFFFFF";
    document.body.style.backgroundColor = shouldBeDark ? "#000000" : "#FFFFFF";

    // 设置进度条颜色
    setProgressColor(shouldBeDark ? "#f5f5f5" : "#393939");
    setMounted(true);

    // 初始化 AOS
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });

    // 监听主题变化，更新进度条颜色
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "data-prefers-color") {
          const isDark = document.documentElement.getAttribute("data-prefers-color") === "dark";
          setProgressColor(isDark ? "#f5f5f5" : "#393939");
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-prefers-color"]
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* 只在客户端挂载后渲染进度条，避免 hydration 错误 */}
      {mounted && (
        <ProgressBar
          color={progressColor}
          height="2px"
          options={{ showSpinner: false }}
          shallowRouting
        />
      )}
      {children}
      <SearchModal />
    </>
  );
}