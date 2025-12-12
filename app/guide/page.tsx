import { redirect } from 'next/navigation';

export default function GuideRedirect() {
  // 自动跳转到第一个子页面
  redirect('/guide/quick-start');
}