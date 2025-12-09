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
  title: "Apron Design",
  description: "Apron Design Web Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
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
