const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [startNum, endNum] = input().split(' ').map(Number);
let primeNum = [];

makeEratos(findMinPower(endNum), endNum);

let result = "";

for(let i = startNum; i <= endNum; i++) {
    if (primeNum[i] === false) continue;
    result += i + '\n';
}

console.log(result);

function makeEratos(minPower, endNumber) {
    primeNum[1] = false;
    for (let i = 2; i < minPower; i++) {
        for(let j = i * i; j <= endNumber; j += i) {
            primeNum[j] = false;
        }
    }
}

//// 소수는 prime number라고 부름
//// 소수를 구하는 함수가 아닌, 우리가 구해야하는 값의 크기보다 최소한으로 큰 제곱수를 구하기 위한 함수.
function findMinPower (endNum) {
    let minPower = 2;
    while (true) {
        if (minPower * minPower > endNum) return minPower;
        minPower++;
    } 
}