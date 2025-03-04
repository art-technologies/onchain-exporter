"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blockchain_1 = require("./blockchain");
const commander_1 = require("commander");
const NodeFsAdapter_1 = require("./adapters/NodeFsAdapter");
const printer_1 = require("./printer");
require("dotenv/config");
const program = new commander_1.Command();
program
    .option("-c, --contract <address>", "The smart contract address")
    .option("-t, --token <id>", "The token ID")
    .option("-os, --opensea <url>", "URL of your OpenSea NFT");
program.parse(process.argv);
const options = program.opts();
async function main() {
    let { contract, token, opensea } = options;
    if (opensea) {
        const parts = opensea.split("/");
        [contract, token] = parts.slice(-2);
    }
    if (!contract || !token) {
        console.error("Please provide a contract address and token ID");
        return;
    }
    try {
        const fileAdapter = new NodeFsAdapter_1.NodeFsAdapter();
        const outputProvider = new printer_1.NodeOutputProvider();
        const config = {
            ethRpcNode: process.env.ETH_RPC_NODE || "http://localhost:8545",
            dependencyResolveType: process.env.DEPENDENCY_RESOLVE_TYPE || "",
            artblocksRegistryContract: process.env.DEPENDENCY_RESOLVE_TYPE__ARTBLOCKS__REGISTRY_CONTRACT || "",
        };
        await (0, blockchain_1.exportFromBlockchain)(contract, token, fileAdapter, outputProvider, config);
    }
    catch (error) {
        console.error("Error exporting from blockchain", error);
    }
}
(async () => {
    await main();
})();
