import { defineConfig } from "vitepress";
import { nav } from "./realconf/navconf";
import { sidebar } from "./realconf/sidebarconf";
export default defineConfig({
  head: [["link", { rel: "icon", type: "image/png", href: "./liedown.png" }]],
  base: "/tyro/",
  title: "Tyro",
  description: "茫茫人海又有谁记得你三五年",
  markdown: {
    lineNumbers: true,
  },
  lastUpdated: true,
  themeConfig: {
    logo: "/liedown.png",
    // 导航栏
    nav: nav,
    // 侧边栏
    sidebar: sidebar,
    // 搜索
    search: {
      provider: "local",
    },
    // 社交图标
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    //页脚配置。可以添加 message 和 copyright。仅当页面不包含侧边栏时才会显示页脚。
    footer: {
      message: "Tyro",
      copyright: "Copyright © 2021-2022 Tyro. All rights reserved.",
    },
    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "对此篇有疑问",
    },
    lastUpdated: {
      text: "写于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    // carbonAds: {
    //   code: "your-carbon-code",
    //   placement: "your-carbon-placement",
    // },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  },
});
