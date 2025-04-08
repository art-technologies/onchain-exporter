// Platform-specific base64 decoding utilities

// Node.js implementation
export const nodeBase64ToBytes = (base64: string): Uint8Array => {
  if (typeof Buffer !== 'undefined') {
    return Uint8Array.from(Buffer.from(base64, 'base64'));
  }
  throw new Error('Buffer is not available - this function should only be used in Node.js environment');
};

// Browser implementation
export const browserBase64ToBytes = (base64: string): Uint8Array => {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
};

// Default export that chooses the appropriate implementation based on the environment
export const base64ToBytes = typeof window !== 'undefined' 
  ? browserBase64ToBytes 
  : nodeBase64ToBytes;

// Platform-specific path utilities
export const joinPath = (...paths: string[]): string => {
  if (typeof window !== 'undefined') {
    // Browser implementation - use forward slashes
    return paths.join('/');
  } else {
    // Node.js implementation - use path.join
    const path = require('path');
    return path.join(...paths);
  }
}; 