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
    "revision": "2b6ed916ccd7adc75cd2b89ee38f38b6"
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
    "url": "assets/js/10.baff3445.js",
    "revision": "9e3807dc3160c318ccf266cbeea0ba0a"
  },
  {
    "url": "assets/js/11.222b6f5f.js",
    "revision": "6124126d01880b2fa3e16d96e71e3862"
  },
  {
    "url": "assets/js/12.ccea24eb.js",
    "revision": "252d185f062c73d37447aed98da4d0e9"
  },
  {
    "url": "assets/js/13.3a960054.js",
    "revision": "58f57ae0f88a55e9f712723b51f50cbc"
  },
  {
    "url": "assets/js/14.3c6b31f6.js",
    "revision": "f0e4a4811df2c3cc9c1a16f7206d4c18"
  },
  {
    "url": "assets/js/15.10278253.js",
    "revision": "71a951011cfa1c10d7f27f3c203ef94a"
  },
  {
    "url": "assets/js/16.6ec41c56.js",
    "revision": "66b4cbf5bc9a0884fae832a8fe6e5d27"
  },
  {
    "url": "assets/js/17.a815f5c9.js",
    "revision": "88bdfe5222dcfd2119332d5047bd1229"
  },
  {
    "url": "assets/js/18.ff7d38fe.js",
    "revision": "19f39b919092de564169e3b9d5fcb948"
  },
  {
    "url": "assets/js/19.b8c80aa5.js",
    "revision": "e80200733436ed0e6296adfffb33613b"
  },
  {
    "url": "assets/js/2.78b1d4f8.js",
    "revision": "41622073195774462b77dcae23ef303b"
  },
  {
    "url": "assets/js/20.b29c3fb5.js",
    "revision": "08e215c1b5ecffd4301d569dbd9513e3"
  },
  {
    "url": "assets/js/21.f57dabd1.js",
    "revision": "a9b41706c171a87449dd6ebeadb26834"
  },
  {
    "url": "assets/js/22.00739a62.js",
    "revision": "fdf9ed965e7a7ea58fe7198ac39c6bad"
  },
  {
    "url": "assets/js/3.6545ab61.js",
    "revision": "3c301be2d4f16e2478f817240977ed79"
  },
  {
    "url": "assets/js/4.d17a5144.js",
    "revision": "0469f27a2bcd6749cecc3825ac6681ea"
  },
  {
    "url": "assets/js/5.5700ce64.js",
    "revision": "bb1391e0d7ddd26cc5a0fb8f61fb46b2"
  },
  {
    "url": "assets/js/6.6627d628.js",
    "revision": "f1f2435fab327ce6ecc9f1ef5eb3e72e"
  },
  {
    "url": "assets/js/7.07358f2b.js",
    "revision": "6accd9c28f5864115e079d0ae5987bd4"
  },
  {
    "url": "assets/js/8.e30da560.js",
    "revision": "a05e46581b3088cc78aadbc80ad49349"
  },
  {
    "url": "assets/js/9.b4721f5f.js",
    "revision": "c108d2cc40670de4ce38d0b32d82b809"
  },
  {
    "url": "assets/js/app.75b86cc4.js",
    "revision": "3877b04d195e79c2ddd1e1caaea3577a"
  },
  {
    "url": "collection/color-bath.html",
    "revision": "a70282c5d4e2605eea0568dfd25b0528"
  },
  {
    "url": "favicon.png",
    "revision": "09e93db293baeaa8d51326088e8409e6"
  },
  {
    "url": "index.html",
    "revision": "f3acfbae57435888fbc1e951814392cc"
  },
  {
    "url": "management/abcde.html",
    "revision": "e69a732bcd8d7f64dfa8babb6023b1ff"
  },
  {
    "url": "management/vspro.html",
    "revision": "c7a1655df0594a827de0cda178a21c88"
  },
  {
    "url": "marketing/4c.html",
    "revision": "620ed9cc9893b5d0a6adb52cb20499b5"
  },
  {
    "url": "marketing/4p.html",
    "revision": "e9c4ee8bf1431efb0756ebfcb97672da"
  },
  {
    "url": "solution/asis-tobe.html",
    "revision": "14087aba46013ab8d54741a251f34f17"
  },
  {
    "url": "solution/problem-finding-4p.html",
    "revision": "c67f07caf2482c976e92a5050f62b743"
  },
  {
    "url": "strategy/3c.html",
    "revision": "ea4dbfb52971208282f59612074babf0"
  },
  {
    "url": "strategy/3m.html",
    "revision": "618dc219c599c94c3de4eec0760e2507"
  },
  {
    "url": "strategy/5f.html",
    "revision": "6ff4802f3047dd86efb29476e4534330"
  },
  {
    "url": "strategy/5f.png",
    "revision": "af607a8786d5876a98bd18c97199add5"
  },
  {
    "url": "strategy/7s.html",
    "revision": "94180504a44bed8fb5f0cf951b306e48"
  },
  {
    "url": "strategy/pest.html",
    "revision": "7b55151be407e402a7e32147a8398ec1"
  },
  {
    "url": "strategy/ppm.html",
    "revision": "78b91cdaed0fb95eafbbc3655c117b18"
  },
  {
    "url": "strategy/ppm.png",
    "revision": "3da3ea9024f4167fb16560512212a4bf"
  },
  {
    "url": "strategy/risk-map.html",
    "revision": "68b0ffd554f30a133562478d08440339"
  },
  {
    "url": "strategy/risk-map.png",
    "revision": "d4fb9ba92c5756d6553d06976da4eb8a"
  },
  {
    "url": "strategy/swot.html",
    "revision": "cec108c3a83a22919d1d080c52cefc5b"
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
