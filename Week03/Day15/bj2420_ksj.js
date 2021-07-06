const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let domain = parseInt(input().split(" "));
let firstDomain = domain[0];
let secondDomain = domain[1];
let result = Math.abs(domain[0] - domain[1]);

console.log(result);

//// 백준에 제출했을때 '틀렸습니다'로 나옵니다. 꼭 백준에 먼저 제출해본 뒤 올려주세요! 