const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let [setCount, setTime] = input().split(' ').map((num) => parseInt(num));

let works = 0;
let sumTime = 0;

let times = input().split(' ');
for(let i = 0; i < setCount; i++) {
    sumTime += Number(times[i]);
    if(sumTime > setTime) break;
    works++;
}
console.log(works);