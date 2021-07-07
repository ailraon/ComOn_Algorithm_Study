// 반례를 못 찾겠습니다.

const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let bin = input();
let num = parseInt(bin, 2);

console.log((num * 17).toString(2));
