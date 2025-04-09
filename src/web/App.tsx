import { useState, ChangeEvent, useRef, useEffect } from 'react';
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
  const [contractAddress, setContractAddress] = useState<string>('0xbeed938770b07adf60ddacc551763ac76e0e5566');
  const [tokenId, setTokenId] = useState<string>('115854877');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [verboseMode, setVerboseMode] = useState<boolean>(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const fsAdapterRef = useRef<WebFsAdapter | null>(null);

  const log = (message: string, data?: any) => {
    if (verboseMode) {
      console.log(`[OnChain Exporter] ${message}`, data ? data : '');
    }
  };

  const logError = (error: any, context: string) => {
    if (verboseMode) {
      console.error(`[OnChain Exporter] Error in ${context}:`, {
        error,
        errorName: error?.name,
        errorMessage: error?.message,
        errorStack: error?.stack,
        errorType: typeof error,
        isErrorInstance: error instanceof Error,
        errorString: String(error),
        errorJSON: JSON.stringify(error, Object.getOwnPropertyNames(error))
      });
    } else {
      console.error(`[OnChain Exporter] Error in ${context}:`, error);
    }
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      log('Starting export process...', { 
        contractAddress, 
        tokenId, 
        config,
        environment: {
          userAgent: navigator.userAgent,
          platform: navigator.platform,
          language: navigator.language,
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
        }
      });
      
      const fsAdapter = new WebFsAdapter();
      fsAdapterRef.current = fsAdapter;
      const outputProvider = new WebOutputProvider();
      
      log('Initialized adapters', {
        fsAdapter: fsAdapter.constructor.name,
        outputProvider: outputProvider.constructor.name
      });
      
      await exportFromBlockchain(
        contractAddress,
        tokenId,
        fsAdapter,
        outputProvider,
        config
      );

      fsAdapter.printAllFiles();

      log('Export completed successfully');
      
      // Set the project.html as the iframe source
      setIframeSrc('/project.html');
    } catch (error) {
      logError(error, 'export process');
    } finally {
      setIsLoading(false);
      log('Export process finished');
    }
  };

  // Send filesystem data to iframe when it loads
  useEffect(() => {
    if (iframeRef.current && fsAdapterRef.current) {
      const iframe = iframeRef.current;
      const fsAdapter = fsAdapterRef.current;
      
      const handleIframeLoad = () => {
        // Convert Map to object for postMessage
        const filesystem: { [key: string]: string } = {};
        fsAdapter['files'].forEach((value, key) => {
          filesystem[key] = new TextDecoder().decode(value);
        });
        
        iframe.contentWindow?.postMessage({
          type: 'loadFileSystem',
          filesystem
        }, '*');
      };

      iframe.addEventListener('load', handleIframeLoad);
      return () => iframe.removeEventListener('load', handleIframeLoad);
    }
  }, [iframeSrc]);

  return (
    <div style={{ padding: '20px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
      {/* Left Panel */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h2>Configuration</h2>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input
            type="checkbox"
            id="verboseMode"
            checked={verboseMode}
            onChange={(e) => {
              setVerboseMode(e.target.checked);
              log('Verbose mode toggled', { enabled: e.target.checked });
            }}
          />
          <label htmlFor="verboseMode">Verbose Mode</label>
        </div>
        
        <input
          placeholder="ETH RPC Node"
          value={config.ethRpcNode}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setConfig({ ...config, ethRpcNode: e.target.value });
            log('ETH RPC Node updated', { value: e.target.value });
          }}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        
        <select
          value={config.dependencyResolveType}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            setConfig({ ...config, dependencyResolveType: e.target.value as 'ipfs' | 'http' });
            log('Dependency resolve type updated', { value: e.target.value });
          }}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          <option value="ipfs">IPFS</option>
          <option value="http">HTTP</option>
        </select>
        
        <input
          placeholder="ArtBlocks Registry Contract"
          value={config.artblocksRegistryContract}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setConfig({ ...config, artblocksRegistryContract: e.target.value });
            log('ArtBlocks Registry Contract updated', { value: e.target.value });
          }}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        
        <input
          placeholder="Smart Contract Address"
          value={contractAddress}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setContractAddress(e.target.value);
            log('Contract address updated', { value: e.target.value });
          }}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        
        <input
          placeholder="Token ID"
          value={tokenId}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setTokenId(e.target.value);
            log('Token ID updated', { value: e.target.value });
          }}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        
        <button 
          onClick={handleSubmit} 
          disabled={isLoading}
          style={{ 
            padding: '8px', 
            borderRadius: '4px', 
            border: 'none', 
            backgroundColor: isLoading ? '#ccc' : '#007bff',
            color: 'white',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          {isLoading ? (
            <>
              <div style={{
                width: '16px',
                height: '16px',
                border: '2px solid #fff',
                borderTopColor: 'transparent',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }} />
              Exporting...
            </>
          ) : 'Export'}
        </button>
      </div>
      
      {/* Right Panel */}
      <div>
        {iframeSrc && (
          <iframe
            ref={iframeRef}
            src={iframeSrc}
            style={{ width: '100%', height: '100%', border: 'none' }}
            title="Artwork Preview"
          />
        )}
      </div>
    </div>
  );
}

export default App; 