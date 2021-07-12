const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let condition = input().split(" ");
//// condition(상태, 조건)이라는 변수명으로 이게 어떤 변수인지 알기 어려웠어요. 참/거짓 값인가? 했는데 문제 조건을 말한거였네요
//// [N, X]로 받으면 더 깔끔하고 명확할 것 같습니다! map으로 parseInt도 다 해주면 Number()도 해주지 않아도 되기도 하고요.

let numbers = input().split(" ");
let result = "";

for(let i = 0; i < condition[0]; i++) {
    if(Number(condition[1]) > Number(numbers[i])) {
        result += numbers[i] + " ";
    }
}
console.log(result);

//// 코드가 깔끔하고 잘했습니다!