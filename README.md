# umi project

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
yarn serve
```

代码提交

```bash
yarn commit

git push
```

## 项目介绍

- 项目结构
├── README.md                    // 项目介绍文档
├── config                // ====== 项目的配置目录
│   ├── config.dev.ts            // 测试环境配置
│   ├── config.local.ts          // 测试环境配置
│   ├── config.prod.ts           // 测试环境配置
│   ├── config.ts                // 测试环境配置
│   └── routes.ts                // 测试环境配置
├── dist                  // ====== 项目打包后的目录
│   ├── index.html
│   ├── umi.css
│   └── umi.js
├── mock                  // ====== 项目的 mock 文件目录
├── package.json
├── src                   // ====== 项目源代码
│   └── pages
│       ├── Home
│       │   ├── index.less
│       │   └── index.tsx
|       ├── 其它模块
├── tsconfig.json
├── typings.d.ts
└── yarn.lock

- 自动格式化

为了统一代码规范，项目做了提交时自动格式化操作。

- 提交规范

项目代码提交要求需遵循代码提交规范，另为了代码提交便捷，项目配置了相关的提交命令。

> 使用 `yarn commit` 命令即可，无需 `git add .` && `git commit -m '[type]: xxx'`

- 代码规范
这里的代码规范，包括代码的书写规范，项目模块的命名规范，代码的提交规范等等

这里先占位，之后会单独写一篇相关的文档然后将文档链接放这里
