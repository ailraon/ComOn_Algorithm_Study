const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let movTime = 0;
let sum = 0;

for(let i = 0; i < 4; i++){
  movTime = parseInt(input());
  sum += movTime;
}

console.log(parseInt(sum / 60));
console.log(parseInt(sum % 60));