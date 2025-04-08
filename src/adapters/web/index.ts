import { IFileAdapter, IOutputProvider } from '../../core/OnChainExporter';

export class WebFsAdapter implements IFileAdapter {
  private files: Map<string, Buffer> = new Map();

  async readFile(path: string): Promise<Buffer> {
    const file = this.files.get(path);
    if (!file) {
      throw new Error(`File not found: ${path}`);
    }
    return file;
  }

  async writeFile(path: string, data: Buffer): Promise<void> {
    this.files.set(path, data);
  }
}

export class WebOutputProvider implements IOutputProvider {
  printData(data: string[][]): void {
    // In web context, we might want to display this in the UI
    console.log('Output data:', data);
  }
} 