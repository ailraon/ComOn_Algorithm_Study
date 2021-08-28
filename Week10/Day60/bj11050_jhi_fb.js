//// 밀린 피드백 반영 다 하면 피드백 재개함
const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let [N, K] = input().split(" ").map(Number);

let result = calcFactorial(N) / (calcFactorial(K) * calcFactorial(N - K));

console.log(result);

function calcFactorial (number) {
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}
//// 깔끔~