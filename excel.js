const excel = require("xlsx");
const fs = require("fs");

var workbook = excel.readFile("test.xlsx");
//console.log(workbook);

let data = [];

const temp = excel.utils.sheet_to_json(
    workbook.Sheets[workbook.Sheets['Sheet1']]);
        temp.forEach((res) => {
        data.push(res)
        });
console.log(workbook.Sheets['Sheet1']);


