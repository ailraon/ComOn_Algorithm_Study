const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let num = input().split(" ");
let A = parseInt(num[0]);
let B = parseInt(num[1]);
let max = 0;
let min = 0;

if (A < B) {
  max = B;
  min = A;
} else {
  max = A;
  min = B;
}

let n = max - min;

console.log((n * (n + 1)) / 2 + min * (n + 1));
