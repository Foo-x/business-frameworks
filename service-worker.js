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
    "revision": "8e8e8c8cc4aed5adfd6d5732c1a5d556"
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
    "url": "assets/js/10.d9adc1c0.js",
    "revision": "52e31fe913c8992c1254cb57000ce854"
  },
  {
    "url": "assets/js/11.9378c593.js",
    "revision": "bb643839ba6f7fa8f440811483fdb3db"
  },
  {
    "url": "assets/js/12.d19b9166.js",
    "revision": "ae72349947088ff45dd48bf747cc97ce"
  },
  {
    "url": "assets/js/13.95f2af12.js",
    "revision": "86da4fdd360af20774615f45bd77d131"
  },
  {
    "url": "assets/js/14.f63bc4e6.js",
    "revision": "ff7f161bb873516d708a5749e74af7eb"
  },
  {
    "url": "assets/js/15.81bb2169.js",
    "revision": "e04a7fe137ca6492f30529cab3a008ed"
  },
  {
    "url": "assets/js/16.16dbc760.js",
    "revision": "371a373bdbc269a9b444391fbf644b3d"
  },
  {
    "url": "assets/js/17.b3866a24.js",
    "revision": "57bfd7ea304b3c5bffbc1bd65aee1827"
  },
  {
    "url": "assets/js/18.c7872a10.js",
    "revision": "51aa7b0c7088ffad141170c75be11bcf"
  },
  {
    "url": "assets/js/19.53e3f124.js",
    "revision": "968ddb5f4f82536e04f866e8fd4ebb20"
  },
  {
    "url": "assets/js/2.78b1d4f8.js",
    "revision": "41622073195774462b77dcae23ef303b"
  },
  {
    "url": "assets/js/20.508b551a.js",
    "revision": "171f4f73dbc6e6e6cdffd5981fa7c7d8"
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
    "url": "assets/js/4.4dc34754.js",
    "revision": "d2b22518abdb1e5440f67b1f437ee359"
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
    "url": "assets/js/7.40ec6759.js",
    "revision": "cc0d23abd41c830fc9e1c6566e553896"
  },
  {
    "url": "assets/js/8.2fe4089c.js",
    "revision": "8efda81f239193cbd66fe9bbf6a1e6d5"
  },
  {
    "url": "assets/js/9.d79a6099.js",
    "revision": "8805f89c952b0f68ab39b72758aea82c"
  },
  {
    "url": "assets/js/app.3b6e339b.js",
    "revision": "2b6ddf73450c68b8768b9f8356520dc8"
  },
  {
    "url": "favicon.png",
    "revision": "09e93db293baeaa8d51326088e8409e6"
  },
  {
    "url": "index.html",
    "revision": "4f85071b6b54d1b4fc97c01dd4c36620"
  },
  {
    "url": "management/abcde.html",
    "revision": "c6574dcace2bb07bd8f741560529503f"
  },
  {
    "url": "management/vspro.html",
    "revision": "189ed8285069a10e0d25e9d74a891412"
  },
  {
    "url": "marketing/4c.html",
    "revision": "2234e0dd91438c8fcf3921b08510a6d2"
  },
  {
    "url": "marketing/4p.html",
    "revision": "31680c6ab61cf69758cc06a4a80f5eb5"
  },
  {
    "url": "solution/asis-tobe.html",
    "revision": "5a8a2e291710a19cc15aeded16853fb9"
  },
  {
    "url": "solution/problem-finding-4p.html",
    "revision": "774639b401b07b5a0c9c1644b66f5131"
  },
  {
    "url": "strategy/3c.html",
    "revision": "0b5724516087408212397ee23da5b456"
  },
  {
    "url": "strategy/3m.html",
    "revision": "38a030f2e36f4b16e40512a2df09eebf"
  },
  {
    "url": "strategy/5f.html",
    "revision": "4268f92cf6f2ba7acad88a54dd551021"
  },
  {
    "url": "strategy/5f.png",
    "revision": "af607a8786d5876a98bd18c97199add5"
  },
  {
    "url": "strategy/7s.html",
    "revision": "da54ad4253364426e841f59b820f7c9f"
  },
  {
    "url": "strategy/pest.html",
    "revision": "54db9f5f33e3cf1e1f67fe13c24ccaa5"
  },
  {
    "url": "strategy/ppm.html",
    "revision": "e1d5b09d68ec730076142a00fa009938"
  },
  {
    "url": "strategy/ppm.png",
    "revision": "3da3ea9024f4167fb16560512212a4bf"
  },
  {
    "url": "strategy/risk-map.html",
    "revision": "dcc66e81809e134b7fca3c3288f375a4"
  },
  {
    "url": "strategy/risk-map.png",
    "revision": "d4fb9ba92c5756d6553d06976da4eb8a"
  },
  {
    "url": "strategy/swot.html",
    "revision": "243809e205931c54acd27e7cb148fec2"
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
