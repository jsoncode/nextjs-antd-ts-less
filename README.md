# Next.js + Ant Design 示例项目

## 创建项目

```bash
npx create-next-app --example with-ant-design ProjectName
```

```bash
yarn create next-app --example with-ant-design ProjectName
```


## 配置less环境

[less配置](https://github.com/SolidZORO/next-plugin-antd-less)

```bash
yarn add -D next-plugin-antd-less less less-loader
```

```javascript
// next.config.js
const withAntdLess = require('next-plugin-antd-less');
const isProd = process.env.NODE_ENV === 'production'

module.exports = withAntdLess({
    assetPrefix: isProd ? '.' : '',// 生成文件中的引用方式: "."相对定位, ""绝对定位
    modifyVars: {'@primary-color': '#0cc'}, // optional
    lessVarsFilePath: './src/styles/variables.less', // optional
    lessVarsFilePathAppendToEndOfContent: false, // optional
    // optional https://github.com/webpack-contrib/css-loader#object
    cssLoaderOptions: {
        // ...
        mode: "local",
        localIdentName: isProd ? "[hash:base64:8]" : "[local]--[hash:base64:4]", // invalid! for Unify getLocalIdent (Next.js / CRA), Cannot set it, but you can rewritten getLocalIdentFn
        exportLocalsConvention: "camelCase",
        exportOnlyLocals: false,
        // ...
        getLocalIdent: (context, localIdentName, localName, options) => {
            return "whatever_random_class_name";
        },
    },

    // for Next.js ONLY
    nextjs: {
        localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
    },

    // Other Config Here...

    webpack(config) {
        return config;
    },

    // ONLY for Next.js 10, if you use Next.js 11, delete this block
    future: {
        webpack5: true,
    },
});
```

```typescript
// /typed/global.d.ts
declare module '*.module.less' {
    const classes: {
        readonly [key: string]: string
    }
    export default classes
}
// global.d.ts
declare module '*.module.css' {
    const classes: { readonly [key: string]: string }
    export default classes
}

declare module '*.module.sass' {
    const classes: { readonly [key: string]: string }
    export default classes
}

declare module '*.module.scss' {
    const classes: { readonly [key: string]: string }
    export default classes
}
```

## 配置ant design按需引用

```bash
yarn add -D babel-plugin-import
```

```javascript
// .babelrc.js
module.exports = {
    presets: [['next/babel']],
    plugins: [['import', {libraryName: 'antd', style: true}]],
};
```

## 添加静态html导出功能

[Static HTML Export](https://www.nextjs.cn/docs/advanced-features/static-html-export)

```bash
next build && next export
```

最终package.json内容：

```json
{
  "private": true,
  "scripts": {
    "dev": "next",
    "build for start": "next build",
    "build and export static Html": "next build && next export",
    "start": "next start"
  },
  "dependencies": {
    "@ant-design/icons": "^4.7.0",
    "antd": "^4.21.5",
    "next": "latest",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "browser": {
    "fs": false,
    "path": false
  },
  "devDependencies": {
    "@types/node": "18.0.3",
    "@types/react": "18.0.15",
    "@types/react-dom": "18.0.6",
    "babel-plugin-import": "^1.13.5",
    "less": "^4.1.3",
    "less-loader": "^11.0.0",
    "next-plugin-antd-less": "^1.8.0",
    "typescript": "4.7.4"
  }
}

```