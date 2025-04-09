"use strict";
(() => {
  // src/web/service-worker.ts
  var fileSystem = {};
  self.addEventListener("message", (event) => {
    if (event.data.type === "SET_FILESYSTEM") {
      fileSystem = event.data.filesystem;
      console.log("Service worker received filesystem data");
    }
  });
  self.addEventListener("fetch", (event) => {
    const url = new URL(event.request.url);
    const path = url.pathname;
    if (fileSystem[path]) {
      event.respondWith(
        new Response(fileSystem[path], {
          headers: {
            "Content-Type": getContentType(path)
          }
        })
      );
    } else {
      event.respondWith(fetch(event.request));
    }
  });
  function getContentType(path) {
    var _a;
    const extension = (_a = path.split(".").pop()) == null ? void 0 : _a.toLowerCase();
    const contentTypes = {
      "html": "text/html",
      "css": "text/css",
      "js": "application/javascript",
      "json": "application/json",
      "png": "image/png",
      "jpg": "image/jpeg",
      "jpeg": "image/jpeg",
      "gif": "image/gif",
      "svg": "image/svg+xml"
    };
    return contentTypes[extension || ""] || "text/plain";
  }
})();
