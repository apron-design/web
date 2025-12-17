"use client";

import React, { useState, useEffect, ReactElement, useRef, ComponentType } from "react";
import { MarkdownRenderer } from "./MarkdownRenderer";
import * as ApronReactComponents from '@apron-design/react';
import * as ApronVueComponents from '@apron-design/vue-next';
import * as CodeApronReactComponents from '@code-apron/react';


import { transform } from '@babel/standalone';
import './DemoBlock.scss';

interface DemoBlockProps {
  componentCode: string;
}

interface VueAppRef {
  unmount: () => void;
}

export function DemoBlock({ componentCode }: DemoBlockProps) {
  const [expanded, setExpanded] = useState(false);
  const [renderedComponent, setRenderedComponent] = useState<ReactElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const vueContainerRef = useRef<HTMLDivElement>(null);
  const vueAppRef = useRef<VueAppRef | null>(null);
  const isClientRef = useRef(false);

  // 检查是否在客户端环境
  useEffect(() => {
    isClientRef.current = true;
    return () => {
      isClientRef.current = false;
    };
  }, []);

  // 处理 React 代码
  const renderReactComponent = (code: string): ReactElement | null => {
    try {
      // 创建一个包含所有 apron-design React 组件和 code-apron React 组件的安全环境
      const safeEnv = {
        React,
        useState,
        ...ApronReactComponents,
        ...CodeApronReactComponents
      };

      // 移除 import 语句，因为在安全环境中已经提供了所有组件
      const cleanedCode = code.replace(/import\s+.*?from\s+['"][^'"]*['"];?/g, '');

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
        return <Component />;
      } else if (Component && typeof Component === 'object') {
        // 如果是 JSX 元素，直接使用
        return Component;
      } else {
        // 默认显示
        return <div>组件演示区域</div>;
      }
    } catch (err) {
      throw err;
    }
  };

  // 处理 Vue 代码
  const renderVueComponent = (code: string): ReactElement => {
    // 清理之前的 Vue 应用
    if (vueAppRef.current) {
      vueAppRef.current.unmount();
      vueAppRef.current = null;
    }

    // 返回一个包含 ref 的 React 元素，用于挂载 Vue 应用
    // 确保容器样式不会阻止 Portal/Teleport 渲染
    return (
      <div 
        ref={vueContainerRef} 
        className="demo-vue-container"
        style={{ position: 'relative', zIndex: 1 }}
      />
    );
  };



  // 挂载 Vue 组件
  const mountVueComponent = async (code: string) => {
    // 确保只在客户端执行
    if (typeof window === 'undefined' || !isClientRef.current) {
      return;
    }

    if (!vueContainerRef.current) {
      setError('Vue 容器未就绪');
      return;
    }

    try {
      // 动态导入完整的 Vue 运行时以支持模板编译
      // @ts-expect-error TS7016: Could not find a declaration file for module
      const vueModule = await import('vue/dist/vue.esm-bundler.js');
      const { createApp, ref } = vueModule;
      
      // 动态导入 @code-apron/vue-next 组件
      // 由于该包的构建文件使用了 require('./AdBarcode.vue')，在浏览器中无法直接工作
      // 我们尝试使用静态导入，让 Turbopack 在构建时处理（即使包有构建问题）
      let CodeApronVueComponents: any = {};
      
      // 由于包的构建文件问题，我们暂时无法在运行时动态加载
      // 包的 dist/index.es.js 使用了 require('./AdBarcode.vue')，这在浏览器中无法工作
      // 暂时跳过加载，等待包的构建配置修复
      
      // TODO: 修复包的构建配置后，可以尝试以下方式加载：
      // const codeApronModule = await import('@code-apron/vue-next');
      // CodeApronVueComponents = codeApronModule;
      
      if (process.env.NODE_ENV === 'development') {
        console.warn('@code-apron/vue-next is not loaded due to build issues. The package uses require() for .vue files which cannot work in browser. Components from this package (like ad-barcode) will not be available.');
      }
      
      // 动态加载样式文件
      const loadStyles = () => {
        return new Promise<void>((resolve) => {
          if (typeof document !== 'undefined') {
            let loadedCount = 0;
            const totalStyles = 2;
            const checkResolve = () => {
              loadedCount++;
              if (loadedCount >= totalStyles) {
                resolve();
              }
            };
            
            // 加载 @apron-design/vue-next 样式
            const existingApronLink = document.querySelector('link[href*="@apron-design/vue-next"]');
            if (!existingApronLink) {
              const apronLink = document.createElement('link');
              apronLink.rel = 'stylesheet';
              apronLink.href = 'https://unpkg.com/@apron-design/vue-next@21.0.1/dist/index.css';
              apronLink.onload = () => checkResolve();
              apronLink.onerror = () => checkResolve();
              document.head.appendChild(apronLink);
            } else {
              checkResolve();
            }
            
            // 加载 @code-apron/vue-next 样式
            const existingCodeApronLink = document.querySelector('link[href*="@code-apron/vue-next"]');
            if (!existingCodeApronLink) {
              const codeApronLink = document.createElement('link');
              codeApronLink.rel = 'stylesheet';
              codeApronLink.href = 'https://unpkg.com/@code-apron/vue-next@latest/dist/index.css';
              codeApronLink.onload = () => checkResolve();
              codeApronLink.onerror = () => checkResolve();
              document.head.appendChild(codeApronLink);
            } else {
              checkResolve();
            }
          } else {
            resolve();
          }
        });
      };
      
      // 等待样式加载完成
      await loadStyles();
      
      // 提取模板部分
      // 需要匹配最外层的 <template> 标签，而不是内部的 <template #slot> 标签
      // 使用更智能的匹配：找到第一个 <template>，然后找到最后一个对应的 </template>
      const templateStart = code.indexOf('<template>');
      if (templateStart === -1) {
        setError('未找到 <template> 标签');
        return;
      }
      
      // 从后往前找最后一个 </template>，确保匹配最外层的标签
      const templateEnd = code.lastIndexOf('</template>');
      if (templateEnd === -1) {
        setError('未找到 </template> 结束标签');
        return;
      }
      
      // 提取模板内容（去掉最外层的 <template> 和 </template> 标签）
      const templateContent = code.slice(templateStart + '<template>'.length, templateEnd).trim();
      
      // 提取 script 部分
      const scriptMatch = code.match(/<script setup>([\s\S]*?)<\/script>/);
      let scriptCode = '';
      if (scriptMatch) {
        scriptCode = scriptMatch[1];
      }
      
      // 清空容器
      vueContainerRef.current.innerHTML = '';
      
      // 创建 Vue 应用配置
      const appConfig: Record<string, unknown> = {};
      
      // 如果有 script 代码，则添加 setup 函数
      if (scriptCode) {
        // 移除 import 语句
        const cleanScriptCode = scriptCode.replace(/import\s+.*?from\s+['"][^'"]*['"];?/g, '');
        
        // 在 appConfig 中添加 setup 函数
        appConfig.setup = () => {
          try {
            // 创建一个包含 Vue API 的环境
            const vueEnv = { ref };
            
            // 创建一个函数来执行脚本并返回结果
            const scriptExecutor = new Function(
              ...Object.keys(vueEnv),
              `
                "use strict";
                ${cleanScriptCode}
                // 返回所有定义的变量
                return {
                  ${cleanScriptCode.match(/(?:const|let|var)\s+(\w+)/g)?.map(match => {
                    const varName = match.split(/\s+/)[1];
                    return `${varName}`;
                  }).join(',\n                  ') || ''}
                };
              `
            );
            
            // 执行脚本并返回结果
            return scriptExecutor(...Object.values(vueEnv));
          } catch (err) {
            console.error('Vue script execution error:', err);
            return {};
          }
        };
      } else {
        // 即使没有 script 代码，也需要一个 setup 函数来注入 $message
        appConfig.setup = () => {
          return {};
        };
      }
      
      // 添加模板
      // Vue 3 支持多个根节点，但如果模板只有一个根元素，直接使用可以避免额外的包装
      // 命名插槽语法 #name（v-slot:name 的简写）应该能被 Vue 3 的模板编译器正确处理
      // 直接使用模板内容，让 Vue 3 的编译器处理命名插槽
      appConfig.template = templateContent;
      
      // 创建 Vue 应用
      const app = createApp(appConfig);
      
      // 注册所有 Apron Vue 组件
      const registeredComponents: string[] = [];
      Object.keys(ApronVueComponents).forEach(key => {
        const component = ApronVueComponents[key as keyof typeof ApronVueComponents];
        
        // 注册驼峰命名的组件
        app.component(key, component);
        registeredComponents.push(key);
        
        // 同时注册短横线命名的组件（修正首字母大写的处理）
        const kebabName = key.replace(/([A-Z])/g, (match, p1, offset) => {
          return (offset > 0 ? '-' : '') + p1.toLowerCase();
        });
        app.component(kebabName, component);
        registeredComponents.push(kebabName);
        
        // 为 AdPopoverConfirm 添加 ad-popconfirm 别名（文档中使用的名称）
        if (key === 'AdPopoverConfirm') {
          app.component('ad-popconfirm', component);
          registeredComponents.push('ad-popconfirm');
        }
        
        // 为 AdPopover 确保注册为 ad-popover（虽然转换应该已经正确，但确保一下）
        if (key === 'AdPopover') {
          app.component('ad-popover', component);
          if (!registeredComponents.includes('ad-popover')) {
            registeredComponents.push('ad-popover');
          }
        }
      });
      
      // 注册 @code-apron/vue-next 组件
      if (CodeApronVueComponents && Object.keys(CodeApronVueComponents).length > 0) {
        if (process.env.NODE_ENV === 'development') {
          console.log('CodeApronVueComponents loaded:', Object.keys(CodeApronVueComponents));
        }
        
        Object.keys(CodeApronVueComponents).forEach(key => {
          try {
            const component = CodeApronVueComponents[key as keyof typeof CodeApronVueComponents];
            
            // 跳过非组件导出（如函数、常量等）
            if (!component || typeof component !== 'object') {
              return;
            }
            
            // 检查是否是 Vue 组件（有 setup、name、__name 等属性）
            const isVueComponent = 'setup' in component || 'name' in component || '__name' in component || 'render' in component;
            if (!isVueComponent) {
              return;
            }
            
            // 注册驼峰命名的组件
            app.component(key, component);
            if (!registeredComponents.includes(key)) {
              registeredComponents.push(key);
            }
            
            // 同时注册短横线命名的组件
            const kebabName = key.replace(/([A-Z])/g, (match, p1, offset) => {
              return (offset > 0 ? '-' : '') + p1.toLowerCase();
            });
            app.component(kebabName, component);
            if (!registeredComponents.includes(kebabName)) {
              registeredComponents.push(kebabName);
            }
            
            if (process.env.NODE_ENV === 'development') {
              console.log(`Registered CodeApron component: ${key} -> ${kebabName}`);
            }
          } catch (err) {
            // 忽略注册失败的组件
            if (process.env.NODE_ENV === 'development') {
              console.warn(`Failed to register component ${key}:`, err);
            }
          }
        });
      } else {
        if (process.env.NODE_ENV === 'development') {
          console.warn('CodeApronVueComponents is empty or not loaded');
        }
      }
      
      // 检查 popover 和 popconfirm 是否已注册
      if (process.env.NODE_ENV === 'development') {
        const hasPopover = registeredComponents.some(name => 
          name.toLowerCase().includes('popover') && !name.toLowerCase().includes('confirm')
        );
        const hasPopconfirm = registeredComponents.some(name => 
          name.toLowerCase().includes('popconfirm') || name.toLowerCase() === 'ad-popconfirm'
        );
        console.log('Popover/Popconfirm components check:', {
          hasPopover,
          hasPopconfirm,
          registeredComponents: registeredComponents.filter(name => 
            name.toLowerCase().includes('pop')
          ),
          allComponents: Object.keys(ApronVueComponents).filter(k => 
            k.toLowerCase().includes('pop')
          )
        });
      }
      
      // 确保 Teleport 功能可用（Vue 3 的 Teleport 用于 Portal 渲染）
      // popover 和 popconfirm 需要通过 Teleport 渲染到 body
      // Vue 3 的运行时已经包含了 Teleport 支持，无需额外配置
      
      // 配置 $message 全局方法
      // 检查 ApronVueComponents 中是否有 message 相关的导出
      const allKeys = Object.keys(ApronVueComponents);
      const messageKeys = allKeys.filter(key => 
        key.toLowerCase().includes('message') || key === 'Message' || key === 'useMessage'
      );
      
      // 尝试多种可能的导出名称
      const possibleMessageNames = ['message', 'Message', 'useMessage', 'AdMessage', 'adMessage'];
      let messageInstance = null;
      
      for (const name of possibleMessageNames) {
        if (name in ApronVueComponents) {
          const exported = (ApronVueComponents as any)[name];
          if (exported) {
            // 如果是一个函数，尝试调用它
            if (typeof exported === 'function') {
              try {
                messageInstance = exported();
              } catch (e) {
                // 如果调用失败，可能它本身就是要使用的对象
                messageInstance = exported;
              }
            } else {
              messageInstance = exported;
            }
            break;
          }
        }
      }
      
      // 如果找到了 message 实例，配置为全局属性
      if (messageInstance) {
        app.config.globalProperties.$message = messageInstance;
        // 在开发模式下输出调试信息
        if (process.env.NODE_ENV === 'development') {
          console.log('$message configured:', messageInstance);
        }
      } else {
        // 如果找不到，输出所有可用的导出以便调试
        if (process.env.NODE_ENV === 'development') {
          console.warn('$message not found in ApronVueComponents. Available exports:', allKeys);
        }
      }
      
      // 挂载应用
      vueAppRef.current = app as unknown as VueAppRef;
      
      // 在挂载前，确保容器存在且可见
      if (!vueContainerRef.current) {
        setError('Vue 容器未就绪');
        return;
      }
      
      // 挂载 Vue 应用
      app.mount(vueContainerRef.current);
      
      // 检查挂载是否成功（开发模式下）
      if (process.env.NODE_ENV === 'development') {
        // 检查组件是否已注册（通过尝试获取组件定义）
        const checkComponent = (name: string) => {
          try {
            // 尝试通过应用实例检查组件
            const component = (app as any)._context?.components?.[name];
            return !!component;
          } catch {
            return false;
          }
        };
        
        // 检查关键组件是否已注册
        const popoverRegistered = checkComponent('ad-popover') || checkComponent('AdPopover');
        const popconfirmRegistered = checkComponent('ad-popconfirm') || checkComponent('ad-popover-confirm') || checkComponent('AdPopoverConfirm');
        
        // 检查模板中使用的组件名称
        const templateUsesPopover = templateContent.includes('ad-popover') && !templateContent.includes('ad-popconfirm');
        const templateUsesPopconfirm = templateContent.includes('ad-popconfirm');
        
        console.log('Vue app mounted successfully', {
          container: vueContainerRef.current,
          popoverRegistered,
          popconfirmRegistered,
          templateUsesPopover,
          templateUsesPopconfirm,
          registeredComponents: registeredComponents.filter(name => 
            name.toLowerCase().includes('popover') || name.toLowerCase().includes('popconfirm')
          ),
          componentCheck: {
            'ad-popover': checkComponent('ad-popover'),
            'AdPopover': checkComponent('AdPopover'),
            'ad-popconfirm': checkComponent('ad-popconfirm'),
            'ad-popover-confirm': checkComponent('ad-popover-confirm'),
            'AdPopoverConfirm': checkComponent('AdPopoverConfirm')
          },
          popoverRegistered,
          popconfirmRegistered
        });
      }
      
      setError(null);
    } catch (err) {
      const errorMessage = err instanceof Error ? `Vue 组件渲染失败: ${err.message}` : 'Vue 组件渲染失败';
      setError(errorMessage);
      console.error('Vue component mount error:', err);
      // 输出模板内容以便调试
      console.error('Template content:', templateContent);
    }
  };

  // 执行代码并渲染组件
  useEffect(() => {
    const renderComponent = async () => {
      try {
        // 清除之前的错误
        setError(null);
        
        // 检查代码是 React 还是 Vue
        const isVueCode = componentCode.includes('<template>') || componentCode.includes('vue') || componentCode.includes('Vue');

        if (isVueCode) {
          // Vue 代码处理
          setRenderedComponent(renderVueComponent(componentCode));
        } else {
          // React 代码处理
          try {
            const component = renderReactComponent(componentCode);
            setRenderedComponent(component);
          } catch (err) {
            const errorMessage = err instanceof Error ? `组件渲染失败: ${err.message}` : '组件渲染失败';
            setError(errorMessage);
            setRenderedComponent(null);
          }
        }
      } catch (err) {
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
    };

    renderComponent();
  }, [componentCode]);

  // 挂载 Vue 组件的副作用
  useEffect(() => {
    // 确保只在客户端执行
    if (typeof window === 'undefined') {
      return;
    }
    
    const isVueCode = componentCode.includes('<template>') || componentCode.includes('vue') || componentCode.includes('Vue');
          
    // 延迟执行 Vue 组件挂载，确保 DOM 已经渲染
    const timer = setTimeout(() => {
      if (isVueCode && vueContainerRef.current) {
        mountVueComponent(componentCode);
      } else if (isVueCode) {
        setError('Vue 容器未就绪，请稍后重试');
      }
    }, 100);
    
    return () => {
      clearTimeout(timer);
      // 清理 Vue 应用
      if (vueAppRef.current) {
        vueAppRef.current.unmount();
        vueAppRef.current = null;
      }
    };
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