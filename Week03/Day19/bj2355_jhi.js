const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let num = input().split(" ");
let result = 0;

let max, min;
if(Number(num[0]) > Number(num[1])) {
  max = Number(num[0]);
  min = Number(num[1]);
} else {
  max = Number(num[1]);
  min = Number(num[0]);
}

result = (max+min) * ((max - min + 1) / 2);
console.log(result);

// 2 ~ 5 : 2 + 3 + 4 + 5 = 14
// (5 + 2) * ((5 - 2 + 1) / 2) = 7 * 2
// 2 ~ 4 : 2 + 3 + 4 = 9
// (4 + 2) * ((4 - 2 + 1) / 2) = 6 * 1.5
// -2 ~ 2 : -2 + -1 + 0 + 1 + 2 = 0
// (2 + -2) * ((2 + -2 + 1) / 2) = 0 * 0.5
