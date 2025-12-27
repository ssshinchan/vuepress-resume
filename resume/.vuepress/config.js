module.exports = {
  title: "SHEN PUMINGの履歴書",
  base: "/",
  locales: {
    "/": {
      lang: "ja-JP",
      title: "SHEN PUMINGの履歴書",
      description: "SHEN PUMINGの履歴書"
    },
    "/en/": {
      lang: "en-US",
      title: "SHEN PUMING's Resume",
      description: "SHEN PUMING's Resume"
    }
  },
  themeConfig: {
    navbar: false,
    locales: {
      "/": {
        sidebar: [{
          title: "SHEN PUMINGの履歴書",
          collapsable: false,
          children: ["/"]
        }]
      },
      "/en/": {
        sidebar: [{
          title: "SHEN PUMING's Resume",
          collapsable: false,
          children: ["/en/"]
        }]
      }
    }
  }
}
