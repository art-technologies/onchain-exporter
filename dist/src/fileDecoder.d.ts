import { LondonTokenBase } from "../generated/contracts";
import { ethers } from "ethers";
import { IFileAdapter } from './core/OnChainExporter';
export declare const contentsPath = "./project";
export declare const dependenciesFile = "dependencies.json";
export declare function decodeFileContents(chunks: Uint8Array[]): Promise<string>;
export declare function saveFiles(collection: LondonTokenBase, provider: ethers.providers.JsonRpcProvider, fileAdapter: IFileAdapter, dependencyResolveType: string, artblocksRegistryContract: string): Promise<void>;
