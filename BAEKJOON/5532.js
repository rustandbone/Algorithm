const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [L, A, B, C, D] = input.map(Number);

const perDayKorean = Math.ceil(A / C);
const perDayMath = Math.ceil(B / D);

console.log(L - Math.max(perDayKorean, perDayMath));
