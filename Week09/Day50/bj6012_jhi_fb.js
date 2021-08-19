const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let numberOfCows = Number(input());
let result = 0;
oddCowOutDance(1, numberOfCows);
console.log(result);

function oddCowOutDance (startNumber, endNumber) {
	let difference = endNumber - startNumber;
	if (difference === 0) {
		return 0;
	} 
	if (difference === 1) {
		return result += startNumber * endNumber;
	}

	let middleNumber = ((endNumber + startNumber) % 2 === 0) ? (endNumber + startNumber)  / 2 : (endNumber + startNumber - 1) / 2;
	oddCowOutDance(startNumber, middleNumber);
	oddCowOutDance(middleNumber + 1, endNumber);
}

