const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let reward = input();
let result = (reward-reward*0.22) + ' ' + (reward-reward*0.2*0.22);
console.log(result);

//// 깔끔합니다