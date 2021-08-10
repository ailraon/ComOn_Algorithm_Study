const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

//// 짧게해도 충분히 의미가 전달될 것 같다 싶으면 Relations 정도로 표현해도 됨!
let [numberOfStudentsInClass, numberOfRelationships] = input().split(' ').map((num) => parseInt(num));
let isClassPaired = new Array(numberOfStudentsInClass+1);

//// new Array(~) 안하고 그냥 [] 해도 됨. 길이 지정할 필요 없음
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

//// 이 완전탐색(브루트포스) 아이디어 잘 기억해두기 바람
//// 재귀 문제에서 많이 나오는 풀이임
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
