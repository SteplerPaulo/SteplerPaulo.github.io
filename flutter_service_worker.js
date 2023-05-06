'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "823d94067c32838693c9fdbe29475b7b",
"assets/assets/akin.png": "2be13381e4dd408d92ba8a9b1333f57a",
"assets/assets/codewars-badge.svg": "9431b61ac35e562748cd3e556f4c0ee2",
"assets/assets/codewars.svg": "5039ba4911cf363c6770f7fd60fafb56",
"assets/assets/github.svg": "57b8aa01d961c887b462ffb55712b403",
"assets/assets/link.svg": "e19d74bc81ed723066150208d578d726",
"assets/assets/linkedin.svg": "ed3a305d08d565d2a79b5d7170fc035d",
"assets/assets/pau.jpg": "a015fd03683b8f7278e8f898f7e6a79a",
"assets/assets/profile.jpg": "20e6ad38b52eb43a15aa1cc4798f019a",
"assets/assets/profile.png": "cde6c20b91fafdf3a9f4aafaf46c1c36",
"assets/assets/project-2.png": "44b584fd0ef7210c29d14d2a5b34f042",
"assets/assets/project-3.png": "8d95c84af60896cc30573446b6ee6e64",
"assets/assets/project-4.png": "c55e85b0a23a46895619b71a199a34ff",
"assets/assets/project-5.png": "39337ac3b3d5b1fa82915e447f7aaa76",
"assets/assets/project-6.png": "9afd00bb6012dde1c2568b8685b70047",
"assets/assets/project.png": "4cc2a0bafb43517d785d37051e52d411",
"assets/assets/ts-aws.svg": "b95ac19d335f515f67c2e5991ac9410b",
"assets/assets/ts-bootstrap.svg": "76cfce82bfc8b6d2e79d06f2585be545",
"assets/assets/ts-css.svg": "39c760f77b54118140daf50877bd2cc3",
"assets/assets/ts-dart.svg": "efd3ef176e2b9fcb29fa7ae1d71b2288",
"assets/assets/ts-flutter.svg": "bd9fec894dfe707631e11a1dfedb25b5",
"assets/assets/ts-git.svg": "29d979b0f634fcbdb59c672bc9792151",
"assets/assets/ts-github.svg": "ebeba7ea78a271435ef2022599591cf3",
"assets/assets/ts-gitlab.svg": "523d5e810b05e55e91dcc3e93de38e28",
"assets/assets/ts-html.svg": "18b09770a15138765f9188dfa0f39be2",
"assets/assets/ts-js.svg": "1c4c3339ea7e44279c3fad66c6ad51ea",
"assets/assets/ts-mui.svg": "82291019f34ab54a677c456a84127cc3",
"assets/assets/ts-mysql.svg": "0b5bd1b7dc517deb2b8f85e2bcb87dfb",
"assets/assets/ts-postgresql.svg": "cf5220f71ba7e1bc2097858d124858bd",
"assets/assets/ts-react.svg": "4f1da7b57d1e6410f89d1878d9b76162",
"assets/assets/ts-redux.svg": "24da428b7aaa8ba9b9ff9b3ccd707576",
"assets/assets/ts-sass.svg": "45d7f633159a7fed1cba4005d2cd40e7",
"assets/assets/ts-tailwind.svg": "47c80377c79a45d32345b7ae2058b89c",
"assets/assets/ts-vscode.svg": "c782f55bcbb3b0461338591da1e70aa2",
"assets/assets/twitter.svg": "8d2f2852f395e2df2aefb8a23b8b26fb",
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
"index.html": "bb43589a0c0089228885ad4ab15c0cc5",
"/": "bb43589a0c0089228885ad4ab15c0cc5",
"main.dart.js": "281531550591558be8b35a78d204a931",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "74f80ac8e98b6ba209e4eb96eb7f918f"
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
