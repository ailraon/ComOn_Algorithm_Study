const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let num = input().split(" ");
let A = Number(num[0]);
let B = Number(num[1]);
let max = 0;
let min = 0;

if(A > B){
    max = A;
    min = B;
}

else{
    max = B;
    min = A;
}

let count = max - min + 1;
let result = (max + min) * (Math.floor(count/2));
let mid = (max + min)/2;

if(count% 2 === 0){
    console.log(result);
}

else {
	console.log(result + mid);
}

//// 잘 풀었습니다.