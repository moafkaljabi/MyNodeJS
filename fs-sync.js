const {readFileSync, WriteFileSync} = require("fs");

console.log("start");

const first = readFileSync("./content/first-text.txt");
const second = readFileSync("./content/second-text.txt","utf8");
console.log(first);
console.log(second);
