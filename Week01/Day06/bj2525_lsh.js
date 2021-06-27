const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const time = input().split(" ");
const sum = parseInt(input());

//// 의미를 명확하게 하기위해 hour 정도로 지었으면 더 좋았을 것 같아요.
let h = parseInt(time[0]);
let min = parseInt(time[1]);

min += sum;

//// while문 사용도 괜찮지만 나머지 연산자가 아래의 반복문과 비슷한 역할을 하니 한번 찾아보시면 좋을 것 같습니다!
while (min >= 60) {
  min -= 60;
  h++;
}

while (h >= 24) {
  h -= 24;
}

console.log(h + " " + min);
//// 잘한거 같습니다. :22