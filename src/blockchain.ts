import { ethers } from "ethers";
import { LondonTokenBase__factory } from "../generated/contracts";
import { decodePayload } from "./protoDecode";
import { contentsPath, saveFiles } from "./fileDecoder";
import { IOutputProvider } from "./printer";
import { injectPayload } from "./htmlEditor";
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

export async function exportFromBlockchain(
  contractAddress: string,
  tokenId: string,
  fileAdapter: IFileAdapter,
  outputProvider: IOutputProvider,
  config: ExportConfig
) {
  const provider = new ethers.providers.JsonRpcProvider(config.ethRpcNode);
  await provider.ready;
  const collection = LondonTokenBase__factory.connect(
    contractAddress,
    provider
  );

  const artistName = await collection.artistName();
  const collectionTitle = await collection.name();
  const license = await collection.license();
  const description = await collection.projectDescription();
  const payload = await collection._payloads(tokenId);

  if (payload === "") {
    throw new Error("Token ID not found");
  }

  const decodedPayload = decodePayload(payload);
  await saveFiles(
    collection,
    provider,
    fileAdapter,
    config.dependencyResolveType,
    config.artblocksRegistryContract
  );

  const projectData = [
    ["Project", ""],
    ["Artist", artistName],
    ["Collection", collectionTitle],
    ["License", license],
    ["Description", description],
  ];

  const tokenData = [
    ["NFT", ""],
    ["Token ID", tokenId],
    ["Title", decodedPayload.title],
    ["Hash", decodedPayload.hash],
    ["Params", JSON.stringify(decodedPayload.params)],
  ];

  outputProvider.printData(projectData);
  outputProvider.printData(tokenData);

  await injectPayload(`${contentsPath}/index.html`, decodedPayload, fileAdapter);
}
