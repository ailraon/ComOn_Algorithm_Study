const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let d1 = Number(input());
let d2 = Number(input());

let horizon = d1 * 2;
let circle = d2 * 2 * 3.141592;
let result = horizon + circle;

console.log(result);