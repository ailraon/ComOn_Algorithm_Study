const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const threeKgBag = 3;
const fiveKgBag = 5;

const sugarKg = input();

console.log(packSugarToAMinimum(sugarKg));

function packSugarToAMinimum (sugarKg) {
    let packedSugar = 0;
    let packedFiveKgBag = 0;
    let extraSugar = 0;
    packedFiveKgBag = parseInt(sugarKg / fiveKgBag);
    extraSugar = sugarKg % fiveKgBag;

    while (true) {
        if (extraSugar === 0) {
            packedSugar += packedFiveKgBag;
            return packedSugar;
        }
        if (packedFiveKgBag < 1 && extraSugar < 3) {
            break;
        }
        if (packedFiveKgBag > 0 && extraSugar < 3) {
            packedFiveKgBag--;
            extraSugar += fiveKgBag;
        }
        packedSugar += parseInt(extraSugar / threeKgBag);
        extraSugar = extraSugar % threeKgBag;
    }
    return -1;
}