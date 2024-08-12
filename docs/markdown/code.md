---
group: 
  title: Markdown
  order: 1
order: 2
demo:
  cols: 2
---

# 代码

## 语法高亮

- `javascript`/`typescript`/`js`/`ts`
- `html`/`jsx`/`tsx`/`vue` 
- `css`/`less`/`scss`
- `json`/`yaml`/`yml`
- `markdown`/`md`/`mdx`
- `graphql`/`gql`
- `text`/`txt`/`plain`
- `dart`
- `ansi`
- `sh`

:::code-group

```javascript [JS]
export default {
  name: 'MyComponent'
  // ...
}
```

```typescript [TS]
export default {
  name: 'MyComponent'
  // ...
}
```

```html [HTML]
<ul>
  <li>
    text
  </li>
</ul>
```

```jsx [JSX]
export default function () {
  return (
    <ul>
      <li>
        text
      </li>
    </ul>
  );
}
```

```css [CSS]
.text-center {
  text-align: center;
}
```

```less [Less]
.text {
  &-center {
    text-align: center;
  }
}
```

```vue [Vue]
<template>
<ul>
  <li>
    text
  </li>
</ul>
</template>

<script>
export default {
  name: 'MyComponent'
  // ...
}
</script>

<style>
.text-center {
  text-align: center;
}
</style>
```

```json [JSON]
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
}
```

:::

## 代码块

- `pure` 源代码展示，不渲染代码块
- `{4}` 单行高亮
- `{6-8}` 多行高亮

### 不渲染

直接展示源代码，不渲染为 Demo。

```jsx | pure
import React from 'react';

export default () => (
  <div>
    <h1>Hello dumi!</h1>
  </div>
);
```

### 高亮行

源代码模式下，高亮行。

```jsx {4-6} | pure
import React from 'react';

export default () => (
  <div>
    <h1>Hello dumi!</h1>
  </div>
);
```

## 外部导入

- `skip` 跳过解析
- `cols` 分栏 `demo` => `cols`

### 跳过解析

外部导入源码，通过给定 `skip` 属性，跳过 Demo 解析。

<code src="../../demos/cols.tsx" skip></code>
<code src="../../demos/cols.tsx"></code>

### 分栏

外部导入源码，通过给定 Front Matter `demo: cols: 2` 使 Demo 分栏显示。

<code src="../../demos/cols.tsx"></code>
<code src="../../demos/cols.tsx"></code>
<code src="../../demos/cols.tsx"></code>
<code src="../../demos/cols.tsx"></code>

## Demo 渲染控制

- `background` 修改背景色
- `title` 标题
- `description` 简介
- `transform` 捕获 fixed
- `compact` 移除内边距
- `inline` 直接嵌入
- `debug` 仅在开发环境展示
- `iframe` iframe 模式

### 背景色

```jsx
/**
 * background: '#f6f7f9'
 */

import React from 'react';

export default () => null;
```

### 标题 和 描述

```jsx
/**
 * title: 我是标题
 * description: 我是简介，我可以用 `Markdown` 来编写
 */

import React from 'react';

export default () => null;
```

### 捕获 fixed

```jsx
/**
 * transform: true
 */

import React from 'react';

export default () => (
  <h1 style={{ position: 'fixed', top: 0, left: 0 }}>我不会飞出去</h1>
);
```

### 移除内边距

```jsx
/**
 * compact: true
 */

import React from 'react';

export default () => '我会贴边站';
```

### 直接嵌入

```jsx
/**
 * inline: true
 */

import React from 'react';

export default () => <p>我会被直接嵌入</p>;
```

### 仅在开发环境展示

```jsx
/**
 * debug: true
 */

import React from 'react';

export default () => '我仅在开发环境下展示';
```

### iframe 模式

```jsx
/**
 * iframe: true
 * compact: true
 */
import React from 'react';

export default () => (
  <h2
    style={{
      boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
      padding: '5px 20px',
      margin: 0,
    }}
  >
    iframe 模式
  </h2>
);
```

- https://d.umijs.org/guide/write-demo
- https://d.umijs.org/guide/markdown#line-highlighting
