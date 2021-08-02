const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();


//// 슬슬 코딩 컨벤션이라는 걸 알 때가 된듯
//// https://velog.io/@cada/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%BD%94%EB%94%A9-%EB%B0%8F-%EB%84%A4%EC%9D%B4%EB%B0%8D-%EC%BB%A8%EB%B2%A4%EC%85%98-1%ED%8E%B8

let inputNum = input();
let count = 0;

while (Number(inputNum) >= 10) {
  inputNum = convertToMultiples(inputNum);
  count++;
}

console.log(count);
if (inputNum % 3 === 0) {
  console.log("YES");
} else {
  console.log("NO");
}

function convertToMultiples(inputNum) {
  let sumNum = 0;
  for (let i = 0; i < inputNum.length; i++) {
    sumNum += Number(inputNum.charAt(i));
  }
  return String(sumNum);
}

//// 로직 효율적으로 잘 짰음! 굳굳