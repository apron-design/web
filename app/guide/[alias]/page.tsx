import { DocumentTemplate } from '@/components/DocumentTemplate';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { readFileSync } from 'fs';
import { join } from 'path';

export function generateStaticParams() {
  return [

    { alias: 'quick-start' },
    { alias: 'installation' },
    { alias: 'dark-mode' },
    { alias: 'changelog' },
    { alias: 'versions' },
    { alias: 'faq' },
    { alias: 'feedback' },
  ];
}

const navigation = [
  {
    title: '使用指南',
    items: [
      { label: '快速上手', href: '/guide/quick-start' },
      { label: '安装指南', href: '/guide/installation' },
      { label: '深色模式', href: '/guide/dark-mode' },
      { label: '更新日志', href: '/guide/changelog' },
      { label: '版本说明', href: '/guide/versions' },
    ],
  },
  {
    title: '解答疑惑',
    items: [
      { label: '常见问题', href: '/guide/faq' },
      { label: '反馈与建议', href: '/guide/feedback' },
    ],
  }
];

export default async function GuidePage(props: { params: Promise<{ alias: string }> }) {
  const params = await props.params;
  
  // Read markdown file
  let content = '';
  let errorInfo = '';
  
  try {
    const cwd = process.cwd();
    const filePath = join(cwd, 'docs', 'guide', `${params.alias}.md`);
    content = readFileSync(filePath, 'utf-8');
  } catch (error: any) {
    errorInfo = error.message || String(error);
    content = `# Page Not Found

The documentation for "${params.alias}" could not be found.

Expected file: \`docs/guide/${params.alias}.md\`

Error: ${errorInfo}

Current working directory: ${process.cwd()}`;
  }

  return (
    <DocumentTemplate navigation={navigation}>
      <MarkdownRenderer content={content} />
    </DocumentTemplate>
  );
}
