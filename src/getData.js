var xlsx = require("node-xlsx");
var wb = xlsx.readFile("Grouptime.xlsx");
var ws = wb.Sheets["Group 1"];

console.log(wb.SheetNames);

//code: 'Module_not_found
