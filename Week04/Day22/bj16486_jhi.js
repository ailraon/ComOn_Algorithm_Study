const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const pi = 3.141592;

//// 사각형의 넓이, 원의 넓이를 각각 담는데 width, radius라는 변수명은 적절하지 못한 것 같아요
let rectWidth = Number(input()) * 2;
let radius = Number(input()) * 2 * pi;
console.log(radius + rectWidth);

//// 잘했습니다