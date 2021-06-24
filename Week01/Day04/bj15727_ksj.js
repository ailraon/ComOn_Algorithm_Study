// input() 할 때마다 한 줄이 문자열로 입력받아짐
const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let distance = input();

if(distance%5 > 0 && distance%5 <= 5){
    console.log(parseInt((distance / 5) + 1));
}
// 나머지 연산자를 사용해서 distance%5 <= 5 라는 조건은 불필요하다는 생각을 했습니다.
else{
    console.log(parseInt(distance / 5));
}