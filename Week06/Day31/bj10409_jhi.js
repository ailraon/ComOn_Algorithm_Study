const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let [setCount, setTime] = input().split(' ').map((num) => parseInt(num));

let count = 0;
let sumTime = 0;
let Times = input().split(' ');
for(let i = 0; i < setCount; i++) {
    sumTime += Number(Times[i]);
    if(sumTime > setTime) break;
    count++;
}
console.log(count);