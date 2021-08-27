const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = Number(input());

let result = 0;

for (let i = 0; i < N; i++) {
	let naturalNumber = sumDecomposition(i);
	if (naturalNumber === N) {
		result = i;
		break;
	}
}

console.log(result);

function sumDecomposition (N) {
	let numberStr = String(N);
	let result = N;
	for (let i = 0; i < numberStr.length; i++) {
		result += Number(numberStr[i]);
	}
	return result;
}