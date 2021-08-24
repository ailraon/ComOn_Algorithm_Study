const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

//// 이름 지을꺼리 없고+입력 변수가 한개뿐이면
//// 그냥 문제에서 주어진대로 N 으로 지어버리는게 제일임
const number = Number(input());

let result = 0;

//// for( 말고 for ( 이렇게 하는게 관례
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
	//// for( 말고 for ( 이렇게 하는게 관례
	for(let i = 0; i < numberStr.length; i++) {
		result += Number(numberStr[i]);
	}
	return result;
}