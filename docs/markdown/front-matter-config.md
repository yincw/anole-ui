---
group: 
  title: Front Matter
  order: 2
order: 2
---

# 配置

## 主题相关

参数 | 类型 | 默认值 | 描述
---|---|---|---
 `logo` | `string / false` | `dumi 的 LOGO` | 导航栏上的站点 LOGO
 `name` | `string` | `undefined` | 导航栏上的站点名称，不配置时不展示。
 `nav` | `Navs / {mode: "override" / "append" / "prepend", value: Navs}` | `约定式导航` | 配置导航栏上的导航项，不配置时默认为约定式导航
  **`docVersions`** | `IDocVersion` | `null` | 在导航栏中显示当前文档版本或者多文档本下拉选择框，默认第一个属性为当前文档版本
 **`moreLinks`** | `IMoreLink[] / Record<string, IMoreLink[]>` | `null` | 在导航栏中配置更多生态系统链接
 **`sidebarEnhance`** | `Record<string, SidebarEnhanceItems>` | `undefined` | 由于 dumi 暂只支持两级侧边栏，如果定制需求需要支持三级侧边栏或者想完全定制侧边栏展示的，可以使用该参数，配置参数参考 ant-design menu 组件的 items 属性。
  `rtl` | `boolean` | `false` | 是否开启 RTL 切换，配置为 true 时导航栏会展示 RTL 按钮
 `socialLinks` | `Object` | `null` | 导航栏右侧增加一些社交网站的外链图标
 `sidebar` | `string` | `约定式侧边菜单` | 配置侧边栏菜单，key 为导航路由，配置后对该导航下的所有一级子页面生效
 **`sidebarGroupModePath`** | `Array<string> / true` | `[]` | 左侧导航栏是否需要作为分组处理
 `editLink` | `boolean / string` | `true` | 是否在 Markdown 页面内容区域底部展示当前文档的编辑链接。
 `lastUpdated` | `boolean` | `true` | 是否在 Markdown 页面内容区域底部展示当前文档的最后更新时间。
 `footer` | `string / false` | `Powered by dumi` | 配置页脚内容，可以是 HTML，配置 false 时不展示
 **`footerLinks`** | `FooterColumn[] / Record<string, FooterColumn[]>` | `null` | footer 上方友情链接模块，例如更多产品、社区链接等。
 `showLineNum` | `boolean` | `false` | 是否在代码块中展示行号，配置为 true 时会展示代码行号。
`nprogress` | `boolean` | `true` | 切换页面时是否在页面顶部展示进度条。
 `prefersColor` | `{ default: 'light' / 'dark' / 'auto'; switch: boolean }` | `{ default: 'light', switch: true }` | 配置站点的主题色，其中 default 配置项为默认主题色，默认为亮色模式

- https://d.umijs.org/config#%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE%E9%A1%B9
- https://kuangpf.com/dumi-theme-antd/config/base

## 主页相关

参数 | 类型 | 默认值 | 描述
---|---|---|---
 `bannerConfig` | `IBannerConfig` | `bannerConfigDefault` | 首页头部 banner 图配置选项
 `title` | `string / Record<string, string>` | `Dumi Theme AntD` | 配置首页首屏区域的大标题。
 `description` | `string / Record<string, string>` | `null` | 配置首页首屏区域的简介文字。
 `actions` | `IAction[] / Record<string, IAction[]>` | `null` | 配置首页首屏区域的操作按钮。
 `features` | `IFeature[] / Record<string, IFeature[]>` | `null` | 以首页形式呈现，用于每行 3 个的形式展示组件库的特性。

- https://d.umijs.org/config
- https://kuangpf.com/dumi-theme-antd/config/base
