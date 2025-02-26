import { ethers } from "ethers";
import { LondonTokenBase__factory } from "../generated/contracts";
import { decodePayload } from "./protoDecode";
import { contentsPath, saveFiles } from "./fileDecoder";
import { printData } from "./printer";
import { injectPayload } from "./htmlEditor";
import "dotenv/config";

export async function exportFromBlockchain(
  contractAddress: string,
  tokenId: string
) {
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.ETH_RPC_NODE
  );
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
  await saveFiles(collection, provider);

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

  printData(projectData);
  printData(tokenData);

  injectPayload(`${contentsPath}/index.html`, decodedPayload);
}
