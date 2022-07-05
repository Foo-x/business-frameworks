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
    "revision": "d7735d3e0331e573dd13b33590b02ba2"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "db3f70f5f37efe5436e3dd65dae036ff"
  },
  {
    "url": "assets/css/0.styles.edffbe52.css",
    "revision": "f102504168fa7ad8bf60235f9b9ff977"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5e1338e9.js",
    "revision": "03daa8396b6b50ce2b4333d810cbdf3b"
  },
  {
    "url": "assets/js/11.8deda251.js",
    "revision": "8d1596049c27f02e6dcdb9557e65c5db"
  },
  {
    "url": "assets/js/12.cbbd0e0c.js",
    "revision": "4673853dee21fd69dee10701c04f8ca5"
  },
  {
    "url": "assets/js/13.91b79242.js",
    "revision": "d74b8e930099c74c7df49464997882e2"
  },
  {
    "url": "assets/js/14.1d5f59d9.js",
    "revision": "0d483ed069609d4a23176996e7dbc940"
  },
  {
    "url": "assets/js/15.5b438518.js",
    "revision": "e9d7c9454ab657ef7cdb3c5d85539eae"
  },
  {
    "url": "assets/js/16.9e46b776.js",
    "revision": "6e17b315a54842009f7066fbf733bc7d"
  },
  {
    "url": "assets/js/17.1b697531.js",
    "revision": "ba96955394d43158ced985b348f22267"
  },
  {
    "url": "assets/js/18.fddcca27.js",
    "revision": "adbdec30d8437c839abf5644a1f8121e"
  },
  {
    "url": "assets/js/19.db709ff4.js",
    "revision": "15610ab79c293a4477d5f01177747d42"
  },
  {
    "url": "assets/js/2.bf9f0606.js",
    "revision": "c2e98633e2ad69c8fdd47673a435de6f"
  },
  {
    "url": "assets/js/20.e2df707d.js",
    "revision": "1485d92535e8cdf3f5d53ffa9a27368a"
  },
  {
    "url": "assets/js/21.6f73e64f.js",
    "revision": "331cbdf074eddea4ffbe19490f5b5c60"
  },
  {
    "url": "assets/js/22.f09a019f.js",
    "revision": "3ebdd916dd838b9baac51e06cf25e59e"
  },
  {
    "url": "assets/js/23.c771f79f.js",
    "revision": "51db8e10c49f2e9f0823d3835f6949c6"
  },
  {
    "url": "assets/js/24.435aa384.js",
    "revision": "0ea8443c453c6b509e4668ea14a587e1"
  },
  {
    "url": "assets/js/25.0b8578e4.js",
    "revision": "11ec28817a96b069fa4dab0b1d16514b"
  },
  {
    "url": "assets/js/26.d9c6218e.js",
    "revision": "6fb1ea166c7c458a21ac7d06ff463901"
  },
  {
    "url": "assets/js/27.a81acc13.js",
    "revision": "bfd0da789fb77e1b60f15e9f6204a948"
  },
  {
    "url": "assets/js/28.f986d79e.js",
    "revision": "8799806318a0454f4886a93e7e96c9e4"
  },
  {
    "url": "assets/js/29.9164065b.js",
    "revision": "712bc0d00114ddaf7c8aaf08d4fd0402"
  },
  {
    "url": "assets/js/3.e07225cf.js",
    "revision": "8d58ca54802de27e05f3315ff0fad60b"
  },
  {
    "url": "assets/js/30.371880a7.js",
    "revision": "5ccdd7a9c6dc12223e9bfa4f4aaba26a"
  },
  {
    "url": "assets/js/31.96de7463.js",
    "revision": "441013b260fac085caf813f32c8fad15"
  },
  {
    "url": "assets/js/32.e080f3fe.js",
    "revision": "9ab846f16de7d9ffb1f2a4b853dbd274"
  },
  {
    "url": "assets/js/33.00d8176f.js",
    "revision": "c3469e00719b55f506ac3c7ab5cb524a"
  },
  {
    "url": "assets/js/34.5779ad2e.js",
    "revision": "81008f56e2429eaec141af6182dcb93e"
  },
  {
    "url": "assets/js/35.b1e410fc.js",
    "revision": "41c1b59db298f25c1151f84686ea9bdb"
  },
  {
    "url": "assets/js/36.9e5d8bd1.js",
    "revision": "9cd442b52b8f52914b8d00b8b61955b3"
  },
  {
    "url": "assets/js/37.cfb97a16.js",
    "revision": "3310231d51c081dc84292c37cc360847"
  },
  {
    "url": "assets/js/38.c3d65561.js",
    "revision": "50902742405c4f55d522b8d6a5057fe6"
  },
  {
    "url": "assets/js/39.c0a42550.js",
    "revision": "011b5d2d0940a0550b2729775bf9060e"
  },
  {
    "url": "assets/js/4.e354a5ba.js",
    "revision": "3a8467d25c5f9a2f2ba730fa7c4ddd32"
  },
  {
    "url": "assets/js/40.dd330425.js",
    "revision": "03be102f865322455d3b08c911ad3763"
  },
  {
    "url": "assets/js/41.fec2dbb6.js",
    "revision": "708ee9a1e10db94d691d8d14669baf95"
  },
  {
    "url": "assets/js/42.5a3cd72d.js",
    "revision": "8d0b3f884d1cd1dcacda47f94b19534a"
  },
  {
    "url": "assets/js/5.bf2b4b5c.js",
    "revision": "edc57c597da26887f25d2a09d41fc754"
  },
  {
    "url": "assets/js/6.390885c0.js",
    "revision": "ed2cfb76eaa36f968bb62f6a7a7a29aa"
  },
  {
    "url": "assets/js/7.47b76c50.js",
    "revision": "eb18e9f5b2bd0dd5efc74e491c84898d"
  },
  {
    "url": "assets/js/8.62c0df73.js",
    "revision": "8d3f41840b4c880268b0809530e145e6"
  },
  {
    "url": "assets/js/9.e4435536.js",
    "revision": "4d26b2b9a97f58e7e0bd56320b5e2c8e"
  },
  {
    "url": "assets/js/app.fba86036.js",
    "revision": "de2fc81ba236dc6bfe1de0fca0ccc5d3"
  },
  {
    "url": "collection/color-bath.html",
    "revision": "0dbbc624dcf2a3daa8bbf09b865a1fbc"
  },
  {
    "url": "collection/group-interview.html",
    "revision": "59b67988981e450737a5fc21671e07e7"
  },
  {
    "url": "evaluation-decision/eight-evaluation-axis.html",
    "revision": "89d2dd3b392acd12270d1343f4e616d7"
  },
  {
    "url": "evaluation-decision/pmi.html",
    "revision": "09ec59f632aa8a100e2526f7f9330417"
  },
  {
    "url": "evaluation-decision/success.html",
    "revision": "906596b8b58007600bd541a4eb4697bc"
  },
  {
    "url": "favicon.png",
    "revision": "09e93db293baeaa8d51326088e8409e6"
  },
  {
    "url": "improvement/3gen.html",
    "revision": "938848d522160367c219bc9eff1b03ee"
  },
  {
    "url": "improvement/cmmi.html",
    "revision": "5a19bd37063a29c71e393eec17c44101"
  },
  {
    "url": "index.html",
    "revision": "2c210fd2fba097791c0b5d086035803a"
  },
  {
    "url": "management/abcde.html",
    "revision": "b82d7e42444973cccaf047c13ebe1849"
  },
  {
    "url": "management/grow.html",
    "revision": "8a5be341618cdbd2ecb70cffaee07e56"
  },
  {
    "url": "management/vspro.html",
    "revision": "39036bd67e769557e0ec511b3244458a"
  },
  {
    "url": "marketing/4c.html",
    "revision": "e9d1f87802b3ef3c16ef34959623874f"
  },
  {
    "url": "marketing/4p.html",
    "revision": "dc2a10f76461cfe39f6e585a9f61473e"
  },
  {
    "url": "marketing/aidma.html",
    "revision": "3c89c6f2dfb89a698149147396b8d747"
  },
  {
    "url": "organization-idea/5w1h.html",
    "revision": "1f3d510920f1073160dda289225aa388"
  },
  {
    "url": "organization-idea/anti-problem.html",
    "revision": "bae7894c95f7b209af37281180b429de"
  },
  {
    "url": "organization-idea/brainstorming.html",
    "revision": "46469a7eabf19366451401d66936e373"
  },
  {
    "url": "organization-idea/raci.html",
    "revision": "d5b1d0633d5fb08e6457d21efa1e1e41"
  },
  {
    "url": "organization-idea/rich-picture.html",
    "revision": "cb2ae410cada783dfbe26267c83d7f40"
  },
  {
    "url": "organization-idea/rich-picture.png",
    "revision": "a43c1f2d1b54b41ddac7dd4bea4333c7"
  },
  {
    "url": "organization-idea/scamper.html",
    "revision": "c8228aaa465debd1718e173e10502b6d"
  },
  {
    "url": "solution/asis-tobe.html",
    "revision": "8c37e5a6c043f90d6fec5ebd79a3524b"
  },
  {
    "url": "solution/problem-finding-4p.html",
    "revision": "a60131fa5493fe6d4f632d55666337dd"
  },
  {
    "url": "solution/time-machine-method.html",
    "revision": "2817bab487875c34b81106e001e59e8f"
  },
  {
    "url": "strategy/3c.html",
    "revision": "26b7de15862d4ee887db98ccae42ca1e"
  },
  {
    "url": "strategy/3m.html",
    "revision": "b1e0069a6244f336c9c98de8ffbd0f7d"
  },
  {
    "url": "strategy/5f.html",
    "revision": "646645fac0d79455283362874ce4bb49"
  },
  {
    "url": "strategy/5f.png",
    "revision": "af607a8786d5876a98bd18c97199add5"
  },
  {
    "url": "strategy/7s.html",
    "revision": "0299fc35014c3622712ac188d85c6105"
  },
  {
    "url": "strategy/business-model-canvas.html",
    "revision": "ab9bf9f577dcc4635e8f674db4b720fe"
  },
  {
    "url": "strategy/business-model-canvas.png",
    "revision": "d92f163dcf9d19279f57e5c4b305d999"
  },
  {
    "url": "strategy/pest.html",
    "revision": "1c9434b933549ce5f83349311d2c791c"
  },
  {
    "url": "strategy/ppm.html",
    "revision": "f834efa06301d87798a7da463d96e4ea"
  },
  {
    "url": "strategy/ppm.png",
    "revision": "3da3ea9024f4167fb16560512212a4bf"
  },
  {
    "url": "strategy/risk-map.html",
    "revision": "9d968e7d0ef07f1f75a115a670bdcab0"
  },
  {
    "url": "strategy/risk-map.png",
    "revision": "d4fb9ba92c5756d6553d06976da4eb8a"
  },
  {
    "url": "strategy/swot.html",
    "revision": "4d624bb5789199dd562649dce7920399"
  },
  {
    "url": "strategy/swot.png",
    "revision": "3d26be87b787660faacd5ff6330138f0"
  },
  {
    "url": "trial-test/cover-story.html",
    "revision": "5e28a3a785324b1ae730b79ca241d874"
  },
  {
    "url": "trial-test/image-catalog.html",
    "revision": "0947943b3d89599479428a66c0e4dd97"
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
