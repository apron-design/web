"use client";

import "./PageFooter.scss";

export function PageFooter() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="page-footer">
      {/* 第一块版心 */}
      <div className="page-footer-main">
        {/* 内容待添加 */}
      </div>

      {/* 第二块版心 */}
      <div className="page-footer-bottom">
        <div className="page-footer-copyright">
          &copy; Copyright Apron Design 2022~{currentYear}. Opensource by MIT.
        </div>
        <div className="page-footer-icp">
          京ICP备12345678号-15
        </div>
      </div>
    </footer>
  );
}
