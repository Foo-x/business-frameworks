module.exports = {
  base: '/business-frameworks/',
  title: 'ビジネス・フレームワーク',
  serviceWorker: true,
  themeConfig: {
    sidebar: [
      [ '/', '0. はじめに' ]
    ],
    activeHeaderLinks: false,
    serviceWorker: {
      updatePopup: {
        message   : "新しいコンテンツが追加されました。",
        buttonText: "更新",
      }
    },
    lastUpdated : true,
  },
}
