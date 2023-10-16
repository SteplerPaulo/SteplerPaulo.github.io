'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ab69f6e1795d630ada3ec985d614649c",
"assets/assets/akin.png": "2be13381e4dd408d92ba8a9b1333f57a",
"assets/assets/biddit.jpg": "b395fcbfb080e7c484836d9d153e02c6",
"assets/assets/codewars-badge.svg": "9284cc2bfde2ae2bdba62a1cacb14b44",
"assets/assets/codewars.svg": "2123ae92f7252a9d13d7824af5c8bb0e",
"assets/assets/commisari.png": "8b80433fc4fa47f2582eaf68e02eb01c",
"assets/assets/github.svg": "fec7e8043aaedf1d9e2b345c2f93a79c",
"assets/assets/laza.jpg": "fb2af6f800b9d6bacec9f118c709312f",
"assets/assets/link.svg": "278d7f0acec76d65039ca13f6d047e7e",
"assets/assets/linkedin.svg": "22dd5ac2b051e6d7bf590d0a884a0fde",
"assets/assets/pau.jpg": "a015fd03683b8f7278e8f898f7e6a79a",
"assets/assets/profile.jpg": "20e6ad38b52eb43a15aa1cc4798f019a",
"assets/assets/profile.png": "cde6c20b91fafdf3a9f4aafaf46c1c36",
"assets/assets/project-2.png": "44b584fd0ef7210c29d14d2a5b34f042",
"assets/assets/project-3.png": "8d95c84af60896cc30573446b6ee6e64",
"assets/assets/project-4.png": "c55e85b0a23a46895619b71a199a34ff",
"assets/assets/project-5.png": "39337ac3b3d5b1fa82915e447f7aaa76",
"assets/assets/project-6.png": "9afd00bb6012dde1c2568b8685b70047",
"assets/assets/project.png": "4cc2a0bafb43517d785d37051e52d411",
"assets/assets/ser.png": "708566b31a30af17f84e177e4dbadaf8",
"assets/assets/ts-aws.svg": "93a2c064b57c06719f14194712d93ad6",
"assets/assets/ts-bootstrap.svg": "99776aa3b2eca8a8a43d9d25d75cf361",
"assets/assets/ts-css.svg": "87d60c1309627a5d0c0d78d143fddcb5",
"assets/assets/ts-dart.svg": "afee000f24f3544ee9c6e80d019ec8ff",
"assets/assets/ts-flutter.svg": "bd9fec894dfe707631e11a1dfedb25b5",
"assets/assets/ts-git.svg": "6316ba5d112c2673d74a5942a7fb2a28",
"assets/assets/ts-github.svg": "b041c774c8ba5acdc2849895f7b52475",
"assets/assets/ts-gitlab.svg": "523d5e810b05e55e91dcc3e93de38e28",
"assets/assets/ts-html.svg": "c5b5455e1df328c75c71c8d9816219d0",
"assets/assets/ts-js.svg": "427d2134b811ed6e71a7bb4dd22f4aee",
"assets/assets/ts-mui.svg": "82291019f34ab54a677c456a84127cc3",
"assets/assets/ts-mysql.svg": "12c85f32d11a67556487d94178f41e2c",
"assets/assets/ts-nestjs.svg": "943e52fd41e1fe2cd44ce8af53be7672",
"assets/assets/ts-postgresql.svg": "c3a4fa94d9b14a34e0adb2784ce211d1",
"assets/assets/ts-react.svg": "3b24f1aea04dbf1035cd144a5ddf7820",
"assets/assets/ts-redux.svg": "513e6ce8a1b9d3a96dec19526f1723bd",
"assets/assets/ts-sass.svg": "f185dd849cdc91a5e2a516c8c9e2b72e",
"assets/assets/ts-tailwind.svg": "6f5583e75faad40d80a94b043cbb1823",
"assets/assets/ts-vscode.svg": "2c5f0692b8fe445995a18b4a8df16b97",
"assets/assets/twitter.svg": "544de1c3042ff7a37ccd13385adf517f",
"assets/assets/ud.jpg": "1b92f0a2005740afaa9f146657b5459a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "a648c01de722b71555baf3a4286c9f2d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "71196893439ad8613c08c9aab8eecaef",
"/": "71196893439ad8613c08c9aab8eecaef",
"main.dart.js": "045bf0c001ecf72e9a26e2a67cbae5b6",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "e08d77c59c701cf4387159212a955048"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
