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
    "revision": "47deaa3bebf2480e567994a20c6da4b4"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "db3f70f5f37efe5436e3dd65dae036ff"
  },
  {
    "url": "assets/css/0.styles.fce038d2.css",
    "revision": "6706f1db6808885c071e18d6221a7354"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.95fc6bf5.js",
    "revision": "a36851ea7d1cfedd7f9748dc27c53366"
  },
  {
    "url": "assets/js/11.54b9538b.js",
    "revision": "6da4baddc699d9220b3e85847c036f9c"
  },
  {
    "url": "assets/js/12.e4c384d2.js",
    "revision": "c7286053c7b5027904b4a72094a0f281"
  },
  {
    "url": "assets/js/13.2586b5ae.js",
    "revision": "33737e16f034d9f5cf8c0558bc00608d"
  },
  {
    "url": "assets/js/14.7c233c3e.js",
    "revision": "84210157c7b2e2bfb7802c688004ca5a"
  },
  {
    "url": "assets/js/15.ff4566a3.js",
    "revision": "5bf08b59b7651d303f706dc5de3e8785"
  },
  {
    "url": "assets/js/16.ac4180fd.js",
    "revision": "83b8a7a4ee9c1bafabdec580881a3946"
  },
  {
    "url": "assets/js/17.9ffa1358.js",
    "revision": "5de5d310528b54b53c9ae9d692ff19b4"
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
    "url": "assets/js/4.55f3f993.js",
    "revision": "2b4b2037d662d8524080366b66d7e202"
  },
  {
    "url": "assets/js/5.5c9baa74.js",
    "revision": "f2220f0258e516a2883ceef13b16574e"
  },
  {
    "url": "assets/js/6.4592eb88.js",
    "revision": "8c227d11e196dcbc883f4942aae65cab"
  },
  {
    "url": "assets/js/7.6353a0f8.js",
    "revision": "212a134508156a5a889ba48580b8a45d"
  },
  {
    "url": "assets/js/8.aa7308bd.js",
    "revision": "682b742a18be455d94433011819c65eb"
  },
  {
    "url": "assets/js/9.7f74965b.js",
    "revision": "04c70d662eb44f88c2ef766c895f0287"
  },
  {
    "url": "assets/js/app.e6c053d0.js",
    "revision": "8a18f2363935c875ec9527e7114ea39b"
  },
  {
    "url": "favicon.png",
    "revision": "09e93db293baeaa8d51326088e8409e6"
  },
  {
    "url": "index.html",
    "revision": "966562fb06a0d2df3532ac3037541cae"
  },
  {
    "url": "management/vspro.html",
    "revision": "66edc37b49589ce533ea730a76dd3640"
  },
  {
    "url": "marketing/4c.html",
    "revision": "7ea61368c3f3e9f23aa632395f69edca"
  },
  {
    "url": "marketing/4p.html",
    "revision": "9399372148a3a3b214a5e006722fe6f5"
  },
  {
    "url": "strategy/3c.html",
    "revision": "55fa4bbd913d7a06207e45a12ec0fc97"
  },
  {
    "url": "strategy/3m.html",
    "revision": "b59b6bcd0e4d972f4131b38ca88785e5"
  },
  {
    "url": "strategy/5f.html",
    "revision": "8005c7137b8e5887c59157ce26022dc7"
  },
  {
    "url": "strategy/5f.png",
    "revision": "af607a8786d5876a98bd18c97199add5"
  },
  {
    "url": "strategy/7s.html",
    "revision": "f29be01ae00940ba41e0d907c61b7975"
  },
  {
    "url": "strategy/pest.html",
    "revision": "3ef936a9da22d9d15796885ad167b0bd"
  },
  {
    "url": "strategy/ppm.html",
    "revision": "032d1474e5ad8272766547dd0e23ec0d"
  },
  {
    "url": "strategy/ppm.png",
    "revision": "3da3ea9024f4167fb16560512212a4bf"
  },
  {
    "url": "strategy/risk-map.html",
    "revision": "b55f1eb13dcdcedf1701c4f8e6503d7f"
  },
  {
    "url": "strategy/risk-map.png",
    "revision": "d4fb9ba92c5756d6553d06976da4eb8a"
  },
  {
    "url": "strategy/swot.html",
    "revision": "d985ed3ecacab0ce16a1cd7d3559bc29"
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
