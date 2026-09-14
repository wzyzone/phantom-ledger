'use client';

import Image from 'next/image';
import { useEffect } from 'react';

const APP_STORE_URL = '';
const SITE_BASE_PATH = process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? '';
const siteHref = (path: string) => `${SITE_BASE_PATH}${path}`;

function applyLanguage(next: 'zh' | 'en') {
  document.documentElement.dataset.language = next;
  document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en';
  window.localStorage.setItem('phantom-site-language', next);
  const path = window.location.pathname.slice(SITE_BASE_PATH.length) || '/';
  document.title = path.startsWith('/privacy')
    ? next === 'zh'
      ? '怪盗手账｜隐私政策'
      : 'Phantom Ledger | Privacy Policy'
    : path.startsWith('/support')
      ? next === 'zh'
        ? '怪盗手账｜支持与联系'
        : 'Phantom Ledger | Support'
      : next === 'zh'
        ? '怪盗手账｜把每一笔，变成行动档案'
        : 'Phantom Ledger | Turn Every Entry Into a Case File';
  document
    .querySelector('.brand')
    ?.setAttribute(
      'aria-label',
      next === 'zh' ? '怪盗手账首页' : 'Phantom Ledger home',
    );
  document
    .querySelector('.site-header nav')
    ?.setAttribute(
      'aria-label',
      next === 'zh' ? '主要导航' : 'Main navigation',
    );
  document
    .querySelectorAll<HTMLButtonElement>('[data-language-button]')
    .forEach((button) => {
      const active = button.dataset.languageButton === next;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
}

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const stored = window.localStorage.getItem('phantom-site-language');
    const preferred =
      stored === 'en' || stored === 'zh'
        ? stored
        : navigator.language.toLowerCase().startsWith('zh')
          ? 'zh'
          : 'en';
    applyLanguage(preferred);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        <span className="lang-zh">跳到主要内容</span>
        <span className="lang-en">Skip to content</span>
      </a>
      <div className="site-noise" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href={siteHref('/')} aria-label="怪盗手账首页">
          <Image
            src={siteHref('/app-icon.png')}
            width={1024}
            height={1024}
            alt=""
            priority
          />
          <span className="brand-copy">
            <b>怪盗手账</b>
            <small>PHANTOM LEDGER</small>
          </span>
        </a>
        <nav aria-label="主要导航">
          <a href={siteHref('/#intel')}>
            <span className="lang-zh">行动档案</span>
            <span className="lang-en">Features</span>
          </a>
          <a href={siteHref('/privacy')}>
            <span className="lang-zh">隐私</span>
            <span className="lang-en">Privacy</span>
          </a>
          <a href={siteHref('/support')}>
            <span className="lang-zh">支持</span>
            <span className="lang-en">Support</span>
          </a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label="Language">
            <button
              type="button"
              className="active"
              data-language-button="zh"
              onClick={() => applyLanguage('zh')}
              aria-pressed="true"
            >
              中
            </button>
            <i aria-hidden="true" />
            <button
              type="button"
              data-language-button="en"
              onClick={() => applyLanguage('en')}
              aria-pressed="false"
            >
              EN
            </button>
          </div>
          {APP_STORE_URL ? (
            <a className="store-link" href={APP_STORE_URL} rel="noreferrer">
              APP STORE ↗
            </a>
          ) : (
            <span className="store-link is-pending">
              <span className="lang-zh">即将上线</span>
              <span className="lang-en">COMING SOON</span>
            </span>
          )}
        </div>
      </header>
      {children}
      <footer className="site-footer">
        <div className="footer-sigil" aria-hidden="true">
          ¥
        </div>
        <div>
          <p>PHANTOM LEDGER / 怪盗手账</p>
          <small>
            <span className="lang-zh">由 Zone 独立设计与开发</span>
            <span className="lang-en">
              Designed and built independently by Zone
            </span>
          </small>
        </div>
        <div className="footer-links">
          <a href={siteHref('/privacy')}>
            <span className="lang-zh">隐私政策</span>
            <span className="lang-en">Privacy</span>
          </a>
          <a href={siteHref('/support')}>
            <span className="lang-zh">支持</span>
            <span className="lang-en">Support</span>
          </a>
          <a href="mailto:wzyzone@outlook.com">wzyzone@outlook.com</a>
          <a href="https://wzyzone.github.io/" target="_blank" rel="noreferrer">
            ZONE WORKS ↗
          </a>
        </div>
        <p className="footer-year">© 2026</p>
      </footer>
    </>
  );
}
