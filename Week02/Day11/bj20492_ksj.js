const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const tax = parseInt(input());

let first = tax * (1-0.22);
let second = tax * 0.8 + ((tax*0.2*(1-0.22)));

//// 팁: 템플릿 리터럴을 사용하면 console.log(`${first}} ${second}`); 요렇게 쓸 수도 있습니다
console.log(first + ' ' + second);