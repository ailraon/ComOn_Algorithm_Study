const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let num = input().split(" ").map(num => Number(num));
let A = num[0];
let B = num[1];

let max = Math.max(A, B);
let min = Math.min(A, B);

let count = max - min + 1;
let result = (max + min) * (Math.floor(count/2));
let mid = (max + min)/2;

if(count% 2 === 0){
    console.log(result);
}

else {
	console.log(result + mid);
}