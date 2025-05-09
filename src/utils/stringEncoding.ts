// Platform-specific string encoding utilities

// Node.js implementation
export const nodeStringToBytes = (str: string, encoding: BufferEncoding): Uint8Array => {
  if (typeof Buffer !== 'undefined') {
    return Uint8Array.from(Buffer.from(str, encoding));
  }
  throw new Error('Buffer is not available - this function should only be used in Node.js environment');
};

// Browser implementation
export const browserStringToBytes = (str: string, encoding: string): Uint8Array => {
  if (encoding !== 'utf8') {
    throw new Error('Browser implementation only supports utf8 encoding');
  }
  const encoder = new TextEncoder();
  return encoder.encode(str);
};

// Default export that chooses the appropriate implementation based on the environment
export const stringToBytes = typeof window !== 'undefined' 
  ? browserStringToBytes 
  : nodeStringToBytes; 