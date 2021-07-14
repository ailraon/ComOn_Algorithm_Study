const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

//// 변수 이름은 d1, d2인데 막상 담는 값은 'd1, d2를 이용하여 구한 넓이'라서 적절하지 않은 것 같아요
let d1 = parseFloat(input()) * 2;
let d2 = parseFloat(input()) * 3.141592;

console.log(d1 + d2);

//// 잘했습니다