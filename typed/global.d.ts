/// <reference types="react-scripts" />
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
//在typscript中无法识别非代码资源, 需要主动的去声明这些module
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'