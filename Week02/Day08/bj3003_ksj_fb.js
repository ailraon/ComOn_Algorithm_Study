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
    //이렇게 한줄씩 따로 쓸 수 있는 점 알게됨

let fullSet = [];
for(let i=0; i<6; i++){
    fullSet[i] = blackPieces[i] - whitePieces[i]; 
    // fullSet.push(blackPieces[i] - whitePieces[i]); 도 가능
    // push: 배열 끝에 하나 이상 요소 추가하고, 배열의 새로운 길이 반환
}

console.log(fullSet.join(" ")); // join : 배열의 모든 요소를 연결해 하나의 문자열로 만듬

