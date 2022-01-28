# umi project

一个基于 react + umi + dva + typescript + less + ... 的脚手架项目

## 项目仓库地址

[项目 GitHub 地址](https://github.com/kivet-h/web-sample-code/blob/feature%2Fprolayout/README.md)

分支说明：

feature/prolayout：兼容可使用多套菜单

feature/layout：一套菜单

> feature/layout 分支没有配置代码规范相关的东西，最好看 feature/prolayout 分支，这上面比较全面，后期有空会重新整理一遍，并都配置上

## 项目介绍

- 项目结构

后期可能会根据实际项目开发有所改动，不过大体结构不会发生变化。

```base
umi-demo-project
├─ config
│  ├─ config.dev.ts              # 测试环境项目配置
│  ├─ config.local.ts            # 本地环境项目配置
│  ├─ config.prod.ts             # 正式环境项目配置
│  ├─ config.ts                  # 项目的公共配置
│  ├─ routes.config.ts           # 整合项目中所有路由配置文件
│  └─ theme.config.ts            # 配置主题样式
├─ mock
│  └─ global.ts                  # 数据 mock 文件（一个demo文件）
├─ src                           # 项目源码目录
│  ├─ access.ts                  # 项目权限配置文件
│  ├─ app.tsx                    # 项目运行时配置文件
│  ├─ global.less                # 全局样式文件
│  ├─ assets                     # 项目静态文件目录，存放一些如图片，本地模板文件等
│  │  └─ images
│  │     ├─ index.ts             # 图片导出文件
│  │     └─ logo.png
│  ├─ components                 # 公共组件
│  │  └─ index.ts
│  ├─ layouts                    # layout（如果项目有多套菜单栏，可以像下面一样写多个 layout 页面，如果只有一套菜单，直接在 layouts 目录下写 index.tsx 一个文件来使用即可）
│  │  ├─ detailLayout.tsx        # 详情页 layout
│  │  └─ mainLayout.tsx          # 最外层 layout
│  ├─ models                     # models 层文件目录
│  │  └─ global.ts
│  ├─ pages                      # 所有页面的代码写在此 pages 目录下
│  │  ├─ 404Page                 # 404 页面
│  │  │  └─ index.tsx
│  │  ├─ DetailDemo              # 详情 demo 页面
│  │  │  ├─ Demo1
│  │  │  │  └─ index.tsx
│  │  │  ├─ Demo2
│  │  │  │  └─ index.tsx
│  │  │  ├─ index.tsx
│  │  │  └─ routes.detail.ts     # 详情 demo 页面的路由配置文件
│  │  ├─ Home                    # home 页面
│  │  │  ├─ index.less
│  │  │  └─ index.tsx
│  │  └─ routes.main.ts          # 最外层路由配置文件
│  ├─ services                   # services 层文件目录
│  │  └─ global.ts
│  ├─ typings                    # 全局 TS 类型定义
│  │  └─ global.d.ts
│  └─ utils                      # 功能目录
│     ├─ enum.ts                 # 全局枚举文件
│     ├─ helper.ts               # 全局功能函数
│     ├─ iconsMap.tsx            # 路由菜单的icon，可删除直接使用 iconfont
│     ├─ request.ts              # 全局请求/响应拦截器文件
│     └─ storage.ts              # 封装的一个私有的缓存存储库文件
├─ package.json
├─ README.md
├─ tsconfig.json                 # ts 配置文件
├─ typings.d.ts                  # 全局类型声明文件
├─ .cz-config.js                 # commit 提交配置文件
├─ .prettierrc.js                # prettierrc 配置文件
├─ .eslintrc.js                  # eslint 配置文件
├─ .stylelintrc.js               # stylelint 配置文件
├─ .editorconfig
├─ .gitignore
├─ .prettierignore
├─ yarn-error.log
└─ yarn.lock
```

- 自动格式化

为了统一代码规范，项目配置了一套自己的针对 js 和 css 代码的规范，也做了提交时自动格式化的操作。

- 提交规范

项目代码提交要求需遵循代码提交规范，另为了代码提交便捷，项目配置了相关的提交命令。

> 使用 `yarn commit` 命令即可，无需 `git add .` && `git commit -m '[type]: xxx'`

- 代码规范

本个项目的项目规范，请详细阅读下面文档进行了解：
[项目代码规范](https://www.yuque.com/docs/share/df817445-8b1b-4a33-ba06-579b7aa68bec)

## 快速开始

安装依赖

```bash
yarn
```

运行项目

```bash
# 本地环境运行
yarn start

# 以测试环境运行
yarn start:dev

# 以生产环境运行
yarn start:prod
```

项目代码打包

```bash
# 打包测试环境代码
yarn build

# 打包正式环境代码
yarn build:prod
```

本地校验

```bash
# 先打包
yarn build
或
yarn build:prod

# 再本地运行打包文件
yarn serve
或直接
serve ./dist
```

代码提交

```bash
yarn commit

git push
```

代码校验

```bash
# 校验 js 代码
yarn lint:js

# 校验 js 代码并自动修复
yarn lint:fix:js

# 校验 css 代码
yarn lint:style

# 校验 css 代码并自动修复
yarn lint:fix:style

## 校验 js 和 css 代码，并自动修复
yarn lint:fix
```
