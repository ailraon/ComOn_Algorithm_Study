const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let numberOfMaterial = Number(input());
let armorMeterialToMake = Number(input());

let uniqueNumbers = input().split(' ');
let armorCount = 0;

//// 이중 for문으로 충분히 구현 가능할 것 같아!
////// └ 이유는 모르겠으나, 같은 로직으로 구성해도 틀렸다고 뜸... 
let numSequence = 1;
while ( numSequence < uniqueNumbers.length ) {
    let start = 0;
    if(canMakeArmor( armorMeterialToMake, Number(uniqueNumbers[start]), Number(uniqueNumbers[numSequence]) )) {
        uniqueNumbers.splice(start, 1);
        uniqueNumbers.splice(numSequence-1, 1);
        numSequence = 1;
        armorCount++;
    } else {
        numSequence++;
    }
    if(numSequence === uniqueNumbers.length) {
        numSequence = 1;
        uniqueNumbers.splice(start, 1);
    }
}
console.log(armorCount);

function canMakeArmor ( armorMeterialToMake, meterial1, meterial2 ) {
    return ( armorMeterialToMake === meterial1 + meterial2 );
}

