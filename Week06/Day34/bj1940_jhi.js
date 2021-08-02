const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

//// N에서는 아무 뜻도 유추할 수 없고
//// armorMaterial 역시 '갑옷''재료' 단어만으로는 변수의 용도를 유추하기 어렵네 
let N = Number(input());
let armorMeterial = Number(input());

//// 여러개니까 복수형으로!
let uniqueNum = input().split(' ');
//// 이것도 armorCount 등등으로 개수인걸 알 수 있게
let armor = 0;

//// 이중 for문으로 충분히 구현 가능할 것 같아!
let numSequence = 1;
while ( numSequence < uniqueNum.length ) {
    let start = 0;
    if(makeArmor( armorMeterial, Number(uniqueNum[start]), Number(uniqueNum[numSequence]) )) {
        uniqueNum.splice(start, 1);
        uniqueNum.splice(numSequence-1, 1);
        numSequence = 1;
        armor++;
    } else {
        numSequence++;
    }
    if(numSequence === uniqueNum.length) {
        numSequence = 1;
        uniqueNum.splice(start, 1);
    }
}
console.log(armor);

//// makeArmor라길래 갑옷을 만드는 함수인줄
//// boolean 반환하는 함수는 보통 is, can을 앞에 접두사로 받아
function makeArmor ( armorMeterial, meterial1, meterial2 ) {
    return ( armorMeterial === meterial1 + meterial2 )
}