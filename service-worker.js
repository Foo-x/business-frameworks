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
    "revision": "50e52dde7b756d4e4d709d716ef540de"
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
    "url": "assets/js/10.983f83e2.js",
    "revision": "ce194e2de91ce72de3b79e271848858d"
  },
  {
    "url": "assets/js/11.414b3f2d.js",
    "revision": "b773ad7cdc9650a4ccac23eb6bf4e0ec"
  },
  {
    "url": "assets/js/12.9d7d705a.js",
    "revision": "950a51c4ec7e3e154dd28fbaba86e9d4"
  },
  {
    "url": "assets/js/13.d38100c1.js",
    "revision": "d8bb353ab48df9a95b7ce687ebee0654"
  },
  {
    "url": "assets/js/14.00069a6e.js",
    "revision": "c5ebcd65320077b80c8045038b070c84"
  },
  {
    "url": "assets/js/15.6f98967d.js",
    "revision": "e4e44524019f5fc5d1d3cbad66a59e0f"
  },
  {
    "url": "assets/js/16.b0ff8c11.js",
    "revision": "6b5cb2fa91172a638c22c6023a81e5f2"
  },
  {
    "url": "assets/js/17.22a73696.js",
    "revision": "9677bd37db752580092e6368f10d6b99"
  },
  {
    "url": "assets/js/18.78784fc9.js",
    "revision": "7458fe6b539d3558e3e89e0a9206ee78"
  },
  {
    "url": "assets/js/19.627397e4.js",
    "revision": "8787edb294614096c67b88ee2a3616a6"
  },
  {
    "url": "assets/js/2.10a37d9d.js",
    "revision": "6eae947d705dcc0176b86b608873e660"
  },
  {
    "url": "assets/js/20.1e60671a.js",
    "revision": "6a0ab19979aab41d284f7ccfde304e06"
  },
  {
    "url": "assets/js/21.fcf5f103.js",
    "revision": "03ac0ab096e38a6fe9e862ff94e8b3f1"
  },
  {
    "url": "assets/js/3.4505d515.js",
    "revision": "3ab348010f6dc640a284bb198244e420"
  },
  {
    "url": "assets/js/4.cca0070b.js",
    "revision": "1d57586d07de32183cb0e8585905f2bb"
  },
  {
    "url": "assets/js/5.9a959d55.js",
    "revision": "33b648385ddc11bb752c62f400e1c075"
  },
  {
    "url": "assets/js/6.9f624083.js",
    "revision": "96b300687c71dc7eb583a3c5d894e983"
  },
  {
    "url": "assets/js/7.116f883a.js",
    "revision": "6464b4aea52bc666f762cf3d02a31c1d"
  },
  {
    "url": "assets/js/8.90bb771a.js",
    "revision": "3e5b688210bcfb90485bf8f778a4bb72"
  },
  {
    "url": "assets/js/9.c2973b91.js",
    "revision": "0f90ae89619ba911468ffe50b61da207"
  },
  {
    "url": "assets/js/app.82d8b377.js",
    "revision": "aacc09a621c12e0da0108471016cb211"
  },
  {
    "url": "favicon.png",
    "revision": "09e93db293baeaa8d51326088e8409e6"
  },
  {
    "url": "index.html",
    "revision": "84f77d6bef9fdb4d55d6f93b77a4698c"
  },
  {
    "url": "management/abcde.html",
    "revision": "ae2301f88dc96926bacb8a7b365a126b"
  },
  {
    "url": "management/vspro.html",
    "revision": "697cd5114335aab01b7648bd737456d0"
  },
  {
    "url": "marketing/4c.html",
    "revision": "6236b674bf0ae0dfbaced2446e816e9e"
  },
  {
    "url": "marketing/4p.html",
    "revision": "e4ec0bae246412fc78bfaffb64b12397"
  },
  {
    "url": "solution/asis-tobe.html",
    "revision": "fdbe38c4dcefc919d344bf2ce5d8fe90"
  },
  {
    "url": "solution/problem-finding-4p.html",
    "revision": "2ae7df4b19b35d5edfa598a799f501d1"
  },
  {
    "url": "strategy/3c.html",
    "revision": "d67259403ce7049a753e0e89f5ebeace"
  },
  {
    "url": "strategy/3m.html",
    "revision": "229292dadaa65b2e7a8ea16759144e26"
  },
  {
    "url": "strategy/5f.html",
    "revision": "9df88a153e1766bb12be588b63ddf9e2"
  },
  {
    "url": "strategy/5f.png",
    "revision": "af607a8786d5876a98bd18c97199add5"
  },
  {
    "url": "strategy/7s.html",
    "revision": "ee658ca5e35a9017f78a1b7b996ba9e7"
  },
  {
    "url": "strategy/pest.html",
    "revision": "76297a1da9b082ddfc6f1a11c570818f"
  },
  {
    "url": "strategy/ppm.html",
    "revision": "2a5409e476e5ddd494c98dbd47477702"
  },
  {
    "url": "strategy/ppm.png",
    "revision": "3da3ea9024f4167fb16560512212a4bf"
  },
  {
    "url": "strategy/risk-map.html",
    "revision": "9bc9e919f547bb114bc37dff98dd4422"
  },
  {
    "url": "strategy/risk-map.png",
    "revision": "d4fb9ba92c5756d6553d06976da4eb8a"
  },
  {
    "url": "strategy/swot.html",
    "revision": "da824d155e906fbeb5e136b195afbbc0"
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
