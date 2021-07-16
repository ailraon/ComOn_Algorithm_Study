const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

//// N, M에서 변수 작명을 포기한 흔적이 보여 아쉽습니다.. ㅋㅋㅋ
//// 저라면 각각 cuts, halfOfCuts로 11줄과 12줄 변수 이름을 짓고 13줄 변수는 선언하지 않고 (cuts - halfOfCuts)로 썼을 것 같습니다
//// 참고하셔서 취향에 맞게 변수명 다시 지어보시기 바랍니다!
let chessBoardCutNumber = Number(input());
let N = Math.floor(chessBoardCutNumber/2);
let M = chessBoardCutNumber - N;
let result = (N+1) * (M+1);

console.log(result);

//// 짧고 간결하지만, 더 적은 변수로 해결 할 수 있을것 같습니다!