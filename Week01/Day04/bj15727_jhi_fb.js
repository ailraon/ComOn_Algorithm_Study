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
//// 한 가지의 변수만을 이용한 점이 인상깊었습니다.
//// 깔끔하게 잘했네요
