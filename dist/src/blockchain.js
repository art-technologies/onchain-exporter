"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportFromBlockchain = void 0;
const ethers_1 = require("ethers");
const contracts_1 = require("../generated/contracts");
const protoDecode_1 = require("./protoDecode");
const fileDecoder_1 = require("./fileDecoder");
const htmlEditor_1 = require("./htmlEditor");
require("dotenv/config");
async function exportFromBlockchain(contractAddress, tokenId, fileAdapter, outputProvider, config) {
    const provider = new ethers_1.ethers.providers.JsonRpcProvider(config.ethRpcNode);
    await provider.ready;
    const collection = contracts_1.LondonTokenBase__factory.connect(contractAddress, provider);
    const artistName = await collection.artistName();
    const collectionTitle = await collection.name();
    const license = await collection.license();
    const description = await collection.projectDescription();
    const payload = await collection._payloads(tokenId);
    if (payload === "") {
        throw new Error("Token ID not found");
    }
    const decodedPayload = (0, protoDecode_1.decodePayload)(payload);
    await (0, fileDecoder_1.saveFiles)(collection, provider, fileAdapter, config.dependencyResolveType, config.artblocksRegistryContract);
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
    await (0, htmlEditor_1.injectPayload)(`${fileDecoder_1.contentsPath}/index.html`, decodedPayload, fileAdapter);
}
exports.exportFromBlockchain = exportFromBlockchain;
