const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let [a, b] = input()
  .split(" ")
  .map((num) => parseInt(num));

let max = Math.max(a, b);
let min = Math.min(a, b);
let num = max - min;

console.log((num * (num + 1)) / 2 + min * (num + 1));
