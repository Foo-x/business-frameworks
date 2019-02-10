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
    "revision": "8ad143ff2e936a991852ebc7ef68eeb2"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "db3f70f5f37efe5436e3dd65dae036ff"
  },
  {
    "url": "assets/css/0.styles.fe154b93.css",
    "revision": "6706f1db6808885c071e18d6221a7354"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.28e35909.js",
    "revision": "f1408ebb13303bd3ec4137f23977c6ce"
  },
  {
    "url": "assets/js/11.a3f170f7.js",
    "revision": "e93de577eb82a8b424436f9fe435cf68"
  },
  {
    "url": "assets/js/12.3b292ce6.js",
    "revision": "305501c8de6ffa0cf1108b13f8254b37"
  },
  {
    "url": "assets/js/13.b82293dc.js",
    "revision": "ce8ec0fce1cbe1254faee0e21d36c9f7"
  },
  {
    "url": "assets/js/14.ed6eeccf.js",
    "revision": "fe7e4ff0372ae18f93773cfe05fa0599"
  },
  {
    "url": "assets/js/15.c700ac90.js",
    "revision": "fac0c3cb8e5a1b905d78d0119ec9b059"
  },
  {
    "url": "assets/js/16.e29bc467.js",
    "revision": "60a419f72f075430c0d886c87881dde3"
  },
  {
    "url": "assets/js/17.013dc61a.js",
    "revision": "ba79054122a4964c00da9329f030c33a"
  },
  {
    "url": "assets/js/18.48d1f9d6.js",
    "revision": "01e4e2788f775df7bdf79e7632e397a9"
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
    "url": "assets/js/4.6a7f1020.js",
    "revision": "90e11a8c1d22710c6424d7381b67336d"
  },
  {
    "url": "assets/js/5.5c9baa74.js",
    "revision": "f2220f0258e516a2883ceef13b16574e"
  },
  {
    "url": "assets/js/6.bca8d79e.js",
    "revision": "88b5e12d251354314282d380b24b1ab4"
  },
  {
    "url": "assets/js/7.8f7c2309.js",
    "revision": "be2c11cf0fbb0bdc6e1a980a88315035"
  },
  {
    "url": "assets/js/8.069b03b0.js",
    "revision": "66d1f984b4e9e6e76b95bbf2f41f0481"
  },
  {
    "url": "assets/js/9.f58a3bb2.js",
    "revision": "486a307b31cf1b9d39185b73ce3c30dd"
  },
  {
    "url": "assets/js/app.adaff681.js",
    "revision": "72938b55195265397e7f818f00bd0aac"
  },
  {
    "url": "favicon.png",
    "revision": "09e93db293baeaa8d51326088e8409e6"
  },
  {
    "url": "index.html",
    "revision": "db648e72929a9450c1580d784929080a"
  },
  {
    "url": "management/abcde.html",
    "revision": "cce9e68b54f3fc51d817f8044629e889"
  },
  {
    "url": "management/vspro.html",
    "revision": "551f1914fa17e35190a9ec77978a6321"
  },
  {
    "url": "marketing/4c.html",
    "revision": "2ef9993f5b6324c6b2a9c8787fe70ea5"
  },
  {
    "url": "marketing/4p.html",
    "revision": "4ab68bd2d01f149afc71518fc82e9cd0"
  },
  {
    "url": "strategy/3c.html",
    "revision": "edc1c764756b34f27e224849d8ab9639"
  },
  {
    "url": "strategy/3m.html",
    "revision": "c7e6f11819761ee9a401cd8ea878791b"
  },
  {
    "url": "strategy/5f.html",
    "revision": "594eefd97ecb243d968537883acbfcfa"
  },
  {
    "url": "strategy/5f.png",
    "revision": "af607a8786d5876a98bd18c97199add5"
  },
  {
    "url": "strategy/7s.html",
    "revision": "4002921805a60e969711e69f5f81a865"
  },
  {
    "url": "strategy/pest.html",
    "revision": "10ea569e58b3a7b9a01b21c928cd8c1c"
  },
  {
    "url": "strategy/ppm.html",
    "revision": "3a724a4365a5bdcf2ad5f5c819ccd2d9"
  },
  {
    "url": "strategy/ppm.png",
    "revision": "3da3ea9024f4167fb16560512212a4bf"
  },
  {
    "url": "strategy/risk-map.html",
    "revision": "40837209e2aaca499455adcf39716c25"
  },
  {
    "url": "strategy/risk-map.png",
    "revision": "d4fb9ba92c5756d6553d06976da4eb8a"
  },
  {
    "url": "strategy/swot.html",
    "revision": "a51bf6bb27c97a68d90fcde645d46fcf"
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
