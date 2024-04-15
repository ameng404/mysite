import * as path from "path";
import { defineConfig } from "rspress/config";

export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "阿猛的博客",
  description: "iameng.cn",
  icon: "/rspress-icon.png",
  logo: {
    light: "/rspress-light-logo.png",
    dark: "/rspress-dark-logo.png",
  },
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/ameng404/myiste",
      },
    ],
    footer: {
      message: "© 2024 阿猛的日常. All Rights Reserved.",
    },
  },
});
