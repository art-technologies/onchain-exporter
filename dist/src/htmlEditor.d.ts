import { IFileAdapter } from './core/OnChainExporter';
/**
 * "injectPayload" in an adapter-based style.
 */
export declare function injectPayload(filePath: string, payload: unknown, fileAdapter: IFileAdapter): Promise<void>;
