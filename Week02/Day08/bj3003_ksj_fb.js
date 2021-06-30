const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let blackPieces = [1, 1, 2, 2, 2, 8];
let whitePieces = input()
    .split(" ")
    .map((whitePieces) => Number(whitePieces));

let fullSet = [];
for(let i=0; i<6; i++){
    fullSet[i] = blackPieces[i] - whitePieces[i];
}

console.log(fullSet.join(" ")); // join : 배열의 모든 요소를 연결해 하나의 문자열로 만듬

