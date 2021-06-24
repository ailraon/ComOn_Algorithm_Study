const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let n = input();
let sum = 0;
for(i = 1; i <= n; i++){
    sum += i;
}
console.log(sum);