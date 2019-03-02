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
    "revision": "fbb4d49426dd8841f2806318f2b13a5a"
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
    "url": "assets/js/10.772aaf6b.js",
    "revision": "3a2143a28657ee6639231947fb40f5bd"
  },
  {
    "url": "assets/js/11.20c1bba0.js",
    "revision": "bfb1dda7b3a815191eb72a6bc3803fb7"
  },
  {
    "url": "assets/js/12.3117dcfa.js",
    "revision": "dbadf693ba39a11c831c12f45a6964a0"
  },
  {
    "url": "assets/js/13.16aa4a15.js",
    "revision": "d52668a3e19611b06513e87daa3de0d4"
  },
  {
    "url": "assets/js/14.ca57b14f.js",
    "revision": "00967d1f525216b65e53ee866daae657"
  },
  {
    "url": "assets/js/15.7086a283.js",
    "revision": "77250752c1c22095a4827bf0ec12a6c0"
  },
  {
    "url": "assets/js/16.70422116.js",
    "revision": "84a9a1be807ae5bf828b54f062f80b99"
  },
  {
    "url": "assets/js/17.83668083.js",
    "revision": "6d7ddf4121bed108b0dd9770e0642385"
  },
  {
    "url": "assets/js/18.578a3855.js",
    "revision": "d9a1612a5d957bb5341f705ae803da96"
  },
  {
    "url": "assets/js/19.aae4090d.js",
    "revision": "7a6a872447879f061bb50f974d7a0f33"
  },
  {
    "url": "assets/js/2.78b1d4f8.js",
    "revision": "41622073195774462b77dcae23ef303b"
  },
  {
    "url": "assets/js/20.9d9bb631.js",
    "revision": "5c24f07914ee16115da7647c5fb5002b"
  },
  {
    "url": "assets/js/21.50917bfc.js",
    "revision": "2ff0ec7de2bf5ebd625c783bfafef04c"
  },
  {
    "url": "assets/js/22.2a3b5f7b.js",
    "revision": "86110dc29f61915944c3a313a3250ef1"
  },
  {
    "url": "assets/js/23.d11edfa8.js",
    "revision": "5a5196bdb3963d695e519926f555daa4"
  },
  {
    "url": "assets/js/24.1f1b1d46.js",
    "revision": "9f0f342021ce5cb1b653fd31d78476de"
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
    "url": "assets/js/4.b565d93f.js",
    "revision": "24a175273415591028c93d8c65ecf612"
  },
  {
    "url": "assets/js/5.5700ce64.js",
    "revision": "bb1391e0d7ddd26cc5a0fb8f61fb46b2"
  },
  {
    "url": "assets/js/6.64cb3bb0.js",
    "revision": "c7e736c50be266d6d38c5d9be4ccd475"
  },
  {
    "url": "assets/js/7.79cb2178.js",
    "revision": "ce39370df07a3869f7eaa5ee484c485a"
  },
  {
    "url": "assets/js/8.a1c49d4c.js",
    "revision": "fb586a1bd887006ee1b0832625996807"
  },
  {
    "url": "assets/js/9.fd9eb19f.js",
    "revision": "4e6b217187fbee8582ac21006d42a51d"
  },
  {
    "url": "assets/js/app.eb9b9981.js",
    "revision": "d4cf73a0269bbc48073dccbfa6269ae7"
  },
  {
    "url": "collection/color-bath.html",
    "revision": "9c669abc7a74633f740c3faa18f41a7d"
  },
  {
    "url": "favicon.png",
    "revision": "09e93db293baeaa8d51326088e8409e6"
  },
  {
    "url": "improvement/3gen.html",
    "revision": "cde731027611ecfc893640ff1a1a6fc8"
  },
  {
    "url": "index.html",
    "revision": "1ec3bbdad0fd58368d3a338254a273fb"
  },
  {
    "url": "management/abcde.html",
    "revision": "ba7ca072c83c0dc25ae426f2217f4a36"
  },
  {
    "url": "management/vspro.html",
    "revision": "cdb840935c9d49ecb92d8f006852195c"
  },
  {
    "url": "marketing/4c.html",
    "revision": "8d1d0ee69ba9f64557f2a86c64ff9e15"
  },
  {
    "url": "marketing/4p.html",
    "revision": "92b0c3e30bae47fe0afaa05e44f2c039"
  },
  {
    "url": "organization-idea/5w1h.html",
    "revision": "9c9c500f7f6b584676b69baf22a6edc4"
  },
  {
    "url": "solution/asis-tobe.html",
    "revision": "bb5437f1fdd9e5c2933df9e90e5e9622"
  },
  {
    "url": "solution/problem-finding-4p.html",
    "revision": "4c1b7ebbcf2fb673bffd4fc52f9f3117"
  },
  {
    "url": "strategy/3c.html",
    "revision": "8a47177a29eeef6b07dda47764e98631"
  },
  {
    "url": "strategy/3m.html",
    "revision": "28cc32028ee533665ce54c7afdff484b"
  },
  {
    "url": "strategy/5f.html",
    "revision": "dd0aa5afa0279695a3bfcf2e1a94eac1"
  },
  {
    "url": "strategy/5f.png",
    "revision": "af607a8786d5876a98bd18c97199add5"
  },
  {
    "url": "strategy/7s.html",
    "revision": "9ea6fe98d37960daa189d5e7426679aa"
  },
  {
    "url": "strategy/pest.html",
    "revision": "6a800f4b09a23a1df99fd65f77ea91a1"
  },
  {
    "url": "strategy/ppm.html",
    "revision": "a1dc53777aa2c381ca03ba13929f2b21"
  },
  {
    "url": "strategy/ppm.png",
    "revision": "3da3ea9024f4167fb16560512212a4bf"
  },
  {
    "url": "strategy/risk-map.html",
    "revision": "60d4d4d2e08b52ef69c1e7accdc12b0a"
  },
  {
    "url": "strategy/risk-map.png",
    "revision": "d4fb9ba92c5756d6553d06976da4eb8a"
  },
  {
    "url": "strategy/swot.html",
    "revision": "ed70bf61a2eb355998c87270f638c7fa"
  },
  {
    "url": "strategy/swot.png",
    "revision": "3d26be87b787660faacd5ff6330138f0"
  },
  {
    "url": "trial-test/image-catalog.html",
    "revision": "e19075fadcc2aa4114a3f9c0e7fd5a8f"
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
