const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const threeKgBag = 3;
const fiveKgBag = 5;

const sugarKg = input();

console.log(packagingSugar(sugarKg));

//// 함수 첫 단어는 동사
//// 그리고 '설탕을 포장하다'로 이 함수의 의도를 설명하기엔 부족한 감이 있음
//// '최소 개수로 포장하다' 정도는 되어야 한다고 봄
function packagingSugar (sugarKg) {
    let packedSugar = 0;
    let packedFiveKgBag = 0;
    let extraSugar = 0;
    packedFiveKgBag = parseInt(sugarKg / fiveKgBag);
    extraSugar = sugarKg % fiveKgBag;
    
    //// 왜 무조건 10번 반복하게 한거여
    //// 반복횟수를 정확하게 정의하거나 아니면 반복조건에 따라 종료되도록 while문을 쓰길 바람
    //// 페프때처럼 이렇게 크게 해두면 알아서 종료되겠지~ 하는건 너무 스파게티 코드의 정석..
    for (let i = 0; i < 10; i++) {
        if (extraSugar === 0) {
            packedSugar += packedFiveKgBag;
            return packedSugar;
        }
        if (extraSugar < 3 && packedFiveKgBag > 0) {
            packedFiveKgBag--;
            extraSugar += fiveKgBag;
        }
        packedSugar += parseInt(extraSugar / threeKgBag);
        extraSugar = extraSugar % threeKgBag;
    }
    return -1;
}