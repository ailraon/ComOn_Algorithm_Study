const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let fixedPiece = [1, 1, 2, 2, 2, 8];
let chessPiece = input().split(" ");
let result = [];
for(let i = 0; i < 6; i++){
    result[i] = (Number(fixedPiece[i]) - Number(chessPiece[i]));
}



for(let i = 0; i < 6; i++){
console.log(result.join(" "))
}
