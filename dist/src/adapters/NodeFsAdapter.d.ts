/// <reference types="node" />
import { IFileAdapter } from '../core/OnChainExporter';
export declare class NodeFsAdapter implements IFileAdapter {
    readFile(path: string): Promise<Buffer>;
    writeFile(path: string, data: Buffer): Promise<void>;
}
