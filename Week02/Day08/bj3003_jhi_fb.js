const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let chessSet = [1, 1, 2, 2, 2, 8];

let chessFind = input().split(" ");
let result = (chessSet[0] - chessFind[0]);
for(let i = 1; i < 6; i++) {
    result += ' ';
    result += (chessSet[i] - chessFind[i]);
}

console.log(result);