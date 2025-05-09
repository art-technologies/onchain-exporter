// Service worker for handling filesystem requests
const CACHE_NAME = 'onchain-exporter-cache-v1';

console.log("SERVICE WORKER DEBUG 1")

// This will be populated by the main application
let fileSystem: { [key: string]: string } = {};

self.addEventListener('message', (event: MessageEvent) => {
  if (event.data.type === 'SET_FILESYSTEM') {
    fileSystem = event.data.filesystem;
    console.log('Service worker received filesystem data');
  }
});

self.addEventListener('fetch', (event: FetchEvent) => {
  const url = new URL(event.request.url);
  const path = url.pathname;
  console.log("SERVICE WORKER DEBUG", path)

  // Check if we have this file in our filesystem
  if (fileSystem[path]) {
    event.respondWith(
      new Response(fileSystem[path], {
        headers: {
          'Content-Type': getContentType(path),
        },
      })
    );
  } else {
    // If not found in filesystem, try to fetch from network
    event.respondWith(fetch(event.request));
  }
});

function getContentType(path: string): string {
  const extension = path.split('.').pop()?.toLowerCase();
  const contentTypes: { [key: string]: string } = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'application/javascript',
    'json': 'application/json',
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'gif': 'image/gif',
    'svg': 'image/svg+xml',
  };
  return contentTypes[extension || ''] || 'text/plain';
} 