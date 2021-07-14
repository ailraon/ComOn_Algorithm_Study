const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const pi = 3.141592;

let rectArea = Number(input()) * 2;
let circleArea = Number(input()) * 2 * pi;
console.log(rectArea + circleArea);