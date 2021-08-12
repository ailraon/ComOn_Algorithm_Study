const fs = require("fs");
const stdin = ''.split('\n');
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const inputCount = stdin.length;
let result = '';

let j = 0;
while (j < inputCount) {
  let threeToTheNPower = Math.pow(3, Number(input()));

  result += cantorSet(threeToTheNPower, 0) + '\n';
	j++;
}

function cantorSet (stringLength, indexNum) {
	if (indexNum === 1) return " ".repeat(stringLength);
  if (stringLength === 1) return "_";
	let cantorSets = '';
	for(let i = 0; i < 3; i++) {
		cantorSets += cantorSet(stringLength / 3, i);
	}
	return String(cantorSets);
}