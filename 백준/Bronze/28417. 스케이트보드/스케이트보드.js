const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

input.shift();

let answer = 0;

input.forEach((v) => {
  const run = v
    .split(' ')
    .slice(0, 2)
    .map(Number)
    .sort((a, b) => b - a);

  const trick = v
    .split(' ')
    .slice(2)
    .map(Number)
    .sort((a, b) => b - a);

  const sum = run[0] + trick[0] + trick[1];
  if (sum > answer) answer = sum;
});

console.log(answer);