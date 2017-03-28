# 简易购物车和地址选配功能
> this is a simple project for vue2.0

## 安装步骤
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

### 使用技术简介 （vue2.x + webpack2.x + axios + vue-router）

# 教程  


## 安装 vue-cli 脚手架  


运行如下命令，即可创建一个名为 doubanMovie 的 vue 项目，并且通过本地 8080 端口启动服务   
    
``` bash
npm install -g vue-cli
vue init webpack shopping-cart
cd shopping-cart
npm install
npm run dev
```


在运行 `vue init webpack doubanMovie` 后，会依次要求输入以下配置内容  
- 项目名称
- 项目描述
- 作者
- 选择 Vue 构建：运行+编译 或 仅运行时
- 是否安装 vue-loader
- 是否使用 ESLint
    - 如果是，请选择模式：标准模式、AirBNB 模式、自定义
- 是否使用 Karma + Mocha 的单元测试
- 是否使用 Nightwatch e2e 测试  



安装完成后，即可看到以下文件结构：

```
.
|-- build                            // 项目构建相关代码
|   |-- build.js                     // 生产环境构建代码
|   |-- check-version.js             // 检查 node、npm 等版本
|   |-- dev-client.js                // 热重载相关
|   |-- dev-server.js                // 构建本地服务器
|   |-- utils.js                     // 构建工具相关
|   |-- webpack.base.conf.js         // webpack 基础配置（出入口和 loader）
|   |-- webpack.dev.conf.js          // webpack 开发环境配置
|   |-- webpack.prod.conf.js         // webpack 生产环境配置
|-- config                           // 项目开发环境配置
|   |-- dev.env.js                   // 开发环境变量
|   |-- index.js                     // 项目一些配置变量（开发环境接口转发将在此配置）
|   |-- prod.env.js                  // 生产环境变量
|   |-- test.env.js                  // 测试环境变量
|-- src                              // 源码目录
|   |-- components                   // vue 公共组件
|   |-- App.vue                      // 页面入口文件
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|-- static                           // 静态文件，比如一些图片，json数据等
|-- test                             // 自动化测试相关文件
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 定义代码格式
|-- .eslintignore                    // ESLint 检查忽略的文件
|-- .eslistrc.js                     // ESLint 文件，如需更改规则则在此文件添加
|-- .gitignore                       // git 上传需要忽略的文件
|-- README.md                        // 项目说明
|-- index.html                       // 入口页面
|-- package.json                     // 项目基本信息
.
```

## ESLint 配置  

ESLint 配置在根目录的 `.eslintrc.js` 里。  
正常情况下，ESLint 报错是因为你的代码不符合现有的 ESLint 规范。当然在开发的过程中，ESlint能够很好地规范你的代码，对于新手来说可能有点别扭，但是习惯了可以极大地提升代码的可读性。


## vue-router 2 使用

当一个个静态组件完成后，需要按照路由组织这些组件文件。  

请前往 [vue-router 2 介绍](https://router.vuejs.org/zh-cn/) 阅读 __基础__ 部分教程，并可以边阅读边配置路由。  

路由文件是 `./src/router.index.js` 。  

## 使用 axios

vue-resource 库官方已经不再更新，故使用axios作为项目http请求文件。  


# 结语  

至此，主体工作已经完成。  

欢迎 Star 本项目。
