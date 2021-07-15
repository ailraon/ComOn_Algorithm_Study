const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let N = parseInt(input());
//// 도미노 묶음의 개수라는 의미로 dominoBundles 등으로 짓는건 어떨까요?
//// dominoBundles로 그렇게 명확한 의미의 변수명은 아니긴 하지만, 작성하는 코드의 의도를 이렇게 변수명, 함수명으로 표현하는 연습을 평소 하시면 좋을 것 같습니다!
let sum = 0;

for(let i=1; i<=N; i++){
	sum += (i * (i+1))/2;
}

console.log(3 * sum);

//// 깔끔합니다!