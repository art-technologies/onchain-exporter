import { IOutputProvider } from '../../core/OnChainExporter';

export class BrowserOutputProvider implements IOutputProvider {
  printData(data: string[][]): void {
    throw new Error('Not implemented');
  }
} 