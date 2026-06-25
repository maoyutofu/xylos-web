/* Xylos i18n — single source of truth for all copy */
const I18N = {
  zh: {
    /* ── Nav ── */
    nav_github: 'View on GitHub',

    /* ── Hero ── */
    hero_title: 'Xylos — 专为 WebDAV 而生的极简网盘客户端',
    hero_subtitle: '开源、轻量、即装即用。支持 Basic / Digest / Bearer Token 认证，让你的 WebDAV 服务器秒变本地磁盘。',
    hero_cta_download: '免费下载',
    hero_cta_github: 'View on GitHub',

    /* ── Features ── */
    features_heading: '核心特性',
    features_subtitle: '为 WebDAV 场景精简到极致，不堆砌功能。',

    features: [
      {
        icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
        title: '极简体验',
        desc: '没有多余功能，打开即用，文件管理像本地文件夹一样自然。'
      },
      {
        icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
        title: '多认证支持',
        desc: 'Basic Auth / Digest Auth / Bearer Token，覆盖主流 WebDAV 服务。'
      },
      {
        icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
        title: '跨平台',
        desc: '支持 macOS / Windows / Linux，一致的交互体验。'
      },
      {
        icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
        title: '多服务器管理',
        desc: '同时连接多个 WebDAV 服务器，一键切换。'
      },
      {
        icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
        title: '传输管理',
        desc: '查看和管理文件上传 / 下载任务队列。'
      },
      {
        icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
        title: '离线文件',
        desc: '标记文件为离线可用，无网络也能访问。'
      }
    ],

    /* ── Auth Methods ── */
    auth_heading: '认证方式',
    auth_subtitle: '三种主流认证协议，覆盖几乎所有 WebDAV 服务提供商。',
    auth_methods: [
      {
        name: 'Basic Auth',
        desc: '用户名 + 密码（Base64 编码）',
        scenario: '自建 WebDAV / Nextcloud / ownCloud'
      },
      {
        name: 'Digest Auth',
        desc: '摘要认证，密码不直接传输',
        scenario: '对安全性有更高要求的环境'
      },
      {
        name: 'Bearer Token',
        desc: '令牌认证',
        scenario: '云服务 API / OAuth2 兼容服务'
      }
    ],

    /* ── Screenshots ── */
    screenshots_heading: '界面预览',
    screenshots_subtitle: '简洁直观的界面，管理文件就像操作本地文件夹。',
    scr_desk_heading: '桌面端',
    scr_mobi_heading: '移动端',
    scr_list: '列表视图',
    scr_grid: '网格视图',
    scr_server: '服务器管理',

    /* ── Get Started ── */
    started_heading: '开始使用',
    started_subtitle: '选择你的平台，即刻开始。',
    started_tab_releases: 'GitHub Releases',
    started_tab_source: '从源码构建',
    started_download: '下载最新版',
    started_source_intro: '克隆仓库并构建：',
    started_star_on_github: '⭐ Star on GitHub',

    /* ── Footer ── */
    footer_copyright: '© 2026 Xylos. All rights reserved.',
    footer_contact: '社区反馈',

    /* ── Meta ── */
    meta_title: 'Xylos — 专为 WebDAV 而生的极简开源网盘客户端',
    meta_desc: 'Xylos 是一个开源、轻量的 WebDAV 协议网盘客户端。支持 Basic / Digest / Bearer Token 认证，支持 macOS / Windows / Linux，让你管理远程文件像操作本地文件夹一样简单。',
    meta_og_title: 'Xylos — 极简 WebDAV 网盘客户端'
  },

  en: {
    /* ── Nav ── */
    nav_github: 'View on GitHub',

    /* ── Hero ── */
    hero_title: 'Xylos — A Minimal WebDAV Client, Just Works',
    hero_subtitle: 'Open source, lightweight, ready to go. Supports Basic, Digest, and Bearer Token auth — mount your WebDAV server as a local drive in seconds.',
    hero_cta_download: 'Download Free',
    hero_cta_github: 'View on GitHub',

    /* ── Features ── */
    features_heading: 'Core Features',
    features_subtitle: 'Stripped down to the essentials for WebDAV. No feature bloat.',

    features: [
      {
        icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
        title: 'Minimal',
        desc: 'No bloat. Open and go. File management as natural as your local folder.'
      },
      {
        icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
        title: 'Multi-Auth',
        desc: 'Basic, Digest, and Bearer Token auth — works with all major WebDAV providers.'
      },
      {
        icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
        title: 'Cross-Platform',
        desc: 'macOS, Windows, Linux — consistent experience across all platforms.'
      },
      {
        icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
        title: 'Multi-Server',
        desc: 'Connect to multiple WebDAV servers and switch with one click.'
      },
      {
        icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
        title: 'Transfers',
        desc: 'View and manage upload/download task queue at a glance.'
      },
      {
        icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
        title: 'Offline',
        desc: 'Mark files for offline access — available without internet.'
      }
    ],

    /* ── Auth Methods ── */
    auth_heading: 'Authentication',
    auth_subtitle: 'Three major auth protocols, covering virtually every WebDAV provider out there.',
    auth_methods: [
      {
        name: 'Basic Auth',
        desc: 'Username + Password (Base64-encoded)',
        scenario: 'Self-hosted WebDAV / Nextcloud / ownCloud'
      },
      {
        name: 'Digest Auth',
        desc: 'Hashed challenge-response, no plaintext password',
        scenario: 'High-security environments'
      },
      {
        name: 'Bearer Token',
        desc: 'Token-based authentication',
        scenario: 'Cloud APIs / OAuth2-compatible services'
      }
    ],

    /* ── Screenshots ── */
    screenshots_heading: 'Screenshots',
    screenshots_subtitle: 'Clean and intuitive interface — managing files feels just like your local folders.',
    scr_desk_heading: 'Desktop',
    scr_mobi_heading: 'Mobile',
    scr_list: 'List View',
    scr_grid: 'Grid View',
    scr_server: 'Server Management',

    /* ── Get Started ── */
    started_heading: 'Get Started',
    started_subtitle: 'Choose your platform and start in seconds.',
    started_tab_releases: 'GitHub Releases',
    started_tab_source: 'Build from Source',
    started_download: 'Download Latest',
    started_source_intro: 'Clone and build:',
    started_star_on_github: '⭐ Star on GitHub',

    /* ── Footer ── */
    footer_copyright: '© 2026 Xylos. All rights reserved.',
    footer_contact: 'Community',

    /* ── Meta ── */
    meta_title: 'Xylos — A Minimal Open-Source WebDAV Client',
    meta_desc: 'Xylos is an open-source, lightweight WebDAV client. Supports Basic, Digest, and Bearer Token auth. Available on macOS, Windows, and Linux. Manage remote files as naturally as your local folders.',
    meta_og_title: 'Xylos — Minimal WebDAV Client'
  }
};
