import { TableUserConfig, table } from "table";

export function printData(data: string[][]) {
  const tableConfig: TableUserConfig = {
    columns: [
      {
        width: 20,
      },
      {
        width: 60,
      },
    ],
    spanningCells: [{ col: 0, row: 0, colSpan: 2, alignment: "center" }],
  };

  console.log(table(data, tableConfig));
}
