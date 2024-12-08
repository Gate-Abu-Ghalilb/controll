'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "63bec916b042b5b0137997b22143f98b",
".git/config": "20a4e4f1e855f06ff2c9226b9fc5c62c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "45bf43143efcd00633d40ffdc44dc148",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dc1d35c60212185800f219e3783a710b",
".git/logs/refs/heads/main": "2d98b468d7d5a6d43edda9790e735c05",
".git/logs/refs/remotes/origin/main": "a9e8bfbee1a91fb57b32735f8ad7ca78",
".git/objects/04/31cf0e5d43668bc8ec2db0454e7c61a804443d": "ac4843bb9f5838ab2969089724c93134",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/19/a3863ff95f1ff4f3b9bfbe5f0ee10d6ee024bb": "33d60e4cf231d308417e6ffb6ef99dde",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/6aa4ada75714e2df6709c7b51bc1276c191388": "66f3be8d7c9e195e0ac70b5829e68407",
".git/objects/2c/ce9ed019d1b6a0beb8defa0b8588f8a2542ac1": "60778485f57064b578dd0e8d1a13a575",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3d/1c836a172ee8f5c2bb308f277eeffd2ac4fa9d": "3cdbdf8e5abda0cd725fc1ae8ffad1d0",
".git/objects/3e/6b29fc8eb60b52438d3b225af0712aa5ed5980": "705579c0a76f1743f9e55f936496bb9f",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/43/aba6d67573ac63a86d624fb4a8ead8ef844b44": "7fff2ba7b836a4c60e26987962eabef9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/4c/0d57f53292aed2be7f86323dbf40118a4dc41f": "c7efd0500e3341f6de543176728b7e9d",
".git/objects/4f/fb2843c6f4ed9103252f689cffeb12d03232c4": "62378d68663a157c16491c0981d61d84",
".git/objects/50/f56e8264a64490e8566b374674aa86df3f6416": "3841f126d9fb0c41291b0216433c2f5b",
".git/objects/59/2a84f94b9575b729a6c07ca1da6ac5fc17c3b5": "8a956fc83c5f50ae2394c045053162e9",
".git/objects/5a/8628bd444f59e3fb9c73a36ad861053f5414dd": "5f24a8b830705ce551f4b32490125f5d",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/6a/566c8e0917823740332b3b5f2c393afb1c4b40": "a6d9d6f078a96e9d64b04f7cb6178f2b",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/78/6e99da688c31c1e7e017a3d99ed148a974378f": "b0ffca9490eaa4817e9732dfa5f32ec6",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/a90168ae8b5f9ec67e0c5285e171f408039f36": "d4c03b159abffef416278ecd315b22ba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/94/42d49c818fdf47f53e8b29636c5774236398c6": "5d36843485387107260ba242567624c1",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/3b4ca7a40100cd34a72fb70a10145553dd0b36": "b57d5045349176dc12d054851bb5e2d9",
".git/objects/aa/ace59d73dfd89ca62911633da78f5d88d4c045": "19a3de06a681f694c8c76604c9a87eee",
".git/objects/af/4c66013415ca20861136a1b74ac99f653748c6": "2150c171099050ce5f158e67aceccf6e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b6/2786b82a957b959ce65835b3599b48559e12e2": "cbbc4ad26dd33987df3f6ef96fe39199",
".git/objects/b7/28ad185980f680284bb49098c816b244ad157d": "2b45e25f0f362214aaf9e8e7286cad91",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/0aef267972538c035cbafbba7f0dbd853a051d": "389e6d883768641b0fdf93068f67568b",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
".git/objects/df/06c71821eb2817867a39bc6554f528c5b451b4": "c368313ba617eda904d5971cf65d4d08",
".git/objects/e1/7b1774eb65c8a0f0440e6677962bfd72af7387": "50fe122662968dd01e20a1d62e425d89",
".git/objects/e7/6377d733cd3f070b5f4946cfe507b01ab551c1": "cee49fe2e1f48ef70b1f73e50617586b",
".git/objects/e9/7a7bff4e8eb43a6fdc186799c77de4d813b86e": "f383eeb92c241ffa21338f0465d1d634",
".git/objects/ea/fd3e290495cf0a835ad241643d1e5d0bff52eb": "222b08dea4e64ab210d782542ffdb4f2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/d0173055c88b30fea4a00774523c894cbeb30f": "bcd530d953c34a5f123a4be30b3fdf3d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/ebae7c665bb7a67425b109dbc6ddaaefb08dfd": "6ab0583ad7c1e28009e53007a23aa22e",
".git/objects/fc/bc051871b3f4bdb23d573f38d39c1d8bc6dd98": "42aacae955541e76627071a889db698f",
".git/objects/ff/dc77b15a5eaf4fd5788a3083e4075252353f5b": "571a717376fdf5f1669271721d3602a6",
".git/refs/heads/main": "0b08890358ba72daf9212c9b1a39e375",
".git/refs/remotes/origin/main": "0b08890358ba72daf9212c9b1a39e375",
"assets/AssetManifest.bin": "97981a0afe85b05e0ffd4cee9f4d7e3a",
"assets/AssetManifest.bin.json": "9e693d6519069e7400f57069a2e18a32",
"assets/AssetManifest.json": "60b1be32bf343d0131aa91a5c9e2e6b3",
"assets/assets/image/WhatsApp%2520Image%25202023-10-04%2520at%252012.02.27%2520AM.jpeg": "ece5741902052ebc60c40023d5e116cb",
"assets/assets/image/WhatsApp%2520Image%25202023-10-04%2520at%252012.02.43%2520AM%2520(2).jpeg": "f49504bfdc013eb3ff3dbc30055a59b7",
"assets/assets/image/WhatsApp%2520Image%25202024-02-05%2520at%252016.35.20_5620251f.jpg": "b4fc34e81a6af6cfa70c26ddb4f15e73",
"assets/assets/image/WhatsApp%2520Image%25202024-09-17%2520at%25201.10.12%2520AM.jpeg": "0c2b70a9618d8da237da4cbcd50994c2",
"assets/assets/lang/ar.json": "412850eed8911712881ae3c2dc36e43c",
"assets/assets/lang/en.json": "f7db01e08cbb95aff82b1486fb592fe0",
"assets/assets%255Cimage%255CWhatsApp%2520Image%25202023-10-04%2520at%252012.02.27%2520AM.jpeg": "ece5741902052ebc60c40023d5e116cb",
"assets/assets%255Cimage%255CWhatsApp%2520Image%25202023-10-04%2520at%252012.02.43%2520AM%2520(2).jpeg": "f49504bfdc013eb3ff3dbc30055a59b7",
"assets/assets%255Cimage%255CWhatsApp%2520Image%25202024-02-05%2520at%252016.35.20_5620251f.jpg": "b4fc34e81a6af6cfa70c26ddb4f15e73",
"assets/assets%255Cimage%255CWhatsApp%2520Image%25202024-09-17%2520at%25201.10.12%2520AM.jpeg": "0c2b70a9618d8da237da4cbcd50994c2",
"assets/FontManifest.json": "ce5013a7d6a04d8d1a2a229cb3486ff8",
"assets/fonts/MaterialIcons-Regular.otf": "1f22f06c2a57c23091fe9eab0a0799e7",
"assets/NOTICES": "9d9a5a1a90fd346c5acd57fdb2f9a601",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/simple_circular_progress_bar/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "ec73f8638e0271d03d3cfbcbbc57a145",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "88d6ff563452aac404d78b27371f4331",
"/": "88d6ff563452aac404d78b27371f4331",
"main.dart.js": "2a006db2019251b83f8a15833f776254",
"manifest.json": "dc4ec0a0f7dd4ee4977a76e1b8b9f8e3",
"version.json": "4d0b58c998687fdb62060135b084f626"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
