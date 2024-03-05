import fs from "fs";
import path from "path";
import { inflate, deflate } from "pako";
import { LondonTokenBase } from "../generated/contracts";
import { arrayify } from "ethers/lib/utils";

export const contentsPath = "./project";

export async function decodeFileContents(chunks: Uint8Array[]) {
  const data = chunks.reduce(
    (acc, curr) => new Uint8Array([...acc, ...curr]),
    new Uint8Array()
  );

  const decompressed = inflate(data, { to: "string" });
  return decompressed.toString();
}

export async function saveFiles(collection: LondonTokenBase) {
  const projectFiles = await collection.files();
  for (const file of projectFiles) {
    const content = await collection.fileContents(file);
    const arContent = arrayify(content);
    const decodedContent = await decodeFileContents([arContent]);

    await fs.promises.writeFile(path.join(contentsPath, file), decodedContent);
  }
}
