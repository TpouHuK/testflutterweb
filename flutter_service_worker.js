'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "f4c4725051178e0c0b8e80005c585048",
"index.html": "473d832306d0039b19f4d7c617251eb4",
"/": "473d832306d0039b19f4d7c617251eb4",
"main.dart.js": "c54a9f6935176a0d9e35a54993909257",
"version.json": "630bd8c7d76e70a3340f4e9ee4fcb712",
"assets/assets/shaders/galaxy_test.frag": "5ee447e43401ebd8292a787aeadddcf6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/fonts/MaterialIcons-Regular.otf": "8ea08ea2444cc58ec5807fd7669e488f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "ce96057bd7a5268c2160c81e2d2782ff",
"assets/AssetManifest.bin": "2b8d3ea51d71a3dbdf2d408ccc0326ff",
"assets/AssetManifest.bin.json": "604df3a860fa5b7e942053e868408203",
"assets/NOTICES": "a71e1259433fe3474825dc085cb77026",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"manifest.json": "001f3629d9f22cbe96035cf3a0bad7c2",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
".git/hooks/applypatch-msg.sample": "4e33b997d7d5d5274c56bbf61f0c0bf9",
".git/hooks/commit-msg.sample": "89cb67435d2c1b9503e32d599d72713c",
".git/hooks/post-update.sample": "be48e56d8b9f9108aa4ecb32dd12d435",
".git/hooks/pre-applypatch.sample": "1f6a74774ee63312b4ad8a8c6ec7f2e8",
".git/hooks/pre-commit.sample": "3e3b74d84228df7679307b963c138758",
".git/hooks/pre-merge-commit.sample": "f9d3ac247a941cf41ceb86048c699cfe",
".git/hooks/pre-push.sample": "a5a56d58c7133331b00b520ea5548074",
".git/hooks/pre-receive.sample": "c5e60ee055ef7b920a10b2871b1790a2",
".git/hooks/push-to-checkout.sample": "d8204d74ffd9ca215d1687eaca1e9e5b",
".git/hooks/sendemail-validate.sample": "c4c26785acacb2553117cf802723d09f",
".git/hooks/update.sample": "edce28be0c66a0a19729dc76f8143916",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-rebase.sample": "0d4f0a0a63c6a1cbbf0a8b410b9e3c59",
".git/hooks/prepare-commit-msg.sample": "529551eb02ce07d5a84df03a8361e155",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/main": "ecc163d0c4cf9736693b0a06acf7035f",
".git/refs/remotes/origin/main": "ecc163d0c4cf9736693b0a06acf7035f",
".git/objects/a8/3f11c8afb956135e6bd16b9a848c27ddc450ab": "d58b485acb565032ceb05d07a64b976d",
".git/objects/a1/d8c5db91445b24c7d92b67f8f30fbacf785e3e": "5dbcaee5edcfd9ad687fbc4373c81fe3",
".git/objects/8d/b1ea16f0425b5fd61e33c20bfe343caf45720d": "824fc9d91c6cad08a3c811ed12cff45c",
".git/objects/94/5de9f82f60df9f9838d13f516e59941c65625a": "106e4ee12fa1e279b4d11d13062adddd",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "c0245ee3ff96770aae8bf794a219cd27",
".git/objects/1c/45c6ba40c4d9403fcebf884057fb88e21bd82d": "fa8c32cde0b299a62a7afe3f14bc0d84",
".git/objects/cb/87582e75ea6b7443f4c0232e6cca95464056dd": "1465ecae66cc63969a714c9dc4951d3e",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "14fd68b8136f56d1a0c4eea9a0c1169f",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "c37559feaea773186efe2aed42f9be8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "c61efd0b2feea66b7e3396ea660bc62b",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "7febb171062a608c6530d4e4d6c10a8b",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1fbca02a38cf67c000e6406ecd72389a",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "10f81d39a34bc419a7c21acfb649d05f",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "652a072055c9cbf1a16efd92e920b759",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "72666d677dab06aacc70fd12c21eb2b3",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "552f1161433a60e9d82957f1fb473c6d",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "2da80c12c5a62fb20636142ae75189a9",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "89e3e6a77ed15dcf87101995484a54dc",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "604e94549f93218ae372c9c823ebb955",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "a09844beaaf5b2d3dcdeeddb5662873d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "2e3ad7cdd4c3f033a3606f21dfae8c55",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "1eb16951a4305b6cdfdc988e476d34b3",
".git/objects/62/b0c77d6a1c602281661150f81306d04df45222": "0b365bf93c10e3319bda6205cbf6343e",
".git/objects/d9/07387aeb1aa10e307c5904c606cdc9f3a33403": "465dcbf138f9a076225e54d1320182bb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "bc522999155f18b4a88627a6079c0e2b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "53865af4f80b7c4a4b086d24433b0303",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "0662e7cbe81df961ba8a36c819f471d3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "d2eb7b4070ad770bdf75e1be4265beec",
".git/objects/61/5fd0ae229a6e72437290c62cd10f9e82040781": "6ca5ab3982551d52ab9adbede5b436d6",
".git/objects/3f/5271703162a3c3ecd542a24eb6e7c83e1313dc": "6794216fa2ddf5a891907668a17c9138",
".git/objects/a5/35300caac96b7a8c076738bc96bd0d8d50822b": "96a1e00a162dcd30b29afd3fb0afdbcc",
".git/objects/e7/ea9dee8d34bed1ac42df7b70f330443c60d206": "6a3fd6baa9d28ac82f1d61bff0e59657",
".git/objects/b3/43eb4fc8acde6a20990eceb7725462e877f17e": "b49a1680f092b7ad7ca2e6d8dd2beacc",
".git/objects/d8/4325d4769e12e0dacd540f6c85ba93366800e0": "100ca090b470ebaaf8b2313fef185e3d",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "4ba5049701e9e6e00afdca46425ffebf",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "9990d82bad6b4193908bf9c374094ba4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/00/475eb1032f1b948042bbc59f391ba843ec31d5": "df2f30bd61c06d9a4c2ac75dd4f1a35f",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "0f564f54b8e3c5f0de81cc72faf3102e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/f7/5c64f387ef0aea8e7ce4810ea01e64f484c222": "c3212ccbbc48cb98fcba23eb26fb0d7e",
".git/objects/57/dcbdcda8758d377d7683b0130164cf7378dd81": "ce411c7b23809dbfae8e3871a04adc50",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/index": "6b46abb32cbb8ae0dd97c33337084b6e",
".git/COMMIT_EDITMSG": "377ad60d660aa7d316534a8bd57399ee",
".git/logs/HEAD": "c13d708cad64feec4176babcbdf0888c",
".git/logs/refs/heads/main": "c13d708cad64feec4176babcbdf0888c",
".git/logs/refs/remotes/origin/main": "5e8bf15be30118fd245234a65b6e25e7",
".git/config": "c477d677c83ffd8c85e22ae1facb0c67"};
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
