import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '支持与联系',
  description: '怪盗手账使用帮助、备份说明与开发者联系方式。',
};

export default function SupportPage() {
  return (
    <main id="main" className="legal-main">
      <header className="legal-hero"><p className="section-index">SUPPORT FILE / 002</p><h1><span className="lang-zh">支援频道</span><span className="lang-en">SUPPORT<br />CHANNEL</span></h1><p><span className="lang-zh">遇到问题，我们来一起查清这份档案。</span><span className="lang-en">Something went wrong? Let&apos;s inspect the case together.</span></p></header>
      <div className="legal-page">
        <aside className="legal-aside"><Image src="/app-icon.png" width={1024} height={1024} alt="怪盗手账 App 图标" /><p><span className="lang-zh">支持 iOS 16 及以上版本。联系时请附上设备与 App 版本。</span><span className="lang-en">Requires iOS 16 or later. Include your device and app version when writing.</span></p><Link href="/privacy">PRIVACY POLICY →</Link></aside>
        <article className="legal-content">
          <div className="lang-zh">
            <p className="intro">如果你遇到崩溃、账目异常、导入导出或显示问题，请直接联系开发者。</p>
            <a className="contact-card" href="mailto:wzyzone@outlook.com?subject=%E6%80%AA%E7%9B%97%E6%89%8B%E8%B4%A6%E6%94%AF%E6%8C%81"><b>@</b><span><small>联系开发者</small><strong>wzyzone@outlook.com</strong></span><span>→</span></a>
            <section className="legal-block"><h2><span>01</span>提交问题时请附上</h2><ul><li>iPhone 型号与 iOS 版本</li><li>怪盗手账的版本号</li><li>问题发生的页面与操作步骤</li><li>如果方便，附上不包含敏感账目内容的截图或屏幕录制</li></ul></section>
            <div className="faq-list">
              <details><summary>怎样完整备份数据？</summary><p>打开 VAULT，选择“导出 JSON 完整备份”，再通过系统分享面板保存到你信任的位置。JSON 包含账目和 App 设置，适合日后恢复。</p></details>
              <details><summary>JSON 和 CSV 有什么区别？</summary><p>JSON 是完整恢复备份，包含账目与设置；CSV 是方便用表格软件查看的账目明细，不包含完整设置，不能代替 JSON 备份。</p></details>
              <details><summary>导入备份会覆盖现有账目吗？</summary><p>导入会把备份中的历史记录与本机记录合并，并恢复备份所含设置。导入前建议先导出一次当前数据，保留可回退的副本。</p></details>
              <details><summary>如何修改或批量删除账目？</summary><p>在 LOGS 中长按一条记录可编辑或删除。进入批量模式后可以逐条勾选，也可以选择当前筛选结果，再从底部操作栏删除。</p></details>
              <details><summary>卸载后数据还能找回吗？</summary><p>卸载 App 可能移除本机数据。若此前导出过 JSON 完整备份，重新安装后可从 VAULT 导入；没有备份时，开发者无法从服务器恢复，因为 App 不上传账目。</p></details>
              <details><summary>固定项目什么时候自动记账？</summary><p>每月固定项目会在到达设定日期后，于你打开 App 时检查并生成。本月已生成的项目不会重复添加，你也可以随时暂停或编辑规则。</p></details>
            </div>
          </div>
          <div className="lang-en">
            <p className="intro">If you run into a crash, incorrect entry, import/export issue, or display problem, contact the developer directly.</p>
            <a className="contact-card" href="mailto:wzyzone@outlook.com?subject=Phantom%20Ledger%20Support"><b>@</b><span><small>CONTACT THE DEVELOPER</small><strong>wzyzone@outlook.com</strong></span><span>→</span></a>
            <section className="legal-block"><h2><span>01</span>What to include</h2><ul><li>Your iPhone model and iOS version</li><li>Your Phantom Ledger app version</li><li>The screen and steps that led to the issue</li><li>A screenshot or recording without sensitive financial details, if convenient</li></ul></section>
            <div className="faq-list">
              <details><summary>How do I create a complete backup?</summary><p>Open VAULT and choose “Export JSON backup,” then save it somewhere you trust through the iOS share sheet. JSON includes entries and app settings for later restoration.</p></details>
              <details><summary>What is the difference between JSON and CSV?</summary><p>JSON is a complete restoration backup with entries and settings. CSV is a table-friendly list of entries and does not include every setting, so it cannot replace a JSON backup.</p></details>
              <details><summary>Will importing replace my current entries?</summary><p>Import merges historical entries from the backup with entries already on your device and restores included settings. Export your current data first if you want a separate fallback copy.</p></details>
              <details><summary>How do I edit or delete entries in batches?</summary><p>Press and hold an entry in LOGS to edit or delete it. In batch mode, select individual entries or the current filtered results, then remove them from the bottom action bar.</p></details>
              <details><summary>Can I recover data after uninstalling?</summary><p>Uninstalling may remove local data. If you exported a full JSON backup, reinstall the app and import it from VAULT. Without a backup, the developer cannot recover your ledger from a server because the app never uploads it.</p></details>
              <details><summary>When are recurring entries created?</summary><p>A recurring item is checked after its scheduled date when you open the app. An item already generated for the month is not added twice, and you can pause or edit its rule at any time.</p></details>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
