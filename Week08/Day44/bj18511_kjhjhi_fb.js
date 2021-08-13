const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let [N, K] = input().split(' ');
let NUMBER_LIMIT = parseInt(N);
let DIGIT_LIMIT = N.length;

let usableNumbers = input().split(' ');

//// 이렇게 어려웠던 문제일수록 다른 사람 코드를 참고하는 게 많은 도움이 됨
//// 랭킹에서 다른 사람 코드들을 보고 그 중 제일 인상깊었던 소스코드 주소랑 짧막한 감상평 남기기 바람
//// https://www.acmicpc.net/source/30734946
//// 문자열로 풀었던 나랑 다르게, 여기는 숫자를 10 곱해서 한자리 늘리고 더하는 방식을 사용했더라.
//// 저것도 저것 나름대로 간결한게 깔끔한 코드라구 생각이 들었어.

const getMaxNumInLimit = (numbersToAdd, strNumber) => {
  if (numbersToAdd == 0) return parseInt(strNumber);
  
  let maxNumInLimit = 0;
  for (let i = 0; i < usableNumbers.length; i++) {
    let returned = getMaxNumInLimit(numbersToAdd - 1, strNumber + usableNumbers[i]);
    if (returned > NUMBER_LIMIT) returned = parseInt(returned / 10);

    maxNumInLimit = Math.max(maxNumInLimit, returned);
  }

  return maxNumInLimit;
}

console.log(getMaxNumInLimit(DIGIT_LIMIT, ''));