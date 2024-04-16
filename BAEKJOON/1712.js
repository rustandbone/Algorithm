const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split(' ');

const [a, b, c] = input.map(Number);

const profit = c - b;

if (profit <= 0) {
  console.log(-1);
} else {
  const breakEvenPoint = Math.floor(a / profit) + 1;
  console.log(breakEvenPoint);
}
