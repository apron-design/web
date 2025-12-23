"use client";

import { PageHeader } from "@/components/PageHeader";
import { PageFooter } from "@/components/PageFooter";
import Image from "next/image";
import styles from "./page.module.scss";

// 勾选图标组件
const CheckIcon = () => (
  <svg 
    className={styles.checkIcon}
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 20 20" 
    fill="currentColor"
    aria-hidden="true"
  >
    <path 
      fillRule="evenodd" 
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
      clipRule="evenodd" 
    />
  </svg>
);

// 特性卡片组件
const FeatureCard = ({ emoji, title, description }: { emoji: string; title: string; description: string }) => (
  <article className={styles.featureCard}>
    <div className={styles.featureEmoji} role="img" aria-label={title}>{emoji}</div>
    <h3 className={styles.featureTitle}>{title}</h3>
    <p className={styles.featureDescription}>{description}</p>
  </article>
);

// 功能列表项组件
const FeatureListItem = ({ children }: { children: React.ReactNode }) => (
  <li className={styles.featureListItem}>
    <CheckIcon />
    <span>{children}</span>
  </li>
);

export default function Miniprogram() {
  return (
    <div className={styles.container}>
      <PageHeader />
      
      <main className={styles.main}>
        <div className={styles.contentWrapper}>
          {/* 标题区域 */}
          <header className={styles.header}>
            <h1>微信小程序组件库</h1>
            <p>
              专为微信小程序设计的组件库，与 React 和 Vue 版本保持一致的设计语言和用户体验
            </p>
          </header>
          
          {/* 开发中提示 */}
          <div className={styles.alertWrapper}>
            <aside 
              className={styles.alert}
              role="alert"
              aria-live="polite"
            >
              <div className={styles.alertContent}>
                <div className={styles.alertText}>
                  <h2>开发中</h2>
                  <p>
                    微信小程序组件库目前正在积极开发中，预计将在近期发布。请关注我们的更新以获取最新进展。
                  </p>
                </div>
              </div>
            </aside>
          </div>
          
          {/* 二维码展示 */}
          <section className={styles.qrcodeSection}>
            <div className={styles.qrcodeWrapper}>
              <Image 
                src="/miniprogram-code.jpg" 
                alt="微信小程序二维码，扫描预览组件效果"
                width={300}
                height={300}
                priority
              />
            </div>
            <p className={styles.qrcodeCaption}>
              扫描二维码在微信中预览小程序组件效果
            </p>
          </section>
          
          {/* 核心特性 */}
          <section className={styles.featuresSection}>
            <div className={styles.featuresGrid}>
              <FeatureCard 
                emoji="📱"
                title="原生支持"
                description="专为微信小程序原生开发环境设计，无需额外适配"
              />
              <FeatureCard 
                emoji="🎨"
                title="设计一致"
                description="与 React 和 Vue 版本保持一致的设计语言和用户体验"
              />
              <FeatureCard 
                emoji="⚡"
                title="性能优化"
                description="针对小程序环境进行性能优化，确保流畅的用户体验"
              />
            </div>
          </section>
          
          {/* 功能特性 */}
          <section className={styles.featureListSection}>
            <h2>功能特性</h2>
            <div className={styles.featureListWrapper}>
              <ul className={styles.featureList}>
                <FeatureListItem>40+ 常用组件</FeatureListItem>
                <FeatureListItem>深色模式支持</FeatureListItem>
                <FeatureListItem>响应式设计</FeatureListItem>
                <FeatureListItem>详细的文档和示例</FeatureListItem>
                <FeatureListItem>TypeScript 支持</FeatureListItem>
                <FeatureListItem>可访问性支持</FeatureListItem>
              </ul>
            </div>
          </section>
          
          {/* 行动号召 */}
          <section className={styles.ctaSection}>
            <a 
              href="mailto:contact@apron.design" 
              className={styles.ctaButton}
              aria-label="发送邮件获取最新进展通知"
            >
              获取最新进展通知
            </a>
            <p className={styles.ctaCaption}>
              留下您的邮箱，我们将在小程序组件库发布时第一时间通知您
            </p>
          </section>
        </div>
      </main>
      
      <PageFooter />
    </div>
  );
}