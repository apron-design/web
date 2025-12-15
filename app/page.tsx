"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { PageFooter } from "@/components/PageFooter";
import { LogoLoop } from "@/components/LogoLoop";
import { TestimonialLoop } from "@/components/TestimonialLoop";
import { Window } from "@/components/Window";
import DotGrid from "@/components/DotGrid";
import Squares from "@/components/Squares";
import { Button, Space, message } from '@apron-design/react';
import { SectionTitle } from "@/components/SectionTitle";

import "./home.scss";

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isDark, setIsDark] = useState(false);
  const [isMiniProgramModalOpen, setIsMiniProgramModalOpen] = useState(false);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute("data-prefers-color");
      setIsDark(theme === "dark");
    };

    checkTheme();

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "data-prefers-color") {
          checkTheme();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-prefers-color"]
    });

    return () => observer.disconnect();
  }, []);

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

  // 关闭小程序预览modal
  const closeMiniProgramModal = () => {
    setIsMiniProgramModalOpen(false);
  };

  // 点击modal外部关闭
  const handleModalBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeMiniProgramModal();
    }
  };

  // 复制bash命令到剪贴板
  const copyToClipboard = async (text: string, element: HTMLElement) => {
    try {
      await navigator.clipboard.writeText(text);
      // 显示成功消息
      message.success('复制成功');
      
      // 更新按钮状态
      const button = element;
      const originalHTML = button.innerHTML;
      button.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8l3 3 7-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;
      button.classList.add('copied');
      
      // 2秒后恢复原始状态
      setTimeout(() => {
        button.innerHTML = originalHTML;
        button.classList.remove('copied');
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      message.error('复制失败');
    }
  };

  return (
    <div className="min-h-screen transition-colors" style={{ backgroundColor: 'var(--color-background)' }}>
      <PageHeader backgrounded={80} />
      
      {/* 第一屏：Hero 区域 */}
      <section className="hero">
        <DotGrid 
          dotSize={10}
          gap={30}
          baseColor={isDark ? "#131313" : "#eeeeee"}
          activeColor={isDark ? "#333333" : "#CCCCCC"}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}
        />
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="main">秩序之下 · 想象之上</h1>
            <h1>解构复杂 · 聚合光芒</h1>
            <div className="hero-tips">一套完全开源的 C 端组件库方案</div>
            <div className="hero-buttons">
              <Space>
                <Button variant="primary" onClick={() => window.location.href = '/guide/quick-start/'}>开始使用</Button>
                <Button variant="default" onClick={() => window.location.href = '/showcase'}>客户案例</Button>
              </Space>
            </div>
          </div>
          <div className="hero-window-container">
            <Window />
          </div>
        </div>
      </section>

      {/* 第二屏：Who are using 区域 */}
      <section className="who-are-using">
        <div className="who-are-using-container">
          <SectionTitle>谁在使用</SectionTitle>
          <LogoLoop
            logos={[
              { src: '/assets/who-are-using/apron.png', srcDark: '/assets/who-are-using/apron-dark.png', alt: 'Apron Design', name: 'Apron Design' } as any,
              { src: '/assets/who-are-using/davinci.png', srcDark: '/assets/who-are-using/davinci-dark.png', alt: 'Davinci', name: 'DAVINCI' } as any,
              { src: '/assets/who-are-using/envoy.png', srcDark: '/assets/who-are-using/envoy-dark.png', alt: 'Envoy', name: 'ENVOY' } as any,
              { src: '/assets/who-are-using/mitkimi.png', srcDark: '/assets/who-are-using/mitkimi-dark.png', alt: 'Mitkimi', name: '黑米说' } as any,
              { src: '/assets/who-are-using/music-hall.png', alt: 'Music Hall', name: '黑米说音乐厅' } as any,
              { src: '/assets/who-are-using/offontime.png', alt: 'Offontime', name: '按时下班' } as any,
              { src: '/assets/who-are-using/offshop.png', alt: 'Offshop', name: '下班小铺' } as any,
              { src: '/assets/who-are-using/panda.png', srcDark: '/assets/who-are-using/panda-dark.png', alt: 'Panda', name: 'Panda' } as any,
              { src: '/assets/who-are-using/serendipity.png', alt: 'Serendipity', name: 'Serendipity' } as any,
              { src: '/assets/who-are-using/soundpad.png', alt: 'Soundpad', name: 'SOUNDPAD' } as any,
              { src: '/assets/who-are-using/teleprompter.png', alt: 'Teleprompter', name: '提词器' } as any,
              { src: '/assets/who-are-using/tg.png', srcDark: '/assets/who-are-using/tg-dark.png', alt: 'TG', name: 'TG' } as any,
              { src: '/assets/who-are-using/yike-music.png', alt: 'Yike Music', name: '一刻乐谱' } as any,
            ]}
            speed={40}
            direction="left"
            logoHeight={148}
            gap={60}
            pauseOnHover={true}
            fadeOut={true}
            scaleOnHover={false}
            ariaLabel="合作伙伴 Logo"
            renderItem={(item: any, key) => (
              <div className="logo-card" key={key}>
                <div className="logo-image-container">
                  <Image
                    src={isDark && item.srcDark ? item.srcDark : item.src}
                    alt={item.alt}
                    className="logo-image"
                    width={148}
                    height={148}
                    draggable={false}
                  />
                </div>
                <div className="logo-name">{item.name}</div>
              </div>
            )}
          />
        </div>
      </section>

      {/* 设计屏 */}
      <section className="design-container">
        <div className="container">
          <SectionTitle>完善的 Figma 设计文件</SectionTitle>
          <div className="design-intro-container">
            <div className="design-intro">
              <div className="image-container">
                <Image src="/assets/images/figma.png" alt="Figma" fill />
              </div>
              <div className="design-title-text">Figma Design Files</div>
              <div className="design-content-text">我们使用 Figma 将设计原则和组件设计开源，了解 Apron Design 的设计思想，这里有包括全局色、文字、图标和布局的指南。</div>
            </div>
            <div className="figma-design-window">
              <div data-aos="fade-up-left" style={{ width: '100%', height: '100%', borderRadius: 8, overflow: 'hidden' }}>
                <Image src="/assets/images/figma-design-window.png" alt="Figma Design Window" fill />
              </div>
            </div>
          </div>
          <div className="design-keywords-container">
            <div className="design-keyword-item">
              <div className="keyword"><span style={{ color: "#393939" }}>A</span>greement</div>
              <div className="related-text">一致</div>
            </div>
            <div className="design-keyword-item">
              <div className="keyword"><span style={{ color: "#1BBA48" }}>P</span>eace</div>
              <div className="related-text">平和</div>
            </div>
            <div className="design-keyword-item">
              <div className="keyword"><span style={{ color: "#77BEFF" }}>R</span>ealizing</div>
              <div className="related-text">意识</div>
            </div>
            <div className="design-keyword-item">
              <div className="keyword"><span style={{ color: "#DDB527" }}>O</span>pen</div>
              <div className="related-text">开放</div>
            </div>
            <div className="design-keyword-item">
              <div className="keyword"><span style={{ color: "#C11717" }}>N</span>ecessity</div>
              <div className="related-text">必要</div>
            </div>
          </div>
        </div>
      </section>

      <section className="development-container">
        <SectionTitle>跨平台组件开发资源</SectionTitle>
        <div className="container development-features">
          <div className="feature-item">
            <div className="feature-title">React 组件库</div>
            <div className="feature-description">
              <p>React 组件库支持 React 16+ 版本，并且支持 Next。js 服务端渲染方案。</p>
              <p>目前已经完成了 40+ 组件，已经可以大部分支持 toC 场景的开发。</p>
            </div>
            <div className="feature-related">
              <div className="bash-container">
                npm i @apron-design/react -S
                <button 
                  className="copy-button"
                  onClick={(e) => copyToClipboard('npm i @apron-design/react -S', e.currentTarget)}
                  title="复制到剪贴板"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.5 2.5h-2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <rect x="6.5" y="1.5" width="7" height="9" rx="1" stroke="currentColor" stroke-width="1.5"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-title">Vue3 组件库</div>
            <div className="feature-description">
              <p>Vue 组件库支持 Vue3 版本，并且支持 Nuxt.js 服务端渲染方案。</p>
              <p>目前已经完成了 40+ 组件，已经可以大部分支持 toC 场景的开发。</p>
            </div>
            <div className="feature-related">
              <div className="bash-container">
                npm i @apron-design/vue-next -S
                <button 
                  className="copy-button"
                  onClick={(e) => copyToClipboard('npm i @apron-design/vue-next -S', e.currentTarget)}
                  title="复制到剪贴板"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.5 2.5h-2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <rect x="6.5" y="1.5" width="7" height="9" rx="1" stroke="currentColor" stroke-width="1.5"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-title">微信小程序组件库</div>
            <div className="feature-description">
              <p>微信小程序组件库支持原生开发，与 React 和 Vue 组件库使用相同的设计语言。</p>
              <p>目前已经完成了 40+ 组件，几乎涵盖微信小程序所有的使用场景。</p>
            </div>
            <div className="feature-related" style={{ display: 'flex', gap: 20 }}>
              <div style={{ width: 'calc((100% - 20px) / 2)' }}>
                <Button block variant="default" onClick={() => setIsMiniProgramModalOpen(true)}>小程序预览</Button>
              </div>
              <div style={{ width: 'calc((100% - 20px) / 2)' }}>
                <Button block variant="primary" onClick={() => window.location.href = '/guide/quick-start/'}>如何使用</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 推荐屏 */}
      <section className="recommend-users-container">
        <div className="recommend-background">
          <div className="half-background left-background">
            <Squares 
              direction="diagonal"
              speed={0.2}
              borderColor={isDark ? "#333" : "#e0e0e0"}
              squareSize={40}
              hoverFillColor={isDark ? "#1a1a1a" : "#f5f5f5"}
            />
          </div>
          <div className="half-background right-background"></div>
        </div>
        <div className="container recommend-container">
          <div className="half-container left-container">
            <SectionTitle align="left">和众多产品一起创造价值</SectionTitle>
            <div className="recommend-blocks-container">
              <div className="recommend-block">
                <div className="value">4000+</div>
                <div className="label">接入项目</div>
              </div>
              <div className="recommend-block">
                <div className="value">3w+</div>
                <div className="label">总下载量</div>
              </div>
            </div>
            <div className="recommend-buttons-container">
              <Space>
                <Button variant="primary" onClick={() => window.location.href = '/guide/quick-start/'}>开始使用</Button>
                <Button variant="default" onClick={() => window.location.href = '/showcase'}>客户案例</Button>
              </Space>
            </div>
          </div>
          <div className="half-container right-container">
            <TestimonialLoop
              testimonials={[
                {
                  quote: "ApronDesign 的组件设计非常精美，开箱即用的特性让我们的开发团队能够快速构建高质量的用户界面。组件库的 TypeScript 支持完善，类型定义清晰准确，大大提升了我们的开发效率和代码质量。",
                  name: "田昊天",
                  company: "按时下班",
                  role: "developer"
                },
                {
                  quote: "设计系统非常完善，组件的一致性做得很好，从基础组件到复杂的业务组件都遵循统一的设计语言。这为我们的产品提供了统一的视觉体验，也让设计师和开发者之间的协作变得更加高效顺畅。",
                  name: "史林海",
                  company: "OPPO",
                  role: "designer"
                },
                {
                  quote: "文档详细且易于理解，API 设计合理直观，上手非常快。无论是新手还是经验丰富的开发者都能快速掌握。组件的可定制性强，能够很好地适配各种业务场景，强烈推荐给所有前端开发者。",
                  name: "孙永豪",
                  company: "达芬奇",
                  role: "developer"
                },
                {
                  quote: "深色模式适配完美，每个组件在明暗主题下都有精心设计的视觉表现。组件库的主题系统设计得非常灵活，支持自定义主题色和设计令牌，让我们能够轻松打造符合品牌调性的产品界面。",
                  name: "刘丹阳",
                  company: "美团",
                  role: "designer"
                },
                {
                  quote: "性能优异，组件渲染速度快，即使在复杂的页面场景下也能保持流畅的用户体验。虚拟滚动、懒加载等优化手段的运用恰到好处，完全满足我们对高性能应用的业务需求。",
                  name: "聂玉坤",
                  company: "一刻乐谱",
                  role: "developer"
                },
                {
                  quote: "可访问性做得很好，所有组件都符合 WCAG 标准，支持键盘导航和屏幕阅读器。这不仅体现了技术的专业性，更展现了开发团队对用户体验和社会责任的重视，是一个真正有温度的设计系统。",
                  name: "张磊",
                  company: "Envoy",
                  role: "designer"
                },
                {
                  quote: "组件库的响应式设计非常出色，无论是桌面端还是移动端都能提供一致的用户体验。布局系统灵活且强大，让我们能够轻松实现各种复杂的界面需求，大大减少了开发时间和维护成本。",
                  name: "潘钧挺",
                  company: "Panda",
                  role: "developer"
                }
              ]}
              speed={50}
              direction="up"
              gap={12}
              pauseOnHover={true}
            />
          </div>
        </div>
      </section>

      <PageFooter />

      {/* 小程序预览 Modal */}
      {isMiniProgramModalOpen && (
        <div className="mini-program-modal-backdrop" onClick={handleModalBackdropClick}>
          <div className="mini-program-modal">
            <div className="mini-program-modal-header">
              <h3>微信小程序预览</h3>
              <button className="mini-program-modal-close" onClick={closeMiniProgramModal}>
                ×
              </button>
            </div>
            <div className="mini-program-modal-content">
              <div className="mini-program-qrcode">
                <Image 
                  src="/miniprogram-code.jpg" 
                  alt="微信小程序预览码" 
                  width={200} 
                  height={200} 
                />
              </div>
              <p className="mini-program-modal-tip">
                使用微信扫描此太阳码预览组件库
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}