import { ethers } from "ethers";
import { LondonTokenBase__factory } from "../../generated/contracts";
import { decodePayload } from "./protoDecode";
import { contentsPath, saveFiles } from "./fileDecoder";
import { IFileAdapter, IOutputProvider, ExportConfig } from "./OnChainExporter";
import { injectPayload } from "./htmlEditor";

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
    ["Artist", await collection.artistName()],
    ["Collection", await collection.name()],
    ["License", await collection.license()],
    ["Description", await collection.projectDescription()],
  ];

  const tokenData = [
    ["NFT", ""],
    ["Token ID", `${tokenId}`],
    ["Title", `${decodedPayload.title ?? ""}`],
    ["Hash", decodedPayload.hash],
    ["Params", `${JSON.stringify(decodedPayload.params ?? [])}`],
  ];

  outputProvider.printData(projectData);
  outputProvider.printData(tokenData);

  await injectPayload(
    `${contentsPath}/index.html`,
    decodedPayload,
    fileAdapter
  );
} 