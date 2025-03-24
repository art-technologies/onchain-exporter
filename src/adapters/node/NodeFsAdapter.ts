import * as fs from 'fs';
import { IFileAdapter } from '../../core/OnChainExporter';

export class NodeFsAdapter implements IFileAdapter {
  async readFile(path: string): Promise<Buffer> {
    return fs.promises.readFile(path);
  }

  async writeFile(path: string, data: Buffer): Promise<void> {
    return fs.promises.writeFile(path, data);
  }
} 