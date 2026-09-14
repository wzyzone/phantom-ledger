# 怪盗手账 / Phantom Ledger

怪盗手账的官方产品网站，包含产品介绍、真实界面、隐私政策与使用支持。

- 网站：<https://wzyzone.github.io/phantom-ledger/>
- 隐私政策：<https://wzyzone.github.io/phantom-ledger/privacy>
- 使用支持：<https://wzyzone.github.io/phantom-ledger/support>

## 本地运行

```bash
npm install
npm run dev
```

## 检查与构建

```bash
npx oxlint app components/home-experience.tsx components/site-chrome.tsx next.config.ts vite.config.ts
npm run build
```

推送到 `main` 后，GitHub Actions 会生成静态页面并发布到 GitHub Pages。
