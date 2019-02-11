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
    "revision": "3f9808d80bea44e179b20d876f34fa9b"
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
    "url": "assets/js/11.6b601cd3.js",
    "revision": "980ed2b16ebce860e6ba4b0fc1e907a0"
  },
  {
    "url": "assets/js/12.ce1df44e.js",
    "revision": "3c70af6326d09efcfa55ed7f84c02fc8"
  },
  {
    "url": "assets/js/13.2e4fae75.js",
    "revision": "9bc2b0900d9090a06eb080dd3eb9b221"
  },
  {
    "url": "assets/js/14.3d596b21.js",
    "revision": "6839ef97002141641b61db385071bd6b"
  },
  {
    "url": "assets/js/15.41cc0611.js",
    "revision": "168e6421269afaff5d35aec52cb941ea"
  },
  {
    "url": "assets/js/16.7f89d45e.js",
    "revision": "688937e32b5a7a4a27893ba223292cc7"
  },
  {
    "url": "assets/js/17.5699a6df.js",
    "revision": "66b2c1cca4b4b312886c0df07cc5fcde"
  },
  {
    "url": "assets/js/18.2a31aa29.js",
    "revision": "e28898433d840ceb2180263b9356ca29"
  },
  {
    "url": "assets/js/19.2d6619f3.js",
    "revision": "8e11062b16686ef9533b7fe81dc0c787"
  },
  {
    "url": "assets/js/2.a600422b.js",
    "revision": "f0b7e6effcb32bbcbb148c040f089ded"
  },
  {
    "url": "assets/js/20.585cd2e8.js",
    "revision": "cfc1294fe1ec1a3b5a921eb0c698534a"
  },
  {
    "url": "assets/js/21.8fa71051.js",
    "revision": "62f513342a487ee47933d7e8fa349745"
  },
  {
    "url": "assets/js/3.a2dd3e4e.js",
    "revision": "e7b48471720a98382a26fe8fa7b07ce8"
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
    "url": "assets/js/app.49829628.js",
    "revision": "74f8d1a90e85d5dacbba94a50edab99e"
  },
  {
    "url": "favicon.png",
    "revision": "09e93db293baeaa8d51326088e8409e6"
  },
  {
    "url": "index.html",
    "revision": "54eadbe504924d9777c8ed46ae6cb136"
  },
  {
    "url": "management/abcde.html",
    "revision": "4b8bc3c0038df79ce0ec3b3696f23a4a"
  },
  {
    "url": "management/vspro.html",
    "revision": "6b16e7192277b26263493bc18e93a1bc"
  },
  {
    "url": "marketing/4c.html",
    "revision": "18fa1ef04b0b50cbd24278d613504d10"
  },
  {
    "url": "marketing/4p.html",
    "revision": "690717f7fd27ec5e976d6843e5be0380"
  },
  {
    "url": "solution/asis-tobe.html",
    "revision": "58aeb7851f8b6dedea24e3b80684b65e"
  },
  {
    "url": "solution/problem-finding-4p.html",
    "revision": "de847e41369d1e1888f19a51e2fc07ae"
  },
  {
    "url": "strategy/3c.html",
    "revision": "bbf6a729ecc13a47a632a6bf751c2fb4"
  },
  {
    "url": "strategy/3m.html",
    "revision": "b02667089ac8e6d36d506e82d0f6d4aa"
  },
  {
    "url": "strategy/5f.html",
    "revision": "542e319c4c73dc3177b49f4e2a6dc8a7"
  },
  {
    "url": "strategy/5f.png",
    "revision": "af607a8786d5876a98bd18c97199add5"
  },
  {
    "url": "strategy/7s.html",
    "revision": "252cd452f23f5de63e887e0aea6d4e61"
  },
  {
    "url": "strategy/pest.html",
    "revision": "0d9578ac0ada8105e9552a964648d9df"
  },
  {
    "url": "strategy/ppm.html",
    "revision": "47c8b0c7abe17e529196a24a753d8019"
  },
  {
    "url": "strategy/ppm.png",
    "revision": "3da3ea9024f4167fb16560512212a4bf"
  },
  {
    "url": "strategy/risk-map.html",
    "revision": "64f020816dfa45b5596adf042b87736c"
  },
  {
    "url": "strategy/risk-map.png",
    "revision": "d4fb9ba92c5756d6553d06976da4eb8a"
  },
  {
    "url": "strategy/swot.html",
    "revision": "7b8aae7102a59198f98f0af3fc51294c"
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
