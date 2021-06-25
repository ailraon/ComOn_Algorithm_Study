//// 요런 주석은 제거해도 될거같아요
// input() 할 때마다 한 줄이 문자열로 입력받아짐
const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let dist = input();

//// 여기선 parseInt를 쓰지 않아도 됩니다.
//// 어, 나누기 연산자 썼네? 그럼 문자열이 아니라 숫자를 원하는구나. 하면서 js가 알아서 숫자로 바꿔준거거든요. 문자열의 나누기 연산은 없습니다.
//// parseInt를 쓴다면 10줄에 썼다면 좋았을 것 같아요
if (dist % 5 == 0) {
  console.log(parseInt(dist / 5));
} else {
  console.log(parseInt(dist / 5) + 1);
}

//// 변수명 distance을 dist로 표현하신 거 같은데 조금 더 줄여진 표현이 깔끔해 보이고 좋아요.
