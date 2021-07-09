// 문제 실패 : 반례를 못 찾겠습니다.
// 틀린 이유 : 입력받은 수가 Int 범위를 초과함 -> BigInt 를 사용해야 함

const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let bin = input();
let num = parseInt(bin, 2);

console.log((num * 17).toString(2));
