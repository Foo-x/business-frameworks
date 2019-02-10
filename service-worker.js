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
    "revision": "172f858cbaa10b36e99ad140975a501b"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "db3f70f5f37efe5436e3dd65dae036ff"
  },
  {
    "url": "assets/css/0.styles.a4639b65.css",
    "revision": "219e91bd32bc0d4b7aae77c788e15e10"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7567f10c.js",
    "revision": "8554b734a5a614e02b7ac7ff9e0a865a"
  },
  {
    "url": "assets/js/11.fe7a78a7.js",
    "revision": "ed7a7b93add4711a5e9ff90622d19581"
  },
  {
    "url": "assets/js/12.6e01ca11.js",
    "revision": "643bbbc82fc01933a942c8511d83ed01"
  },
  {
    "url": "assets/js/13.03979ae0.js",
    "revision": "965e3cc68ac27c630f194a0305f84860"
  },
  {
    "url": "assets/js/14.b27bc568.js",
    "revision": "5ef36c63f849c1e04d75147d85353f0b"
  },
  {
    "url": "assets/js/15.9d56f29c.js",
    "revision": "2b7dae87a147dc0b2fd97536f77c3822"
  },
  {
    "url": "assets/js/16.1c73cdda.js",
    "revision": "0077f0b73afb55b66ffd1bf196c7645a"
  },
  {
    "url": "assets/js/17.5b7ff193.js",
    "revision": "a417bdeff63d2a489138a6544afd0977"
  },
  {
    "url": "assets/js/2.3219c593.js",
    "revision": "0fcd96023d4d816f69a3b80f989b73cf"
  },
  {
    "url": "assets/js/3.174d9910.js",
    "revision": "2be109cc5fcd3fcf9459d7e9dd52f4c0"
  },
  {
    "url": "assets/js/4.1a2c7cf5.js",
    "revision": "d86349830cb5b91e96a48c6060269fe5"
  },
  {
    "url": "assets/js/5.efd90174.js",
    "revision": "dc6bad3d5cf14920f14721e722c7e920"
  },
  {
    "url": "assets/js/6.1d0fbdd9.js",
    "revision": "08a7cf238b1059fa93a1d19f8dbc1cb4"
  },
  {
    "url": "assets/js/7.ad5d5b85.js",
    "revision": "e2d4d10a3cda5731b60c726aaa6e3dc3"
  },
  {
    "url": "assets/js/8.d680cf09.js",
    "revision": "39e0e0b93850adb3dbbd23c36d82bc9b"
  },
  {
    "url": "assets/js/9.9058f827.js",
    "revision": "ce70a50b3b7b1111bcadb409530dc06f"
  },
  {
    "url": "assets/js/app.400e8718.js",
    "revision": "16578088e2bd51a03d84431d60d65941"
  },
  {
    "url": "favicon.png",
    "revision": "09e93db293baeaa8d51326088e8409e6"
  },
  {
    "url": "index.html",
    "revision": "63ca3bd2aae0a696c849b0e4517beb27"
  },
  {
    "url": "management/vspro.html",
    "revision": "cdbc88e27558b8b966135ceab0686820"
  },
  {
    "url": "marketing/4c.html",
    "revision": "676d679cba6284075804b94a1729e305"
  },
  {
    "url": "marketing/4p.html",
    "revision": "f6debca90174d539f46a140a3a2cde99"
  },
  {
    "url": "strategy/3c.html",
    "revision": "9e01da020845bf5fb7823a0bfeb1dfca"
  },
  {
    "url": "strategy/3m.html",
    "revision": "174bfd2f1eb04414a4a330e2c008af35"
  },
  {
    "url": "strategy/5f.html",
    "revision": "01e32139609f2286c3ad720f41c0c689"
  },
  {
    "url": "strategy/5f.png",
    "revision": "af607a8786d5876a98bd18c97199add5"
  },
  {
    "url": "strategy/7s.html",
    "revision": "9314d8a80e48b767c47f9973d247c4da"
  },
  {
    "url": "strategy/pest.html",
    "revision": "a6eacf9b96d7ae86f370bea4f9839723"
  },
  {
    "url": "strategy/ppm.html",
    "revision": "076bd5fade35e70274671d432c32d2e1"
  },
  {
    "url": "strategy/ppm.png",
    "revision": "3da3ea9024f4167fb16560512212a4bf"
  },
  {
    "url": "strategy/risk-map.html",
    "revision": "cf1234751f15d261f6794868fb5c8c39"
  },
  {
    "url": "strategy/risk-map.png",
    "revision": "d4fb9ba92c5756d6553d06976da4eb8a"
  },
  {
    "url": "strategy/swot.html",
    "revision": "d1b4c2d639bca73a758f51e93cb48296"
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
