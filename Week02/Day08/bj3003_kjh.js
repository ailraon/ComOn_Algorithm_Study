const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let requiredEachPieces = [1, 1, 2, 2, 2, 8];
let eachPieces = input()
  .split(" ")
  .map((piece) => parseInt(piece));

let result = [];
for (let i = 0; i < 6; i++) {
  result.push(requiredEachPieces[i] - eachPieces[i]);
}
////push 메서드에 대해 알게 되었습니다.

console.log(result.join(" "));
////join 함수에 대해 알게 되었습니다. 신기하네요 !
