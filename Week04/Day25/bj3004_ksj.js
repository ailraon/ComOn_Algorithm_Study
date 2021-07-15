const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let chessBoardCutNumber = Number(input());
let N = Math.floor(chessBoardCutNumber/2);
let M = chessBoardCutNumber - N;
let result = (N+1) * (M+1);

console.log(result);