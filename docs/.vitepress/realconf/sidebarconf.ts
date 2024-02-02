import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = {
  "/practice/": [
    {
      text: "灵感一现",
      collapsed: true,
      items: [
        {
          text: "简单抽奖",
          link: "/practice/Inspiration/lottery",
        },
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
    // 第二部分
    {
      text: "第三方库的使用",
      items: [
        {
          text: "关系图",
          link: "/practice/components/relation-graph",
        }
      ],
    },
  ],
};
