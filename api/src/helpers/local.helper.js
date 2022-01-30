const fs = require("fs");

const getPrivateData = (type) => {
  const data = fs.readFileSync("../../data/d0.json");
  return JSON.parse(data)[`${type}s`];
};

module.exports = { getPrivateData };
