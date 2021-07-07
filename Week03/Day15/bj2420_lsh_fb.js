const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let num = input().split(" ");
console.log(Math.abs(parseInt(num[0]) - parseInt(num[1])));
