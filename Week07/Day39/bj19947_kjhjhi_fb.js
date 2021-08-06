const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const investByA = (money) => parseInt(money * 1.35);
const investByB = (money) => parseInt(money * 1.2);
const investByC = (money) => parseInt(money * 1.05);

const investOptimally = (money, year) => {
  if (year == 0) return money;

  //// 16줄 변수이름 바꿔보기 바람!
  let investByAMoney = 0, investByBMoney = 0, investByCMoney = 0;
  if (year >= 1) {
    investByAMoney = investOptimally(investByC(money), year - 1);
  }
  if (year >= 3) {
    investByBMoney = investOptimally(investByB(money), year - 3);
  }
  if (year >= 5) {
    investByCMoney = investOptimally(investByA(money), year - 5);
  }

  return Math.max(investByAMoney, investByBMoney, investByCMoney);
}

const [beginMoney, investYear] = input().split(' ').map(Number);

let result = investOptimally(beginMoney, investYear);

console.log(result);