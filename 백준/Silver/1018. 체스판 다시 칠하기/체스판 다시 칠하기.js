const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const chessBoard = input.slice(1).map((v) => v.trim());

const white = 'WBWBWBWB';
const black = 'BWBWBWBW';

const arr = Array.from({ length: (n - 7) * (m - 7) }, () => []);

for (let i = 0; i <= n - 8; i++) {
  for (let j = 0; j <= m - 8; j++) {
    for (let k = 0; k < 8; k++) {
      arr[i * (m - 7) + j].push(chessBoard[i + k].slice(j, j + 8));
    }
  }
}

const answer = arr.map((v) => {
  return checkColor(v);
});

console.log(Math.min(...answer));

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