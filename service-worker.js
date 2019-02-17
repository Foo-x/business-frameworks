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
    "revision": "5c349e7f08192a03e7722ea730cdf755"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "db3f70f5f37efe5436e3dd65dae036ff"
  },
  {
    "url": "assets/css/0.styles.d7d14c1b.css",
    "revision": "5af5132ce327301f9d914eb4aab327ae"
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
    "url": "assets/js/3.96e9ec25.js",
    "revision": "683b81d894cfe3f8dc41a769b498fd3f"
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
    "url": "assets/js/app.0160c257.js",
    "revision": "84a566fa5b0578434cdf4ee30e4e253d"
  },
  {
    "url": "favicon.png",
    "revision": "09e93db293baeaa8d51326088e8409e6"
  },
  {
    "url": "index.html",
    "revision": "2c3b6b36eaca4a32b3825e807f737364"
  },
  {
    "url": "management/abcde.html",
    "revision": "ede9aedf3b21efb56d4ff5811ec3ecb7"
  },
  {
    "url": "management/vspro.html",
    "revision": "f309f4fa9febb7c8867ae4e6906aba4e"
  },
  {
    "url": "marketing/4c.html",
    "revision": "00de799e89626fb3671d809165a9cd67"
  },
  {
    "url": "marketing/4p.html",
    "revision": "402e799f2cbd8d931cb3ed92fd3b12ed"
  },
  {
    "url": "solution/asis-tobe.html",
    "revision": "398f3d34e8244c0cd980294fa79c9a28"
  },
  {
    "url": "solution/problem-finding-4p.html",
    "revision": "67b4e85407d57fca0876d13e46da46f8"
  },
  {
    "url": "strategy/3c.html",
    "revision": "486e847ab22381218d4ca60b00d01853"
  },
  {
    "url": "strategy/3m.html",
    "revision": "33066830e608c32d503a00ad69582b91"
  },
  {
    "url": "strategy/5f.html",
    "revision": "ab46ca0e4d492011a3f8826fc8a486ce"
  },
  {
    "url": "strategy/5f.png",
    "revision": "af607a8786d5876a98bd18c97199add5"
  },
  {
    "url": "strategy/7s.html",
    "revision": "6b88d51fc2f8bd2f6523e739b2a97638"
  },
  {
    "url": "strategy/pest.html",
    "revision": "ff68e65281e1a3ccd725783eae78cc8a"
  },
  {
    "url": "strategy/ppm.html",
    "revision": "891f3d59a29e6a906d222acb334d3e21"
  },
  {
    "url": "strategy/ppm.png",
    "revision": "3da3ea9024f4167fb16560512212a4bf"
  },
  {
    "url": "strategy/risk-map.html",
    "revision": "0d7f2d1e37bf198858feb6da64b464ad"
  },
  {
    "url": "strategy/risk-map.png",
    "revision": "d4fb9ba92c5756d6553d06976da4eb8a"
  },
  {
    "url": "strategy/swot.html",
    "revision": "0e0d72eb601307b79e11a6b503261446"
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
