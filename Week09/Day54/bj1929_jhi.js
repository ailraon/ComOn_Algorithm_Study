const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [startNum, endNum] = input().split(' ').map(Number);
let primeNum = [];

eratos(findMinPower(endNum), endNum);

let result = "";

for(let i = startNum; i <= endNum; i++) {
    if (primeNum[i] === false) continue;
    result += i + '\n';
}

console.log(result);

//// 함수 첫 단어는 동사
function eratos(minPower, endNumber) {
    primeNum[1] = false;
    for (let i = 2; i < minPower; i++) {
        for(let j = i * i; j <= endNumber; j += i) {
            primeNum[j] = false;
        }
    }
}

//// 소수는 prime number라고 부름
function findMinPower (endNum) {
    let minPower = 2;
    while (true) {
        if (minPower * minPower > endNum) return minPower;
        minPower++;
    } 
}