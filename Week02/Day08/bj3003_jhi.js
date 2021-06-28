const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let needChess = {
    king : 1,
    queen : 1,
    rook : 2,
    bishop : 2,
    knight : 2,
    pawn : 8
};

const hasPeace = input().split(" ");

let findChess = {
    king : hasPeace[0],
    queen : hasPeace[1],
    rook : hasPeace[2],
    bishop : hasPeace[3],
    knight : hasPeace[4],
    pawn : hasPeace[5]
};

console.log((needChess.king - findChess.king) + " " + 
            (needChess.queen - findChess.queen) + " " +
            (needChess.rook - findChess.rook) + " " +
            (needChess.bishop - findChess.bishop) + " " +
            (needChess.knight - findChess.knight) + " " +
            (needChess.pawn - findChess.pawn));

// 객체를 활용해서 풀어봤습니다.