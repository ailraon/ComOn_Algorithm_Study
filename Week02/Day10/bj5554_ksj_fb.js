const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();


let sum = 0;
for(let i=0; i<4; i++){
    let moveTime = parseInt(input());
    sum += moveTime;
}
//// 지금도 너무 좋지만 반복문을 사용하시면 더 좋을 것 같습니다.

let min = parseInt(sum / 60);
let sec = parseInt(sum % 60);

console.log(min);
console.log(sec);
