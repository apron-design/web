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
      { label: '开始使用', href: '/vue-next/getting-started' },
    ],
  },
  {
    title: '通用',
    items: [
      { label: '按钮 Button', href: '/vue-next/button' },
      { label: '图标 Icons', href: '/vue-next/icons' },
      { label: '链接 Link', href: '/vue-next/link' },
    ],
  },
  {
    title: '布局',
    items: [
      { label: '分割线 Divider', href: '/vue-next/divider' },
      { label: '栅格 Grid', href: '/vue-next/grid' },
      { label: '间距 Space', href: '/vue-next/space' },
    ],
  },
  {
    title: '数据展示',
    items: [
      { label: '头像 Avatar', href: '/vue-next/avatar' },
      { label: '徽章 Badge', href: '/vue-next/badge' },
      { label: '卡片 Card', href: '/vue-next/card' },
      { label: '折叠面板 Collapse', href: '/vue-next/collapse' },
      { label: '空状态 Empty', href: '/vue-next/empty' },
      { label: '图片 Image', href: '/vue-next/image' },
      { label: '气泡 Popover', href: '/vue-next/popover' },
      { label: '标签页 Tabs', href: '/vue-next/tabs' },
      { label: '标签 Tag', href: '/vue-next/tag' },
      { label: '时间线 Timeline', href: '/vue-next/timeline' },
      { label: '工具提示 Tooltip', href: '/vue-next/tooltip' }
    ],
  },
  {
    title: '机器码',
    items: [
      { label: '条形码 Barcode', href: '/vue-next/barcode' },
      { label: '二维码 2D Barcode', href: '/vue-next/2d-barcode' },
    ],
  },
  {
    title: '表单',
    items: [
      { label: '表单 Form', href: '/vue-next/form' },
      { label: '级联选择器 Cascader', href: '/vue-next/cascader' },
      { label: '复选框 Checkbox', href: '/vue-next/checkbox' },
      { label: '日期选择器 DatePicker', href: '/vue-next/date-picker' },
      { label: '输入框 Input', href: '/vue-next/input' },
      { label: '一次性密码输入框 Input OTP', href: '/vue-next/input-otp' },
      { label: '单选框 Radio', href: '/vue-next/radio' },
      { label: '评分 Rate', href: '/vue-next/rate' },
      { label: '选择器 Select', href: '/vue-next/select' },
      { label: '开关 Switch', href: '/vue-next/switch' },
    ],
  },
  {
    title: '反馈',
    items: [
      { label: '警告 Alert', href: '/vue-next/alert' },
      { label: '抽屉 Drawer', href: '/vue-next/drawer' },
      { label: '消息提示 Message', href: '/vue-next/message' },
      { label: '模态框 Modal', href: '/vue-next/modal' },
      { label: '气泡确认框 Popconfirm', href: '/vue-next/popconfirm' },
      { label: '响应式弹窗 Responsive Modal', href: '/vue-next/responsive-modal' },
      { label: '加载中 Spin', href: '/vue-next/spin' },
      { label: '骨架屏 Skeleton', href: '/vue-next/skeleton' },
    ],
  },
  {
    title: '导航',
    items: [
      { label: '步骤 Steps', href: '/vue-next/steps' },
    ],
  },
  {
    title: '媒体',
    items: [
      { label: '视频 Video', href: '/vue-next/video' },
      { label: '音频 Audio', href: '/vue-next/audio' },
    ],
  },
];

export default async function VueNextPage(props: { params: Promise<{ alias: string }> }) {
  const params = await props.params;
  
  // Read markdown file
  let content = '';
  let errorInfo = '';
  
  try {
    const cwd = process.cwd();
    const filePath = join(cwd, 'docs', 'vue-next', `${params.alias}.md`);
    content = readFileSync(filePath, 'utf-8');
  } catch (error) {
    errorInfo = (error as Error).message || String(error);
    content = `# Page Not Found

The documentation for "${params.alias}" could not be found.

Expected file: \`docs/vue-next/${params.alias}.md\`

Error: ${errorInfo}

Current working directory: ${process.cwd()}`;
  }

  return (
    <Documents navigation={navigation}>
      <MarkdownRenderer content={content} />
    </Documents>
  );
}