const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

input.shift();

console.log(
  input
    .map(Number)
    .sort((a, b) => a - b)
    .join('\n')
);