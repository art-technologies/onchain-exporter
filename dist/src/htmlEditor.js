"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.injectPayload = void 0;
const buffer_1 = require("buffer");
/**
 * Cross-environment base64 encoding:
 *   - Uses "btoa" in browsers
 *   - Uses "Buffer" in Node
 */
function base64Encode(str) {
    // If "window" or "window.btoa" doesn't exist, we assume Node
    if (typeof window !== 'undefined' && typeof window.btoa === 'function') {
        return window.btoa(str);
    }
    else {
        return buffer_1.Buffer.from(str, 'utf-8').toString('base64');
    }
}
/**
 * "injectPayload" in an adapter-based style.
 */
async function injectPayload(filePath, payload, fileAdapter) {
    try {
        // read file
        const fileContents = await fileAdapter.readFile(filePath);
        const str = fileContents.toString('utf8');
        // replace
        const replaced = str.replace(/params.get\("payload"\);/, `"${base64Encode(JSON.stringify(payload))}"`);
        // write
        await fileAdapter.writeFile(filePath, buffer_1.Buffer.from(replaced, 'utf8'));
        console.log(`Project saved at ${filePath}`);
    }
    catch (err) {
        console.error(err);
    }
}
exports.injectPayload = injectPayload;
