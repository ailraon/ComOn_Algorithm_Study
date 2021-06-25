// input() 할 때마다 한 줄이 문자열로 입력받아짐
const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let distance = input();


if (distance % 5 > 0 && distance % 5 <= 5) {
  console.log(parseInt(distance / 5 + 1));
}
//// 나머지 연산자를 사용해서 distance%5 <= 5 라는 조건은 불필요하다는 생각을 했습니다.
//// 위 피드백에 동의해요~ 무한대 % 5가 들어와도 값은 어차피 0~4 범위 내에 있으니까요
else {
  console.log(parseInt(distance / 5));
}