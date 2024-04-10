const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

input.shift();

const arr = input.map((v) => v.split(' ').map(Number));

console.log(
  arr
    .sort((a, b) => (a[0] - b[0] !== 0 ? a[0] - b[0] : a[1] - b[1]))
    .map((v) => v.join(' '))
    .join('\n')
);
