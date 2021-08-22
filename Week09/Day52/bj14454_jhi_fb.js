const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

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