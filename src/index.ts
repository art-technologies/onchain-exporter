import { exportFromBlockchain } from "./blockchain";
import { Command } from "commander";
const program = new Command();

type Options = {
  contractAddress?: string;
  tokenId?: string;
  opensea?: string;
};

program
  .option("-c, --contractAddress <address>", "The smart contract address")
  .option("-t, --token <id>", "The token ID")
  .option("-os, --opensea <url>", "URL of your OpenSea NFT");

program.parse(process.argv);

const options = program.opts();

async function main() {
  let { contractAddress, tokenId, opensea }: Options = options;

  if (opensea) {
    const parts = opensea.split("/");
    [contractAddress, tokenId] = parts.slice(-2);
  }

  if (!contractAddress || !tokenId) {
    console.error("Please provide a contract address and token ID");
    return;
  }

  try {
    await exportFromBlockchain(contractAddress, tokenId);
  } catch (error) {
    console.error("Error exporting from blockchain", error);
  }
}

(async () => {
  await main();
})();
