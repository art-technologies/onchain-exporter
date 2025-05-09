import { table, TableUserConfig } from 'table';
import { IOutputProvider } from '../../core/OnChainExporter';

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