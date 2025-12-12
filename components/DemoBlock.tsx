"use client";

import { useState, useEffect, ReactElement } from "react";
import { MarkdownRenderer } from "./MarkdownRenderer";
import * as ApronComponents from '@apron-design/react';
import { transform } from '@babel/standalone';
import './DemoBlock.scss';

interface DemoBlockProps {
  componentCode: string;
}

export function DemoBlock({ componentCode }: DemoBlockProps) {
  const [expanded, setExpanded] = useState(false);
  const [renderedComponent, setRenderedComponent] = useState<ReactElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  // 执行代码并渲染组件
  useEffect(() => {
    try {
      // 创建一个包含所有 apron-design 组件的安全环境
      const safeEnv = {
        React: require('react'),
        useState: require('react').useState,
        ...ApronComponents
      };

      // 移除 import 语句，因为在安全环境中已经提供了所有组件
      const cleanedCode = componentCode.replace(/import\s+.*?from\s+['"][^'"]*['"];?/g, '');

      // 使用 Babel 转译 JSX 代码
      const babelResult = transform(cleanedCode, {
        presets: [['react', { runtime: 'classic' }]],
        filename: 'demo.jsx'
      });

      const transformedCode = babelResult.code || '';

      // 创建一个函数来执行代码
      const executeFn = new Function(
        ...Object.keys(safeEnv),
        `
        "use strict";
        ${transformedCode.replace(/export\s+default\s+/, 'return ')}
        `
      );
      
      // 执行代码并获取组件
      const Component = executeFn(...Object.values(safeEnv));
      
      // 渲染组件
      if (typeof Component === 'function') {
        // 如果是函数组件，创建实例
        setRenderedComponent(<Component />);
      } else if (Component && typeof Component === 'object') {
        // 如果是 JSX 元素，直接使用
        setRenderedComponent(Component);
      } else {
        // 默认显示
        setRenderedComponent(<div>组件演示区域</div>);
      }
      
      setError(null);
    } catch (err) {
      console.error('执行代码时出错:', err);
      // 提供更友好的错误信息
      let errorMessage = '组件渲染失败';
      if (err instanceof Error) {
        // 如果是 Babel 转译错误，提供更具体的错误信息
        if (err.message.includes('Expected corresponding JSX closing tag')) {
          errorMessage = 'JSX 语法错误：标签未正确闭合，请检查代码中的开始标签和结束标签是否匹配';
        } else {
          errorMessage = `组件渲染失败: ${err.message}`;
        }
      }
      setError(errorMessage);
      setRenderedComponent(null);
    }
  }, [componentCode]);

  const toggleCode = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="demo-block">
      {/* 组件演示区域 - 直接渲染组件 */}
      <div className="demo-preview">
        {error ? (
          <div className="demo-error">{error}</div>
        ) : renderedComponent ? (
          renderedComponent
        ) : (
          <div>正在加载组件...</div>
        )}
      </div>
      
      {/* 代码展示区域 */}
      <div className="demo-code-section">
        <div className="demo-code-toggle" onClick={toggleCode}>
          {/* 使用 code.svg 图标 */}
          <img 
            src="/assets/icons/code.svg" 
            alt="code" 
            className="demo-code-icon"
            width="16"
            height="16"
          />
        </div>
        
        {expanded && (
          <div className="demo-code-content">
            <MarkdownRenderer content={`\`\`\`tsx\n${componentCode}\n\`\`\``} />
          </div>
        )}
      </div>
    </div>
  );
}