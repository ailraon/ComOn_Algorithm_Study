const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let fixedPiece = [1, 1, 2, 2, 2, 8];
let chessPiece = input().split(" ").map((piece) => (piece)); //// 문자열 배열을 바로 정수 배열로 변환하여 받을 수 있습니다. bj3003_kjh 참고해주세요 => 확인했습니다.
let result = [];
for(let i = 0; i < 6; i++){
    result[i] = (fixedPiece[i]) - (chessPiece[i]);
}
//// 이유없이 3줄이나 띄우지 말아주새오 
    console.log(result.join(" ")); //// 앞에 탭 해주새오
//// 배열과 for문을 사용해서 코드가 훨씬 깔끔해졌네요! 멋집니다👍

