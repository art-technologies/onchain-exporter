import fs from "fs";
import path from "path";
import { inflate, deflate } from "pako";
import { LondonTokenBase } from "../generated/contracts";
import { arrayify } from "ethers/lib/utils";
import { parseAndValidateJson } from "./dependenciesManager"
import {getCDNLinkForDependency} from "./dependenciesManager/ArtBlocksDependencyRegistry";
import {ethers} from "ethers";

export const contentsPath = "./project";
export const dependenciesFile = "dependencies.json"

export async function decodeFileContents(chunks: Uint8Array[]) {
  const data = chunks.reduce(
    (acc, curr) => new Uint8Array([...acc, ...curr]),
    new Uint8Array()
  );

  const decompressed = inflate(data, { to: "string" });
  return decompressed.toString();
}

export async function saveFiles(collection: LondonTokenBase, provider: ethers.providers.JsonRpcProvider) {
  const projectFiles = await collection.files();
  for (const file of projectFiles) {
    const content = await collection.fileContents(file);
    const arContent = arrayify(content);
    const decodedContent = await decodeFileContents([arContent]);

    if (file === dependenciesFile) {
      console.log("Detected dependencies, resolving...")
      const dependencies = parseAndValidateJson(decodedContent)
      for (const dependency of dependencies) {
        if (process.env.DEPENDECY_RESOLVE_TYPE !== "artblocks-dependency-registry") {
          throw "Please check if you have env variable for DEPENDECY_RESOLVE_TYPE"
        }
        const dependencyContent = await getCDNLinkForDependency(dependency.alias, provider)
        await fs.promises.writeFile(path.join(contentsPath, dependency.filePath), dependencyContent);
      }
    }

    await fs.promises.writeFile(path.join(contentsPath, file), decodedContent);
  }
}
