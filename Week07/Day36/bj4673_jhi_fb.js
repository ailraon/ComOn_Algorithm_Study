let oneToTenThousand = new Array(10000);
for(let i = 0; i < oneToTenThousand.length; i++) {
  oneToTenThousand[i] = i+1;
}

let sequenceInNumbers = Array.from(oneToTenThousand, x => makeSequenceNumber(x));
let selfNumbers = '';

for(let i = 0; i < 10000; i++) {
  if ( !( inSequence( Number( oneToTenThousand[i] ), sequenceInNumbers ))) {
    selfNumbers += String( oneToTenThousand[i] ) + '\n';
  }
}

console.log(selfNumbers);

function makeSequenceNumber (num) {
  let result = Number(num);
  let digit = String(num);
  for(let i = 0; i < digit.length; i++) {
    result += Number(digit.charAt(i));
  }
  return result;
}

function inSequence (num, sequenceInNumbers) {
  if(sequenceInNumbers.includes(num)) return true;
  return false;
}