import { redirect } from 'next/navigation';

export default function VueNextRedirect() {
  // 自动跳转到第一个子页面
  redirect('/vue-next/getting-started');
}