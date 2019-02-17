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
    "revision": "74d975fbff4c2643aeb420ea53a09f1c"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "db3f70f5f37efe5436e3dd65dae036ff"
  },
  {
    "url": "assets/css/0.styles.6aba5656.css",
    "revision": "6ebb523ef8d8ea69959ec03e07f10e1d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6549546c.js",
    "revision": "38c8b58a63469ce193f23c6226b7be48"
  },
  {
    "url": "assets/js/11.c4247e6b.js",
    "revision": "d8f692f57d30712ffdd4a8eba1bbb310"
  },
  {
    "url": "assets/js/12.393a002a.js",
    "revision": "3ae284a460440db63a7dc647a96ceac2"
  },
  {
    "url": "assets/js/13.6a94dc37.js",
    "revision": "1e25a768d4513a1266390dc1777d601d"
  },
  {
    "url": "assets/js/14.d57ddce0.js",
    "revision": "20490e27c49d350b5d2bcabab7a156c9"
  },
  {
    "url": "assets/js/15.6433d619.js",
    "revision": "3664030b0856ba874e4036372409bb34"
  },
  {
    "url": "assets/js/16.c55a6daf.js",
    "revision": "cac3857ca5131d2622b0e23bb387b87f"
  },
  {
    "url": "assets/js/17.870a2161.js",
    "revision": "c5952d27f81426976f3cd95c94b9e24d"
  },
  {
    "url": "assets/js/18.9d9023a5.js",
    "revision": "5c8d2cbcab651be6f499b54d10ec47e5"
  },
  {
    "url": "assets/js/19.d0bd143f.js",
    "revision": "2263374e8d915e89591c66f8333d1922"
  },
  {
    "url": "assets/js/2.78b1d4f8.js",
    "revision": "41622073195774462b77dcae23ef303b"
  },
  {
    "url": "assets/js/20.ebbc2e09.js",
    "revision": "fd1c552684275348d93e6156af77d538"
  },
  {
    "url": "assets/js/21.f71efb90.js",
    "revision": "e9f680db38d95f86f3a561d6f2d93ca6"
  },
  {
    "url": "assets/js/22.00739a62.js",
    "revision": "fdf9ed965e7a7ea58fe7198ac39c6bad"
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
    "url": "assets/js/6.71cc7ef4.js",
    "revision": "7d74de9a67c82e7650759f1ed380e220"
  },
  {
    "url": "assets/js/7.08b7f429.js",
    "revision": "597dde107283f70381bc5c1b46f2a360"
  },
  {
    "url": "assets/js/8.35cabb3e.js",
    "revision": "9696761012cdfdce122cfcc7875a779f"
  },
  {
    "url": "assets/js/9.83759867.js",
    "revision": "6ea1fb68b8fb94a5feef84aff0923732"
  },
  {
    "url": "assets/js/app.67cc4522.js",
    "revision": "4d968781edbcf33130da24f98906d8fc"
  },
  {
    "url": "collection/color-bath.html",
    "revision": "1eeaa74af68660d19b4d7981dac8e90b"
  },
  {
    "url": "favicon.png",
    "revision": "09e93db293baeaa8d51326088e8409e6"
  },
  {
    "url": "index.html",
    "revision": "6dc89cdf06505551f25c8f68569a3a5f"
  },
  {
    "url": "management/abcde.html",
    "revision": "af05a0f49431b3baef81bcdd55a875d6"
  },
  {
    "url": "management/vspro.html",
    "revision": "8094ec005879994f70dd3dd78be170c6"
  },
  {
    "url": "marketing/4c.html",
    "revision": "e64c4f5a6188b9a83e526fa1c7714b42"
  },
  {
    "url": "marketing/4p.html",
    "revision": "af4cc8af5596878fcf9d06b856fb9843"
  },
  {
    "url": "solution/asis-tobe.html",
    "revision": "6000af8038526e61c94f901a80ad4337"
  },
  {
    "url": "solution/problem-finding-4p.html",
    "revision": "a81c966f1e2c85a355a0ee799af6e658"
  },
  {
    "url": "strategy/3c.html",
    "revision": "3b21b32269d9643e1c8c3fb47ac270f1"
  },
  {
    "url": "strategy/3m.html",
    "revision": "9e8247f2f3b75a766fafcf0a44905b6e"
  },
  {
    "url": "strategy/5f.html",
    "revision": "44d995d56a395d0962cb6a0d596159b4"
  },
  {
    "url": "strategy/5f.png",
    "revision": "af607a8786d5876a98bd18c97199add5"
  },
  {
    "url": "strategy/7s.html",
    "revision": "feec002a4c9791e2942751731f6a97f4"
  },
  {
    "url": "strategy/pest.html",
    "revision": "7c9e56089731e92020958d27e914bd1c"
  },
  {
    "url": "strategy/ppm.html",
    "revision": "0df74de8acee0022840bc271c59b3d19"
  },
  {
    "url": "strategy/ppm.png",
    "revision": "3da3ea9024f4167fb16560512212a4bf"
  },
  {
    "url": "strategy/risk-map.html",
    "revision": "923fbd8198eea4a9a0e6a363af058a55"
  },
  {
    "url": "strategy/risk-map.png",
    "revision": "d4fb9ba92c5756d6553d06976da4eb8a"
  },
  {
    "url": "strategy/swot.html",
    "revision": "8167078b570fa52f0d01419981a0089f"
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
