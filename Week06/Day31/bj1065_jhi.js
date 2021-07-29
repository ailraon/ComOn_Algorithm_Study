const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

//// 주석은 '변수명, 함수명으로도 도저히 설명이 불가능할때'만!
//// 코드를 설명하는 방법은 최대한 아래 방법만 사용해줘
  //// 1. 상수, 변수명 (오직 설명하기 위한 용도로도 변수를 만들어도 돼)
  //// 2. 함수명 (엄청 짧은 함수여도 상관없어)
  //// 3. 줄바꿈 (맥락이 달라질 때 줄바꿈 두 번을 쳐서 맥락이 다름을 표현)
  //// 4. 클래스명, 멤버변수, 멤버함수 (이건 나중 문제에서 여러 정보를 묶어서 처리해야 할 때)
let N = Number(input()); // 입력받는 수

let hanN = 0; // 한수의 갯수

// 세자리 수 전까지는, 자리의 차는 항상 일정하므로 N < 100 = N.
if(N < 100) {
    console.log(N);
} else {
    hanN = 99;
    for(let i = 100; i <= N; i++) {
        //// 자리수를 분리하는 것도 함수에 맡기는건 어때?
        //// isHansoo: 정수를 받아 한수라면 true 아니라면 false를 반환하는 함수 뭐 이런식?

        //// 참고로 '어때?' 묻는건 항상 제안하는 의미로 쓰고있어
        let oneDigit = i%10;
        let tenDigit = parseInt((i/10)%10);
        let hundredDigit = parseInt(i/100);
        if(isArithmeticSequence(oneDigit, tenDigit, hundredDigit)) {
            hanN++;
        }
    }
    console.log(hanN);
}


//// 일관성있게 oneDigit, tenDigit, hundredDigit 했으면 더 좋았을 것 같아
function isArithmeticSequence(one, two, three) {
    //// if문을 쓰지 않고 조건문으로 쓴 걸 그대로 반환해도 돼
    if((one - two) === (two - three)) {
        return true;
    } else {
        return false;
    }
}