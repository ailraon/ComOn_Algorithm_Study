const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = Number(input());

let widthLine = 1 + parseInt(N/2) + (N%2===0 ? 0 : 1);
let heightLine = 1 + parseInt(N/2);

console.log(widthLine * heightLine);

//// 깔끔합니다. :22
//// 지금도 좋은데 O(1)로도 풀 수 있다는거 참고 해주세요!