const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();


let piece = input().split(' ');
for(let i = 0; i<piece.length; i++){
	Number(piece[i]);
}

//// 배열과 for문을 이용하여 반복되는 코드를 줄이면 더 깔끔한 코드가 될 것 같습니다. (bj3003_kjh.js 참고)
console.log(1-piece[0])
console.log(1-piece[1]);
console.log(2-piece[2]);
console.log(2-piece[3]);
console.log(2-piece[4]);
console.log(8-piece[5]);
