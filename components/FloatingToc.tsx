'use client';

import React from 'react';
import './FloatingToc.scss';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface FloatingTocProps {
  content: string;
}

export function FloatingToc({ content }: FloatingTocProps) {
  // Extract headings from markdown content
  const lines = content.split('\n');
  const tocItems: TocItem[] = [];
  
  // Track if we're inside a code block
  let inCodeBlock = false;

  lines.forEach((line) => {
    // Check for code block start/end
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      return;
    }
    
    // Skip if we're inside a code block
    if (inCodeBlock) {
      return;
    }
    
    // Clean the line to remove any invisible characters
    const cleanLine = line.trim();
    
    // Check if line starts with # and has content after
    if (cleanLine.startsWith('#') && cleanLine.length > 1) {
      // Try a more permissive regex
      const permissiveRegex = /^(#{1,6})\s*(.+)$/;
      const match = cleanLine.match(permissiveRegex);
      if (match) {
        const level = match[1].length;
        const text = match[2].trim();
        // Create an ID similar to what markdown would generate
        const id = text
          .toLowerCase()
          .replace(/[\u{0080}-\u{FFFF}]/gu, '')
          .replace(/[^\w\u4e00-\u9fa5\s-]/g, '') // Allow Chinese characters
          .replace(/[\s_-]+/g, '-')
          .replace(/^-+|-+$/g, '') || text.toLowerCase().replace(/\s+/g, '-');
        
        tocItems.push({
          id,
          text,
          level
        });
      }
    }
  });

  const handleClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  if (tocItems.length === 0) {
    return null;
  }

  return (
    <div className="floating-toc">
      <div className="floating-toc__content">
        <h3 className="toc-title">本页目录</h3>
        <ul className="toc-list">
          {tocItems.map((heading) => (
            <li 
              key={heading.id} 
              className={`toc-item level-${heading.level}`}
              style={{ paddingLeft: `${(heading.level - 1) * 12}px` }}
            >
              <a 
                href={`#${heading.id}`} 
                className="toc-link"
                onClick={(e) => handleClick(heading.id, e)}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}