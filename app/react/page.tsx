import { redirect } from 'next/navigation';

export default function ReactRedirect() {
  // 自动跳转到第一个子页面
  redirect('/react/getting-started');
}