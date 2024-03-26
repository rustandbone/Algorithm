const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [a, b] = input.map(BigInt);

console.log([a + b, a - b, a * b].join('\n'));