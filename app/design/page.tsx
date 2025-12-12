import { redirect } from 'next/navigation';

export default function DesignRedirect() {
  // 自动跳转到第一个子页面
  redirect('/design/principles');
}