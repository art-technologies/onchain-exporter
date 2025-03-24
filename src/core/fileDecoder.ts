import { ethers } from "ethers";
import { inflate } from "pako";
import { LondonTokenBase } from "../../generated/contracts";
import { IFileAdapter } from "./OnChainExporter";
import { getCDNLinkForDependency } from "../dependenciesManager/ArtBlocksDependencyRegistry";
import * as path from "path";

export const contentsPath = "./project";
export const dependenciesFile = "dependencies.json";

export async function decodeFileContents(chunks: Uint8Array[]) {
  const data = chunks.reduce(
    (acc, curr) => new Uint8Array([...acc, ...curr]),
    new Uint8Array()
  );
  const decompressed = inflate(data, { to: "string" });
  return decompressed.toString();
}

export async function saveFiles(
  collection: LondonTokenBase,
  provider: ethers.providers.JsonRpcProvider,
  fileAdapter: IFileAdapter,
  dependencyResolveType: string,
  artblocksRegistryContract: string
) {
  const projectFiles = await collection.files();
  for (const file of projectFiles) {
    const content = await collection.fileContents(file);
    const arContent = ethers.utils.arrayify(content);
    const decodedContent = await decodeFileContents([arContent]);

    if (file === dependenciesFile) {
      console.log("Detected dependencies, resolving...");
      const dependencies = JSON.parse(decodedContent) as Array<{
        alias: string;
        licenseType: string;
        name: string;
        version: string;
        filePath: string;
      }>;

      for (const dependency of dependencies) {
        if (dependencyResolveType !== "artblocks-dependency-registry") {
          throw "Please check if you have env variable for DEPENDENCY_RESOLVE_TYPE";
        }
        const dependencyContent = await getCDNLinkForDependency(
          dependency.alias,
          provider,
          artblocksRegistryContract
        );
        await fileAdapter.writeFile(
          path.join(contentsPath, dependency.filePath),
          Buffer.from(dependencyContent, "utf-8")
        );
      }
    }

    await fileAdapter.writeFile(
      path.join(contentsPath, file),
      Buffer.from(decodedContent, "utf-8")
    );
  }
} 