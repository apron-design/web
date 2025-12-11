'use client';

import { usePathname } from 'next/navigation';
import { PageHeader } from '@/components/PageHeader';
import { PageFooter } from '@/components/PageFooter';
import './Documents.scss';

interface NavItem {
  label: string;
  href: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

interface DocumentsProps {
  navigation: NavSection[];
  children: React.ReactNode;
}

export function Documents({ navigation, children }: DocumentsProps) {
  const pathname = usePathname();

  return (
    <div className="documents-page">
      <PageHeader backgrounded />
      
      <div className="documents-content">
        <aside className="documents-sidebar">
          <nav className="documents-nav">
            {navigation.map((section, index) => (
              <div className="nav-section" key={index}>
                <h3 className="nav-section-title">{section.title}</h3>
                <ul className="nav-list">
                  {section.items.map((item, itemIndex) => {
                    // Normalize paths for comparison (remove trailing slash)
                    const normalizedPathname = pathname.replace(/\/$/, '');
                    const normalizedHref = item.href.replace(/\/$/, '');
                    const isActive = normalizedPathname === normalizedHref;
                    return (
                      <li 
                        className={`nav-item ${isActive ? 'active' : ''}`} 
                        key={itemIndex}
                      >
                        <a href={item.href}>{item.label}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        <main className="documents-main" id="document-container">
          <div className="documents-container">
            {children}
          </div>
          <PageFooter />
        </main>
      </div>
    </div>
  );
}