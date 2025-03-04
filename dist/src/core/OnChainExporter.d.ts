/// <reference types="node" />
/**
 * Defines the minimal interface needed for reading/writing data.
 * In Node, you'll implement this using fs; in the browser, you might store it in memory or localStorage.
 */
export interface IFileAdapter {
    readFile(path: string): Promise<Buffer>;
    writeFile(path: string, data: Buffer): Promise<void>;
}
export declare class OnChainExporter {
    private fileAdapter;
    constructor(fileAdapter: IFileAdapter);
    /**
     * Example method: "exportToken".
     * (Replace with your actual on-chain export logic.)
     */
    exportToken(path: string, tokenData: Buffer): Promise<void>;
}
