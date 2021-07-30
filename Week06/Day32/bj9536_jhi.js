const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let testCase = Number(input());

//// 직관적인 변수명, 깔끔한 로직 굳굳
for (let i = 0; i < testCase; i++) {
  let recoding = input().split(' ');
  let result = '';
  while (true) {
    //// 울음소리니까 animals보단 cryings가 맞을듯!
    let animals = input();
    if (animals === 'what does the fox say?') break;
    animals = animals.split(' ');
    for (let j = 0; j < recoding.length; j++) {
      if (animals[2] === recoding[j]) {
        //// 비우는것보단 지우는 게 더 깔끔할 것 같아
        recoding[j] = '';
      }
    }
  }

  //// recoding.join(' ') 하면 27~30줄이 돼
  for (let j = 0; j < recoding.length; j++) {
    if (recoding[j] !== '') result += recoding[j] + ' ';
  }
  console.log(result);
}