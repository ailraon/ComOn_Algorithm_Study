const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

//// 첫 글자는 소문자로 시작하는게 관례입니다
const [WallWidth, WallHeight] = input()
  .split(' ')
  .map((num) => BigInt(num));

let result = BigInt((WallHeight * WallWidth) / 2n);
console.log(result.toString());

//// 깔끔합니다 :22
