const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let N = input().split(" ");
let len = parseInt(N[0]);
let maxNum = parseInt(N[1]);
let arr;
(arr = []).length = len;
//// 이 부분 한 줄로 변수에 할당해줘도 될 거 같아요!

arr = input().split(" ");
let list = arr.filter((e) => e < maxNum);
//// filter 메소드에 대해서 알 수 있었습니다 :22

console.log(list.join(" "));
