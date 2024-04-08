const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

input.shift();

console.log(
  input
    .map(Number)
    .sort((a, b) => a - b)
    .join('\n')
);