// Service worker for handling filesystem requests
const CACHE_NAME = 'onchain-exporter-cache-v1';
console.log("SERVICE WORKER DEBUG 1");
// This will be populated by the main application
let projectFiles = {};

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('message', (event) => {
    if (event.data.type === 'SET_FILESYSTEM') {
        projectFiles = event.data.filesystem;
    }
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    
    // Only intercept requests to /projects/*
    if (url.pathname.startsWith('/project/')) {
        const filePath = url.pathname;
        
        if (projectFiles[filePath]) {
            event.respondWith(
                new Response(projectFiles[filePath], {
                    headers: {
                        'Content-Type': getContentType(filePath),
                        'Access-Control-Allow-Origin': '*'
                    }
                })
            );
        }
    }
});

function getContentType(path) {
    const extension = path.split('.').pop().toLowerCase();
    const types = {
        'html': 'text/html',
        'css': 'text/css',
        'js': 'application/javascript',
        'json': 'application/json',
        'png': 'image/png',
        'jpg': 'image/jpeg',
        'jpeg': 'image/jpeg',
        'gif': 'image/gif',
        'svg': 'image/svg+xml',
        'ico': 'image/x-icon'
    };
    return types[extension] || 'text/plain';
}
