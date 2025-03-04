"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeOutputProvider = void 0;
const table_1 = require("table");
/**
 * NodeJS implementation that prints tables to the console.
 */
class NodeOutputProvider {
    printData(data) {
        const tableConfig = {
            columns: [
                { width: 20 },
                { width: 60 },
            ],
            spanningCells: [{ col: 0, row: 0, colSpan: 2, alignment: "center" }],
        };
        console.log((0, table_1.table)(data, tableConfig));
    }
}
exports.NodeOutputProvider = NodeOutputProvider;
