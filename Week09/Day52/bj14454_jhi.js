const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

//// 골드는 가끔 푸는게 좋을듯

let [initialString, nth] = input().split(' ');

console.log(findInfiniteCodeNth(initialString, BigInt(nth) - 1n));

function findInfiniteCodeNth (initialStr, nth) {
	if (nth < initialStr.length) return initialStr.charAt(nth.toString(10));
	let length = BigInt(initialStr.length);
	while (2n*length <= nth) {
		length *= 2n;
	}
	if (length === nth) return find(initialStr, length - 1n);
	return findInfiniteCodeNth(initialStr, BigInt(nth - length - 1n));
}

//// 풀다가 도저히 모르겠어서, 솔루션을 찾고 해결함... 
//// 밑 코드는 열심히 하던 흔적들.... 
//// 솔루션 보고 직접 수정도 했지만, 로직이 어딘가 비틀려서 그런가, 절반까지 맞추고 틀림...

/*
let nthCharacter = findInfiniteCodeNth(initialString.length, BigInt(nth) - 1n, -1);

console.log(nthCharacter);

function findInfiniteCodeNth (initialStringLength, nth, depth) {
	if (initialString.length >= nth) return initialString.charAt((nth).toString(10));
	if (initialStringLength < nth) {
		return findInfiniteCodeNth (BigInt(initialStringLength) * 2n, nth, depth + 1);
	}
	let nthCharacter = 0;
	if (nth - 1n === initialStringLength / 2n) {
		nthCharacter = initialStringLength / 2n;
	} else {
		nthCharacter = nth - (BigInt(initialString.length) * BigInt(Math.pow(2, Number(depth))) + 1n);
	}
	//console.log(nthCharacter);
	if (nthCharacter === 0) nthCharacter += BigInt(initialString.length);
	return findInfiniteCodeNth (initialString.length, nthCharacter, -1);
} */
/*
function findInfiniteCodeNth (initialString, nth) {
    if (initialString.length < nth) {
        let infiniteCode = initialString.charAt(initialString.length - 1) + initialString.slice(0, -1);
        infiniteCode = initialString + infiniteCode;
        return findInfiniteCodeNth(infiniteCode, nth);
    } else {
        let nthCharacter = initialString.charAt(nth - 1);
        return nthCharacter;
    }
}*/
// 1 2 3 3 1 2 2 1 2 3  3  1  1  1  2  3  3  1  2  2  1  2  3  3 
// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24
// 0 0 0 0 0 0 0 0 0 0  0  0  0  0  0  0  0  0  0  0  0  0  0  0