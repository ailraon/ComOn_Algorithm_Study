//// 밀린 피드백 반영 다 하면 피드백 재개함
const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let [N, K] = input().split(" ").map(Number);

let result = findTheFactorial(N) / (findTheFactorial(K) * findTheFactorial(N - K));

console.log(result);

//// get, calc 등의 동사가 어울렸을 듯
function findTheFactorial (number) {
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}
//// 깔끔~