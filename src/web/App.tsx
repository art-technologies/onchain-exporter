import { useState, ChangeEvent } from 'react';
import { ExportConfig } from '../core/OnChainExporter';
import { WebFsAdapter, WebOutputProvider } from '../adapters/web';
import { exportFromBlockchain } from '../core/blockchain';

function App() {
  const [config, setConfig] = useState<ExportConfig>({
    ethRpcNode: '',
    dependencyResolveType: 'ipfs',
    artblocksRegistryContract: '',
  });
  const [iframeSrc, setIframeSrc] = useState<string>('');
  const [contractAddress, setContractAddress] = useState<string>('');
  const [tokenId, setTokenId] = useState<string>('');

  const handleSubmit = async () => {
    try {
      const fsAdapter = new WebFsAdapter();
      const outputProvider = new WebOutputProvider();
      
      await exportFromBlockchain(
        contractAddress,
        tokenId,
        fsAdapter,
        outputProvider,
        config
      );

      // Get the path to the generated HTML file
      const htmlPath = `/artwork/${contractAddress}/${tokenId}/index.html`;
      setIframeSrc(htmlPath);
    } catch (error) {
      console.error('Error exporting artwork:', error);
    }
  };

  return (
    <div style={{ padding: '20px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
      {/* Left Panel */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h2>Configuration</h2>
        
        <input
          placeholder="ETH RPC Node"
          value={config.ethRpcNode}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setConfig({ ...config, ethRpcNode: e.target.value })}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        
        <select
          value={config.dependencyResolveType}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setConfig({ ...config, dependencyResolveType: e.target.value as 'ipfs' | 'http' })}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          <option value="ipfs">IPFS</option>
          <option value="http">HTTP</option>
        </select>
        
        <input
          placeholder="ArtBlocks Registry Contract"
          value={config.artblocksRegistryContract}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setConfig({ ...config, artblocksRegistryContract: e.target.value })}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        
        <input
          placeholder="Smart Contract Address"
          value={contractAddress}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setContractAddress(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        
        <input
          placeholder="Token ID"
          value={tokenId}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTokenId(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        
        <button
          onClick={handleSubmit}
          style={{ padding: '8px', borderRadius: '4px', border: 'none', backgroundColor: '#3182ce', color: 'white' }}
        >
          Submit
        </button>
      </div>

      {/* Right Panel */}
      <div>
        {iframeSrc ? (
          <iframe
            src={iframeSrc}
            style={{ width: '100%', height: '100vh', border: 'none' }}
            title="Artwork Preview"
          />
        ) : (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100vh',
              backgroundColor: '#f7fafc'
            }}
          >
            <p>Submit configuration to view artwork</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App; 