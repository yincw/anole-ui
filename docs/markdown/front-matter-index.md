---
group: 
  title: Front Matter
  order: 1
order: 2
---

# Front Matter

参数 | 类型 | 默认值 | 描述
---|---|---|---
 `title` | `string` | 自动识别 | 配置页面标题，该值会用于 `<title>` 标签、侧边菜单项展示，默认值为该文档的一级标题，如果不存在则使用 Markdown 文件名作为默认值。
 `description` | `string` | `undefined` | 配置页面简介，该值会用于生成 `<meta>` 标签。
 `keywords` | `string[]` | `undefined` | 配置页面关键词，该值会用于生成 `<meta>` 标签。
 `debug` | `boolean` | `false` | 将该页面标记为调试型文档，它也只会在开发环境下展示。

 - https://d.umijs.org/config/markdown

## 文档页相关

参数 | 类型 | 默认值 | 描述
---|---|---|---
 `nav` | `string / { title: string; order: number; second: string / { title: string; order: string } }` | `undefined` | 配置当前页所属的一级导航及二级导航
 `group` | `string / { title: string; order: number }` | `undefined` | 配置当前页所属的侧边菜单分组，未配置时不会展示分组。
 `order` | `number` | `undefined` | 配置当前页面在侧边菜单中的排序，未配置时按照文件名排序。
 `sidebar` | `Boolean` | `true` | 控制侧边栏菜单的显示或隐藏。
 `type` | `string / { title: string; order: number }` | `undefined` | 配置二级侧边栏
 `tag` | `string / { title: string; color: string }` | `true` | 展示菜单栏更新或者标识状态。color 可选值：processing、success、warning。

- https://d.umijs.org/config/markdown
- https://kuangpf.com/dumi-theme-antd/config/markdown

## 主页相关

参数 | 类型 | 默认值 | 描述
---|---|---|---
 `hero` | `Object` | `null` | 配置 hero 后，该页面将会以首页形式呈现
  -`title` | `string` | `null` | 首页首屏区域的大标题
  -`description` | `string` | `null` | 首页首屏区域的简介文字，可以是 HTML 文本。
  -`actions` | `Array` | `null` | 首页首屏区域的操作按钮，最后一个按钮会作为主按钮展示。
 `features` | `Object` | `null` | 配置后该页面将会以首页形式呈现，用于每行 3 个的形式展示组件库的特性，

- https://d.umijs.org/config/markdown#%E9%BB%98%E8%AE%A4%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE%E9%A1%B9

## Demo 相关

参数 | 类型 | 默认值 | 描述
---|---|---|---
 `demo` | `object` | - | 控制 demo 的展示方式
  -`cols` | `number` | `1` | 配置 demo 分栏展示的列数，默认值为 1，建议不要超过 3。注意，仅用换行符分隔的 code 标签 demo 会参与分栏
  -`tocDepth` | `number` | `3` | 配置 demo 标题的 toc 层级，默认值为 3。

 - https://d.umijs.org/config/markdown
