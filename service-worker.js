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
    "revision": "63f99f0e1e0180cad6496a8be4e8f35c"
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
    "url": "assets/js/10.4a8e15a1.js",
    "revision": "1cca17390489f726957b8d15d2616172"
  },
  {
    "url": "assets/js/11.44a03bf4.js",
    "revision": "6e8a106bf2a9acba26b3cb6428058f56"
  },
  {
    "url": "assets/js/12.fc8b2078.js",
    "revision": "6b94061f7d61d60d1462f33585165367"
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
    "url": "assets/js/16.046fbef2.js",
    "revision": "f6d2e22d83262f69e990711f2731dff0"
  },
  {
    "url": "assets/js/17.ce3da2e0.js",
    "revision": "2976c645d632133c04e2ff174db6107a"
  },
  {
    "url": "assets/js/18.578a3855.js",
    "revision": "d9a1612a5d957bb5341f705ae803da96"
  },
  {
    "url": "assets/js/19.6546bb95.js",
    "revision": "adbbcacb07e931ba9e604731ea6a9892"
  },
  {
    "url": "assets/js/2.78b1d4f8.js",
    "revision": "41622073195774462b77dcae23ef303b"
  },
  {
    "url": "assets/js/20.b1342e1f.js",
    "revision": "1be55a6e55d66ae69c46690391647285"
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
    "url": "assets/js/24.9a146106.js",
    "revision": "8e33206be7e19df0d19124f5af821e02"
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
    "url": "assets/js/6.ad6bec58.js",
    "revision": "a5f60d5ab0409545d0dafa862fd6e7af"
  },
  {
    "url": "assets/js/7.27e92fef.js",
    "revision": "e83290105548078c6f35bdafd9e8ace1"
  },
  {
    "url": "assets/js/8.a83ef830.js",
    "revision": "5dc7b30ec333994e8ff8911c48ae4490"
  },
  {
    "url": "assets/js/9.b97e57ac.js",
    "revision": "e9f3609706745c51a84fef0268b40ca0"
  },
  {
    "url": "assets/js/app.130a2462.js",
    "revision": "23dc0073d0898e2e44fb3215bf23d0e6"
  },
  {
    "url": "collection/color-bath.html",
    "revision": "25e4bb961593160b9afc96ad2a14a498"
  },
  {
    "url": "favicon.png",
    "revision": "09e93db293baeaa8d51326088e8409e6"
  },
  {
    "url": "improvement/3gen.html",
    "revision": "834bef1b0b4442cc58f6d0f06280b1ca"
  },
  {
    "url": "index.html",
    "revision": "83f9d63b046a4da4a928b7a3814d5298"
  },
  {
    "url": "management/abcde.html",
    "revision": "2ae3550d8ecf723b1ddbe9e39789c528"
  },
  {
    "url": "management/vspro.html",
    "revision": "2f82368b83d2429c3cff6bdc64a40316"
  },
  {
    "url": "marketing/4c.html",
    "revision": "c6add3981e390a90a8307ef3d9924482"
  },
  {
    "url": "marketing/4p.html",
    "revision": "090573f59cee99d693a52b6b55ca9a75"
  },
  {
    "url": "organization-idea/5w1h.html",
    "revision": "96e3078592baecdc226569e03ecbc951"
  },
  {
    "url": "solution/asis-tobe.html",
    "revision": "d23ae7a90055c456f6f3782abffc5e21"
  },
  {
    "url": "solution/problem-finding-4p.html",
    "revision": "dff779e7ea04565cf80059f9035d914b"
  },
  {
    "url": "strategy/3c.html",
    "revision": "b00d2dd6708085a68ca0cd90b5cc4dc0"
  },
  {
    "url": "strategy/3m.html",
    "revision": "f3a9f7c12ac557ec864f1f149778e2f2"
  },
  {
    "url": "strategy/5f.html",
    "revision": "129cf378b3b0d85f14b7fba8020db75c"
  },
  {
    "url": "strategy/5f.png",
    "revision": "af607a8786d5876a98bd18c97199add5"
  },
  {
    "url": "strategy/7s.html",
    "revision": "0a62678be335aa8b361461039b9ef47f"
  },
  {
    "url": "strategy/pest.html",
    "revision": "811116f84a3828fcd2e45bdd35c2f42b"
  },
  {
    "url": "strategy/ppm.html",
    "revision": "cb68fc0e0ed3cd81f37c011db9e7ef6b"
  },
  {
    "url": "strategy/ppm.png",
    "revision": "3da3ea9024f4167fb16560512212a4bf"
  },
  {
    "url": "strategy/risk-map.html",
    "revision": "6ef5c452f5797787dd8d44a16ea3e2e0"
  },
  {
    "url": "strategy/risk-map.png",
    "revision": "d4fb9ba92c5756d6553d06976da4eb8a"
  },
  {
    "url": "strategy/swot.html",
    "revision": "154952144b9a3460802425870b0e48c9"
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
