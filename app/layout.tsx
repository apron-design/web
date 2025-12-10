import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import { ClientProviders } from "./client-providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apron Design · 秩序之下 · 想象之上",
  description: "Apron Design 是一套完全开源的 C 端组件库方案，支持 React、Vue3 和微信小程序多端开发。提供丰富的 UI 组件、优雅的设计系统和完善的开发文档，助力开发者快速构建高质量的用户界面。秩序之下，想象之上，解构复杂，聚合光芒。",
  keywords: ["组件库", "React组件库", "Vue组件库", "Vue3组件库", "微信小程序", "小程序", "UI组件", "开源组件库", "前端组件", "设计系统", "Apron Design", "C端组件", "跨端开发", "用户界面"],
  icons: {
    icon: [
      { url: '/facicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/facicon.ico', sizes: '16x16', type: 'image/x-icon' },
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/facicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem("theme");
                  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                  const shouldBeDark = stored === "dark" || (!stored && prefersDark);
                  const themeValue = shouldBeDark ? "dark" : "light";
                  const bgColor = shouldBeDark ? "#000000" : "#FFFFFF";
                  document.documentElement.setAttribute("data-prefers-color", themeValue);
                  document.documentElement.style.backgroundColor = bgColor;
                  if (document.body) {
                    document.body.style.backgroundColor = bgColor;
                  }
                } catch (e) {
                  document.documentElement.setAttribute("data-prefers-color", "light");
                  document.documentElement.style.backgroundColor = "#FFFFFF";
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
