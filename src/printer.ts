import { TableUserConfig, table } from "table";

/**
 * Interface that can print a table of data. Allows Node or browser strategies.
 */
export interface IOutputProvider {
  printData(data: string[][]): void;
}

/**
 * NodeJS implementation that prints tables to the console.
 */
export class NodeOutputProvider implements IOutputProvider {
  printData(data: string[][]): void {
    const tableConfig: TableUserConfig = {
      columns: [
        { width: 20 },
        { width: 60 },
      ],
      spanningCells: [{ col: 0, row: 0, colSpan: 2, alignment: "center" }],
    };
    console.log(table(data, tableConfig));
  }
}
