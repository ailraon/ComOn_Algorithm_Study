//// 백준에서 한글을 입력받아야 하는 일이 없어서 이 코드는 없애도 될것 같습니다
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
//// 짧고 간결하여 보기 좋습니다. :22
//// 코드가 깔끔합니다.
