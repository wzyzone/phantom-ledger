'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

const APP_STORE_URL = '';

function applyLanguage(next: 'zh' | 'en') {
  document.documentElement.dataset.language = next;
  document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en';
  window.localStorage.setItem('phantom-site-language', next);
  document.querySelectorAll<HTMLButtonElement>('[data-language-button]').forEach((button) => {
    const active = button.dataset.languageButton === next;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const stored = window.localStorage.getItem('phantom-site-language');
    const preferred = stored === 'en' || stored === 'zh'
      ? stored
      : navigator.language.toLowerCase().startsWith('zh')
        ? 'zh'
        : 'en';
    applyLanguage(preferred);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main"><span className="lang-zh">跳到主要内容</span><span className="lang-en">Skip to content</span></a>
      <div className="site-noise" aria-hidden="true" />
      <header className="site-header">
        <Link className="brand" href="/" aria-label="怪盗手账首页">
          <Image src="/app-icon.png" width={1024} height={1024} alt="" priority />
          <span className="brand-copy"><b>怪盗手账</b><small>PHANTOM LEDGER</small></span>
        </Link>
        <nav aria-label="主要导航">
          <Link href="/#intel"><span className="lang-zh">行动档案</span><span className="lang-en">Features</span></Link>
          <Link href="/privacy"><span className="lang-zh">隐私</span><span className="lang-en">Privacy</span></Link>
          <Link href="/support"><span className="lang-zh">支持</span><span className="lang-en">Support</span></Link>
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label="Language">
            <button type="button" className="active" data-language-button="zh" onClick={() => applyLanguage('zh')} aria-pressed="true">中</button>
            <i aria-hidden="true" />
            <button type="button" data-language-button="en" onClick={() => applyLanguage('en')} aria-pressed="false">EN</button>
          </div>
          {APP_STORE_URL ? <a className="store-link" href={APP_STORE_URL} rel="noreferrer">APP STORE ↗</a> : <span className="store-link is-pending"><span className="lang-zh">即将上线</span><span className="lang-en">COMING SOON</span></span>}
        </div>
      </header>
      {children}
      <footer className="site-footer">
        <div className="footer-sigil" aria-hidden="true">¥</div>
        <div><p>PHANTOM LEDGER / 怪盗手账</p><small><span className="lang-zh">由 Zone 独立设计与开发</span><span className="lang-en">Designed and built independently by Zone</span></small></div>
        <div className="footer-links">
          <Link href="/privacy"><span className="lang-zh">隐私政策</span><span className="lang-en">Privacy</span></Link>
          <Link href="/support"><span className="lang-zh">支持</span><span className="lang-en">Support</span></Link>
          <a href="mailto:wzyzone@outlook.com">wzyzone@outlook.com</a>
          <a href="https://wzyzone.github.io/" rel="noreferrer">ZONE WORKS ↗</a>
        </div>
        <p className="footer-year">© 2026</p>
      </footer>
    </>
  );
}
