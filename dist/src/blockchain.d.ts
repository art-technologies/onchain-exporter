import { IOutputProvider } from "./printer";
import "dotenv/config";
import { IFileAdapter } from './core/OnChainExporter';
/**
 * Interface holding former env references.
 */
export interface ExportConfig {
    ethRpcNode: string;
    dependencyResolveType: string;
    artblocksRegistryContract: string;
}
export declare function exportFromBlockchain(contractAddress: string, tokenId: string, fileAdapter: IFileAdapter, outputProvider: IOutputProvider, config: ExportConfig): Promise<void>;
