const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

//// 저라면 각각 cuts, halfOfCuts로 11줄과 12줄 변수 이름을 짓고 13줄 변수는 선언하지 않고 (cuts - halfOfCuts)로 썼을 것 같습니다
let cuts = Number(input());
let halfOfCuts = Math.floor(cuts/2);
let result = (halfOfCuts+1) * (cuts-halfOfCuts+1);

console.log(result);