"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { PageHeader } from "@/components/PageHeader";
import { PageFooter } from "@/components/PageFooter";
import { LogoLoop } from "@/components/LogoLoop";

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <div className="min-h-screen transition-colors" style={{ backgroundColor: 'var(--color-background)' }}>
      <PageHeader />
      
      {/* 第一屏：Hero 区域 */}
      <section className="hero" style={{ height: '720px' }}>
        {/* 先留空 */}
      </section>

      {/* 第二屏：Who is using 区域 */}
      <section className="who-is-using" style={{ height: '354px', paddingTop: '60px', paddingBottom: '60px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 20px', height: '100%' }}>
          <LogoLoop
            logos={[
              // 示例 logo，可以根据实际需求替换
              { src: '/assets/images/logo-light.svg', alt: 'Logo 1' },
              { src: '/assets/images/logo-light.svg', alt: 'Logo 2' },
              { src: '/assets/images/logo-light.svg', alt: 'Logo 3' },
              { src: '/assets/images/logo-light.svg', alt: 'Logo 4' },
              { src: '/assets/images/logo-light.svg', alt: 'Logo 5' },
            ]}
            speed={120}
            direction="left"
            logoHeight={40}
            gap={48}
            pauseOnHover={true}
            fadeOut={true}
            scaleOnHover={true}
            ariaLabel="合作伙伴 Logo"
          />
        </div>
      </section>

      {/* 原有内容保留在下方 */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <h1
            ref={titleRef}
            className="text-5xl font-bold text-slate-900 dark:text-slate-50"
            data-aos="fade-up"
          >
            Apron Design
          </h1>
          <p
            className="text-xl text-slate-600 dark:text-slate-400"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Next.js SSR 静态导出项目
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div
              className="p-6 bg-white dark:bg-black rounded-lg shadow-lg dark:shadow-none dark:border dark:border-white/10"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-lg font-semibold mb-2">Apron Design</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                组件库已安装
              </p>
            </div>

            <div
              className="p-6 bg-white dark:bg-black rounded-lg shadow-lg dark:shadow-none dark:border dark:border-white/10"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3 className="text-lg font-semibold mb-2">AOS</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                滚动动画库已配置
              </p>
            </div>

            <div
              className="p-6 bg-white dark:bg-black rounded-lg shadow-lg dark:shadow-none dark:border dark:border-white/10"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h3 className="text-lg font-semibold mb-2">GSAP</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                动画库已集成
              </p>
            </div>

            <div
              className="p-6 bg-white dark:bg-black rounded-lg shadow-lg dark:shadow-none dark:border dark:border-white/10"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h3 className="text-lg font-semibold mb-2">shadcn/ui</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                UI 组件库已配置
              </p>
            </div>
          </div>

          <div
            className="mt-12 p-8 bg-white dark:bg-black rounded-lg shadow-lg dark:shadow-none dark:border dark:border-white/10"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <h2 className="text-2xl font-semibold mb-4">项目信息</h2>
            <ul className="text-left space-y-2 text-slate-600 dark:text-slate-400">
              <li>✓ Next.js SSR 静态导出已配置</li>
              <li>✓ 运行端口: 7999</li>
              <li>✓ 所有依赖已安装</li>
              <li>✓ TypeScript 支持</li>
              <li>✓ Tailwind CSS v4 已配置</li>
            </ul>
          </div>
        </div>
      </main>

      <PageFooter />
    </div>
  );
}
