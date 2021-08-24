const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const number = Number(input());

let result = 0;

for(let i = 0; i < number; i++) {
	let naturalNumber = sumDecomposition(i);
	if (naturalNumber === number) {
		result = i;
		break;
	}
}

console.log(result);

function sumDecomposition (number) {
	let numberStr = String(number);
	let result = number;
	for(let i = 0; i < numberStr.length; i++) {
		result += Number(numberStr[i]);
	}
	return result;
}