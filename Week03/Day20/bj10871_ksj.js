const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let NandX = input().split(" ").map(NandX => Number(NandX));
let N = NandX[0];
let X = NandX[1];
let num = input().split(" ").map(Number);
let arr = [];

for(let i=0; i<N; i++){
	if(num[i] < X){
		arr += num[i] + " ";
	}
}
console.log(arr);

