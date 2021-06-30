const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let chess = input().split(" ");
let pieces = [1, 1, 2, 2, 2, 8];

let result = [6];
for (let i = 0; i < 6; i++) {
  result[i] = pieces[i] - chess[i];
}

console.log(result.join(" "));
