"use client";

import { useEffect } from "react";
import AOS from "aos";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { SearchModal } from '@/components/SearchModal';

export function ClientProviders({ children }: { children: React.ReactNode }) {
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

    // 初始化 AOS
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  // 获取当前主题颜色
  const stored = typeof window !== 'undefined' ? localStorage.getItem("theme") : null;
  const prefersDark = typeof window !== 'undefined' ? window.matchMedia("(prefers-color-scheme: dark)").matches : false;
  const isDark = stored === "dark" || (!stored && prefersDark);
  const progressBarColor = isDark ? "#f5f5f5" : "#393939";

  return (
    <>
      <ProgressBar
        color={progressBarColor}
        height="2px"
        options={{ showSpinner: false }}
        shallowRouting
      />
      {children}
      <SearchModal />
    </>
  );
}