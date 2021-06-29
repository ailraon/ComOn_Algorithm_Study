const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let dnaTable = {
    A : { A : 'A', G : 'C', C : 'A', T : 'G'},
    G : { A : 'C', G : 'G', C : 'T', T : 'A'},
    C : { A : 'A', G : 'T', C : 'C', T : 'G'},
    T : { A : 'G', G : 'A', C : 'G', T : 'T'}
};

input();
let dna = input();
let decrypt = dnaTable[dna.charAt(dna.length-1)][dna.charAt(dna.length-2)];

for(let i = dna.length-3; i > 0; i--) {
    decrypt = dnaTable[dna.charAt(i)][decrypt];
}
if(dna.length == 1) {
    decrypt = dna.charAt(0);
}

console.log(decrypt);