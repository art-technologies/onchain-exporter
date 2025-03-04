"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserAdapter = void 0;
const inMemoryFiles = {};
exports.BrowserAdapter = {
    async readFile(path) {
        return inMemoryFiles[path] || Buffer.from('');
    },
    async writeFile(path, data) {
        inMemoryFiles[path] = data;
    },
};
