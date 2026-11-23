import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

const rawBase = process.env.BASE_PATH || '/docusaurus-v3/'
const normalizedBase = rawBase.startsWith('/') ? rawBase : `/${rawBase}`
const baseUrl = normalizedBase.endsWith('/') ? normalizedBase : `${normalizedBase}/`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docusaurus v3 基准实测',
  tagline: '锁定版本 @docusaurus/core@3.10.2 · MDX 3 + _category_.json + KaTeX + Mermaid 12',
  url: 'https://page.2401.xyz',
  baseUrl,
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],
  plugins: [
    function ignoreOptionalMermaidElkPlugin() {
      return {
        name: 'ignore-optional-mermaid-elk',
        configureWebpack() {
          return {
            resolve: {
              alias: {
                '@mermaid-js/layout-elk': false,
              },
            },
          }
        },
      }
    },
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          numberPrefixParser: false,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: `${baseUrl}katex/katex.min.css`,
      type: 'text/css',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Docusaurus v3 (3.10.2)',
        items: [
          {
            to: '/01-annotations',
            label: '01. 专属标注',
            position: 'left',
          },
          {
            to: '/02-diagrams',
            label: '02. 流程图',
            position: 'left',
          },
          {
            to: '/03-math',
            label: '03. 数学公式',
            position: 'left',
          },
          {
            to: '/04-directory/',
            label: '04. 目录结构',
            position: 'left',
          },
          {
            href: 'https://page.2401.xyz/',
            label: '对比总站',
            position: 'right',
          },
          {
            href: 'https://github.com/page2401/docusaurus-v3',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: 'page2401/docusaurus-v3 · Static Site Generator Benchmark Suite',
      },
    }),
}

export default config
