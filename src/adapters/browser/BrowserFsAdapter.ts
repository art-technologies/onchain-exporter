import { IFileAdapter } from '../../core/OnChainExporter';

export class BrowserFsAdapter implements IFileAdapter {
  async readFile(path: string): Promise<Buffer> {
    throw new Error('Not implemented');
  }

  async writeFile(path: string, data: Buffer): Promise<void> {
    throw new Error('Not implemented');
  }
} 