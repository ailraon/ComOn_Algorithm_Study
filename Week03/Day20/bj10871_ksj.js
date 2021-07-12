const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

//// map을 활용한 점은 좋았으나, NandX 변수에 담지 말고 [N, X] 로 한번에 입력받았으면 더 좋았을 것 같습니다.
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