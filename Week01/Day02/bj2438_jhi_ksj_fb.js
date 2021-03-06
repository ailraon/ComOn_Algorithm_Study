// input() 할 때마다 한 줄이 문자열로 입력받아짐
const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let number = parseInt(input());

// 2438 번 문제
for (let i=1; i <= number; i++) {
  //// "*".repeat(i)를 이용했으면 더 깔끔했을 것 같아요
  let msg = "*".repeat(i);
  console.log(msg);
}