const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let num = input();
let sum = 0;

for(let i=0; i<=num; i++){
    sum += i;
}
console.log(sum);