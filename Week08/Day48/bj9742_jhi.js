const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let inputCount = stdin.length;
let result = '';
let i = 0
while (i < inputCount) {
  let inputData = input().split(' ');
  result += inputData[0] + ' ' + inputData[1] + ' = ' + permutation(inputData[0], Number(inputData[1])) + '\n';
  i++;
}
console.log(result);

//// 함수 첫 단어는 동사
function permutation (str, permutationNum) {
  if (str.length === 1) return str;

  let permutationstr = '';
  let pattern = factorial(str.length - 1);
  for (let i = 1; i < str.length + 1; i++) {
    if (pattern*i >= permutationNum) {
      i--;
      permutationstr = str[i] + permutation(str.replace(str[i], ''), permutationNum - pattern * i);

      return permutationstr;
    }
  }
  return 'No permutation';
}

function factorial(num) {
  let result = 1;
  for ( let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
}