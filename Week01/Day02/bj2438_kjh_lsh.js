process.stdin.resume();
process.stdin.setEncoding("utf8");

const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

//// 별찍기를 제가 생각한 것보다 훨씬 더 간단하게 구현하는 방법을 알 수 있었어요
//// process.stdout.write가 무엇인지 알게 됐습니다.

//// process.stdout.write()라는 좋은게 있는지 오늘 알았네요.
//// 깔끔한 for문 활용이 좋은것 같습니다.
//// process.stdout.write()에 대해 공부해볼수 있었습니다.

let num = parseInt(input());

for (let i=1; i<=num; i++) {
    for(let j=0; j<num; j++){
        process.stdout.write("*");
    }
    console.log("");
}