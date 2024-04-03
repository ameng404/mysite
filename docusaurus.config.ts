import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const footer = `<p>Copyright ©2018 - ${new Date().getFullYear()} 阿猛的文档, Built with Docusaurus.</p>
<p><a href="http://beian.miit.gov.cn/" >冀ICP备19004388号</a></p>
<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
<img alt="Creative Commons License" style="border-width:0" src="/img/creative-commons-license-icon.png" /></a>
<br />本站所有内容遵循 <a rel="license" href="https://creativecommons.org/licenses/by-nc/4.0/deed.zh-Hans" >
CC BY-NC 4.0 协议</a>
，转载须注明署名和出处，且不可用于商业用途。若与其他同步平台协议冲突，以本网站为准。
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?8c02b358b6e2bde57553754983dcb6eb";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
`;

const config: Config = {
  title: "Hello, I am Ameng!",
  tagline: "科技改变世界，技术成就未来！",
  favicon: "img/logo.jpeg",

  url: "https://ameng.site",
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ameng404", // Usually your GitHub org/user name.
  projectName: "mysite", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/ameng404/mysite/tree/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/ameng404/mysite/tree/master/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Ameng",
      logo: {
        alt: "阿猛的博客",
        src: "img/logo.jpeg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "文档",
        },
        { to: "/blog", label: "博客", position: "left" },
        { to: "/about", label: "关于", position: "right" },
        {
          href: "https://github.com/ameng404",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "社交媒体",
          items: [
            {
              label: "知乎",
              href: "https://www.zhihu.com/people/yin-meng-51-78",
            },
            {
              label: "掘金",
              href: "https://juejin.cn/user/2752832847498935",
            },
            {
              label: "CSDN",
              href: "https://blog.csdn.net/qq_35858704",
            },
            {
              label: "博客园",
              href: "https://www.cnblogs.com/ameng666/",
            },
            {
              label: "哔哩哔哩",
              href: "https://space.bilibili.com/23202023",
            },
          ],
        },
        {
          title: "友情链接",
          items: [
            {
              label: "阮一峰",
              href: "http://www.ruanyifeng.com/",
            },
            {
              label: "张鑫旭",
              href: "https://www.zhangxinxu.com/",
            },
            {
              label: "阿西河",
              href: "https://www.axihe.com/",
            },
            {
              label: "峰华",
              href: "https://zxuqian.cn/",
            },
            {
              label: "大漠",
              href: "https://www.w3cplus.com/",
            },
          ],
        },
        {
          title: "更多",
          items: [
            {
              label: "博客",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/ameng404",
            },
          ],
        },
      ],
      copyright: footer,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
