const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const numbers = input().split(" ");
const a = parseInt(numbers[0]);
const b = parseInt(numbers[1]);

console.log(a - b);


