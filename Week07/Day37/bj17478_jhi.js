const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let chatting = '어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.' + '\n';
let recursiveNum = 0;
//// 변수명 첫 글자는 소문자~
let Num = Number(input());
chatRecursive(Num, recursiveNum);

console.log(chatting);

//// 변수 이름을 재귀번호보단 재귀'깊이'로 하면 더 의미가 명확할듯
//// 나같은 경우엔 현재 깊이를 depth, 입력받은 최대 깊이를 maxDepth로 이름 지었어
function chatRecursive(Num, recursiveNum) {
    chatting += '_'.repeat(recursiveNum * 4) + '"재귀함수가 뭔가요?"' + '\n';
    if (Num === 0) {
        chatting += '_'.repeat(recursiveNum * 4) + 
            '"재귀함수는 자기 자신을 호출하는 함수라네"' + '\n';
    } else {
        chatting += '_'.repeat(recursiveNum * 4) + 
            '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.' + '\n';
        chatting += '_'.repeat(recursiveNum * 4) +
            '마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.' + '\n';
        chatting += '_'.repeat(recursiveNum * 4) +
            '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."' + '\n';
        Num--;
        recursiveNum++;
        chatRecursive(Num, recursiveNum);
        recursiveNum--;
    }
    chatting += '_'.repeat(recursiveNum * 4) + 
        '라고 답변하였지.' + '\n';
}

//// 변수 이름도 꽤 괜찮고 로직도 거의 최적으로 잘 짠거같아
//// 굳!