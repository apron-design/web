import { Documents } from '@/layouts/Documents';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { readFileSync } from 'fs';
import { join } from 'path';

export function generateStaticParams() {
  return [
    { alias: 'principles' },
    { alias: 'specifications' },
    { alias: 'color' },
  ];
}

const navigation = [
  {
    title: '设计系统',
    items: [
      { label: '设计原则', href: '/design/principles' },
      { label: '设计规范', href: '/design/specifications' },
      { label: '标准色', href: '/design/color' },
    ],
  },
];

export default async function DesignPage(props: { params: Promise<{ alias: string }> }) {
  const params = await props.params;
  
  // Read markdown file
  let content = '';
  let errorInfo = '';
  
  try {
    const cwd = process.cwd();
    const filePath = join(cwd, 'docs', 'design', `${params.alias}.md`);
    content = readFileSync(filePath, 'utf-8');
  } catch (error) {
    errorInfo = (error as Error).message || String(error);
    content = `# Page Not Found

The documentation for "${params.alias}" could not be found.

Expected file: \`docs/design/${params.alias}.md\`

Error: ${errorInfo}

Current working directory: ${process.cwd()}`;
  }

  return (
    <Documents navigation={navigation}>
      <MarkdownRenderer content={content} />
    </Documents>
  );
}
