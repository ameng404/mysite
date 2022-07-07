const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const footer = require('./footer');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Hello, I am Ameng!',
  tagline: '科技改变世界，技术成就未来！',
  url: 'https://iameng.cn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'Ameng', // Usually your GitHub org/user name.
  projectName: 'mysite', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'iameng.cn',
      logo: {
        alt: '阿猛的博客',
        src: 'img/logo.jpeg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: '文档',
        },
        { to: '/blog', label: '博客', position: 'left' },
        { to: '/works', label: '作品', position: 'left' },
        { to: '/about', label: '关于', position: 'left' },
        {
          href: 'https://github.com/ameng404',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '社交媒体',
          items: [
            {
              label: '知乎',
              href: 'https://www.zhihu.com/people/yin-meng-51-78',
            },
            {
              label: '掘金',
              href: 'https://juejin.cn/user/2752832847498935',
            },
            {
              label: 'CSDN',
              href: 'https://blog.csdn.net/qq_35858704',
            },
            {
              label: '博客园',
              href: 'https://www.cnblogs.com/ameng666/',
            },
            {
              label: '哔哩哔哩',
              href: 'https://space.bilibili.com/23202023',
            },
          ],
        },
        {
          title: '友情链接',
          items: [
            {
              label: '阮一峰',
              href: 'http://www.ruanyifeng.com/',
            },
            {
              label: '张鑫旭',
              href: 'https://www.zhangxinxu.com/',
            },
            {
              label: '阿西河',
              href: 'https://www.axihe.com/',
            },
            {
              label: '峰华',
              href: 'https://zxuqian.cn/',
            },
            {
              label: '大漠',
              href: 'https://www.w3cplus.com/',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '博客',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ameng404',
            },
          ],
        },
      ],
      copyright: footer,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    algolia: {
      apiKey: 'YOUR_API_KEY',
      indexName: 'YOUR_INDEX_NAME',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: see doc section below
      appId: 'YOUR_APP_ID',

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
  },
  plugins: ["docusaurus-plugin-less"],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
  },
};
