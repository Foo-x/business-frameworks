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
    "revision": "968cb12d4166c669bfa2f7310cdb4821"
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
    "url": "assets/js/10.db3a4559.js",
    "revision": "4df54807c76d8473375fec25dd27823c"
  },
  {
    "url": "assets/js/11.a25b0bab.js",
    "revision": "325e00c50481f33060a31b400e63530e"
  },
  {
    "url": "assets/js/12.91d05ba6.js",
    "revision": "fb765110915beb01819da70f6021e525"
  },
  {
    "url": "assets/js/13.a99a1775.js",
    "revision": "fd170a150e2a8c2c0cd5bd26efecb9a0"
  },
  {
    "url": "assets/js/14.be71c1e9.js",
    "revision": "3256d2e8aee157ea5dfe26f91ee180fd"
  },
  {
    "url": "assets/js/15.0d4744aa.js",
    "revision": "5a27b1265b316ffe53e88dc36eee1215"
  },
  {
    "url": "assets/js/16.e2591249.js",
    "revision": "58a34c245864059571ff443641bfe8c9"
  },
  {
    "url": "assets/js/17.f18b1bcf.js",
    "revision": "5ca354670615532c00ec52387b7fb957"
  },
  {
    "url": "assets/js/18.4c06f076.js",
    "revision": "f79b99fa96d34c70465d73a18ed70836"
  },
  {
    "url": "assets/js/19.b38ac3b4.js",
    "revision": "0eb9f0ffa4427e7d48df697d497baa86"
  },
  {
    "url": "assets/js/2.78b1d4f8.js",
    "revision": "41622073195774462b77dcae23ef303b"
  },
  {
    "url": "assets/js/20.bdd59bd3.js",
    "revision": "0448490ce31c53d19d0ac226f6b3389d"
  },
  {
    "url": "assets/js/21.14bbee0e.js",
    "revision": "f4a59b3d25ceed81e841aa15b3222920"
  },
  {
    "url": "assets/js/22.5436f7c4.js",
    "revision": "25848cef96d36e402aa45a417203de62"
  },
  {
    "url": "assets/js/23.ecc236ed.js",
    "revision": "c09568898e575d561f8b5ca1c9400a1f"
  },
  {
    "url": "assets/js/24.cf7e2259.js",
    "revision": "33991d0153e6254df36ab6d8a269cb92"
  },
  {
    "url": "assets/js/25.3d42537d.js",
    "revision": "2b3ed3f4a21611607a8a9c9c5042b750"
  },
  {
    "url": "assets/js/26.ff7f2309.js",
    "revision": "ef02b132343b2ca1098ffb404cae673b"
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
    "url": "assets/js/6.73ae0969.js",
    "revision": "d567ab6573be12d463325d45f3aae8ab"
  },
  {
    "url": "assets/js/7.663e3d9d.js",
    "revision": "e1c4d5e8121fade9950dc9f91e37f0f4"
  },
  {
    "url": "assets/js/8.a2ce3980.js",
    "revision": "3bc7fbb95818363186d616c155bc6215"
  },
  {
    "url": "assets/js/9.3e0aae25.js",
    "revision": "b865dfe95b0d6a471d8269eeaba67868"
  },
  {
    "url": "assets/js/app.21ae0544.js",
    "revision": "b4601452225051f96bab1290dd70ddb2"
  },
  {
    "url": "collection/color-bath.html",
    "revision": "b0c0dc047aa8c082864e52ba7169a0a6"
  },
  {
    "url": "evaluation-decision/pmi.html",
    "revision": "af5b278ab323c2f8fb7fc5fd3b3f9181"
  },
  {
    "url": "favicon.png",
    "revision": "09e93db293baeaa8d51326088e8409e6"
  },
  {
    "url": "improvement/3gen.html",
    "revision": "9926750e5ebc67721272af7046a24461"
  },
  {
    "url": "index.html",
    "revision": "b08adefcde6b0bf4ba72f7d7234ec9e4"
  },
  {
    "url": "management/abcde.html",
    "revision": "3eee8400e0eb0ce4ca0fd1529a553d0e"
  },
  {
    "url": "management/vspro.html",
    "revision": "5bcc3a9ee7b0ac3fa4060266e1609bf8"
  },
  {
    "url": "marketing/4c.html",
    "revision": "22e0f5ae29d8c707a2c8f2de17b32a9a"
  },
  {
    "url": "marketing/4p.html",
    "revision": "cde418590826f8997cabcda378edfe57"
  },
  {
    "url": "organization-idea/5w1h.html",
    "revision": "d3e01304cf8fc3cd1abcab83d27d0b86"
  },
  {
    "url": "solution/asis-tobe.html",
    "revision": "5a4a5839f44ac3a9d87e437250875fe5"
  },
  {
    "url": "solution/problem-finding-4p.html",
    "revision": "695f27de9e0def6257119225b5850808"
  },
  {
    "url": "strategy/3c.html",
    "revision": "398d81529d2bc762ccee63d0678e243c"
  },
  {
    "url": "strategy/3m.html",
    "revision": "58a95a4d3ca12b3f59fd3739a809dc88"
  },
  {
    "url": "strategy/5f.html",
    "revision": "870ff03a276ef58466557da403269301"
  },
  {
    "url": "strategy/5f.png",
    "revision": "af607a8786d5876a98bd18c97199add5"
  },
  {
    "url": "strategy/7s.html",
    "revision": "f9338269f143521f42629e88f585505e"
  },
  {
    "url": "strategy/pest.html",
    "revision": "a739ae4f10f347b38669d0f5d75b7653"
  },
  {
    "url": "strategy/ppm.html",
    "revision": "e78a135dc00ab535acb8bdf14ce50cc5"
  },
  {
    "url": "strategy/ppm.png",
    "revision": "3da3ea9024f4167fb16560512212a4bf"
  },
  {
    "url": "strategy/risk-map.html",
    "revision": "25d7ee474da84a579e3fc6459fccc2ba"
  },
  {
    "url": "strategy/risk-map.png",
    "revision": "d4fb9ba92c5756d6553d06976da4eb8a"
  },
  {
    "url": "strategy/swot.html",
    "revision": "b7e6d454db54cf000e48e8aaab627f40"
  },
  {
    "url": "strategy/swot.png",
    "revision": "3d26be87b787660faacd5ff6330138f0"
  },
  {
    "url": "trial-test/image-catalog.html",
    "revision": "0f3c31453f486894a01d8187f3d80958"
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
