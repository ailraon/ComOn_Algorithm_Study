const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let [firstSide, secondSide] = input().split(' ').map(BigInt);
let halfNum = BigInt(2);
let result = (firstSide * secondSide) / halfNum;

console.log(BigInt(result).toString());
