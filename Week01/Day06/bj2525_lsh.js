const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const time = input().split(" ");
const sum = parseInt(input());

let h = parseInt(time[0]);
let min = parseInt(time[1]);

min += sum;

while (min >= 60) {
  min -= 60;
  h++;
}

while (h >= 24) {
  h -= 24;
}

console.log(h + " " + min);
//// 잘한거 같습니다.