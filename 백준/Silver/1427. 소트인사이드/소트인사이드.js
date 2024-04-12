const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim();

console.log(
  input
    .split('')
    .map(Number)
    .sort((a, b) => b - a)
    .join('')
);