const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let testCase = Number(input());
let testCaseResult = '';
//// 직관적인 변수명, 깔끔한 로직 굳굳
for (let i = 0; i < testCase; i++) {
  let recoding = input().split(' ');
  let result = '';
  while (true) {
    let animalSounds = input();
    if (animalSounds === 'what does the fox say?') break;
    animalSounds = animalSounds.split(' ');
    for (let j = 0; j < recoding.length; j++) {
      if (animalSounds[2] === recoding[j]) {
        recoding.splice(j, 1);
        j--;
      }
    }
  }

  result = recoding.join(' ');
  testCaseResult += result + '\n';
}
console.log(testCaseResult);