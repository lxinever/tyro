import { DefaultTheme } from "vitepress";
export const nav: DefaultTheme.NavItem[] = [
  {
    text: "首页",
    link: "/",
  },
  {
    text: "前端",
    items: [
      { text: "数组方法合集", link: "/array/" },
      { text: "一些工具函数", link: "/func/" },
      { text: "bug记录", link: "/bug/" },
    ],
  },
  {
    text: "面试题",
    items: [{ text: "HTML", link: "/interview/HTML/" }],
  },
  {
    text: "摸鱼",
    items: [
      { text: "废话", link: "https://bbs.9999xq.cn" },
      { text: "娱乐", link: "https://fuun.fun" },
    ],
  },
  {
    text: "实用工具",
    items: [
      { text: "utools", link: "https://u.tools" },
      { text: "snipaste", link: "https://www.snipaste.com" },
      { text: "geek", link: "https://geekuninstaller.com" },
      { text: "iTab", link: "https://www.itab.link" },
      {
        text: "压缩,合并pdf",
        link: "https://www.ilovepdf.com/zh-cn/compress_pdf",
      },
    ],
  },
  {
    text: "关于我",
    link: "/begin/introduce",
  },
];
