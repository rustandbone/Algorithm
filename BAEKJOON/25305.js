const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const points = input[1].split(' ').map(Number);

console.log(
  points
    .sort((a, b) => b - a)
    .slice(0, k)
    .at(-1)
);
