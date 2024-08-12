---
group: 
  title: Markdown
  order: 1
order: 4
---

# 选项卡

## 依赖安装分组

:::code-group

```sh [npm]
$ npx vitepress init
```

```sh [pnpm]
$ pnpm vitepress init
```

```sh [yarn]
$ yarn vitepress init
```

```sh [bun]
$ bun vitepress init
```

:::

### InstallDependencies

<InstallDependencies 
  npm='$ npm install dumi-theme-antd ' 
  pnpm='$ pnpm install dumi-theme-antd ' 
  yarn='$ yarn add dumi-theme-antd' 
/>

### BashOSPlatform

<BashOSPlatform 
  windows='winget install Docker.DockerDesktop' 
  macos='$ brew install --cask docker' 
  linux='$ sudo apt-get install docker-ce docker-ce-cli containerd.io'
  ios='$ swift package init --name MyCLI --type executable' 
  android='$ apksigner verify --print-certs path/to/your/app.apk'
/>

## 代码分组

:::code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::
