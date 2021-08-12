const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

//// 맞은 사람 랭킹에서
//// 아는 언어 랭킹 골라다가 다른 사람들 어떻게 풀었는지 한번씩 봐보기 바람

//// 보고 왔는데, 다들 신박한 방법으로 푼것 같고, 자바 스크립트 언어로 푼 2등, 4등을 보고왔는데, 급이 다름을 느끼는중...

//// 잘했음

let moving = 0;

let [arraySquared, goalLength, goalWidth] = input().split(' ').map((num) => parseInt(num));
arraySquared = Math.pow(2, arraySquared);

zMoving( 0, 0, arraySquared, arraySquared );
console.log(moving);

function zMoving( arrayStartLength, arrayStartWidth, arrayEndLength, arrayEndWidth ) {
  let arrayLength = parseInt((arrayEndLength + arrayStartLength) / 2);
  let arrayWidth = parseInt((arrayEndWidth + arrayStartWidth) / 2);
  let movingPlus = arrayEndLength - arrayLength;
  if( (arrayLength > goalLength) && (arrayWidth > goalWidth) ) { // 1사분면 (0, 0) (mid, mid) 
    if(arrayLength-arrayStartLength === 0) return;
    zMoving (arrayStartLength, arrayStartWidth, arrayLength, arrayWidth);
  } else if ( (arrayLength > goalLength) && (arrayWidth <= goalWidth) ) { // 2사분면 (0, mid) (mid, end)
    if(arrayLength-arrayStartLength === 0) return;
    zMoving (arrayStartLength, arrayWidth, arrayLength, arrayEndWidth);
    moving += movingPlus * movingPlus;
  } else if ( (arrayLength <= goalLength) && (arrayWidth > goalWidth)) { // 3사분면 (mid, 0) (end, mid)
    if(arrayLength-arrayStartLength === 0) return;
    zMoving (arrayLength, arrayStartWidth, arrayEndLength, arrayWidth);
    moving += movingPlus * movingPlus * 2;
  } else { // 4사분면 (mid, mid) (end, end)
    if(arrayLength-arrayStartLength === 0) return;
    zMoving ( arrayLength, arrayWidth, arrayEndLength, arrayEndWidth);
    moving += movingPlus * movingPlus * 3;
  }
}

// 개선전
/*
function zMoving( arrayStartLength, arrayStartWidth, arrayEndLength, arrayEndWidth ) {
  let arrayLength = parseInt((arrayEndLength - arrayStartLength) / 2);
  if( (arrayStartLength+arrayLength > goalLength) && (arrayStartWidth+arrayLength > goalWidth) ) { // 1사분면
    if(arrayLength === 0) return;
    zMoving (arrayStartLength, arrayStartWidth, arrayStartLength+arrayLength, arrayStartWidth+arrayLength);
  } else if ( (arrayStartLength+arrayLength > goalLength) && (arrayStartWidth+arrayLength <= goalWidth) ) { // 2사분면
    if(arrayLength === 0) return;
    zMoving (arrayStartLength, (arrayStartWidth + arrayLength), (arrayStartLength + arrayLength), arrayEndWidth);
    moving += arrayLength * arrayLength;
  } else if ((arrayStartLength+arrayLength <= goalLength) && (arrayStartWidth+arrayLength > goalWidth)) { // 3사분면
    if(arrayLength === 0) return;
    zMoving ((arrayStartLength + arrayLength), arrayStartWidth, arrayEndLength, (arrayStartWidth + arrayLength));
    moving += arrayLength * arrayLength * 2;
  } else { // 4사분면
    if(arrayLength === 0) return;
    zMoving ((arrayStartLength + arrayLength), (arrayStartWidth + arrayLength), arrayEndLength, arrayEndWidth);
    moving += arrayLength * arrayLength * 3;
  }
}
*/
// 브루트 포스 
/*
let arrival = false;

function zMoving( arrayStartLength, arrayStartWidth, arrayEndLength, arrayEndWidth ) {
    let arrayLength = (arrayEndLength - arrayStartLength) / 2;
    for ( let i = arrayStartLength; i < arrayEndLength; i += arrayLength ) {
        for ( let j = arrayStartWidth; j < arrayEndWidth; j += arrayLength ) {
            if ( i === goalLength && j === goalWidth ) {
                arrival = true;
                return;
            }
            if (arrival) {
                //console.log("arrival! x,y : " + i + j);
                return;
            }
            if ( (arrayLength * 2) !== 2 ) {
                //console.log("code1 : " + i + "*" + j);
                zMoving( i, j, i+arrayLength, j+arrayLength );
            } else {
                moving++;
                //console.log("moving : " + moving);
                //console.log("x,y : " + i + j);
            }
        }
    }
}
*/