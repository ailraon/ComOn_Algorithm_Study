const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

var number = input();
console.log(parseInt(number, 16));

//// 깔끔합니다 :22 :333 :4444
