const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let numberOfNthEndings = input();

//// numberOfEnding 14줄, 20줄에서 숫자처럼 취급하고 쓸거면 왜 "666" 문자열로 초기화한거여
let numberOfEnding = "666";
let countingEnding = 0;
while (true) {
    if (String(numberOfEnding).includes("666")) {
        countingEnding++;
    }
    if (numberOfNthEndings == countingEnding) {
        break;
    }
    numberOfEnding++;
}
//// 깔끔하게 잘 짰음 굳

console.log(numberOfEnding);