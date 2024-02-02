---
title: bug记录🕷
---

::: warning 概述
🕷**本篇主要记录在工作，学习上遇见bug的汇总以及解决方法**
:::

在启动或者构建项目时，终端报错：**Error: error:0308010C:digital envelope routines::unsupported**，这个错误信息去翻译了一下，意思是：数字信封不支持，看到这个很懵，怎么还有这样的报错？不要慌，我猜测它可能和加密有关，上网一搜，果然，有人说出现这个错误是因为 node.js V17版本中最近发布的OpenSSL3.0, 而OpenSSL3.0对允许算法和密钥大小增加了严格的限制，可能会对生态系统造成一些影响，也有可能是node.js版本问题，下面有几种解决方法，作者使用最后一种方法解决了。

- **解决方法**

① 按win+R弹出窗口，键盘输入cmd,然后敲回车，并粘贴以下代码 

Linux & Mac OS 下

```
export NODE_OPTIONS=--openss1-legacy-provider
```
windows下

```
set NODE_OPTIONS=--openssl-legacy-provider
```
② 可能是node.js版本过高，卸载node.js17+版本，下载node.js16+版本

③ 在package.json文件加入以下代码

```json
 "scripts": {
    "dev": "set NODE_OPTIONS=--openssl-legacy-provider && vuepress dev docs",
    "build": "set NODE_OPTIONS=--openssl-legacy-provider && vuepress build docs",
  },

```