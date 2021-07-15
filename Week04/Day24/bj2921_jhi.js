const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = Number(input());
let result = 3;
//// dominoesToAdd 등으로 변수명을 명확하게 지었다면 더 가독성 좋았을 것 같습니다! 
let rule = result;

for(let i = 1; i < N; i++) {
  result += rule++;
}
console.log(N*result);

//// 깔끔합니다!