'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function HomeExperience() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const move = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty('--mx', `${((event.clientX - rect.left) / rect.width - 0.5) * 2}`);
      hero.style.setProperty('--my', `${((event.clientY - rect.top) / rect.height - 0.5) * 2}`);
    };
    hero.addEventListener('pointermove', move);
    return () => hero.removeEventListener('pointermove', move);
  }, []);

  return (
    <main id="main">
      <section className="hero" ref={heroRef}>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><i /> CASE FILE 001 · IOS</p>
          <h1><span className="hero-zh">怪盗</span><span className="hero-en">PHANTOM</span><span className="hero-ledger"><em>手</em><b>账</b></span></h1>
          <div className="hero-statement">
            <p className="lang-zh">把每一笔，<br />变成行动档案。</p>
            <p className="lang-en">TURN EVERY ENTRY<br />INTO A CASE FILE.</p>
            <small><span className="lang-zh">纯本地 · 无账号 · 无广告</span><span className="lang-en">ON-DEVICE · NO ACCOUNT · NO ADS</span></small>
          </div>
          <div className="hero-cta-row">
            <span className="primary-cta"><b className="lang-zh">APP STORE 即将上线</b><b className="lang-en">COMING SOON TO APP STORE</b><i>↗</i></span>
            <a className="text-link" href="#intel"><span className="lang-zh">查看真实界面</span><span className="lang-en">SEE THE REAL APP</span> ↓</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="怪盗手账 App 界面预览">
          <div className="red-sun" aria-hidden="true"><span>¥</span></div>
          <div className="paper-slice slice-one" aria-hidden="true">TOP SECRET</div>
          <div className="paper-slice slice-two" aria-hidden="true">NO. 2026-001</div>
          <div className="phone-frame"><div className="phone-camera" /><Image src="/app-shots/quick.png" width={1206} height={2622} alt="怪盗手账快捷记账机械滚轮界面" priority /></div>
          <Image className="hero-icon" src="/app-icon.png" width={1024} height={1024} alt="怪盗手账 App 图标" priority />
          <div className="hero-stamp" aria-hidden="true">LOCAL<br />ONLY</div>
        </div>
        <div className="hero-ticker" aria-hidden="true">
          <div>RECORD / ANALYZE / PLAN / BACKUP / RECORD / ANALYZE / PLAN / BACKUP /&nbsp;</div>
          <div>RECORD / ANALYZE / PLAN / BACKUP / RECORD / ANALYZE / PLAN / BACKUP /&nbsp;</div>
        </div>
      </section>

      <section className="quick-showcase section-shell">
        <div className="quick-copy">
          <p className="eyebrow"><i /> QUICK STRIKE / 快捷记账</p>
          <h2><span className="lang-zh">把记账，<br />变成一次<em>出击。</em></span><span className="lang-en">TURN AN ENTRY<br />INTO A <em>STRIKE.</em></span></h2>
          <p><span className="lang-zh">从屏幕边缘划入，拨动巨型机械滚轮，再锁定目标分类。它既是快捷入口，也是怪盗手账最完整的一次视觉表演。</span><span className="lang-en">Swipe in from the screen edge, roll the oversized mechanical dial, then lock onto a category. It is a shortcut and Phantom Ledger&apos;s boldest visual performance.</span></p>
          <div className="quick-facts"><span>EDGE SWIPE</span><span>ONE-HAND</span><span>0.1 DETENT</span></div>
        </div>
        <div className="quick-art">
          <div className="quick-orbit" aria-hidden="true"><i /><i /><i /></div>
          <div className="quick-phone"><Image src="/app-shots/quick.png" width={1206} height={2622} alt="快捷记账的巨型滚轮、金额和分类界面" /></div>
          <span className="quick-label" aria-hidden="true">TOUCH<br />&amp; ROLL</span>
          <span className="quick-seal" aria-hidden="true">01</span>
        </div>
      </section>

      <section className="manifesto section-shell">
        <div className="section-index">001 / THE MISSION</div>
        <div className="manifesto-copy">
          <p className="lang-zh">普通记账只留下数字。<br />怪盗手账留下的是一整套<span>行动轨迹。</span></p>
          <p className="lang-en">A ledger keeps numbers.<br />Phantom Ledger keeps the <span>whole operation.</span></p>
        </div>
        <div className="manifesto-note">
          <p className="lang-zh">收入、支出、分类、备注与时间，清楚归档；月份、趋势、预算与目标，随时回看。</p>
          <p className="lang-en">Income, expenses, categories, notes, and time stay organized. Review months, trends, budgets, and goals whenever you need.</p>
        </div>
      </section>

      <section className="feature-stage" id="intel">
        <header className="feature-head section-shell">
          <div><p className="eyebrow"><i /> OPERATION SYSTEM</p><h2><span className="lang-zh">一笔账的<br />完整行动线</span><span className="lang-en">THE FULL LIFE<br />OF AN ENTRY</span></h2></div>
          <p className="feature-count">04<span>/04</span></p>
        </header>

        <div className="feature-list section-shell">
          <article className="feature-row red-row"><div className="feature-number">01</div><div className="feature-title"><small>ACTION / 记账</small><h3><span className="lang-zh">下达行动</span><span className="lang-en">MAKE THE MOVE</span></h3></div><p><span className="lang-zh">选择收支、金额、分类和时间，完成一次带仪式感的记录。</span><span className="lang-en">Choose type, amount, category, and time in one dramatic flow.</span></p><span className="feature-mark">＋</span></article>
          <article className="feature-row"><div className="feature-number">02</div><div className="feature-title"><small>LOGS / 档案</small><h3><span className="lang-zh">翻查卷宗</span><span className="lang-en">SEARCH THE ARCHIVE</span></h3></div><p><span className="lang-zh">按月、类型和关键词定位记录；长按编辑，批量选择和删除。</span><span className="lang-en">Find entries by month, type, or keyword. Edit, select, and remove in batches.</span></p><span className="feature-mark">⌕</span></article>
          <article className="feature-row cyan-row"><div className="feature-number">03</div><div className="feature-title"><small>INTEL / 情报</small><h3><span className="lang-zh">看清流向</span><span className="lang-en">READ THE SIGNALS</span></h3></div><p><span className="lang-zh">从月度总览、分类占比到每日资金流，收入与支出去向一目了然。</span><span className="lang-en">See monthly totals, category shares, and daily cash flow at a glance.</span></p><span className="feature-mark">↗</span></article>
          <article className="feature-row white-row"><div className="feature-number">04</div><div className="feature-title"><small>PLAN / 计划</small><h3><span className="lang-zh">预谋下一步</span><span className="lang-en">PLAN THE NEXT MOVE</span></h3></div><p><span className="lang-zh">设定月度预算、储蓄目标与每月固定项目，让计划自动进入行动。</span><span className="lang-en">Set a monthly budget, saving goals, and recurring entries that run with your plan.</span></p><span className="feature-mark">◎</span></article>
        </div>
      </section>

      <section className="proof section-shell">
        <header className="proof-head"><div className="section-index">002 / REAL INTERFACE</div><h2><span className="lang-zh">不是概念图。<br /><em>就是你会用到的界面。</em></span><span className="lang-en">NOT A CONCEPT.<br /><em>THE REAL APP.</em></span></h2></header>
        <div className="shot-deck">
          <figure className="shot shot-logs"><span>ARCHIVE</span><Image src="/app-shots/logs.png" width={1206} height={2622} alt="行动档案与批量管理界面" /><figcaption><b>LOGS</b><small className="lang-zh">查找、编辑、批量整理</small><small className="lang-en">SEARCH, EDIT, ORGANIZE</small></figcaption></figure>
          <figure className="shot shot-plan"><span>STRATEGY</span><Image src="/app-shots/plan.png" width={1206} height={2622} alt="预算与计划界面" /><figcaption><b>PLAN</b><small className="lang-zh">预算、目标、固定项目</small><small className="lang-en">BUDGETS, GOALS, RECURRING</small></figcaption></figure>
          <figure className="shot shot-vault"><span>VAULT</span><Image src="/app-shots/vault.png" width={1206} height={2622} alt="本地备份与设置界面" /><figcaption><b>VAULT</b><small className="lang-zh">备份、导入与声音设置</small><small className="lang-en">BACKUP, RESTORE, SETTINGS</small></figcaption></figure>
        </div>
      </section>

      <section className="privacy-promise">
        <div className="privacy-lock" aria-hidden="true"><span>✓</span></div>
        <div className="privacy-copy"><p className="eyebrow"><i /> PRIVACY PROTOCOL</p><h2><span className="lang-zh">你的账本，<br />只向你交代。</span><span className="lang-en">YOUR LEDGER<br />ANSWERS TO YOU.</span></h2><p><span className="lang-zh">无账号、无广告、无分析 SDK。账目和设置保存在本机，只有你主动导出并选择分享目标时，备份才会离开设备。</span><span className="lang-en">No account, ads, or analytics SDK. Your entries stay on your device and leave only when you export and choose where to share them.</span></p><Link className="outline-link" href="/privacy"><span className="lang-zh">阅读完整隐私政策</span><span className="lang-en">READ THE PRIVACY POLICY</span><b>→</b></Link></div>
        <div className="privacy-stats"><div><b>0</b><span className="lang-zh">账号</span><span className="lang-en">ACCOUNTS</span></div><div><b>0</b><span className="lang-zh">广告</span><span className="lang-en">ADS</span></div><div><b>0</b><span className="lang-zh">追踪器</span><span className="lang-en">TRACKERS</span></div></div>
      </section>

      <section className="final-cta section-shell">
        <div className="final-burst" aria-hidden="true">★</div><p className="eyebrow"><i /> MISSION READY</p><h2><span className="lang-zh">准备偷走<br />混乱了吗？</span><span className="lang-en">READY TO STEAL<br />BACK CONTROL?</span></h2><p><span className="lang-zh">怪盗手账即将登陆 App Store。</span><span className="lang-en">Phantom Ledger is coming soon to the App Store.</span></p>
      </section>
    </main>
  );
}
