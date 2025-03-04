import { Buffer } from 'buffer';
import { IFileAdapter } from './core/OnChainExporter';

/**
 * Cross-environment base64 encoding:
 *   - Uses "btoa" in browsers
 *   - Uses "Buffer" in Node
 */
function base64Encode(str: string): string {
  // If "window" or "window.btoa" doesn't exist, we assume Node
  if (typeof window !== 'undefined' && typeof window.btoa === 'function') {
    return window.btoa(str);
  } else {
    return Buffer.from(str, 'utf-8').toString('base64');
  }
}

/**
 * "injectPayload" in an adapter-based style.
 */
export async function injectPayload(
  filePath: string,
  payload: unknown,
  fileAdapter: IFileAdapter
) {
  try {
    // read file
    const fileContents = await fileAdapter.readFile(filePath);
    const str = fileContents.toString('utf8');

    // replace
    const replaced = str.replace(
      /params.get\("payload"\);/,
      `"${base64Encode(JSON.stringify(payload))}"`
    );

    // write
    await fileAdapter.writeFile(
      filePath,
      Buffer.from(replaced, 'utf8')
    );
    console.log(`Project saved at ${filePath}`);
  } catch (err) {
    console.error(err);
  }
}
