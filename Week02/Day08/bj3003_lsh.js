const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const chess = input().split(" ");

//// 배열과 for문을 이용하여 반복되는 코드를 줄이면 더 깔끔한 코드가 될 것 같습니다. (bj3003_kjh.js 참고)
let king = 1 - parseInt(chess[0]);
let queen = 1 - parseInt(chess[1]);
let look = 2 - parseInt(chess[2]);
let bishop = 2 - parseInt(chess[3]);
let night = 2 - parseInt(chess[4]);
let phone = 8 - parseInt(chess[5]);

console.log(
  king + " " + queen + " " + look + " " + bishop + " " + night + " " + phone
);
//// 이렇게 변수를 주르륵 작성하여 푸는 것도 좋지만, 배열을 이용하는 것도 좋을 것 같습니다. :22