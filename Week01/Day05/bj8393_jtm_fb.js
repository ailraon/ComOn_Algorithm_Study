const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();
////읽기 쉬워서 좋았습니다.
//// 이해하기 쉽습니다. :22 :333
//// => 감사합니당

let n = input();
let sum = 0;
for (i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);
