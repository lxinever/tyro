import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = {
  // 实践
  "/practice/": [
    // 灵感一现
    {
      text: "灵感一现",
      collapsed: true,
      items: [
        // {
        //   text: "简单抽奖",
        //   link: "/practice/Inspiration/lottery",
        // },
        {
          text: "右键菜单",
          link: "/practice/Inspiration/rightmenu",
        },
        {
          text: "毛玻璃效果",
          link: "/practice/Inspiration/mbl",
        },
      ],
    },
    // 三方库
    {
      text: "第三方库的使用",
      items: [
        {
          text: "关系图",
          link: "/practice/components/relation-graph",
        },
      ],
    },
  ],
  // 面试题
  // 基础三件套
  "/threeMusketeers/":[
    {
      text: "基础",
      collapsed: true,
      items: [
        {
          text: "HTML",
          link: "/threeMusketeers/html",
        },
        {
          text: "CSS",
          link: "/threeMusketeers/css",
        },
        {
          text: "JS",
          link: "/threeMusketeers/js",
        },
      ],
    },
  ],
  "/upgrade":[
    {
      text: "进阶",
      collapsed: true,
      items: [
        {
          text: "JavaScript高级",
          link: "/threeMusketeers/jsup",
        },
        {
          text: "浏览器",
          link: "/threeMusketeers/brower",
        },
      ],
    },
  ]
};
