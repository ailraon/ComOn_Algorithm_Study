//// 백준에서 한글을 입력받아야 하는 일이 없어서 이 코드는 없애도 될것 같습니다
// 한글 입력 잘 받게 하는 코드
process.stdin.resume();
process.stdin.setEncoding("utf8");

//// 요런 주석은 제거해도 될거같아요
// input() 할 때마다 한 줄이 문자열로 입력받아짐
const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const numbers = input().split(" ");

//// 여기선 parseInt를 쓰지 않아도 됩니다.
//// 어, 빼기 연산자 썼네? 그럼 문자열이 아니라 숫자를 원하는구나. 하면서 js가 알아서 숫자로 바꿔준거거든요. 문자열의 빼기 연산은 없습니다.
console.log(parseInt(numbers[0] - numbers[1]));

//// 15번줄 parstInt로 구현한 점이 신선했습니다. :22
//// 처음 예제를 활용해서 더 단순하게 구현한 점이 인상적이었습니다.
