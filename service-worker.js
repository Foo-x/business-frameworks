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
    "revision": "0a17ae76e00a828fd776f4483d6c2f20"
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
    "url": "assets/js/13.bfd6f1de.js",
    "revision": "e03b599865cfec66b57b5d29e8915059"
  },
  {
    "url": "assets/js/14.0ba7b115.js",
    "revision": "af4602a625870f47547b9e35d7bde1e6"
  },
  {
    "url": "assets/js/15.c4d0f1fd.js",
    "revision": "21e9ae7555c2a2460af82f711442f54c"
  },
  {
    "url": "assets/js/16.94a4eff4.js",
    "revision": "b20d980eea6d9e18358979d411a55d64"
  },
  {
    "url": "assets/js/17.0a9f2cbe.js",
    "revision": "5ed753ac7f8aacb5d39635e00d9255d9"
  },
  {
    "url": "assets/js/18.030fa4c6.js",
    "revision": "6455e95d68e5d9a4f962e104fbcdbbfe"
  },
  {
    "url": "assets/js/19.39695424.js",
    "revision": "b6f5155550d61551efddc6871df3dcb5"
  },
  {
    "url": "assets/js/2.78b1d4f8.js",
    "revision": "41622073195774462b77dcae23ef303b"
  },
  {
    "url": "assets/js/20.218468fb.js",
    "revision": "eb1d6d8ed91ca89aa8d3f00847222b24"
  },
  {
    "url": "assets/js/21.91f18525.js",
    "revision": "348fc869f1954a69dbdaff56b351ad83"
  },
  {
    "url": "assets/js/22.bbd8f6bd.js",
    "revision": "0198e159608b3219751b07ff7177ab0b"
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
    "url": "assets/js/4.b3f2cce7.js",
    "revision": "3686f9eb43affeb5a210c603c255e222"
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
    "url": "assets/js/app.eb3e2df1.js",
    "revision": "0dd922b327c1af8d76602623a4038eb2"
  },
  {
    "url": "collection/color-bath.html",
    "revision": "d62e18abd96a357d8efaf31312dfc158"
  },
  {
    "url": "favicon.png",
    "revision": "09e93db293baeaa8d51326088e8409e6"
  },
  {
    "url": "improvement/3gen.html",
    "revision": "6563e4f111a28c7b93ee7a0420ca12c4"
  },
  {
    "url": "index.html",
    "revision": "fe7c644b0fa70c2cff7749a8b9abdf31"
  },
  {
    "url": "management/abcde.html",
    "revision": "0aa7bf4ef1f1caa0d84a0a5882939593"
  },
  {
    "url": "management/vspro.html",
    "revision": "1cf28c5eed1bce784a1085c3835e38b8"
  },
  {
    "url": "marketing/4c.html",
    "revision": "045adf81c2ba0b784e48921d838fe520"
  },
  {
    "url": "marketing/4p.html",
    "revision": "3913649821bc39e4a45640cb12e6fb83"
  },
  {
    "url": "solution/asis-tobe.html",
    "revision": "dd4d0b708550fdf9fb18c3e9107d0d70"
  },
  {
    "url": "solution/problem-finding-4p.html",
    "revision": "eaef6293dbf51a678c5554c3b67065ad"
  },
  {
    "url": "strategy/3c.html",
    "revision": "976252245e6a7548e37d18a4e0c86b45"
  },
  {
    "url": "strategy/3m.html",
    "revision": "ae3deda39b0793e4901c7d7b18f02f4f"
  },
  {
    "url": "strategy/5f.html",
    "revision": "efd3131e90fadd358103a620e897e0c6"
  },
  {
    "url": "strategy/5f.png",
    "revision": "af607a8786d5876a98bd18c97199add5"
  },
  {
    "url": "strategy/7s.html",
    "revision": "ae50605a1479fa0873dd928a6dbc799a"
  },
  {
    "url": "strategy/pest.html",
    "revision": "989e50a8a80ee64f4673f5b508fff540"
  },
  {
    "url": "strategy/ppm.html",
    "revision": "520814c2c33fa97019086bc259961bcc"
  },
  {
    "url": "strategy/ppm.png",
    "revision": "3da3ea9024f4167fb16560512212a4bf"
  },
  {
    "url": "strategy/risk-map.html",
    "revision": "5fef89fc0045fcbee9e6f0929173b53c"
  },
  {
    "url": "strategy/risk-map.png",
    "revision": "d4fb9ba92c5756d6553d06976da4eb8a"
  },
  {
    "url": "strategy/swot.html",
    "revision": "6e38357d75b5a6650eb91da6dd0b26a2"
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
