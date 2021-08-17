const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let inputCount = stdin.length;
let result = '';

while (inputCount-- > 0) {
  let threeToTheNPower = Math.pow(3, Number(input()));

  result += cantorSet(threeToTheNPower, 0) + '\n';
}

console.log(result);

function cantorSet (stringLength, isMiddleIndex) {
	if (isMiddleIndex === 1) return " ".repeat(stringLength);
  if (stringLength === 1) return "-";
	let cantorSets = '';
	for(let i = 0; i < 3; i++) {
		cantorSets += cantorSet(stringLength / 3, i);
	}
	return String(cantorSets);
}