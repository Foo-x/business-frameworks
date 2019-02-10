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
    "revision": "817b17d3af1421d9af6df60927687f10"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "db3f70f5f37efe5436e3dd65dae036ff"
  },
  {
    "url": "assets/css/0.styles.fe154b93.css",
    "revision": "6706f1db6808885c071e18d6221a7354"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9495bf20.js",
    "revision": "977f83cd5d6fcf37d4bc4e5372483440"
  },
  {
    "url": "assets/js/11.a1510d11.js",
    "revision": "12ba6a8fe0f16d1ef939f93468ff79df"
  },
  {
    "url": "assets/js/12.e75c28a7.js",
    "revision": "8602f5996bac5f98db7a27dfcec9eee0"
  },
  {
    "url": "assets/js/13.ea605bf5.js",
    "revision": "9ebf39fe0f8ad7e9197f1f283a08ecf4"
  },
  {
    "url": "assets/js/14.b239bb29.js",
    "revision": "ee5e47c4e666a7e0cb94ab829187a24c"
  },
  {
    "url": "assets/js/15.c92c6147.js",
    "revision": "a7c9271c8f6b24b742d18340210190e3"
  },
  {
    "url": "assets/js/16.52f479cc.js",
    "revision": "51cae6c355379ca9fd399bec11b9afa5"
  },
  {
    "url": "assets/js/17.30c7361e.js",
    "revision": "7d4d4bb6be5aacaf9b6f2dfeebf9bb27"
  },
  {
    "url": "assets/js/18.8f36711c.js",
    "revision": "c9b3fd5ef441bc6aee041cc2db08fa8e"
  },
  {
    "url": "assets/js/2.0387e1e1.js",
    "revision": "2357a0d88787fd6bc76d3d851f752b2f"
  },
  {
    "url": "assets/js/3.ed2d2f7f.js",
    "revision": "365496ad0cdd7ae9c14e5e1e2812aaa1"
  },
  {
    "url": "assets/js/4.6a7f1020.js",
    "revision": "90e11a8c1d22710c6424d7381b67336d"
  },
  {
    "url": "assets/js/5.5c9baa74.js",
    "revision": "f2220f0258e516a2883ceef13b16574e"
  },
  {
    "url": "assets/js/6.afcf27b9.js",
    "revision": "30c9893d618e756cb71970e13f7481b1"
  },
  {
    "url": "assets/js/7.efc171f9.js",
    "revision": "d6033d2ceaacfc3503260c7cdca8b688"
  },
  {
    "url": "assets/js/8.e4c418e6.js",
    "revision": "ac67d97ada697dce162b860a5fd047d3"
  },
  {
    "url": "assets/js/9.c8498f04.js",
    "revision": "cad54cafa046a871dea23237e570473f"
  },
  {
    "url": "assets/js/app.fc2a73ed.js",
    "revision": "089054eb2511c1a351bf35b8b955931e"
  },
  {
    "url": "favicon.png",
    "revision": "09e93db293baeaa8d51326088e8409e6"
  },
  {
    "url": "index.html",
    "revision": "cbe346e93fdc291ca6094fc68d05ee64"
  },
  {
    "url": "management/vspro.html",
    "revision": "4ff9977cc7ef0148c9cde48587efaeb0"
  },
  {
    "url": "marketing/4c.html",
    "revision": "d30ba9e92ee72e27f1e8baeb28c49c3d"
  },
  {
    "url": "marketing/4p.html",
    "revision": "52c43f8847c6153c3b6921f98b1d8707"
  },
  {
    "url": "strategy/3c.html",
    "revision": "cd9ea88b3e7e59a3ed5acf435d875389"
  },
  {
    "url": "strategy/3m.html",
    "revision": "860300ca52354a391f10879527093757"
  },
  {
    "url": "strategy/5f.html",
    "revision": "3ff23a3413a421630b0f2c96eaa1110d"
  },
  {
    "url": "strategy/5f.png",
    "revision": "af607a8786d5876a98bd18c97199add5"
  },
  {
    "url": "strategy/7s.html",
    "revision": "049cd5755bb87421b7b0bef0a68d3736"
  },
  {
    "url": "strategy/pest.html",
    "revision": "39d9cd3d14e60ef32e70a143f14fcf40"
  },
  {
    "url": "strategy/ppm.html",
    "revision": "73671ef66782c8f4c516757a66d0854a"
  },
  {
    "url": "strategy/ppm.png",
    "revision": "3da3ea9024f4167fb16560512212a4bf"
  },
  {
    "url": "strategy/risk-map.html",
    "revision": "1f5def1be86f16cacf0e81efb62efd93"
  },
  {
    "url": "strategy/risk-map.png",
    "revision": "d4fb9ba92c5756d6553d06976da4eb8a"
  },
  {
    "url": "strategy/swot.html",
    "revision": "65fd701fbcd3c355823226c3ab2cb149"
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
