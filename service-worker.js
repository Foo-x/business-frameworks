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
    "revision": "067223685215cad3f7b8c455e99c4e59"
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
    "url": "assets/js/10.dbc901e6.js",
    "revision": "ed02230fc0ee9a89498d9a019bcf0114"
  },
  {
    "url": "assets/js/11.773a2722.js",
    "revision": "36adfe135893cf5d7ef9acb0685c8c6e"
  },
  {
    "url": "assets/js/12.192bad89.js",
    "revision": "c325dbca521e1659236845f429032a40"
  },
  {
    "url": "assets/js/13.1f9238a5.js",
    "revision": "cbcb390e05d1284c8d93cb5e06a645be"
  },
  {
    "url": "assets/js/14.9e064569.js",
    "revision": "40e241427dc7a9617c60aeb46ba67092"
  },
  {
    "url": "assets/js/15.d9c6a5b0.js",
    "revision": "2430ea493b94b5c48d551a2dacff2010"
  },
  {
    "url": "assets/js/16.06443cfa.js",
    "revision": "3f174a241b94a585c43939f8f4bd56d3"
  },
  {
    "url": "assets/js/17.4cf8c329.js",
    "revision": "3e22dc81a3edf617fbd58707485c4ef0"
  },
  {
    "url": "assets/js/18.21e08565.js",
    "revision": "dea0e1850817967c8eada35e8c90c57c"
  },
  {
    "url": "assets/js/19.45f48a55.js",
    "revision": "df6b6cb5b99e574ad8da046015b0db7a"
  },
  {
    "url": "assets/js/2.78b1d4f8.js",
    "revision": "41622073195774462b77dcae23ef303b"
  },
  {
    "url": "assets/js/20.fab63a62.js",
    "revision": "34b0772a9b67ddcdc0e9021247b88f4c"
  },
  {
    "url": "assets/js/21.186e67ef.js",
    "revision": "e80b3ee3146ecd3a21d237841d8e1333"
  },
  {
    "url": "assets/js/22.4b467686.js",
    "revision": "b3ec973eb1bd0552d308d0100d17c4c5"
  },
  {
    "url": "assets/js/23.02faf6ae.js",
    "revision": "d13cb3453fb71f4f6067094ea789711e"
  },
  {
    "url": "assets/js/3.6545ab61.js",
    "revision": "3c301be2d4f16e2478f817240977ed79"
  },
  {
    "url": "assets/js/4.ac7e4676.js",
    "revision": "35b3287da3f69157eacc3ad3fb18e6bf"
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
    "url": "assets/js/8.142ced65.js",
    "revision": "e621bd3c077d5a28d85f87c10b24ea3c"
  },
  {
    "url": "assets/js/9.4761e49e.js",
    "revision": "ee2653291c9b9fdbb25f9228038c6b9a"
  },
  {
    "url": "assets/js/app.1e76aa6d.js",
    "revision": "431308054e8ba4441d0226a6a378eb70"
  },
  {
    "url": "collection/color-bath.html",
    "revision": "168c3780c89cf40e501a22cce63c85c0"
  },
  {
    "url": "favicon.png",
    "revision": "09e93db293baeaa8d51326088e8409e6"
  },
  {
    "url": "improvement/3gen.html",
    "revision": "2ee756b287038da92eaf60dfe27f6f0a"
  },
  {
    "url": "index.html",
    "revision": "06382e21e3ecfc17d111b907f5e6bbbc"
  },
  {
    "url": "management/abcde.html",
    "revision": "70a01a3dc13d4fc60ddc10af7346bedf"
  },
  {
    "url": "management/vspro.html",
    "revision": "fef84c848b02e73e81a734ec3be5eb76"
  },
  {
    "url": "marketing/4c.html",
    "revision": "28b6e8d7acd5d6833d80824efe9e0deb"
  },
  {
    "url": "marketing/4p.html",
    "revision": "e9de1be56c77517ccb2b2f4b081e446c"
  },
  {
    "url": "solution/asis-tobe.html",
    "revision": "77fdf6086f0bd2773e038d4bb5ca9d40"
  },
  {
    "url": "solution/problem-finding-4p.html",
    "revision": "adf8a04973cf4f1b0f783e70fe46c062"
  },
  {
    "url": "strategy/3c.html",
    "revision": "e5b0987dbf33d19f34447e5c2bcdcb88"
  },
  {
    "url": "strategy/3m.html",
    "revision": "0ec9dd9688d41bb1b56d89fd0b41f197"
  },
  {
    "url": "strategy/5f.html",
    "revision": "4f90d61dcf697f74114d81c407d8bc6f"
  },
  {
    "url": "strategy/5f.png",
    "revision": "af607a8786d5876a98bd18c97199add5"
  },
  {
    "url": "strategy/7s.html",
    "revision": "8623112deb1074e032f3bc82e9a6c2a5"
  },
  {
    "url": "strategy/pest.html",
    "revision": "38a471ab450cf81949118350456c1287"
  },
  {
    "url": "strategy/ppm.html",
    "revision": "f8d5d9229f37a0cbca3aeb6227993542"
  },
  {
    "url": "strategy/ppm.png",
    "revision": "3da3ea9024f4167fb16560512212a4bf"
  },
  {
    "url": "strategy/risk-map.html",
    "revision": "4ab7d189717cd4140ac265c773a4c0e5"
  },
  {
    "url": "strategy/risk-map.png",
    "revision": "d4fb9ba92c5756d6553d06976da4eb8a"
  },
  {
    "url": "strategy/swot.html",
    "revision": "f61190ccef8f6a81d5e542e9baee8e86"
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
