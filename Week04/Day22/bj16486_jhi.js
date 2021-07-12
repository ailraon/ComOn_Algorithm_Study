const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const pi = 3.141592;

let rectWidth = Number(input()) * 2;
let radius = Number(input()) * 2 * pi;
console.log(radius + rectWidth);