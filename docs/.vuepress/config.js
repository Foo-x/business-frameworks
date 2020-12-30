module.exports = {
  base : '/business-frameworks/',
  title: 'ビジネス・フレームワーク',
  head : [
    [ 'link', { rel: 'icon', href: '/favicon.png' } ],
    [ 'link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' } ],
  ],
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup  : {
          message   : '新しいコンテンツが追加されました。',
          buttonText: '更新',
        },
      },
    ],
  ],
  themeConfig: {
    sidebar: [
      [ '/', '0. はじめに' ],
      {
        title   : '1. 戦略立案',
        children: [
          [ '/strategy/3c'      , '1.1. 3C' ],
          [ '/strategy/3m'      , '1.2. 3M' ],
          [ '/strategy/5f'      , '1.3. 5F' ],
          [ '/strategy/7s'      , '1.4. 7S' ],
          [ '/strategy/pest'    , '1.5. PEST' ],
          [ '/strategy/ppm'     , '1.6. PPM' ],
          [ '/strategy/swot'    , '1.7. SWOT' ],
          [ '/strategy/risk-map', '1.8. リスクマップ' ],
          [ '/strategy/business-model-canvas', '1.9. ビジネスモデルキャンバス' ],
        ]
      },
      {
        title   : '2. 市場分析',
        children: [
          [ '/marketing/4c', '2.1. 4C' ],
          [ '/marketing/4p', '2.2. 4P' ],
          [ '/marketing/aidma', '2.3. AIDMA' ],
        ]
      },
      {
        title   : '3. 組織開発',
        children: [
          [ '/management/abcde', '3.1. ABCDE理論' ],
          [ '/management/vspro', '3.2. VSPRO' ],
          [ '/management/grow', '3.3. GROWモデル' ],
        ]
      },
      {
        title   : '4. 課題解決',
        children: [
          [ '/solution/asis-tobe'         , '4.1. As is / To be' ],
          [ '/solution/problem-finding-4p', '4.2. 問題発見の4P' ],
          [ '/solution/time-machine-method', '4.3. タイムマシン法' ],
        ]
      },
      {
        title   : '5. 情報収集',
        children: [
          [ '/collection/color-bath', '5.1. カラーバス効果' ],
          [ '/collection/group-interview', '5.2. グループ・インタビュー' ],
        ]
      },
      {
        title   : '6. 業務改善',
        children: [
          [ '/improvement/3gen', '6.1. 3現主義' ],
          [ '/improvement/cmmi', '6.2. CMMI' ],
        ]
      },
      {
        title   : '7. 整理・発想',
        children: [
          [ '/organization-idea/5w1h', '7.1. 5W1H' ],
          [ '/organization-idea/raci', '7.2. RACI' ],
          [ '/organization-idea/scamper', '7.3. SCAMPER' ],
          [ '/organization-idea/rich-picture', '7.4. リッチピクチャー' ],
          [ '/organization-idea/anti-problem', '7.5. アンチプロブレム' ],
        ]
      },
      {
        title   : '8. 試作・検証',
        children: [
          [ '/trial-test/image-catalog', '8.1. イメージカタログ' ],
          [ '/trial-test/cover-story', '8.2. カバーストーリー' ],
        ]
      },
      {
        title   : '9. 評価・決定',
        children: [
          [ '/evaluation-decision/pmi', '9.1. PMI法' ],
          [ '/evaluation-decision/success', '9.2. SUCCESs' ],
          [ '/evaluation-decision/eight-evaluation-axis', '9.3. 8つの評価軸' ],
        ]
      },
    ],
    activeHeaderLinks: false,
    lastUpdated      : true,
  },
};
