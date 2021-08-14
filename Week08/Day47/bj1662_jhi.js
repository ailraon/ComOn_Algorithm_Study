//// 일요일/월요일중으로 js로 한번 풀어보겠음
const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let decompressResult = decompress(input());

console.log(decompressResult.length);

function decompress (compressedString) {
	if (compressedString.indexOf('(') === -1) return compressedString;

	let find = findParentheses(compressedString, 0);
	if (find > 0) {
		let strFirst = compressedString.substring(0, find);
		let strLast = compressedString.substring(find);
		return (decompress(strFirst) + decompress(strLast));
	}
	// '(' 만나기 전 숫자
	let indexOfParentheses = compressedString.indexOf('(');
	let compressedMethodFirst = compressedString.substring(0, indexOfParentheses);
	// ')' 를 만나기 전 숫자
	let lastIndexOfParentheses = compressedString.lastIndexOf(')');
	let compressedMethodLast = compressedString.substring(lastIndexOfParentheses + 1);
	// 첫번째 '(' 와 ')' 사이의 문자열
	let compressedMethodMid = compressedString.substring(indexOfParentheses + 1, lastIndexOfParentheses);

	let decompressResult = decompress(compressedMethodMid);
	
	decompressResult = compressedMethodFirst.substring(0, compressedMethodFirst.length - 1) +
										decompressResult.repeat(Number(compressedMethodFirst.substring(compressedMethodFirst.length - 1))) +
										compressedMethodLast;
	return decompressResult;
}

function findParentheses (str, checkNum) {
	if (str.indexOf('(') === -1) return checkNum;
	let start = str.indexOf('(') + 1;
	let openingParentheses = 1;
	let closingParentheses = 0;
	for(let i = start; i < str.length; i++) {
		if (openingParentheses === closingParentheses) return ckeckNum = i;
		let open = str.indexOf('(', i);
		let close = str.indexOf(')', i);
		if(open === -1 || close === -1) return checkNum;
		if (open < close) {
			openingParentheses++;
			i = open;
		} else {
			closingParentheses++;
			i = close;
		}
	}
	return checkNum;
}