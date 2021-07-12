const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

//// map 을 활용해서 여러 변수를 한번에 입력받아 보았습니다.
let [a, b] = input().split(" ").map(num => parseInt(num));
let result = 0;

//// Math.max, min 메소드를 활용해서 최대값과, 최소값을 구해봤습니다.
let max = Math.max(a, b);
let min = Math.min(a, b);

result = (max+min) * ((max - min + 1) / 2);
console.log(result);

