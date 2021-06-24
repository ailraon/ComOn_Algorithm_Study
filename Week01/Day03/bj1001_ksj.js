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

const number = input().split(" ");

const result = parseInt(number[0]) - parseInt(number[1]);
console.log(result);

//// 15번줄 parseInt로 할수도 있구나라는 생각을 했습니다.
//// 변수명도 알맞게 지었고, 처음 예제를 잘 활용한 것 같습니다! :22 :33
