import { readFileSync, writeFileSync } from "fs";

function csvToJson(csvFilePath) {
  const fileData = readFileSync(csvFilePath, "utf-8");
  const rows = fileData.split("\n");
  const headerRow = rows[0].split(",");
  const jsonData = [];

  for (let i = 1; i < rows.length; i++) {
    const fields = rows[i].split(",");
    jsonData.push(fields);
  }

  return jsonData;
}

const json = csvToJson("dictionary.csv");
console.log(json);
writeFileSync("convertedData.json", JSON.stringify(json));