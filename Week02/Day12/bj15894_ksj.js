const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let side = parseInt(input());
let result = side * 4;

console.log(result);

//// 깔끔~