import { promises as fs } from 'fs';
import { IFileAdapter } from '../core/OnChainExporter';

export class NodeFsAdapter implements IFileAdapter {
  async readFile(path: string): Promise<Buffer> {
    return fs.readFile(path);
  }

  async writeFile(path: string, data: Buffer): Promise<void> {
    return fs.writeFile(path, data);
  }
} 