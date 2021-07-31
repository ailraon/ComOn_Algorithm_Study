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

//// 18~19줄을 하는것보단 18줄의 조건문을 while 조건문으로 사용하는게 더 깔끔할 듯!
while(true) {
    //// 코딩 컨벤션에서는 if와 ( 사이에 공백을 주는걸 권장함
    //// 탭 크기도 4칸이 아니라 2칸으로 하는걸 권장함
    if(Number(inputNum) < 10)
        break;
    inputNum = convertToMultiples(inputNum);
    count++;
}

console.log(count);
//// 여기 연산자들 앞뒤로 공백 주는것도 코딩 컨벤션에서 권장
if(inputNum%3===0) {
    console.log("YES");
} else {
    console.log("NO");
}

function convertToMultiples(inputNum) {
    let sumNum = 0;
    //// for과 ( 사이 공백을 주는 것도 코딩 컨벤션에서 권장
    for(let i = 0; i < inputNum.length; i++) {
        sumNum += Number(inputNum.charAt(i));
    }
    return String(sumNum);
}

//// 로직 효율적으로 잘 짰음! 굳굳