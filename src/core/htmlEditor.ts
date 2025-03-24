import { IFileAdapter } from './OnChainExporter';

export async function injectPayload(
  filePath: string,
  payload: unknown,
  fileAdapter: IFileAdapter
) {
  try {
    const fileContents = await fileAdapter.readFile(filePath);
    const str = fileContents.toString('utf8');

    const replaced = str.replace(
      /params.get\("payload"\);/,
      `"${base64Encode(JSON.stringify(payload))}"`
    );

    await fileAdapter.writeFile(
      filePath,
      Buffer.from(replaced, 'utf8')
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