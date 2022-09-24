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