const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let d1 = parseFloat(input()) * 2;
let d2 = parseFloat(input()) * 3.141592;

console.log(d1 + d2);
