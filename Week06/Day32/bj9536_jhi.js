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
    //// 'cow goes moo'를 'animals'로 표현하는건 좀 적절하지 않은 것 같아
    //// 동물 이름과 동물 울음소리를 나타내는 변순데 '동물들'?
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

  //// 32~34줄을 let result = recoding.join(' ') 한줄로 처리 가능
  for (let j = 0; j < recoding.length; j++) {
    if (recoding[j] !== '') result += recoding[j] + ' ';
  }
  console.log(result);
}