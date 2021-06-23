process.stdin.resume();
process.stdin.setEncoding("utf8");

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

//// 잘한거 같습니다.
//// 짧고 간결하여 보기 좋습니다.