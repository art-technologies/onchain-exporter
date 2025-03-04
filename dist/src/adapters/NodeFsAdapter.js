"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeFsAdapter = void 0;
const fs_1 = require("fs");
class NodeFsAdapter {
    async readFile(path) {
        return fs_1.promises.readFile(path);
    }
    async writeFile(path, data) {
        return fs_1.promises.writeFile(path, data);
    }
}
exports.NodeFsAdapter = NodeFsAdapter;
