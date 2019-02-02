module.exports = {
  base: '/business-frameworks/',
  title: 'ビジネス・フレームワーク',
  serviceWorker: true,
  themeConfig: {
    sidebar: [
      [ '/', '0. はじめに' ],
      {
        title   : '1. 戦略立案',
        children: [
        ]
      },
      {
        title   : '2. 市場分析',
        children: [
        ]
      },
      {
        title   : '3. 組織開発',
        children: [
        ]
      },
      {
        title   : '4. 課題解決',
        children: [
        ]
      },
      {
        title   : '5. 情報収集',
        children: [
        ]
      },
      {
        title   : '6. 業務改善',
        children: [
        ]
      },
      {
        title   : '7. 整理・発想',
        children: [
        ]
      },
      {
        title   : '8. 試作・検証',
        children: [
        ]
      },
      {
        title   : '9. 評価・決定',
        children: [
        ]
      },
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
