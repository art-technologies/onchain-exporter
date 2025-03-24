import { ethers } from 'ethers';

/**
 * Defines the minimal interface needed for reading/writing data.
 * In Node, you'll implement this using fs; in the browser, you might store it in memory or localStorage.
 */
export interface IFileAdapter {
  readFile(path: string): Promise<Buffer>;
  writeFile(path: string, data: Buffer): Promise<void>;
  // Add more methods if needed
}

export interface IOutputProvider {
  printData(data: (string)[][]): void;
}

export interface ExportConfig {
  ethRpcNode: string;
  dependencyResolveType: string;
  artblocksRegistryContract: string;
}

export interface OnChainExporter {
  exportFromBlockchain(
    contractAddress: string,
    tokenId: string,
    config: ExportConfig
  ): Promise<void>;
}