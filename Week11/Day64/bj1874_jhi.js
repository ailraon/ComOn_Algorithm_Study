const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let N = input();

let userWantStackSequence = [];
let result = "";

for (let i = 0; i < N; i++) {
    userWantStackSequence[i] = input();
}
canMakeStackSequence (N);

console.log(result);

function canMakeStackSequence (N) {
    let makeStackSequence = [];
    let number = 1;
    let index = 0;
    while (true) {
        if (number > N && index == N) {
            return;
        }
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