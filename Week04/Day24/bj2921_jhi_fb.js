const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = Number(input());
let result = 3;
let dominoesToAdd = result;

for(let i = 1; i < N; i++) {
  result += dominoesToAdd++;
}
console.log(N*result);
