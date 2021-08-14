const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '阿猛的博客',
  tagline: '科技改变世界，技术成就未来！',
  url: 'https://ameng.site',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'ameng404', // Usually your GitHub org/user name.
  projectName: 'ameng404.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '阿猛的博客',
      logo: {
        alt: '阿猛的博客',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: '前端',
        },
        { to: '/blog', label: '博客', position: 'left' },
        { to: '/timeline', label: '时间轴', position: 'right' },
        { to: '/works', label: '作品', position: 'right' },
        { to: '/about', label: '关于', position: 'right' },
        {
          href: 'https://github.com/Ameng404',
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
              href: 'https://github.com/Ameng404',
            },
          ],
        },
      ],
      copyright: `<p>Copyright ©2018 - ${new Date().getFullYear()} 阿猛的文档, Built with Docusaurus.</p><p><a href="http://beian.miit.gov.cn/" >冀ICP备19004388号-1</a></p><a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="/img/creative-commons-license-icon.png" /></a><br />本站所有内容遵循 <a rel="license" href="https://creativecommons.org/licenses/by-nc/4.0/deed.zh-Hans" >CC BY-NC 4.0 协议</a>，转载须注明署名和出处，且不可用于商业用途。若与其他同步平台协议冲突，以本网站为准。`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
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
};
