const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let totalSecond = 0;

for (let i = 0; i < 4; i++) {
  totalSecond += parseInt(input());
}

let time = {
  minute: parseInt(totalSecond / 60),
  second: totalSecond % 60,
};

console.log(time.minute);
console.log(time.second);

//// 깔끔합니다.
