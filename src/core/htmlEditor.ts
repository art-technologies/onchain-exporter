import { IFileAdapter } from './OnChainExporter';
import { stringToBytes } from '../utils/stringEncoding';

export async function injectPayload(
  filePath: string,
  payload: unknown,
  fileAdapter: IFileAdapter
) {
  try {
    const fileContents = await fileAdapter.readFile(filePath);
    const str = typeof fileContents === 'string' 
      ? fileContents 
      : new TextDecoder().decode(fileContents);

    const replaced = str.replace(
      /params.get\("payload"\);/,
      `"${base64Encode(JSON.stringify(payload))}"`
    );

    await fileAdapter.writeFile(
      filePath,
      stringToBytes(replaced, 'utf8')
    );
    console.log(`Project saved at ${filePath}`);
  } catch (err) {
    console.error(err);
  }
}

function base64Encode(str: string): string {
  if (typeof window !== 'undefined' && typeof window.btoa === 'function') {
    return window.btoa(str);
  } else {
    return Buffer.from(str, 'utf-8').toString('base64');
  }
} 