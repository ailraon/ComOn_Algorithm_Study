const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const inputCount = stdin.length;
let result = '';

//// (inputCount-- > 0) 하면 j 안써도 됨
let j = 0;
while (j < inputCount) {
  let threeToTheNPower = Math.pow(3, Number(input()));

  result += cantorSet(threeToTheNPower, 0) + '\n';
	j++;
}

console.log(result);

//// indexNum?은 두루뭉실한듯
//// '세 덩어리 중 몇번째인지'가 indexNum인거고, '그게 1이면 세 덩어리 중 가운데라서' 공백을 채워준다는 의도를 한번 최대한 표현해보려 하기 바람
function cantorSet (stringLength, indexNum) {
	if (indexNum === 1) return " ".repeat(stringLength);
  if (stringLength === 1) return "-";
	let cantorSets = '';
	for(let i = 0; i < 3; i++) {
		cantorSets += cantorSet(stringLength / 3, i);
	}
	return String(cantorSets);
}