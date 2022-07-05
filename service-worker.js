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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5d8d5c8b963e48ee8570bdab374f70eb"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "db3f70f5f37efe5436e3dd65dae036ff"
  },
  {
    "url": "assets/css/0.styles.f26aaba2.css",
    "revision": "76f506eeb60055e4f072c5ea691165c8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b95d3aa6.js",
    "revision": "5f7b56b469429f672a44bad6b67fc4d0"
  },
  {
    "url": "assets/js/11.8f6e38ed.js",
    "revision": "6a40235415e8d8a40caf39e248fe89e1"
  },
  {
    "url": "assets/js/12.a8d2ba07.js",
    "revision": "581d3e86addc505da82324d0fc99b934"
  },
  {
    "url": "assets/js/13.afb22e61.js",
    "revision": "2b4461e0e18f4b80fafe76f164c06289"
  },
  {
    "url": "assets/js/14.86f0dc66.js",
    "revision": "89306049633f2d297ea28e6f802890e1"
  },
  {
    "url": "assets/js/15.3e39c2cf.js",
    "revision": "6c2834ca0df396bedca1964761b15fb2"
  },
  {
    "url": "assets/js/16.f485127f.js",
    "revision": "6947869b5ac5f0d3558eb13621e290c0"
  },
  {
    "url": "assets/js/17.5d9b1a31.js",
    "revision": "d4a999554e0e2372cdc2094cf90f52a3"
  },
  {
    "url": "assets/js/18.03479bdb.js",
    "revision": "65ae64471e28f638707007dda22d9ef9"
  },
  {
    "url": "assets/js/19.a96c5122.js",
    "revision": "4ca6b305902d03683b240bb74c09f0df"
  },
  {
    "url": "assets/js/2.2e23d6a8.js",
    "revision": "ba2c0b189161836b90e78b917d9e7b67"
  },
  {
    "url": "assets/js/20.b2103108.js",
    "revision": "066c3aa0dd25b7412c3e7d28940ac859"
  },
  {
    "url": "assets/js/21.421668cd.js",
    "revision": "9dcd7b316335f5dfd14ca5563a693a50"
  },
  {
    "url": "assets/js/22.ec762351.js",
    "revision": "3813232bae4955db0fd192c918dbacec"
  },
  {
    "url": "assets/js/23.43f1570c.js",
    "revision": "0eec651d2177eacfc758f7977f268dcf"
  },
  {
    "url": "assets/js/24.c4e16f22.js",
    "revision": "8f6ab08259d8106959a81a4da4faa29a"
  },
  {
    "url": "assets/js/25.de0b04e9.js",
    "revision": "1cdccb6ec8f11cef5165c1f4412d743c"
  },
  {
    "url": "assets/js/26.86d6c640.js",
    "revision": "7e2f29ff394124691ef680c5ec6d202f"
  },
  {
    "url": "assets/js/27.997286a2.js",
    "revision": "27069faab826646a878717856c7d1d2a"
  },
  {
    "url": "assets/js/28.fb6a10ef.js",
    "revision": "b25e8f288e717ce5a9044b05f7098918"
  },
  {
    "url": "assets/js/29.eb052954.js",
    "revision": "766443394a024841dfff53cb55d4a1a8"
  },
  {
    "url": "assets/js/3.e4500ff6.js",
    "revision": "f1b58d34b825c3d52ce0e01341bab8c7"
  },
  {
    "url": "assets/js/30.0421b77b.js",
    "revision": "637130c33f94713f4036ae5a7923fabc"
  },
  {
    "url": "assets/js/31.a4de7700.js",
    "revision": "7fd5d3232352ec3751e7fe431fff2c45"
  },
  {
    "url": "assets/js/32.e133d5fc.js",
    "revision": "4ded4c9090de7c27cf9b7e2958c4c62f"
  },
  {
    "url": "assets/js/33.57d75d91.js",
    "revision": "0f3c3c3448c3a9df27219ef0c21a61b2"
  },
  {
    "url": "assets/js/34.bd34330d.js",
    "revision": "8721998a8e2d4350a8f97c0412f71a14"
  },
  {
    "url": "assets/js/35.c6b82564.js",
    "revision": "7fa6f6b1a41b7f4da8107facd1294e0f"
  },
  {
    "url": "assets/js/36.e9b9c78e.js",
    "revision": "9db9b893e28be82e99b3d0d1f28c3f18"
  },
  {
    "url": "assets/js/37.cb86b267.js",
    "revision": "d235b2ca145e53be41bad2c0e60b814f"
  },
  {
    "url": "assets/js/38.c1dcb7c9.js",
    "revision": "b022715a70dfef9f9aa4e50166b27bde"
  },
  {
    "url": "assets/js/39.04b9a1db.js",
    "revision": "ef855dc1aaba7066d08942165a69a9bb"
  },
  {
    "url": "assets/js/4.53295fc6.js",
    "revision": "769bd08e86ac09f92a6f341c8e7495b2"
  },
  {
    "url": "assets/js/40.9ffff0cb.js",
    "revision": "c3ab7ba447703c1034b75920e4502fd4"
  },
  {
    "url": "assets/js/41.4257edd3.js",
    "revision": "e823a4f6c6bb64cc2dfacca85618b326"
  },
  {
    "url": "assets/js/42.8778ad6b.js",
    "revision": "de076a880db741306377ee6762e95f61"
  },
  {
    "url": "assets/js/5.31e82329.js",
    "revision": "291cdbd6c22d9fa3410d9e37265e3a9e"
  },
  {
    "url": "assets/js/6.4fbe2e52.js",
    "revision": "03631dd7f5fc2cc1e233cc60dbd9921c"
  },
  {
    "url": "assets/js/7.564673c7.js",
    "revision": "ad30b2437672b9d33322120f4c6f5225"
  },
  {
    "url": "assets/js/8.6928fb4c.js",
    "revision": "cf0d0e2b201d504bb0ccf048fc301ed0"
  },
  {
    "url": "assets/js/9.ac0b43f5.js",
    "revision": "bfdd40decf1a240d9fd176fe0193bb19"
  },
  {
    "url": "assets/js/app.ea5cdefe.js",
    "revision": "6eadfddf32aa55f288876228c545367d"
  },
  {
    "url": "collection/color-bath.html",
    "revision": "9e1089e9d637659180c3873fdefce0d2"
  },
  {
    "url": "collection/group-interview.html",
    "revision": "5c2e3baf4a9d045c27d2c6cacceaea9f"
  },
  {
    "url": "evaluation-decision/eight-evaluation-axis.html",
    "revision": "b1a9661c79574871e7c0d37bfeddc0a0"
  },
  {
    "url": "evaluation-decision/pmi.html",
    "revision": "79949d2f3a395c4fb5522df282b479b9"
  },
  {
    "url": "evaluation-decision/success.html",
    "revision": "d88af1e214e4272a46a7d36f3a841706"
  },
  {
    "url": "favicon.png",
    "revision": "09e93db293baeaa8d51326088e8409e6"
  },
  {
    "url": "improvement/3gen.html",
    "revision": "9f6e3dd29e2cb1ed48fda7addc3e0f97"
  },
  {
    "url": "improvement/cmmi.html",
    "revision": "bb72a02b2d5d6f092ae5b2be158a9042"
  },
  {
    "url": "index.html",
    "revision": "c92ce6baaa831ec947cb70c17a35f7e2"
  },
  {
    "url": "management/abcde.html",
    "revision": "493ffeed9ab3855d019b7bb6ede1235b"
  },
  {
    "url": "management/grow.html",
    "revision": "5486340fdb58150276ea6d94b354d36b"
  },
  {
    "url": "management/vspro.html",
    "revision": "dd39d191f1ef3cf18cfe8e92fa6a49b4"
  },
  {
    "url": "marketing/4c.html",
    "revision": "64b386e043cc3f29d5c753417b9ee02a"
  },
  {
    "url": "marketing/4p.html",
    "revision": "2335b490d9057d31627a3e7d4ca81530"
  },
  {
    "url": "marketing/aidma.html",
    "revision": "873775f93c79053b62a4638b89cdb3bf"
  },
  {
    "url": "organization-idea/5w1h.html",
    "revision": "867f456eec9790ff2c6f322630173e5e"
  },
  {
    "url": "organization-idea/anti-problem.html",
    "revision": "bc3437e7ea4bd62baf7c111972dd04a0"
  },
  {
    "url": "organization-idea/brainstorming.html",
    "revision": "1afa131942c92ac61a52792e99ea1047"
  },
  {
    "url": "organization-idea/raci.html",
    "revision": "54853284277ffefa1f074f80b58dc1eb"
  },
  {
    "url": "organization-idea/rich-picture.html",
    "revision": "0834d5b62c327a30f9f87a112ca98807"
  },
  {
    "url": "organization-idea/rich-picture.png",
    "revision": "a43c1f2d1b54b41ddac7dd4bea4333c7"
  },
  {
    "url": "organization-idea/scamper.html",
    "revision": "5868042137acd631eeffa74c708dc2ee"
  },
  {
    "url": "solution/asis-tobe.html",
    "revision": "5e982954b9dad3c3b39a56f0677859a0"
  },
  {
    "url": "solution/problem-finding-4p.html",
    "revision": "291e0243cc133bf827dae4b43bc2adad"
  },
  {
    "url": "solution/time-machine-method.html",
    "revision": "b38a0334197e524a09e7ae8b9de05f91"
  },
  {
    "url": "strategy/3c.html",
    "revision": "eb1a609e6b2a6bf85010dbae67012988"
  },
  {
    "url": "strategy/3m.html",
    "revision": "f482a5229fb6207e4c399e781329a9a5"
  },
  {
    "url": "strategy/5f.html",
    "revision": "892480a603b11932719de01f82513a33"
  },
  {
    "url": "strategy/5f.png",
    "revision": "af607a8786d5876a98bd18c97199add5"
  },
  {
    "url": "strategy/7s.html",
    "revision": "0d0730910dd3de037490e7918fa46b81"
  },
  {
    "url": "strategy/business-model-canvas.html",
    "revision": "d9beab2fafaadde33e090cfe9481be39"
  },
  {
    "url": "strategy/business-model-canvas.png",
    "revision": "d92f163dcf9d19279f57e5c4b305d999"
  },
  {
    "url": "strategy/pest.html",
    "revision": "641c16331b9e78bdfc0010cfd8a3ba46"
  },
  {
    "url": "strategy/ppm.html",
    "revision": "e1df3092d266fa401e378bd182f846b9"
  },
  {
    "url": "strategy/ppm.png",
    "revision": "3da3ea9024f4167fb16560512212a4bf"
  },
  {
    "url": "strategy/risk-map.html",
    "revision": "9d59918e1687501bbad64efc303ad939"
  },
  {
    "url": "strategy/risk-map.png",
    "revision": "d4fb9ba92c5756d6553d06976da4eb8a"
  },
  {
    "url": "strategy/swot.html",
    "revision": "09d136cf116734ef77ce8cb1bda1d197"
  },
  {
    "url": "strategy/swot.png",
    "revision": "3d26be87b787660faacd5ff6330138f0"
  },
  {
    "url": "trial-test/cover-story.html",
    "revision": "c72428cdf11384ec47c25680fe35dfbc"
  },
  {
    "url": "trial-test/image-catalog.html",
    "revision": "bfb50e817791826308c0e4e4530bded9"
  }
].concat(self.__precacheManifest || []);
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
