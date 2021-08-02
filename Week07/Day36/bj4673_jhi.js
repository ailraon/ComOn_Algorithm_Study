let allNumber = new Array(10000);
for(let i = 0; i < allNumber.length; i++) {
  allNumber[i] = i+1;
}
let sequenceNumber = Array.from(allNumber, x => makeSequence(x));
let selfNumber = '';

for(let i = 0; i < 10000; i++) {
  if(!(inNumber(Number(allNumber[i]), sequenceNumber))) {
    selfNumber += String(allNumber[i]) + '\n';
  }
}

console.log(selfNumber);

function makeSequence (num) {
  let result = Number(num);
  let digit = String(num);
  for(let i = 0; i < digit.length; i++) {
    result += Number(digit.charAt(i));
  }
  return result;
}

function inNumber (num, sequenceNumber) {
  for(let i = parseInt(num / 2) - 1; i <= num; i++) {
    if(num === sequenceNumber[i]) return true;
  }
  return false;
}