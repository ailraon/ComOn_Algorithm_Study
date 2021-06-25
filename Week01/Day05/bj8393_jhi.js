const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let num = parseInt(input());
console.log((num/2+0.5) * num);
//입력값   : 1  |  2  |  3  |  4  |  5  |  6  |  7  |  8  |  9  |  10
//출력값   : 1  |  3  |  6  | 10  | 15  | 21  | 28  | 36  | 45  |  55
//증가비율 : 1  | 1.5 |  2  | 2.5 |  3  | 3.5 |  4  | 4.5 |  5  |  5.5

////수학적 지식을 이용하여 푸는 모습 신박했습니다.