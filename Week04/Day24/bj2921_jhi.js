const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = Number(input());
let result = 3;
let rule = result;

for(let i = 1; i < N; i++) {
  result += rule++;
}
console.log(N*result);