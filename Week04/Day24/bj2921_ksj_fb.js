const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let dominoBundles = parseInt(input());
//// 도미노 묶음의 개수라는 의미로 dominoBundles 등으로 짓는건 어떨까요?
let sum = 0;

for(let i=1; i<=N; i++){
	sum += (i * (i+1))/2;
}

console.log(3 * sum);