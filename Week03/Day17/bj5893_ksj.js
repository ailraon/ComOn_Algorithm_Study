//문제 실패: 정답은 나오지만 반례가 있었던 거 같다.

const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let N = input();
let convertDec = parseInt(N, 2);
let calcResult = convertDec * 17; 
let result = calcResult.toString(2);

console.log(result); 


