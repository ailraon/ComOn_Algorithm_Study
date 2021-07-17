const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [WallWidth, WallHeight] = input()
    .split(" ")
    .map((num) => BigInt(num));

let result = BigInt(WallHeight * WallWidth / 2n); 
console.log(result.toString());