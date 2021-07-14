const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let d1 = Number(input());
let d2 = Number(input());

//// 수평선이라는 뜻을 가지는 horizon보다는 rect 어떤가요?
let rect = d1 * 2;
let circle = d2 * 2 * 3.141592;
let result = rect + circle;

console.log(result);