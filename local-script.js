const csvFilePath = "./src/localization/csv/texts.csv";
const fs = require("fs");
const csv = require("csvtojson");
csv({
  colParser: {
    column1: "omit",
    column2: "string",
  },
  checkType: true,
})
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    const texts = {};
    jsonObj.forEach((obj) => {
      texts[obj["KEY"]] = obj["VALUE"];
    });

    const json = JSON.stringify(texts);
    fs.writeFile(
      "./src/localization/json/texts.json",
      json,
      "utf8",
      (error, data) => {
        if (error) {
          console.error(error);
        } else {
          console.log("Converted csv to json.");
        }
      }
    );
  });
