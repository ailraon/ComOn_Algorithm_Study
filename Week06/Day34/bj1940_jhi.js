const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let N = Number(input());
let armorMeterial = Number(input());

let uniqueNum = input().split(' ');
let armor = 0;

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

function makeArmor ( armorMeterial, meterial1, meterial2 ) {
    return ( armorMeterial === meterial1 + meterial2 )
}