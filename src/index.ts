import { exportFromBlockchain } from "./blockchain";
import { Command } from "commander";
const program = new Command();

type Options = {
  contract?: string;
  token?: string;
  opensea?: string;
};

program
  .option("-c, --contract <address>", "The smart contract address")
  .option("-t, --token <id>", "The token ID")
  .option("-os, --opensea <url>", "URL of your OpenSea NFT");

program.parse(process.argv);

const options = program.opts();

async function main() {
  let { contract, token, opensea }: Options = options;

  if (opensea) {
    const parts = opensea.split("/");
    [contract, token] = parts.slice(-2);
  }

  if (!contract || !token) {
    console.error("Please provide a contract address and token ID");
    return;
  }

  try {
    await exportFromBlockchain(contract, token);
  } catch (error) {
    console.error("Error exporting from blockchain", error);
  }
}

(async () => {
  await main();
})();
