const fs = require('fs').promises;
const path = require('path');
const JSON_DATA_DIR = path.resolve(__dirname, './data');

const writeJsonData = async function (data, jsonFilename) {
  return fs.writeFile(
    `${JSON_DATA_DIR}/${jsonFilename}`,
    JSON.stringify(data, null, 2)
  );
};
const readJsonData = async function (jsonFilename) {
  return fs
    .readFile(`${JSON_DATA_DIR}/${jsonFilename}`)
    .then(res => JSON.parse(res.toString()));
};
module.exports = {
  writeJsonData,
  readJsonData
};
