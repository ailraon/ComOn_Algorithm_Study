const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = Number(input());

let widthLine = 1;
let heightLine = 1;

for(let i = 0; i < N; i++) {
    i%2===0 ? widthLine++ : heightLine++;
}
console.log(widthLine * heightLine);