const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const number = input().split(" ");

const result = parseInt(number[0]) - parseInt(number[1]);
console.log(result);