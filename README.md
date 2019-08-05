<p align="center"><a href="https://easy-mock.com" target="_blank"><img width="100"src="http://img.souche.com/20170509/png/fff9d8506199c4bf8cc53bad9d849215.png"></a></p>

<p align="center">
  <a href="https://nodejs.org"><img src="https://img.shields.io/badge/node-%3E%3D8.9.1-green.svg?style=flat" alt="Node.js Version"></a>
  <a href="https://www.mongodb.com"><img src="https://img.shields.io/badge/mongo-%3E%3D3.4.1-green.svg?style=flat" alt="MongoDB Version"></a>
  <a href="https://redis.io"><img src="https://img.shields.io/badge/redis-%3E%3D4.0-green.svg?style=flat" alt="Redis Version"></a>
  <a href="https://circleci.com/gh/easy-mock/easy-mock/tree/dev"><img src="https://circleci.com/gh/easy-mock/easy-mock/tree/dev.svg?style=svg" alt="Build Status"></a>
  <a href="https://codecov.io/github/easy-mock/easy-mock?branch=dev"><img src="https://img.shields.io/codecov/c/github/easy-mock/easy-mock/dev.svg" alt="Coverage Status"></a>
  <a href="http://standardjs.com"><img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg" alt="js-standard-style"></a>
  <a href="https://opensource.org/licenses/GPL-3.0"><img src="https://img.shields.io/badge/license-GPL--3.0-blue.svg" alt="License"></a>
  <a href="https://discord.gg/DdhQnaS"><img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg" alt="Chat"></a>
</p>


## 介绍

easy-mock 钉钉(DingTalk)是一个可视化，并且能快速生成**模拟数据**的持久化服务。本项目Fork于：([esay-mock](https://github.com/easy-mock/easy-mock)，再维持原有功能的基础上添加钉钉通知支持。


<p align="center">
  <a href="https://github.com/MicahChiu/easy-mock"><img src="http://osp.ingx.net//image/github/easy-mock.info-1.png"></a>
</p>

## 新增特性

- 钉钉通知支持
- 修复官网ldap登陆


## 快速开始

> 在开始之前，假设你已经成功安装了 [Node.js](https://nodejs.org) && [MongoDB](https://www.mongodb.com) && [Redis](https://redis.io)

### 安装

```sh
$ git clone git@github.com:MicahChiu/easy-mock.git
$ cd easy-mock && npm install
```

### 配置文件 

Path: [config/default.json](https://github.com/MicahChiu/easy-mock/blob/dev/config/default.json)

```js
{
  ...
  "proxyDomain": "http://127.0.0.1:7300", // 新增 填写域名地址，用于钉钉通知调用的接口
  ...
}
```
[更多信息](https://github.com/easy-mock/easy-mock)

**注意：**

- `publicPath` 默认是 `'/dist/'`。如有需要，可以将其替换成自己的 CDN；
- 关于 `fe` 的配置，一旦发生改变应该重新执行 build 命令。

### 启动

```sh
$ npm run dev
# 访问 http://127.0.0.1:7300
```

## 更多命令

```sh
# 前端静态资源构建打包
$ npm run build

# 以生产环境方式启动，需要提前执行 build
$ npm run start

# 单元测试
$ npm run test

# 语法检测
$ npm run lint
```

## 服务器部署

> 在此之前请先配置好配置文件。

### PM2

当在内网服务器部署时，推荐使用 [PM2](https://github.com/Unitech/pm2) 来守护你的应用进程。

#### 全局安装 PM2

```sh
$ [sudo] npm install pm2 -g
```

#### 用 PM2 启动

> 在此之前，你应该已经完成了 build。

```sh
$ NODE_ENV=production pm2 start app.js
```

## 感谢

Easy-Mock团队

## License

[GPL-3.0](https://opensource.org/licenses/GPL-3.0)
