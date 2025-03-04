"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveFiles = exports.decodeFileContents = exports.dependenciesFile = exports.contentsPath = void 0;
const fs = require("fs");
const path = require("path");
const pako_1 = require("pako");
const utils_1 = require("ethers/lib/utils");
const dependenciesManager_1 = require("./dependenciesManager");
const ArtBlocksDependencyRegistry_1 = require("./dependenciesManager/ArtBlocksDependencyRegistry");
// We'll read your JSON schema from disk just before calling parseAndValidateJson.
const schemaJson = JSON.parse(fs.readFileSync("./src/dependenciesManager/dependencies.schema.json", "utf8"));
const validator = (0, dependenciesManager_1.createDependencyValidator)(schemaJson);
exports.contentsPath = "./project";
exports.dependenciesFile = "dependencies.json";
async function decodeFileContents(chunks) {
    const data = chunks.reduce((acc, curr) => new Uint8Array([...acc, ...curr]), new Uint8Array());
    const decompressed = (0, pako_1.inflate)(data, { to: "string" });
    return decompressed.toString();
}
exports.decodeFileContents = decodeFileContents;
async function saveFiles(collection, provider, fileAdapter, dependencyResolveType, artblocksRegistryContract) {
    const projectFiles = await collection.files();
    for (const file of projectFiles) {
        const content = await collection.fileContents(file);
        const arContent = (0, utils_1.arrayify)(content);
        const decodedContent = await decodeFileContents([arContent]);
        if (file === exports.dependenciesFile) {
            console.log("Detected dependencies, resolving...");
            const dependencies = (0, dependenciesManager_1.parseAndValidateJson)(decodedContent, validator);
            for (const dependency of dependencies) {
                if (dependencyResolveType !== "artblocks-dependency-registry") {
                    throw "Please check if you have env variable for DEPENDENCY_RESOLVE_TYPE";
                }
                const dependencyContent = await (0, ArtBlocksDependencyRegistry_1.getCDNLinkForDependency)(dependency.alias, provider, artblocksRegistryContract);
                await fileAdapter.writeFile(path.join(exports.contentsPath, dependency.filePath), Buffer.from(dependencyContent, 'utf-8'));
            }
        }
        await fileAdapter.writeFile(path.join(exports.contentsPath, file), Buffer.from(decodedContent, 'utf-8'));
    }
}
exports.saveFiles = saveFiles;
