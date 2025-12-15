import { Documents } from '@/layouts/Documents';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { readFileSync } from 'fs';
import { join } from 'path';

export function generateStaticParams() {
  return [
    { alias: 'getting-started' },
    { alias: 'button' },
    { alias: 'icons' },
    { alias: 'link' },
    { alias: 'divider' },
    { alias: 'grid' },
    { alias: 'space' },
    { alias: 'avatar' },
    { alias: 'badge' },
    { alias: 'card' },
    { alias: 'collapse' },
    { alias: 'empty' },
    { alias: 'image' },
    { alias: 'popover' },
    { alias: 'tabs' },
    { alias: 'tag' },
    { alias: 'timeline' },
    { alias: 'tooltip' },
    { alias: 'barcode' },
    { alias: '2d-barcode' },
    { alias: 'form' },
    { alias: 'cascader' },
    { alias: 'checkbox' },
    { alias: 'date-picker' },
    { alias: 'input' },
    { alias: 'input-otp' },
    { alias: 'radio' },
    { alias: 'rate' },
    { alias: 'select' },
    { alias: 'switch' },
    { alias: 'alert' },
    { alias: 'drawer' },
    { alias: 'message' },
    { alias: 'modal' },
    { alias: 'popconfirm' },
    { alias: 'responsive-modal' },
    { alias: 'spin' },
    { alias: 'skeleton' },
    { alias: 'steps' },
    { alias: 'video' },
    { alias: 'audio' },
  ];
}

const navigation = [
  {
    title: '',
    items: [
      { label: '开始使用', href: '/react/getting-started' },
    ],
  },
  {
    title: '通用',
    items: [
      { label: '按钮 Button', href: '/react/button' },
      { label: '图标 Icons', href: '/react/icons' },
      { label: '链接 Link', href: '/react/link' },
    ],
  },
  {
    title: '布局',
    items: [
      { label: '分割线 Divider', href: '/react/divider' },
      { label: '栅格 Grid', href: '/react/grid' },
      { label: '间距 Space', href: '/react/space' },
    ],
  },
  {
    title: '数据展示',
    items: [
      { label: '头像 Avatar', href: '/react/avatar' },
      { label: '徽章 Badge', href: '/react/badge' },
      { label: '卡片 Card', href: '/react/card' },
      { label: '折叠面板 Collapse', href: '/react/collapse' },
      { label: '空状态 Empty', href: '/react/empty' },
      { label: '图片 Image', href: '/react/image' },
      { label: '气泡 Popover', href: '/react/popover' },
      { label: '标签页 Tabs', href: '/react/tabs' },
      { label: '标签 Tag', href: '/react/tag' },
      { label: '时间线 Timeline', href: '/react/timeline' },
      { label: '工具提示 Tooltip', href: '/react/tooltip' }
    ],
  },
  {
    title: '机器码',
    items: [
      { label: '条形码 Barcode', href: '/react/barcode' },
      { label: '二维码 2D Barcode', href: '/react/2d-barcode' },
    ],
  },
  {
    title: '表单',
    items: [
      { label: '表单 Form', href: '/react/form' },
      { label: '级联选择器 Cascader', href: '/react/cascader' },
      { label: '复选框 Checkbox', href: '/react/checkbox' },
      { label: '日期选择器 DatePicker', href: '/react/date-picker' },
      { label: '输入框 Input', href: '/react/input' },
      { label: '一次性密码输入框 Input OTP', href: '/react/input-otp' },
      { label: '单选框 Radio', href: '/react/radio' },
      { label: '评分 Rate', href: '/react/rate' },
      { label: '选择器 Select', href: '/react/select' },
      { label: '开关 Switch', href: '/react/switch' },
    ],
  },
  {
    title: '反馈',
    items: [
      { label: '警告 Alert', href: '/react/alert' },
      { label: '抽屉 Drawer', href: '/react/drawer' },
      { label: '消息提示 Message', href: '/react/message' },
      { label: '模态框 Modal', href: '/react/modal' },
      { label: '气泡确认框 Popconfirm', href: '/react/popconfirm' },
      { label: '响应式弹窗 Responsive Modal', href: '/react/responsive-modal' },
      { label: '加载中 Spin', href: '/react/spin' },
      { label: '骨架屏 Skeleton', href: '/react/skeleton' },
    ],
  },
  {
    title: '导航',
    items: [
      { label: '步骤 Steps', href: '/react/steps' },
    ],
  },
  {
    title: '媒体',
    items: [
      { label: '视频 Video', href: '/react/video' },
      { label: '音频 Audio', href: '/react/audio' },
    ],
  },
];

export default async function ReactPage(props: { params: Promise<{ alias: string }> }) {
  const params = await props.params;
  
  // Read markdown file
  let content = '';
  let errorInfo = '';
  
  try {
    const cwd = process.cwd();
    const filePath = join(cwd, 'docs', 'react', `${params.alias}.md`);
    content = readFileSync(filePath, 'utf-8');
  } catch (error) {
    errorInfo = (error as Error).message || String(error);
    content = `# Page Not Found

The documentation for "${params.alias}" could not be found.

Expected file: \`docs/react/${params.alias}.md\`

Error: ${errorInfo}

Current working directory: ${process.cwd()}`;
  }

  return (
    <Documents navigation={navigation}>
      <MarkdownRenderer content={content} />
    </Documents>
  );
}