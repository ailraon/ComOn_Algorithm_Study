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

// 한 줄을 입력받아 띄어쓰기로 쪼개고
const numbers = input().split(" ");
// 각각 정수로 변환하고
const a = parseInt(numbers[0]);
const b = parseInt(numbers[1]);

// 더해서 반환
console.log(a - b);
