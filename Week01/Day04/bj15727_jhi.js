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

const len = input();

let time = parseInt(len/5);
if(parseInt(len)%5 > 0) {
    time++;
}
console.log(time);

//// 변수를 시간과 거리를 나눠 구현한 점이 신박했습니다.