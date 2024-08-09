---
group: 
  title: Markdown
  order: 1
order: 1
---

# Markdown 扩展

## 标题

Markdown 语法 | HTML 标签 | 说明
---|---|---
 `#` | h1 | 标题 1
 `##` | h2 | 标题 2
 `###` | h3 | 标题 3
 `####` | h4 | 标题 4
 `#####` | h5 | 标题 5
 `######` | h6 | 标题 6

- https://commonmark.org/help/

## 段落

正文内容 *Italic*、**Bold**、\
换行

```js
// p、em、strong、br

// 正文内容 *Italic*、**Bold**、\
// 换行
```

## 链接

- [Front Matter](/front-matter/front-matter)
- [Link](http://a.com)

```js
// a

// - [Front Matter](/front-matter/front-matter) // 内部链接
// - [Link](http://a.com) // 外部链接
```

## 图片 

![Image](/vitepress-logo-large.webp)

```js
// img

// ![Image](/vitepress-logo-large.webp)
```

<ImagePreview pure>
  <img description="设计原则" src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*aFiGRbIvuH4AAAAAAAAAAABkARQnAQ" />
</ImagePreview>

- https://kuangpf.com/dumi-theme-antd/guide/builtins-image-preview


## 引用

> Blockquote
>
> > Nested Blockquote
>
> — Docusaurus

```js
// blockquote

// > Blockquote
// >
// > > Nested Blockquote
// >
// > — Docusaurus
```

## 分割线

---

```js
// hr

// ---
```

## 代码

### 内联代码

`code`

```js
// code

// `code`
```

### 代码块

[代码块](/markdown/code)

- https://d.umijs.org/guide/write-demo

## 列表

### 无序列表

- List Item
- List Item

```js
// ul > li

// - List Item
// - List Item
```

### 有序列表

1. List Item
2. List Item

```js
// ol > li

// 1. List Item
// 2. List Item
```

### 嵌套列表

1. List Item
   - List Item
   - List Item
2. List Item
   - List Item
   - List Item

```js
// ol > li

// 1. List Item
//    - List Item
//    - List Item
// 2. List Item
//    - List Item
//    - List Item
```

## 表格

表头1 | 表头2
---|---
单元格1 | 单元格2
单元格1 | 单元格2

```js
// table > thead、tbody > tr > th、td

// 表头1 | 表头2
// ---|---
// 单元格1 | 单元格2
```

## 自定 API 表格

- https://d.umijs.org/guide/auto-api-table
