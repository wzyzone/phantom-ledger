import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '隐私政策',
  description: '怪盗手账隐私政策：账目与设置保存在设备本地，不要求账号，不含广告或分析 SDK。',
};

export default function PrivacyPage() {
  return (
    <main id="main" className="legal-main">
      <header className="legal-hero"><p className="section-index">LEGAL FILE / 001</p><h1><span className="lang-zh">隐私政策</span><span className="lang-en">PRIVACY<br />POLICY</span></h1><p><span className="lang-zh">更新日期：2026 年 9 月 10 日</span><span className="lang-en">Updated September 10, 2026</span></p></header>
      <div className="legal-page">
        <aside className="legal-aside"><Image src="/app-icon.png" width={1024} height={1024} alt="怪盗手账 App 图标" /><p><span className="lang-zh">适用于怪盗手账 iOS App 与本网站。当前版本 1.0。</span><span className="lang-en">Applies to the Phantom Ledger iOS app and this website. Version 1.0.</span></p><a href="mailto:wzyzone@outlook.com">PRIVACY CONTACT ↗</a></aside>
        <article className="legal-content">
          <div className="lang-zh">
            <p className="intro">怪盗手账是一款纯本地记账 App。我们尽量少处理信息，让你的账目、计划和偏好留在自己的设备上。</p>
            <section className="legal-block"><h2><span>01</span>我们收集哪些数据</h2><p>怪盗手账不要求注册账号，不包含广告、行为分析 SDK 或第三方数据收集服务。开发者不会收到或上传你的账目、分类、备注、预算、储蓄目标、固定项目和 App 设置。</p></section>
            <section className="legal-block"><h2><span>02</span>数据如何保存</h2><p>你在 App 中创建的内容保存在 iPhone 本地。数据会留在设备上，直到你在 App 内删除相应记录，或从设备上卸载 App。设备或系统备份是否包含 App 数据，取决于你的 iOS 与备份设置。</p></section>
            <section className="legal-block"><h2><span>03</span>导出、导入与分享</h2><p>只有当你主动导出 JSON 完整备份或 CSV 明细，并在 iOS 系统分享面板中选择目标时，文件才会离开 App。你选择的文件保存位置或接收服务，受相应服务的隐私政策约束。导入文件只在设备上用于恢复或合并数据。</p></section>
            <section className="legal-block"><h2><span>04</span>系统权限与第三方服务</h2><p>怪盗手账不请求位置、相机、麦克风、通讯录或照片图库权限。文件导入、导出和分享通过 iOS 提供的系统界面完成。App 不接入第三方广告、分析或云端账本服务。</p></section>
            <section className="legal-block"><h2><span>05</span>删除与保护数据</h2><p>你可以在 App 内逐条或批量删除账目。卸载 App 可能同时移除本机数据，因此建议定期导出 JSON 完整备份，并将文件保存在你信任的位置。CSV 适合查看和分析明细，不作为完整恢复备份。</p></section>
            <section className="legal-block"><h2><span>06</span>本网站</h2><p>本网站不设置行为分析、广告或营销追踪器，也不要求你提交账号信息。通过邮件链接联系开发者时，邮件内容会由你选择的邮件服务处理。</p></section>
            <section className="legal-block"><h2><span>07</span>未成年人</h2><p>怪盗手账不会主动收集任何用户的个人信息，也不会针对未成年人建立个人资料。家长或监护人如有疑问，可以通过下方邮箱联系开发者。</p></section>
            <section className="legal-block"><h2><span>08</span>政策更新与联系</h2><p>如果 App 的数据处理方式发生变化，本政策会同步更新并修改页面日期。关于隐私或数据处理的问题，请发送邮件至 <a href="mailto:wzyzone@outlook.com">wzyzone@outlook.com</a>。</p></section>
          </div>
          <div className="lang-en">
            <p className="intro">Phantom Ledger is an on-device personal finance app. We minimize data handling so your entries, plans, and preferences stay on your own device.</p>
            <section className="legal-block"><h2><span>01</span>Data we collect</h2><p>Phantom Ledger does not require an account and contains no advertising, behavioral analytics SDK, or third-party data collection service. The developer does not receive or upload your entries, categories, notes, budgets, saving goals, recurring items, or app settings.</p></section>
            <section className="legal-block"><h2><span>02</span>How data is stored</h2><p>Content you create is stored locally on your iPhone. It remains there until you delete it in the app or uninstall the app. Whether device or system backups include app data depends on your iOS and backup settings.</p></section>
            <section className="legal-block"><h2><span>03</span>Export, import, and sharing</h2><p>A file leaves the app only when you export a full JSON backup or CSV details and choose a destination in the iOS share sheet. The storage location or receiving service you choose is governed by its own privacy policy. Imported files are processed on-device to restore or merge data.</p></section>
            <section className="legal-block"><h2><span>04</span>Permissions and third parties</h2><p>Phantom Ledger does not request location, camera, microphone, contacts, or photo-library access. File import, export, and sharing use system interfaces provided by iOS. The app does not use third-party advertising, analytics, or cloud-ledger services.</p></section>
            <section className="legal-block"><h2><span>05</span>Deletion and data protection</h2><p>You can delete entries individually or in batches. Uninstalling the app may also remove local data, so we recommend exporting a full JSON backup to a location you trust. CSV is intended for viewing and analysis, not full restoration.</p></section>
            <section className="legal-block"><h2><span>06</span>This website</h2><p>This website does not use behavioral analytics, advertising, or marketing trackers and does not ask you to create an account. If you contact the developer through an email link, your chosen mail service processes that message.</p></section>
            <section className="legal-block"><h2><span>07</span>Children</h2><p>Phantom Ledger does not knowingly collect personal information from any user or build profiles about children. A parent or guardian may contact the developer using the email below with any concern.</p></section>
            <section className="legal-block"><h2><span>08</span>Changes and contact</h2><p>If the app&apos;s data practices change, this policy and its update date will be revised. For privacy or data questions, email <a href="mailto:wzyzone@outlook.com">wzyzone@outlook.com</a>.</p></section>
          </div>
        </article>
      </div>
    </main>
  );
}
