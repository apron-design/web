import { Documents } from '@/layouts/Documents';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { readFileSync } from 'fs';
import { join } from 'path';

export function generateStaticParams() {
  return [
    { alias: 'best-practices' },
    { alias: 'icons' },
    { alias: 'codes' },
    { alias: 'media' },
    { alias: 'recommends' },
  ];
}

const navigation = [
  {
    title: '最佳实践',
    items: [
      { label: '最佳实践', href: '/usage/best-practices' },
      { label: '图标库', href: '/usage/icons' },
      { label: '二维码/条形码', href: '/usage/codes' },
      { label: '音视频媒体', href: '/usage/media' },
      { label: '推荐搭配', href: '/usage/recommends' },
      // { label: '色彩配置工具', href: '/palette' },
    ],
  },
];

export default async function UsagePage(props: { params: Promise<{ alias: string }> }) {
  const params = await props.params;
  
  // Read markdown file
  let content = '';
  let errorInfo = '';
  
  try {
    const cwd = process.cwd();
    const filePath = join(cwd, 'docs', 'usage', `${params.alias}.md`);
    content = readFileSync(filePath, 'utf-8');
  } catch (error) {
    errorInfo = (error as Error).message || String(error);
    content = `# Page Not Found

The documentation for "${params.alias}" could not be found.

Expected file: \`docs/usage/${params.alias}.md\`

Error: ${errorInfo}

Current working directory: ${process.cwd()}`;
  }

  return (
    <Documents navigation={navigation}>
      <MarkdownRenderer content={content} />
    </Documents>
  );
}
