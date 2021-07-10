const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let N = input().split(" ");
let len = parseInt(N[0]);
let maxNum = parseInt(N[1]);
let arr;
(arr = []).length = len;
arr = input().split(" ");
let list = arr.filter((e) => e < maxNum);

console.log(list.join(" "));
