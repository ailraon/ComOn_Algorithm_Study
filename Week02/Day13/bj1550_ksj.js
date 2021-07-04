const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const hexa = input();

console.log(parseInt(hexa, 16));

//// 깔끔합니다