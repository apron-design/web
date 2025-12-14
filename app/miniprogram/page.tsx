"use client";

import { PageHeader } from "@/components/PageHeader";
import { PageFooter } from "@/components/PageFooter";
import Image from "next/image";

export default function Miniprogram() {
  return (
    <div className="min-h-screen">
      <PageHeader />
      
      <section className="py-20">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-6">微信小程序组件库</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            专为微信小程序设计的组件库，与 React 和 Vue 版本保持一致的设计语言和用户体验
          </p>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 mb-12 inline-block max-w-2xl">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">开发中</h3>
                <p className="text-yellow-700 dark:text-yellow-300">
                  微信小程序组件库目前正在积极开发中，预计将在近期发布。请关注我们的更新以获取最新进展。
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <div className="relative mx-auto" style={{ width: '300px', height: '300px' }}>
              <Image 
                src="/miniprogram-code.jpg" 
                alt="微信小程序二维码" 
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              扫描二维码在微信中预览小程序组件效果
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2">原生支持</h3>
              <p className="text-gray-600 dark:text-gray-300">
                专为微信小程序原生开发环境设计，无需额外适配
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2">设计一致</h3>
              <p className="text-gray-600 dark:text-gray-300">
                与 React 和 Vue 版本保持一致的设计语言和用户体验
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">性能优化</h3>
              <p className="text-gray-600 dark:text-gray-300">
                针对小程序环境进行性能优化，确保流畅的用户体验
              </p>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">功能特性</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 max-w-4xl mx-auto text-left">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  40+ 常用组件
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  深色模式支持
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  响应式设计
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  详细的文档和示例
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  TypeScript 支持
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  可访问性支持
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16">
            <a 
              href="mailto:contact@apron.design" 
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
            >
              获取最新进展通知
            </a>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              留下您的邮箱，我们将在小程序组件库发布时第一时间通知您
            </p>
          </div>
        </div>
      </section>
      
      <PageFooter />
    </div>
  );
}