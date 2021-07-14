const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

//// while문으로 풀었다면 더 깔끔했을 것 같습니다
for (let i = 0; ; i++) {
  let [a1, a2, a3] = input()
    .split(' ')
    .map((num) => parseInt(num));
  let result = '';

  if (a1 === 0 && a2 === 0 && a3 === 0) break;

  if (a2 - a1 === a3 - a2) {
    // 참이면 등차 거짓이면 등비
    result += 'AP ' + (a3 + a2 - a1);
  } else {
    result += 'GP ' + (a3 * a2) / a1;
  }
  console.log(result);
}
