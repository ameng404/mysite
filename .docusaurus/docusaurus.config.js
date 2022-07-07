export default {
  "title": "Hello, I am Ameng!",
  "tagline": "科技改变世界，技术成就未来！",
  "url": "https://iameng.cn",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.png",
  "organizationName": "Ameng",
  "projectName": "mysite",
  "themeConfig": {
    "navbar": {
      "title": "iameng.cn",
      "logo": {
        "alt": "阿猛的博客",
        "src": "img/logo.jpeg"
      },
      "items": [
        {
          "type": "doc",
          "docId": "intro",
          "position": "left",
          "label": "文档",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "to": "/blog",
          "label": "博客",
          "position": "left"
        },
        {
          "to": "/works",
          "label": "作品",
          "position": "left"
        },
        {
          "to": "/about",
          "label": "关于",
          "position": "left"
        },
        {
          "href": "https://github.com/ameng404",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "社交媒体",
          "items": [
            {
              "label": "知乎",
              "href": "https://www.zhihu.com/people/yin-meng-51-78"
            },
            {
              "label": "掘金",
              "href": "https://juejin.cn/user/2752832847498935"
            },
            {
              "label": "CSDN",
              "href": "https://blog.csdn.net/qq_35858704"
            },
            {
              "label": "博客园",
              "href": "https://www.cnblogs.com/ameng666/"
            },
            {
              "label": "哔哩哔哩",
              "href": "https://space.bilibili.com/23202023"
            }
          ]
        },
        {
          "title": "友情链接",
          "items": [
            {
              "label": "阮一峰",
              "href": "http://www.ruanyifeng.com/"
            },
            {
              "label": "张鑫旭",
              "href": "https://www.zhangxinxu.com/"
            },
            {
              "label": "阿西河",
              "href": "https://www.axihe.com/"
            },
            {
              "label": "峰华",
              "href": "https://zxuqian.cn/"
            },
            {
              "label": "大漠",
              "href": "https://www.w3cplus.com/"
            }
          ]
        },
        {
          "title": "更多",
          "items": [
            {
              "label": "博客",
              "to": "/blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/ameng404"
            }
          ]
        }
      ],
      "copyright": "<p>Copyright ©2018 - 2022 阿猛的文档, Built with Docusaurus.</p>\n<p><a href=\"http://beian.miit.gov.cn/\" >冀ICP备19004388号</a></p>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc/4.0/\">\n<img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"/img/creative-commons-license-icon.png\" /></a>\n<br />本站所有内容遵循 <a rel=\"license\" href=\"https://creativecommons.org/licenses/by-nc/4.0/deed.zh-Hans\" >\nCC BY-NC 4.0 协议</a>\n，转载须注明署名和出处，且不可用于商业用途。若与其他同步平台协议冲突，以本网站为准。"
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "algolia": {
      "apiKey": "YOUR_API_KEY",
      "indexName": "YOUR_INDEX_NAME",
      "contextualSearch": true,
      "appId": "YOUR_APP_ID",
      "searchParameters": {}
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false
  },
  "plugins": [
    "docusaurus-plugin-less"
  ],
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/bytedance/Desktop/mysite/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/Users/bytedance/Desktop/mysite/src/css/custom.css"
        }
      }
    ]
  ],
  "i18n": {
    "defaultLocale": "zh-cn",
    "locales": [
      "zh-cn"
    ],
    "localeConfigs": {}
  },
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};