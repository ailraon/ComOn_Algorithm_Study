const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let N = input();

//// 그냥 sequence해도 됐을듯? userWantStack이라는 정보가 크게 중요하진 않은것 같아
let userWantStackSequence = [];
let result = "";

for (let i = 0; i < N; i++) {
    userWantStackSequence[i] = input();
}
canMakeStackSequence (N);

console.log(result);

//// 함수 이름은 '스택수열을 만들 수 있냐 없냐'를 반환할 것 같은데
//// 막상 하는 일은 좀 더 복잡하네
function canMakeStackSequence (N) {
    let makeStackSequence = [];
    let number = 1;
    let index = 0;
    while (true) {
        if (number > N && index == N) {
            return;
        }
        //// 이렇게 조건식이 길어지면 가독성이 좀 떨어지는데
        //// let isEven = i % 2 == 0; 이런식으로 일부러 boolean 변수 만들고 이름 붙여서 가독성 높여주는 방법도 있다는거 참고
        if (makeStackSequence[makeStackSequence.length - 1] < userWantStackSequence[index] || makeStackSequence[0] === undefined) {
            makeStackSequence.push(number);
            number++;
            result += "+" + "\n";
            continue;
        }
        if (makeStackSequence[makeStackSequence.length - 1] == userWantStackSequence[index]) {
            makeStackSequence.pop();
            index++;
            result += "-" + "\n";
            continue;
        }
        result = "NO";
        return;
    }
}

//// 두달 반 동안 수고했어! 이따 보자