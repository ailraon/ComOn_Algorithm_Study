//// 백준에서 한글을 입력받아야 하는 일이 없어서 이 코드는 없애도 될것 같습니다
// 한글 입력 잘 받게 하는 코드
process.stdin.resume();
process.stdin.setEncoding("utf8");

//// 요런 주석은 제거해도 될거같아요
// input() 할 때마다 한 줄이 문자열로 입력받아짐
const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const len = input();

let time = parseInt(len / 5);
if (parseInt(len) % 5 > 0) {
  time++;
}
console.log(time);

//// 변수를 시간과 거리를 나눠 구현한 점이 신박했습니다.
