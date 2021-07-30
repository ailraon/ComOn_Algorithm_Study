const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let N = Number(input());

let hanN = 0;

// 세자리 수 전까지는, 자리의 차는 항상 일정하므로 N < 100 = N.
if(N < 100) {
    console.log(N);
} else {
    hanN = 99;
    for(let i = 100; i <= N; i++) {
        if(isHanSu(i)) {
            hanN++;
        }
    }
    console.log(hanN);
}

function isHanSu(N) {
    let oneDigit = N%10;
    let tenDigit = parseInt((N/10)%10);
    let hundredDigit = parseInt(N/100);
    return isArithmeticSequence(oneDigit, tenDigit, hundredDigit);
}

function isArithmeticSequence(oneDigit, tenDigit, hundredDigit) {
    return ((oneDigit - tenDigit) === (tenDigit - hundredDigit));
}