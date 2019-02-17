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
    "revision": "19e13d04e0b6bd51ea78d81c3a313594"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "db3f70f5f37efe5436e3dd65dae036ff"
  },
  {
    "url": "assets/css/0.styles.268c872b.css",
    "revision": "6ebb523ef8d8ea69959ec03e07f10e1d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.901de094.js",
    "revision": "f587451622cc7f997cb1e5f342a10258"
  },
  {
    "url": "assets/js/11.00713685.js",
    "revision": "f6f5f789b8d7290323b1c1df655c414b"
  },
  {
    "url": "assets/js/12.b6d1d555.js",
    "revision": "5cd6630e31b9a1dca84a5691aec25fb1"
  },
  {
    "url": "assets/js/13.00ce8738.js",
    "revision": "4a50e7b30ed65cb7260185bde46686f6"
  },
  {
    "url": "assets/js/14.f03fb856.js",
    "revision": "eb0257e8a5014900a76d64f58f4a33bb"
  },
  {
    "url": "assets/js/15.711e30fe.js",
    "revision": "29853dc20303015ce24bbc3399194ad0"
  },
  {
    "url": "assets/js/16.1c47d66a.js",
    "revision": "2988e028e32fe86b71a163dd52e6e5b0"
  },
  {
    "url": "assets/js/17.c678cd72.js",
    "revision": "313caebccb01371ba494fe269f7caa5b"
  },
  {
    "url": "assets/js/18.5968e675.js",
    "revision": "99a4356372b7f19c6e27b58597c5ca2e"
  },
  {
    "url": "assets/js/19.48ea4f19.js",
    "revision": "c54e7170fd98aa857f24e2caa8f87d50"
  },
  {
    "url": "assets/js/2.78b1d4f8.js",
    "revision": "41622073195774462b77dcae23ef303b"
  },
  {
    "url": "assets/js/20.e071681b.js",
    "revision": "ae14cfaf1e0b907f302fef23767d7e04"
  },
  {
    "url": "assets/js/21.1b0cb5ca.js",
    "revision": "9fbb6d4b6c43abda303c7273d194f665"
  },
  {
    "url": "assets/js/3.6545ab61.js",
    "revision": "3c301be2d4f16e2478f817240977ed79"
  },
  {
    "url": "assets/js/4.f0aa60b9.js",
    "revision": "cb44c2591fd3883ba7bb209e23c843ea"
  },
  {
    "url": "assets/js/5.5700ce64.js",
    "revision": "bb1391e0d7ddd26cc5a0fb8f61fb46b2"
  },
  {
    "url": "assets/js/6.b33e1c4c.js",
    "revision": "c90f5e587dd95462f6f8ffb69d596978"
  },
  {
    "url": "assets/js/7.5b7f7b95.js",
    "revision": "2bbeabedd2defc6491e2ab2dafec74f8"
  },
  {
    "url": "assets/js/8.091759f9.js",
    "revision": "92f03f9d6fb5a8129ced2301a80c94cb"
  },
  {
    "url": "assets/js/9.119f4155.js",
    "revision": "17fe14edfbb80021df8adc8aa7a6cc9b"
  },
  {
    "url": "assets/js/app.1935d64c.js",
    "revision": "36075a8eda84c6a469c1d3dfdad42544"
  },
  {
    "url": "favicon.png",
    "revision": "09e93db293baeaa8d51326088e8409e6"
  },
  {
    "url": "index.html",
    "revision": "b2037ae988665aad0ed4d905b078ed54"
  },
  {
    "url": "management/abcde.html",
    "revision": "0640d281b8a93e252da95007d360f257"
  },
  {
    "url": "management/vspro.html",
    "revision": "f66e40b0ce21d314444d67a5dbd4a1c5"
  },
  {
    "url": "marketing/4c.html",
    "revision": "37ce486b937349a35a970a045ca6bfb4"
  },
  {
    "url": "marketing/4p.html",
    "revision": "cdc2c7567290e345dd127d4563215803"
  },
  {
    "url": "solution/asis-tobe.html",
    "revision": "35f3781e3649f7dbb401d5b5769a19b8"
  },
  {
    "url": "solution/problem-finding-4p.html",
    "revision": "d67dc4fae3b74559881bb46d51563f34"
  },
  {
    "url": "strategy/3c.html",
    "revision": "eb1720f69f117e94dd07c78fc0228255"
  },
  {
    "url": "strategy/3m.html",
    "revision": "53ec235faf0193c17766659bf73f9ecc"
  },
  {
    "url": "strategy/5f.html",
    "revision": "0275397ec7deefe963ca2918f7d0f358"
  },
  {
    "url": "strategy/5f.png",
    "revision": "af607a8786d5876a98bd18c97199add5"
  },
  {
    "url": "strategy/7s.html",
    "revision": "930838bfd972b6b71f928c6ac5018f4f"
  },
  {
    "url": "strategy/pest.html",
    "revision": "429a15df51d18d2aab5098acf5bbb2c4"
  },
  {
    "url": "strategy/ppm.html",
    "revision": "9e10fedcd2f8a85ba434cd789f597100"
  },
  {
    "url": "strategy/ppm.png",
    "revision": "3da3ea9024f4167fb16560512212a4bf"
  },
  {
    "url": "strategy/risk-map.html",
    "revision": "27e7e3f78945ed1bfff47143cbd88f04"
  },
  {
    "url": "strategy/risk-map.png",
    "revision": "d4fb9ba92c5756d6553d06976da4eb8a"
  },
  {
    "url": "strategy/swot.html",
    "revision": "9a33bfe7b600a31266f114f820d41dd1"
  },
  {
    "url": "strategy/swot.png",
    "revision": "3d26be87b787660faacd5ff6330138f0"
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
