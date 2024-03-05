const fs = require("fs");

export const injectPayload = (filePath: string, payload: any) => {
  fs.readFile(filePath, "utf8", (err: any, data: any) => {
    if (err) {
      console.error(err);
      return;
    }

    let result = data.replace(
      /params.get\("payload"\);/,
      `"${btoa(JSON.stringify(payload))}"`
    );

    fs.writeFile(
      filePath,
      result,
      "utf8",
      (err: NodeJS.ErrnoException | null) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`Project saved at ${filePath}`);
        }
      }
    );
  });
};
