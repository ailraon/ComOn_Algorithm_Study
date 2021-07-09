//문제 실패 - 모범 답안

const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let bin = "0b" + input(); // "0b"를 이용해서 2진수 입력받음
console.log((BigInt(bin) * 17n).toString(2));
// 입력받은 수에 17을 곱하고 2진수로 표현함
 //BigInt: Number보다 더 큰 정수를 표현할 수 있음