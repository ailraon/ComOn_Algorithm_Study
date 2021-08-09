const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let [numberOfStudentsInClass, numberOfRelationships] = input().split(' ').map((num) => parseInt(num));
let isClassPaired = new Array(numberOfStudentsInClass+1);

let classRelationships = new Array(numberOfStudentsInClass+1);

for (let i = 0; i < numberOfRelationships; i++) {
	let [attendancenNumberU, attendanceNumberV] = input().split(' ').map((num) => parseInt(num));
	if (!Array.isArray(classRelationships[attendancenNumberU])) {
		classRelationships[attendancenNumberU] = new Array(String(attendanceNumberV));
	} else {
		classRelationships[attendancenNumberU].push(String(attendanceNumberV));
	}
}

let numberOfPairOnStage = countMaxPair(1, 0);

console.log(numberOfPairOnStage < numberOfStudentsInClass ? numberOfPairOnStage + 1 : numberOfStudentsInClass);

function countMaxPair (checkAttendenceNumber, pairedNumber) {
	if (checkAttendenceNumber > numberOfStudentsInClass) return pairedNumber;

	let nextAttendenceNumber = checkAttendenceNumber + 1;

	let maxPair = countMaxPair(nextAttendenceNumber, pairedNumber);

	if (!Array.isArray(classRelationships[checkAttendenceNumber]) || isClassPaired[checkAttendenceNumber]) 
		return countMaxPair(nextAttendenceNumber, pairedNumber);

	classRelationships[checkAttendenceNumber].forEach(fairNumber => {
		if (!isClassPaired[fairNumber]) {
			isClassPaired[checkAttendenceNumber] = isClassPaired[fairNumber] = true;
			maxPair = Math.max(maxPair, countMaxPair(nextAttendenceNumber, pairedNumber + 2));
			isClassPaired[checkAttendenceNumber] = isClassPaired[fairNumber] = false;
		}
	});
	return maxPair;
}
