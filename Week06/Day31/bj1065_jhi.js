const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let N = Number(input()); // 입력받는 수

let hanN = 0; // 한수의 갯수

// 세자리 수 전까지는, 자리의 차는 항상 일정하므로 N < 100 = N.
if(N < 100) {
    console.log(N);
} else {
    hanN = 99;
    for(let i = 100; i <= N; i++) {
        let oneDigit = i%10;
        let tenDigit = parseInt((i/10)%10);
        let hundredDigit = parseInt(i/100);
        if(isArithmeticSequence(oneDigit, tenDigit, hundredDigit)) {
            hanN++;
        }
    }
    console.log(hanN);
}


function isArithmeticSequence(one, two, three) {
    if((one - two) === (two - three)) {
        return true;
    } else {
        return false;
    }
}