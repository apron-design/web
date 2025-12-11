'use client';

import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import bash from 'highlight.js/lib/languages/bash';
import json from 'highlight.js/lib/languages/json';
import { FloatingToc } from '@/components/FloatingToc';
import './MarkdownRenderer.scss';

// Register languages
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('jsx', javascript);
hljs.registerLanguage('tsx', typescript);
hljs.registerLanguage('vue', xml);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('scss', css);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('json', json);

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  useEffect(() => {
    // Highlight code blocks
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block as HTMLElement);
    });

    // Add copy buttons and language labels
    document.querySelectorAll('pre').forEach((pre) => {
      if (pre.querySelector('.copy-button')) return; // Already has button

      const code = pre.querySelector('code');
      const language = code?.className.match(/language-(\w+)/)?.[1] || 'text';

      // Language label
      const langLabel = document.createElement('span');
      langLabel.className = 'code-language';
      langLabel.textContent = language.toUpperCase();

      // Copy button
      const button = document.createElement('button');
      button.className = 'copy-button';
      button.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M5.5 2.5h-2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <rect x="6.5" y="1.5" width="7" height="9" rx="1" stroke="currentColor" stroke-width="1.5"/>
        </svg>
      `;
      button.title = 'Copy code';

      button.addEventListener('click', async () => {
        const codeText = code?.textContent || '';
        try {
          await navigator.clipboard.writeText(codeText);
          button.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8l3 3 7-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          `;
          button.classList.add('copied');
          setTimeout(() => {
            button.innerHTML = `
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.5 2.5h-2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <rect x="6.5" y="1.5" width="7" height="9" rx="1" stroke="currentColor" stroke-width="1.5"/>
              </svg>
            `;
            button.classList.remove('copied');
          }, 2000);
        } catch (err) {
          console.error('Failed to copy code:', err);
        }
      });

      pre.style.position = 'relative';
      pre.appendChild(langLabel);
      pre.appendChild(button);
    });
  }, [content]);

  return (
    <>
      <FloatingToc content={content} />
      <div className="markdown-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            // Add ID attributes to headings
            h1: ({ children }) => {
              const text = children?.toString() || '';
              const id = text
                .toLowerCase()
                .replace(/[\u{0080}-\u{FFFF}]/gu, '')
                .replace(/[^\w\u4e00-\u9fa5\s-]/g, '') // Allow Chinese characters
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '');
              return <h1 id={id}>{children}</h1>;
            },
            h2: ({ children }) => {
              const text = children?.toString() || '';
              const id = text
                .toLowerCase()
                .replace(/[\u{0080}-\u{FFFF}]/gu, '')
                .replace(/[^\w\u4e00-\u9fa5\s-]/g, '') // Allow Chinese characters
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '');
              return <h2 id={id}>{children}</h2>;
            },
            h3: ({ children }) => {
              const text = children?.toString() || '';
              const id = text
                .toLowerCase()
                .replace(/[\u{0080}-\u{FFFF}]/gu, '')
                .replace(/[^\w\u4e00-\u9fa5\s-]/g, '') // Allow Chinese characters
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '');
              return <h3 id={id}>{children}</h3>;
            },
            h4: ({ children }) => {
              const text = children?.toString() || '';
              const id = text
                .toLowerCase()
                .replace(/[\u{0080}-\u{FFFF}]/gu, '')
                .replace(/[^\w\u4e00-\u9fa5\s-]/g, '') // Allow Chinese characters
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '');
              return <h4 id={id}>{children}</h4>;
            },
            h5: ({ children }) => {
              const text = children?.toString() || '';
              const id = text
                .toLowerCase()
                .replace(/[\u{0080}-\u{FFFF}]/gu, '')
                .replace(/[^\w\u4e00-\u9fa5\s-]/g, '') // Allow Chinese characters
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '');
              return <h5 id={id}>{children}</h5>;
            },
            h6: ({ children }) => {
              const text = children?.toString() || '';
              const id = text
                .toLowerCase()
                .replace(/[\u{0080}-\u{FFFF}]/gu, '')
                .replace(/[^\w\u4e00-\u9fa5\s-]/g, '') // Allow Chinese characters
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '');
              return <h6 id={id}>{children}</h6>;
            }
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </>
  );
}
