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

console.log(1-piece[0])
console.log(1-piece[1]);
console.log(2-piece[2]);
console.log(2-piece[3]);
console.log(2-piece[4]);
console.log(8-piece[5]);