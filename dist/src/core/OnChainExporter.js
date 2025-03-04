"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnChainExporter = void 0;
class OnChainExporter {
    constructor(fileAdapter) {
        this.fileAdapter = fileAdapter;
    }
    /**
     * Example method: "exportToken".
     * (Replace with your actual on-chain export logic.)
     */
    async exportToken(path, tokenData) {
        // Use the adapter to write the token data
        await this.fileAdapter.writeFile(path, tokenData);
        // If you need to read data:
        // const readResult = await this.fileAdapter.readFile(path);
        // ...
    }
}
exports.OnChainExporter = OnChainExporter;
