
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/','c79'),
    exact: true
  },
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/about/',
    component: ComponentCreator('/about/','0fa'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','569'),
    exact: true
  },
  {
    path: '/blog/hello-world',
    component: ComponentCreator('/blog/hello-world','07a'),
    exact: true
  },
  {
    path: '/blog/hola',
    component: ComponentCreator('/blog/hola','6e6'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','738'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','2fe'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','263'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','8b3'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','015'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search','97e'),
    exact: true
  },
  {
    path: '/works/',
    component: ComponentCreator('/works/','32a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','4ef'),
    routes: [
      {
        path: '/docs/css/css居中问题详解',
        component: ComponentCreator('/docs/css/css居中问题详解','3d7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/css/css图片问题处理详解',
        component: ComponentCreator('/docs/css/css图片问题处理详解','ca0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/css/css文字问题处理详解',
        component: ComponentCreator('/docs/css/css文字问题处理详解','4eb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/css/css选择器优先级',
        component: ComponentCreator('/docs/css/css选择器优先级','dbc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/css/flex布局教程',
        component: ComponentCreator('/docs/css/flex布局教程','d8f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/css/grid布局教程',
        component: ComponentCreator('/docs/css/grid布局教程','420'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/javascript/ES2016新特性',
        component: ComponentCreator('/docs/javascript/ES2016新特性','666'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/javascript/ES2019新特性',
        component: ComponentCreator('/docs/javascript/ES2019新特性','7a6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/javascript/ES2020新特性',
        component: ComponentCreator('/docs/javascript/ES2020新特性','259'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/javascript/ES2021新特性',
        component: ComponentCreator('/docs/javascript/ES2021新特性','ef4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
