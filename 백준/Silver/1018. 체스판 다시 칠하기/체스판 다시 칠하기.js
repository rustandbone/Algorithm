const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const chessBoard = input.slice(1).map((v) => v.trim());

const white = 'WBWBWBWB';
const black = 'BWBWBWBW';

let answer = Infinity;

for (let i = 0; i <= n - 8; i++) {
  let arr = [];
  for (let j = 0; j <= m - 8; j++) {
    for (let k = 0; k < 8; k++) {
      arr.push(chessBoard[i + k].slice(j, j + 8));
    }
    const num = checkColor(arr);
    num < answer ? (answer = num) : answer;
    arr = [];
  }
}

console.log(answer);

function checkColor(arr) {
  let count = [0, 0];

  arr.forEach((v, index) => {
    for (let i = 0; i < 8; i++) {
      if (index % 2 === 0) {
        if (v[i] !== black[i]) count[0]++;
        if (v[i] !== white[i]) count[1]++;
      } else {
        if (v[i] !== white[i]) count[0]++;
        if (v[i] !== black[i]) count[1]++;
      }
    }
  });

  return Math.min(...count);
}