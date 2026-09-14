import type { Metadata, Viewport } from 'next';
import { Anton, Noto_Sans_SC } from 'next/font/google';
import SiteChrome from '@/components/site-chrome';
import './globals.css';

const SITE_BASE_PATH = process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? '';

const display = Anton({
  variable: '--font-display',
  subsets: ['latin'],
  weight: '400',
});

const body = Noto_Sans_SC({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: {
    default: '怪盗手账｜把每一笔，变成行动档案',
    template: '%s｜怪盗手账',
  },
  description:
    '怪盗手账是一款红黑白视觉的纯本地 iPhone 记账 App。记录、分析、预算与备份都留在你的设备上。',
  icons: {
    icon: `${SITE_BASE_PATH}/app-icon.png`,
    apple: `${SITE_BASE_PATH}/app-icon.png`,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#e50012',
  colorScheme: 'dark',
};

export const dynamic = 'force-static';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" data-language="zh" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable}`}>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
