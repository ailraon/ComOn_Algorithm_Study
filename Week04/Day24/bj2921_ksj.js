const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let N = parseInt(input());
let sum = 0;

for(let i=1; i<=N; i++){
	sum += (i * (i+1))/2;
}

console.log(3 * sum);
