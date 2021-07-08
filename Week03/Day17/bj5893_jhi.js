const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let bin = "0b" + input();
console.log((BigInt(bin)*17n).toString(2));

//// 깔끔합니다. 문제 조건을 잘 파악하고 BigInt 활용도 잘해주신 것 같습니다