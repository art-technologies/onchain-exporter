import { Command } from 'commander';
import { NodeFsAdapter, NodeOutputProvider } from '../adapters/node';
import { exportFromBlockchain } from '../core/blockchain';
import { ExportConfig } from '../core/OnChainExporter';
import 'dotenv/config';

const program = new Command();

interface Options {
  contract?: string;
  token?: string;
  opensea?: string;
}

program
  .option('-c, --contract <address>', 'The smart contract address')
  .option('-t, --token <id>', 'The token ID')
  .option('-os, --opensea <url>', 'URL of your OpenSea NFT');

program.parse(process.argv);
const options = program.opts();

async function main() {
  let { contract, token, opensea }: Options = options;

  if (opensea) {
    const parts = opensea.split('/');
    [contract, token] = parts.slice(-2);
  }

  if (!contract || !token) {
    console.error('Please provide a contract address and token ID');
    return;
  }

  try {
    const fileAdapter = new NodeFsAdapter();
    const outputProvider = new NodeOutputProvider();
    
    const config: ExportConfig = {
      ethRpcNode: process.env.ETH_RPC_NODE || '',
      dependencyResolveType: process.env.DEPENDENCY_RESOLVE_TYPE || '',
      artblocksRegistryContract: process.env.DEPENDENCY_RESOLVE_TYPE__ARTBLOCKS__REGISTRY_CONTRACT || '',
    };

    await exportFromBlockchain(
      contract,
      token,
      fileAdapter,
      outputProvider,
      config
    );
  } catch (error) {
    console.error('Error exporting from blockchain', error);
  }
}

main(); 