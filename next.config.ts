import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = isGitHubPages
  ? {
      output: 'export',
      assetPrefix: '/phantom-ledger',
      images: { unoptimized: true },
    }
  : {};

export default nextConfig;
