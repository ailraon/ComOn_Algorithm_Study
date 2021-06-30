const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const tax = parseInt(input());

console.log(tax * 0.78 + " " + tax * 0.956);
