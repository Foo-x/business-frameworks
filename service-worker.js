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
    "revision": "ffda950d8832ed5fe24debe967a8f468"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "db3f70f5f37efe5436e3dd65dae036ff"
  },
  {
    "url": "assets/css/0.styles.1880ca74.css",
    "revision": "219e91bd32bc0d4b7aae77c788e15e10"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3b176e77.js",
    "revision": "c8df182bd5d9b8252b5e512efe883df8"
  },
  {
    "url": "assets/js/11.fe7a78a7.js",
    "revision": "ed7a7b93add4711a5e9ff90622d19581"
  },
  {
    "url": "assets/js/12.5337a44f.js",
    "revision": "70f2449b532bf539c159659a8079942a"
  },
  {
    "url": "assets/js/13.0fcce99f.js",
    "revision": "07a8d31716ac5e8fc067a796fed3f334"
  },
  {
    "url": "assets/js/14.4a2f6859.js",
    "revision": "af7848ded7c728fb214ceaa13626074f"
  },
  {
    "url": "assets/js/15.0d3e77a7.js",
    "revision": "4ddabcf41b203445d673433701b10036"
  },
  {
    "url": "assets/js/16.2318e28a.js",
    "revision": "b47ae853f9cc8207a7095fb67e1c2b86"
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
    "url": "assets/js/3.daf90170.js",
    "revision": "0f95cf9461dac1947b968a253e664bcc"
  },
  {
    "url": "assets/js/4.1a2c7cf5.js",
    "revision": "d86349830cb5b91e96a48c6060269fe5"
  },
  {
    "url": "assets/js/5.f935aa0b.js",
    "revision": "b8b4c44b6a3cb5d3c1de63185101c507"
  },
  {
    "url": "assets/js/6.8a60c4f3.js",
    "revision": "53f05812f0a277c1f1ae5d9a8a2b9d82"
  },
  {
    "url": "assets/js/7.b4107722.js",
    "revision": "5f80c65edebecc64b739c39033865bb4"
  },
  {
    "url": "assets/js/8.e6886cd8.js",
    "revision": "24552b5a244106fdf2d38f2c668edd57"
  },
  {
    "url": "assets/js/9.887a2e66.js",
    "revision": "07ce524bb6b2685425101928b5fefa09"
  },
  {
    "url": "assets/js/app.96f633e4.js",
    "revision": "33dc9c4af877635fb72ff4c3c7782981"
  },
  {
    "url": "favicon.png",
    "revision": "09e93db293baeaa8d51326088e8409e6"
  },
  {
    "url": "index.html",
    "revision": "357eeb693ec653b4b1723438d70c4911"
  },
  {
    "url": "management/vspro.html",
    "revision": "4afd6997aaf6525d555ef8859dfd07cd"
  },
  {
    "url": "marketing/4c.html",
    "revision": "2f479ef2de4a99286a4b5ce1242373a2"
  },
  {
    "url": "marketing/4p.html",
    "revision": "8e278ba7ec037f4cf42967da6cbe75a8"
  },
  {
    "url": "strategy/3c.html",
    "revision": "cf53ef3bd5cfe6e6150951b051b4e8e1"
  },
  {
    "url": "strategy/3m.html",
    "revision": "738722ad3043a56a405fc585a9540d73"
  },
  {
    "url": "strategy/5f.html",
    "revision": "baccec146133cdf7e286172efbfbba72"
  },
  {
    "url": "strategy/5f.png",
    "revision": "af607a8786d5876a98bd18c97199add5"
  },
  {
    "url": "strategy/7s.html",
    "revision": "9c0d035cb7f6b669ee560e50f24fa33c"
  },
  {
    "url": "strategy/pest.html",
    "revision": "ebe39da0ef7ec4c5dfeae245da56c5a9"
  },
  {
    "url": "strategy/ppm.html",
    "revision": "6809fee99c055a13d284cb5e34c2bd08"
  },
  {
    "url": "strategy/ppm.png",
    "revision": "3da3ea9024f4167fb16560512212a4bf"
  },
  {
    "url": "strategy/risk-map.html",
    "revision": "e11153879848fd0c7f0ca256319fa5fc"
  },
  {
    "url": "strategy/risk-map.png",
    "revision": "d4fb9ba92c5756d6553d06976da4eb8a"
  },
  {
    "url": "strategy/swot.html",
    "revision": "ef3a157b215b4de2f673c5cdf4e81f96"
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
