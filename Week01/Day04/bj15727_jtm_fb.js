
const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let dist = parseInt(input());

//// 여기선 parseInt를 쓰지 않아도 됩니다.
//// => dist에 나누기 연산을 해서 parseInt를 사용하지 않으면 실수형으로 출력이 되어서 사용했는데 아래 조건문속 parseInt를 말하신게 맞나요?

//// 어, 나누기 연산자 썼네? 그럼 문자열이 아니라 숫자를 원하는구나. 하면서 js가 알아서 숫자로 바꿔준거거든요. 문자열의 나누기 연산은 없습니다.
//// parseInt를 쓴다면 10줄에 썼다면 좋았을 것 같아요
if (dist % 5 == 0) {
  console.log(parseInt(dist / 5));
} else {
  console.log(parseInt(dist / 5) + 1);
}

//// 변수명 distance을 dist로 표현하신 거 같은데 조금 더 줄여진 표현이 깔끔해 보이고 좋아요.
//// 적절한 변수명을 사용한 것 같고, 잘 푸신것 같습니다.