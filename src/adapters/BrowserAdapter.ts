import { IFileAdapter } from '../core/OnChainExporter';

const inMemoryFiles: Record<string, Buffer> = {};

export const BrowserAdapter: IFileAdapter = {
  async readFile(path: string) {
    return inMemoryFiles[path] || Buffer.from('');
  },
  async writeFile(path: string, data: Buffer) {
    inMemoryFiles[path] = data;
  },
}; 