const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const len = input();
const time = parseInt(Math.ceil(len / 5));
// Math.ceil()함수의 기능에 대해 알게됐고 그런 함수를 사용한 점이 멋있었습니다.
console.log(time);
