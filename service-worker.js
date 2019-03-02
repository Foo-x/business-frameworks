/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ae227fea94decb9eea9154c7c6017435"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "db3f70f5f37efe5436e3dd65dae036ff"
  },
  {
    "url": "assets/css/0.styles.6aba5656.css",
    "revision": "6ebb523ef8d8ea69959ec03e07f10e1d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4a8e15a1.js",
    "revision": "1cca17390489f726957b8d15d2616172"
  },
  {
    "url": "assets/js/11.a4f3021f.js",
    "revision": "f70916156aa44cf08f3fac2760e3508a"
  },
  {
    "url": "assets/js/12.dad3d89d.js",
    "revision": "4aa7cfd8dcfdb2d6006c65b0168bd17c"
  },
  {
    "url": "assets/js/13.caf2a786.js",
    "revision": "144dd6e9a177239c6b2c9ae28294cae4"
  },
  {
    "url": "assets/js/14.5a534d55.js",
    "revision": "9b5b4d600ab92794a201dc928ac85c26"
  },
  {
    "url": "assets/js/15.57979a55.js",
    "revision": "f7d13d5b12b162b47ac5ab1903554b9b"
  },
  {
    "url": "assets/js/16.9ae8b978.js",
    "revision": "be33a366c0fc2502405d98080e80e94a"
  },
  {
    "url": "assets/js/17.96f6a867.js",
    "revision": "5bee657482f8377fab3e4bf672b4f8fa"
  },
  {
    "url": "assets/js/18.7856dcf3.js",
    "revision": "f48545ac63274a985054e2abae84eb3b"
  },
  {
    "url": "assets/js/19.994aadac.js",
    "revision": "bd08af42f094ea0b2f2907fb318b36a6"
  },
  {
    "url": "assets/js/2.78b1d4f8.js",
    "revision": "41622073195774462b77dcae23ef303b"
  },
  {
    "url": "assets/js/20.dfda8341.js",
    "revision": "666632b63e6f0199e57ace1486dac341"
  },
  {
    "url": "assets/js/21.930aeee0.js",
    "revision": "409c1198bc270533913175e8436e2b44"
  },
  {
    "url": "assets/js/22.3dd8b278.js",
    "revision": "249a1a3406f6fad2142ed4d2bfcab9bd"
  },
  {
    "url": "assets/js/23.ecd9802d.js",
    "revision": "fc5c35b3960c96a95340740cbb9ea998"
  },
  {
    "url": "assets/js/24.d6fcd076.js",
    "revision": "e837aff67a35022003ea8a3f8c30de09"
  },
  {
    "url": "assets/js/25.bc1e1977.js",
    "revision": "23548d5df665280f5bec0c8f01fc43bf"
  },
  {
    "url": "assets/js/3.6545ab61.js",
    "revision": "3c301be2d4f16e2478f817240977ed79"
  },
  {
    "url": "assets/js/4.b0c87fd0.js",
    "revision": "a66290d18c2b8ba315ae752434404136"
  },
  {
    "url": "assets/js/5.5700ce64.js",
    "revision": "bb1391e0d7ddd26cc5a0fb8f61fb46b2"
  },
  {
    "url": "assets/js/6.71cc7ef4.js",
    "revision": "7d74de9a67c82e7650759f1ed380e220"
  },
  {
    "url": "assets/js/7.08b7f429.js",
    "revision": "597dde107283f70381bc5c1b46f2a360"
  },
  {
    "url": "assets/js/8.e8d4c2a2.js",
    "revision": "98e79d4c9bf902008250d6a232fe6756"
  },
  {
    "url": "assets/js/9.737afba8.js",
    "revision": "d2fb3ebf5ed8902c8e36cdf37a45cb11"
  },
  {
    "url": "assets/js/app.fbe8945b.js",
    "revision": "e25f211425f4467b9a290c8b90dd5204"
  },
  {
    "url": "collection/color-bath.html",
    "revision": "4bb05b1ba8a8dab3e3d93eaa1fcc1e96"
  },
  {
    "url": "favicon.png",
    "revision": "09e93db293baeaa8d51326088e8409e6"
  },
  {
    "url": "improvement/3gen.html",
    "revision": "8fb6f3bd8072fb26bef12ba70ad53195"
  },
  {
    "url": "index.html",
    "revision": "d253cfe15b0b495ecf93e8bf6f8f3d00"
  },
  {
    "url": "management/abcde.html",
    "revision": "ee8d604ad9d75d18120ae4fb2f90e629"
  },
  {
    "url": "management/vspro.html",
    "revision": "e67560d1ce1c780cebfd6ae5ecedf213"
  },
  {
    "url": "marketing/4c.html",
    "revision": "e33235be3035ffb218887052277d70bc"
  },
  {
    "url": "marketing/4p.html",
    "revision": "593744f531a8fe7435672843ca44ab70"
  },
  {
    "url": "organization-idea/5w1h.html",
    "revision": "33a942a98e6140135deefa5f72b02a38"
  },
  {
    "url": "solution/asis-tobe.html",
    "revision": "aa0b0bf973b8b4726fa4e284750e9130"
  },
  {
    "url": "solution/problem-finding-4p.html",
    "revision": "9d2a854ee1b4cd0a9a4d616de810a68b"
  },
  {
    "url": "strategy/3c.html",
    "revision": "5101e5ac63574f934bcfaa8f6e571c3c"
  },
  {
    "url": "strategy/3m.html",
    "revision": "22287de6db258269367a866a240a0dbb"
  },
  {
    "url": "strategy/5f.html",
    "revision": "644255a8e2b2b63d4172b045ea776dfd"
  },
  {
    "url": "strategy/5f.png",
    "revision": "af607a8786d5876a98bd18c97199add5"
  },
  {
    "url": "strategy/7s.html",
    "revision": "b7244c477119bd50bcbeef553d63dab8"
  },
  {
    "url": "strategy/pest.html",
    "revision": "5dbfaecbf7748888489113c50e55b7b2"
  },
  {
    "url": "strategy/ppm.html",
    "revision": "2d2d1c9a0c48eb157d6c7d7f438e7b79"
  },
  {
    "url": "strategy/ppm.png",
    "revision": "3da3ea9024f4167fb16560512212a4bf"
  },
  {
    "url": "strategy/risk-map.html",
    "revision": "989b2c65ed346c3ab36110c0e06baa11"
  },
  {
    "url": "strategy/risk-map.png",
    "revision": "d4fb9ba92c5756d6553d06976da4eb8a"
  },
  {
    "url": "strategy/swot.html",
    "revision": "10d04b619c5ff389b1647a4044a76462"
  },
  {
    "url": "strategy/swot.png",
    "revision": "3d26be87b787660faacd5ff6330138f0"
  },
  {
    "url": "trial-test/image-catalog.html",
    "revision": "d38934d83107dff3539cb81407595f39"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
