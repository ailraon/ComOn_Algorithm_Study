// 한글 입력 잘 받게 하는 코드
process.stdin.resume();
process.stdin.setEncoding("utf8");

// input() 할 때마다 한 줄이 문자열로 입력받아짐
const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const number = input().split(" ");

const result = parseInt(number[0]) - parseInt(number[1]);
console.log(result);