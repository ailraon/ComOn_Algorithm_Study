const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let paperSize = Number(input());

//// []로 해도 됨. 사이즈 지정할 필요 없음
let coloredPaper = new Array(paperSize);

let whitePaper = 0;
let bluePaper = 0;

for (let i = 0; i < paperSize; i++) {
    coloredPaper[i] = input().split(' ');
}

countPaper(0, paperSize, 0, paperSize);

let result = whitePaper + '\n' + bluePaper;
console.log(result);

function countPaper (widthStart, widthEnd, lengthStart, lengthEnd) {
	if ( isColoredPaper (widthStart, widthEnd, lengthStart, lengthEnd) ) {
		return coloredPaper[lengthStart][widthStart] === '1' ? bluePaper++ : whitePaper++;
	}
	let widthMid = (widthStart + widthEnd) / 2;
	let lengthMid = (lengthStart + lengthEnd) / 2;

	countPaper(widthStart, widthMid, lengthStart, lengthMid);
	countPaper(widthStart, widthMid, lengthMid, lengthEnd);
	countPaper(widthMid, widthEnd, lengthStart, lengthMid);
	countPaper(widthMid, widthEnd, lengthMid, lengthEnd);
	return;
}

//// 함수명 작명 굳
function isColoredPaper (widthStart, widthEnd, lengthStart, lengthEnd) {
	for (let i = lengthStart; i < lengthEnd; i++) {
		for (let j = widthStart; j < widthEnd; j++) {
			if (coloredPaper[lengthStart][widthStart] !== coloredPaper[i][j]) return false;
		}
	}
	return true;
}

//// 전부 잘했음