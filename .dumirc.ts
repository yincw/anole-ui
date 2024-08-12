import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-antd/dist/defineThemeConfig';

export default defineConfig({
  base: '/anole-ui/',
  publicPath: '/anole-ui/',
  // 国际化
  // locales: [
  //   { id: 'zh-CN', name: '中文' },
  //   { id: 'en-US', name: 'EN' },
  // ],

  themeConfig: defineThemeConfig({
    logo: '/rework.svg',
    name: 'Rework',

    nav: [
      { title: '主页', link: '/' },
      { title: '文档页', link: '/markdown' },
    ],

    rtl: false,
    // 国际化图标前缀
    localesEnhance: [
      { id: 'zh-CN', switchPrefix: '中' },
      { id: 'en-US', switchPrefix: 'en' }
    ],
    socialLinks: {
      github: 'https://github.com/yincw/',
    },

    // 文档
    showLineNum: true,
    sidebarGroupModePath: true, // 侧边栏是否以分组形式展现（非多级菜单形式）

    // 主页
    title: 'Dumi Theme Ant Design',
    description: {
      'zh-CN': 'Ant Design 5.0 官网风格类似的 dumi2 主题插件',
      'en-US': 'dumi2 theme similar to antd v5 website'
    },
    actions: {
      'zh-CN': [
        {
          type: 'primary',
          text: '开始使用',
          link: '/markdown'
        },
        {
          text: '配置',
          link: '/markdown/front-matter-'
        }
      ],
      'en-US': [
        {
          type: 'primary',
          text: 'Start',
          link: '/markdown'
        },
        {
          text: 'Config',
          link: '/markdown/front-matter-'
        }
      ]
    },
    features: {
      'zh-CN': [
        {
          title: '内置全文搜索',
          details:
            '不需要接入任何三方服务，标题、正文、demo 等内容均可被搜索，支持多关键词搜索，且不会带来产物体积的增加。'
        },
        {
          title: '更好的编译性能',
          details:
            '通过结合使用 Umi 4 MFSU、esbuild、SWC、持久缓存等方案，带来比 dumi 1.x 更快的编译速度。'
        },
        {
          title: 'SSR',
          details: '全面支持 SSR，让文档具有更好的首屏加载速度、更好的SEO效果、更快的内容到达率。'
        },
        {
          title: '样式风格统一',
          details:
            '基于 antd 5.0 CSS-in-JS 样式加持，全面统一 dumi 内置样式，同时支持自定义主题加载。'
        },
        {
          title: '功能增强',
          details:
            '在 dumi 内置 markdown 增强基础上新增特有 FrontMatter 配置，并且内置多种组件，使文档展示效果得以提升。'
        },
        {
          title: '开箱即用',
          details: '接入简单，安装即使用，全面融入 Ant Design 风格，内置主题切换，紧凑模式等功能。'
        }
      ],
      'en-US': [
        {
          title: 'Built-in Full-Text search',
          details:
            'There is no need to access any third-party services, and the contents such as title, text, demo, etc. can be searched, which supports multi-keyword search and will not increase the product volume.'
        },
        {
          title: 'Better Compilation Performance',
          details:
            'By combining Umi 4 MFSU, esbuild, SWC, persistent cache and other schemes, it brings faster compilation speed than dumi1.x.'
        },
        {
          title: 'SSR',
          details:
            'Fully supports SSR, allowing documents to have better first-screen loading speed, better SEO effect, and faster content arrival rate.'
        },
        {
          title: 'Uniform style',
          details:
            "Based on antd 5.0 CSS-in-JS style support, it fully unifies dumi's built-in styles and supports custom theme loading."
        },
        {
          title: 'Function enhancement',
          details:
            "Based on dumi's built-in markdown enhancement, a unique FrontMatter configuration is added, and a variety of built-in components improve the document display effect."
        },
        {
          title: 'Simple Use',
          details:
            'Easy access, installation and use, fully integrated into Ant Design style, built-in theme switching, compact mode and other functions.'
        }
      ]
    },

    // hd: {
    //   rules: [
    //     { maxWidth: 375, mode: 'vw', options: [100, 750] },
    //     { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] },
    //   ],
    // },
    // deviceWidth: 375,
  }),
});
