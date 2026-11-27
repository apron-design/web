"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { SearchModal } from '@/components/SearchModal';

type ThemeMode = "light" | "dark" | "system";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [progressColor, setProgressColor] = useState("#393939");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem("themeMode") as ThemeMode | null;
      let themeMode: ThemeMode = "system";
      
      if (savedMode) {
        themeMode = savedMode;
      } else {
        const oldTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        if (oldTheme) {
          themeMode = oldTheme;
        } else {
          themeMode = "system";
        }
      }
      
      let themeValue: "light" | "dark" = "light";
      if (themeMode === "system") {
        themeValue = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      } else {
        themeValue = themeMode;
      }
      
      document.documentElement.setAttribute("apron-theme", themeValue);
      document.body.setAttribute("apron-theme", themeValue);
      document.documentElement.style.backgroundColor = themeValue === "dark" ? "#000000" : "#FFFFFF";
      document.body.style.backgroundColor = themeValue === "dark" ? "#000000" : "#FFFFFF";

      setProgressColor(themeValue === "dark" ? "#f5f5f5" : "#393939");
      setMounted(true);

      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
        offset: 100,
      });

      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === "attributes" && mutation.attributeName === "apron-theme") {
            const theme = document.documentElement.getAttribute("apron-theme") === "dark" ? "dark" : "light";
            const isDark = theme === "dark";
            setProgressColor(isDark ? "#f5f5f5" : "#393939");
            document.body.setAttribute("apron-theme", theme);
          }
        });
      });

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["apron-theme"]
      });

      return () => observer.disconnect();
    }
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
