import { ethers } from "ethers";
export declare function getCDNLinkForDependency(dependencyName: string, provider: ethers.providers.JsonRpcProvider, dependencyRegistryContract: string): Promise<string>;
