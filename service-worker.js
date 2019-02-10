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
    "revision": "f33049e80aeb0f8038ec6c929bd980ef"
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
    "url": "assets/js/10.045c0a3b.js",
    "revision": "962d6c33ee63d2d28f0e1fa7a93f5fa7"
  },
  {
    "url": "assets/js/11.0fd45db9.js",
    "revision": "ab7ee4e62a16bd17b44c7dd2c2e8bb35"
  },
  {
    "url": "assets/js/12.b9c0ade1.js",
    "revision": "3e613de69b0a26ae1780bd45443841e1"
  },
  {
    "url": "assets/js/13.8dc04604.js",
    "revision": "d83dd3dd404e816531aad948f8a4e1b4"
  },
  {
    "url": "assets/js/14.ecda8e29.js",
    "revision": "d19a0c6411e2447050ebed9628b41f30"
  },
  {
    "url": "assets/js/15.e8912968.js",
    "revision": "94b8b6617a8f598b53856a1de42afc00"
  },
  {
    "url": "assets/js/16.3c1727ff.js",
    "revision": "9158be32b91e54fbdf0726a608532bbc"
  },
  {
    "url": "assets/js/17.04a75166.js",
    "revision": "5ec5ba54e3627a9cf408ae79272573c1"
  },
  {
    "url": "assets/js/18.adb070f3.js",
    "revision": "3e1b073a698476a30d4c55421879c6bd"
  },
  {
    "url": "assets/js/19.ff7cbc49.js",
    "revision": "47b1bb710827dafdac83d2f4c3a12970"
  },
  {
    "url": "assets/js/2.0387e1e1.js",
    "revision": "2357a0d88787fd6bc76d3d851f752b2f"
  },
  {
    "url": "assets/js/3.ed2d2f7f.js",
    "revision": "365496ad0cdd7ae9c14e5e1e2812aaa1"
  },
  {
    "url": "assets/js/4.55f3f993.js",
    "revision": "2b4b2037d662d8524080366b66d7e202"
  },
  {
    "url": "assets/js/5.5c9baa74.js",
    "revision": "f2220f0258e516a2883ceef13b16574e"
  },
  {
    "url": "assets/js/6.4592eb88.js",
    "revision": "8c227d11e196dcbc883f4942aae65cab"
  },
  {
    "url": "assets/js/7.38bee791.js",
    "revision": "48182a18b1593b3a2b781cc7667936d2"
  },
  {
    "url": "assets/js/8.1432ecc4.js",
    "revision": "822980fc82dbd665bae4d890361808fa"
  },
  {
    "url": "assets/js/9.d3db659f.js",
    "revision": "855754d560eac42664be8fdb24bc23fd"
  },
  {
    "url": "assets/js/app.ef00aae5.js",
    "revision": "73687c3348d9d6cba1afb9602f8c0eec"
  },
  {
    "url": "favicon.png",
    "revision": "09e93db293baeaa8d51326088e8409e6"
  },
  {
    "url": "index.html",
    "revision": "71595140e9279c08bd1b90fe67f55c41"
  },
  {
    "url": "management/abcde.html",
    "revision": "6053f95173ba7ad6bf1908fef58be6a6"
  },
  {
    "url": "management/vspro.html",
    "revision": "dc8ac373cb9388212c2b37dc4a304936"
  },
  {
    "url": "marketing/4c.html",
    "revision": "b153678b0cd9934c0e32021f706f6d07"
  },
  {
    "url": "marketing/4p.html",
    "revision": "30de7cd420ea8f4d6ee92a667fd464ee"
  },
  {
    "url": "strategy/3c.html",
    "revision": "e9d1e50b5592e74db602ff9e0b799eb7"
  },
  {
    "url": "strategy/3m.html",
    "revision": "ed63afd184867e7fefdf0c5e5a1145a1"
  },
  {
    "url": "strategy/5f.html",
    "revision": "b10b470922f1b5e3e10cd6b9d5d92458"
  },
  {
    "url": "strategy/5f.png",
    "revision": "af607a8786d5876a98bd18c97199add5"
  },
  {
    "url": "strategy/7s.html",
    "revision": "a8f8aaa573bb5e9dec032eacd5320af1"
  },
  {
    "url": "strategy/pest.html",
    "revision": "6d30a0c462b3bcf0f764445104b309d7"
  },
  {
    "url": "strategy/ppm.html",
    "revision": "87f47e6c5c87749927906fcf62c511da"
  },
  {
    "url": "strategy/ppm.png",
    "revision": "3da3ea9024f4167fb16560512212a4bf"
  },
  {
    "url": "strategy/risk-map.html",
    "revision": "9d0fea4f736a2217fad80d10d2521a2e"
  },
  {
    "url": "strategy/risk-map.png",
    "revision": "d4fb9ba92c5756d6553d06976da4eb8a"
  },
  {
    "url": "strategy/swot.html",
    "revision": "f52ac3a3a92bc91175fa813f0f6206f9"
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
