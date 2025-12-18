"use client";
import Image from "next/image";
import { Row, Col, Link } from "@apron-design/react";
import { useState, useEffect } from "react";
import "./PageFooter.scss";

export function PageFooter() {
  const [isDark, setIsDark] = useState(false);
  const currentYear = new Date().getFullYear();

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

  return (
    <footer className="page-footer">
      {/* 第一块版心 */}
      <div className="page-footer-main">
        <Row gutter={40}>
          <Col span={8}>
            <div className="footer-info">
              <div className="footer-logo">
                <Image
                  src={isDark ? "/assets/images/logo-dark.svg" : "/assets/images/logo-light.svg"}
                  alt="Logo"
                  width={238}
                  height={50}
                  priority
                />
              </div>
              <div className="version">
                Version: 26.0.x
              </div>
              <div className="version-tips">
                <p>版本规则：</p>
                <p>Apron Design 今后每年更新一个大版本，将会以年份作为大版本号进行编号。</p>
                <p>请参阅 <Link href="/guide/versions">版本说明</Link> 了解版本号编码规则。</p>
              </div>
            </div>
            <div className="footer-company">北京按时下班科技有限公司 开源</div>
          </Col>
          <Col span={16}>
            <Row gutter={40}>
              <Col span={6}>
                <div className="footer-title">设计</div>
                <div className="footer-content">
                  {/* <Link href="/design/specifications">设计规范</Link> */}
                  <Link href="/design/principles">设计原则</Link>
                  <Link href="/design/color" target="_blank">标准色</Link>
                </div>
              </Col>
              <Col span={6}>
                <div className="footer-title">组件</div>
                <div className="footer-content">
                  <Link href="/react">React</Link>
                  <Link href="/vue-next">Vue3</Link>
                  <Link href="/miniprogram">微信小程序</Link>
                </div>
              </Col>
              <Col span={6}>
                <div className="footer-title">最佳实践</div>
                <div className="footer-content">
                  <Link href="/usage/best-practices">最佳实践</Link>
                  <Link href="/usage/icons">图标库</Link>
                  <Link href="/usage/codes">二维码/条形码</Link>
                  <Link href="/usage/media">音视频媒体</Link>
                  <Link href="/usage/recommends">推荐搭配</Link>
                  {/* <Link href="/palette" target="_blank">色彩配置工具</Link> */}
                </div>
              </Col>
              <Col span={6}>
                <div className="footer-title">资源和社区</div>
                <div className="footer-content">
                  <Link href="https://www.figma.com/design/jykh8vluIdbVHhS6LhQUJx/Apron-Design-System?node-id=0-1&p=f&t=XHRXp7fQo2tb5IVx-0" target="_blank">组件库 Figma 资源</Link>
                  <Link href="https://github.com/apron-design" target="_blank">Github</Link>
                  <Link href="https://github.com/apron-design/awesome-apron" target="_blank">Awesome Apron</Link>
                  <Link href="/guide/faq">常见问题</Link>
                  <Link href="/guide/changelog">更新日志</Link>
                  <Link href="/guide/feedback">反馈与建议</Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      {/* 第二块版心 */}
      <div className="page-footer-bottom">
        <div className="page-footer-copyright">
          &copy; Copyright Apron Design 2022~{currentYear}. Opensource by MIT.
        </div>
        <div className="page-footer-icp">
          京ICP备2022031289号
        </div>
      </div>
    </footer>
  );
}