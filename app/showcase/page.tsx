"use client";

import { PageHeader } from "@/components/PageHeader";
import { PageFooter } from "@/components/PageFooter";
import { SectionTitle } from "@/components/SectionTitle";

export default function Showcase() {
  return (
    <div className="min-h-screen">
      <PageHeader />
      
      <section className="py-20">
        <div className="container">
          <SectionTitle>客户案例</SectionTitle>
          <div className="text-center max-w-3xl mx-auto mt-8">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              以下是一些使用 Apron Design 构建的优秀产品案例。这些产品来自不同的行业和领域，
              但都选择了 Apron Design 作为其 UI 组件库，以提供一致且高质量的用户体验。
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 案例 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-gray-400">产品截图</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">按时下班</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  一款专注于提高工作效率的时间管理工具，帮助用户更好地规划工作时间。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                    移动端
                  </span>
                </div>
              </div>
            </div>
            
            {/* 案例 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-gray-400">产品截图</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">一刻乐谱</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  专业的音乐学习平台，提供丰富的乐谱资源和在线练习功能。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                    Vue3
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">
                    教育
                  </span>
                </div>
              </div>
            </div>
            
            {/* 案例 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-gray-400">产品截图</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">黑米说</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  内容创作平台，为创作者提供便捷的内容发布和管理工具。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">
                    内容平台
                  </span>
                </div>
              </div>
            </div>
            
            {/* 案例 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-gray-400">产品截图</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Panda</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  社交电商平台，连接消费者与优质商品，提供便捷的购物体验。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                    Vue3
                  </span>
                  <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full text-sm">
                    电商
                  </span>
                </div>
              </div>
            </div>
            
            {/* 案例 5 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-gray-400">产品截图</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Envoy</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  企业级协作工具，提升团队沟通效率和项目管理水平。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm">
                    SaaS
                  </span>
                </div>
              </div>
            </div>
            
            {/* 案例 6 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-gray-400">产品截图</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">DAVINCI</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  创意设计工具平台，为设计师提供强大的创作能力和素材资源。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                    Vue3
                  </span>
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">
                    设计工具
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">想要展示您的产品？</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              如果您也在使用 Apron Design 构建产品，欢迎联系我们提交您的案例。
              我们很乐意在首页和此页面展示您的作品。
            </p>
            <a 
              href="mailto:contact@apron.design" 
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              联系我们
            </a>
          </div>
        </div>
      </section>
      
      <PageFooter />
    </div>
  );
}