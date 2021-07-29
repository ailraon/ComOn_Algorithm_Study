const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let [setCount, setTime] = input().split(' ').map((num) => parseInt(num));

//// works 등으로 더 의미를 명확하게 하면 좋을 것 같아
let count = 0;
let sumTime = 0;
//// 변수/함수명 첫 글자는 소문자가 관례~
let Times = input().split(' ');
for(let i = 0; i < setCount; i++) {
    sumTime += Number(Times[i]);
    if(sumTime > setTime) break;
    count++;
}
console.log(count);